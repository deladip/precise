import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.insertContactInquiry(validatedData);
      
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

  return httpServer;
}
