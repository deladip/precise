# PRECISE METHOD Website

## Overview
Professional marketing and lead-generation website for PRECISE METHOD, a tax and business services firm. The site showcases credentials (IRS Authorized ERO, Certified Acceptance Agent, Certifying Officer of Accounts) and provides services including tax preparation, business registration, bookkeeping, and compliance.

## Recent Changes
- 2026-01-30: Added email notifications for contact form submissions using Gmail SMTP
- 2026-01-30: Created secure admin dashboard at /admin with password protection
- 2026-01-30: Implemented contact form with PostgreSQL storage

## User Preferences
- Design: Corporate Minimalist style with Navy (#1B2B4A) and Gold (#D4AF37) palette
- Fonts: Lora serif + Inter sans-serif
- Deployment target: Hostinger VPS (not Replit hosting)
- Email: Uses Google Suite with precisemethod.pro domain

## Project Architecture
- Frontend: React with Vite, Tailwind CSS, shadcn/ui components
- Backend: Express.js with PostgreSQL database via Drizzle ORM
- Email: Nodemailer with Gmail SMTP (uses GMAIL_APP_PASSWORD secret)

## Environment Variables
- ADMIN_PASSWORD: Password for admin dashboard access
- GMAIL_APP_PASSWORD: Google App Password for sending email notifications to service@precisemethod.pro
- DATABASE_URL: PostgreSQL connection string (auto-configured)

## Key Files
- client/src/pages/Contact.tsx: Contact form page
- client/src/pages/Admin.tsx: Admin dashboard for viewing inquiries
- server/routes.ts: API routes including email notification logic
- server/storage.ts: Database operations
- shared/schema.ts: Data models
- DEPLOYMENT.md: Hostinger VPS deployment guide
- Dockerfile: Production container configuration

## Contact Information
- Phone: 833-454-4794
- Email: service@precisemethod.pro
- Google Calendar booking link integrated on Contact page
