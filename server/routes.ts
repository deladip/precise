import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";
import multer from "multer";
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";

const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const sanitizedName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, "_");
    cb(null, `${timestamp}_${sanitizedName}`);
  },
});

const upload = multer({
  storage: multerStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "image/gif",
      "text/plain",
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Allowed: PDF, DOC, DOCX, JPG, PNG, GIF, TXT"));
    }
  },
});

async function sendEmailNotification(inquiry: {
  name: string;
  email: string;
  phone: string;
  message: string;
  attachmentPath?: string | null;
  attachmentName?: string | null;
  createdAt: Date;
}) {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    console.log("SMTP credentials not configured - skipping email notification");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const attachments: { filename: string; path: string }[] = [];
  if (inquiry.attachmentPath && inquiry.attachmentName) {
    attachments.push({
      filename: inquiry.attachmentName,
      path: inquiry.attachmentPath,
    });
  }

  const mailOptions = {
    from: smtpUser,
    to: "service@precisemethod.pro",
    subject: `New Contact Inquiry from ${inquiry.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Submitted:</strong> ${inquiry.createdAt.toLocaleString()}</p>
      <hr/>
      <p><strong>Name:</strong> ${inquiry.name}</p>
      <p><strong>Email:</strong> ${inquiry.email}</p>
      <p><strong>Phone:</strong> ${inquiry.phone}</p>
      <p><strong>Message:</strong></p>
      <p>${inquiry.message.replace(/\n/g, "<br/>")}</p>
      ${inquiry.attachmentName ? `<p><strong>Attachment:</strong> ${inquiry.attachmentName}</p>` : ""}
      <hr/>
      <p style="color: #666; font-size: 12px;">This message was sent from the PRECISE METHOD website contact form.</p>
    `,
    attachments,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email notification sent successfully");
  } catch (error) {
    console.error("Failed to send email notification:", error);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/contact", upload.single("attachment"), async (req, res) => {
    try {
      const formData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
        attachmentPath: req.file ? req.file.path : null,
        attachmentName: req.file ? req.file.originalname : null,
      };

      const validatedData = insertContactInquirySchema.parse(formData);
      const inquiry = await storage.insertContactInquiry(validatedData);

      await sendEmailNotification({
        ...inquiry,
        createdAt: inquiry.createdAt,
      });

      res.status(201).json({
        success: true,
        message: "Contact inquiry submitted successfully",
        data: { id: inquiry.id },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      } else if (error instanceof multer.MulterError) {
        res.status(400).json({
          success: false,
          message: error.message,
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

  app.get("/api/contact/inquiries", async (req, res) => {
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

  app.use("/uploads", (req, res, next) => {
    res.setHeader("Content-Disposition", "attachment");
    next();
  }, express.static(uploadDir));

  return httpServer;
}
