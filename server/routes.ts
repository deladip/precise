import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "changeme";

// Gmail SMTP configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "service@precisemethod.pro",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function sendNotificationEmail(inquiry: {
  name: string;
  email: string;
  phone?: string | null;
  service?: string | null;
  message: string;
}) {
  const mailOptions = {
    from: "service@precisemethod.pro",
    to: "service@precisemethod.pro",
    subject: `New Contact Inquiry from ${inquiry.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${inquiry.name}</p>
      <p><strong>Email:</strong> ${inquiry.email}</p>
      <p><strong>Phone:</strong> ${inquiry.phone || "Not provided"}</p>
      <p><strong>Service Interest:</strong> ${inquiry.service || "Not specified"}</p>
      <h3>Message:</h3>
      <p>${inquiry.message}</p>
      <hr>
      <p><em>This inquiry was submitted via the PRECISE METHOD website contact form.</em></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Notification email sent successfully");
  } catch (error) {
    console.error("Failed to send notification email:", error);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.insertContactInquiry(validatedData);
      
      // Send email notification (don't wait, fire and forget)
      sendNotificationEmail(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Contact inquiry submitted successfully",
        data: inquiry,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      } else {
        console.error("Error submitting contact inquiry:", error);
        res.status(500).json({
          success: false,
          message: "Failed to submit inquiry",
        });
      }
    }
  });

  app.post("/api/admin/login", async (req, res) => {
    const { password } = req.body;
    
    if (password === ADMIN_PASSWORD) {
      res.json({
        success: true,
        message: "Login successful",
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }
  });

  app.post("/api/admin/inquiries", async (req, res) => {
    const { password } = req.body;
    
    if (password !== ADMIN_PASSWORD) {
      res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
      return;
    }

    try {
      const inquiries = await storage.getContactInquiries();
      res.json({
        success: true,
        data: inquiries,
      });
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch inquiries",
      });
    }
  });

  return httpServer;
}
