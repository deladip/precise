# PRECISE METHOD - Tax & Business Services Website

## Overview

PRECISE METHOD is a professional tax and business services website for an IRS-authorized firm offering tax preparation, business registration, bookkeeping, and compliance services. The application is a full-stack web application with a React frontend and Express backend, featuring a contact form with file uploads that stores inquiries in a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for page transitions and animations
- **Fonts**: Inter (sans-serif) and Lora (serif) from Google Fonts

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful endpoints under `/api` prefix
- **File Uploads**: Multer for handling multipart form data (10MB limit)
- **Email**: Nodemailer for sending notification emails
- **Build Tool**: esbuild for server bundling, Vite for client

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` - shared between client and server
- **Migrations**: Drizzle Kit with `db:push` command
- **Connection**: Connection pool via `pg` package using `DATABASE_URL` environment variable

### Project Structure
```
client/           # React frontend
  src/
    components/   # UI components (layout, ui from shadcn)
    pages/        # Route pages (Home, Services, About, Contact, etc.)
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route handlers
  storage.ts      # Database operations
  static.ts       # Static file serving (production)
  vite.ts         # Vite dev server integration
shared/           # Shared code between client/server
  schema.ts       # Drizzle database schema and Zod types
```

### Key Design Decisions

1. **Monorepo Structure**: Client and server share types through the `shared/` directory, ensuring type safety across the stack.

2. **Schema-First Approach**: Database schema defined with Drizzle, Zod schemas auto-generated with `drizzle-zod` for validation.

3. **Development vs Production**: In development, Vite serves the frontend with HMR. In production, the built static files are served by Express.

4. **Path Aliases**: TypeScript configured with `@/` for client imports, `@shared/` for shared code.

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management

### Email Service
- **Nodemailer**: Email sending for contact form notifications (requires SMTP configuration)

### Frontend Libraries
- **Radix UI**: Accessible component primitives (dialog, dropdown, toast, etc.)
- **TanStack React Query**: Server state management and caching
- **Framer Motion**: Animation library
- **date-fns**: Date formatting utilities

### Development Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: Server bundling for production
- **Drizzle Kit**: Database migration tooling