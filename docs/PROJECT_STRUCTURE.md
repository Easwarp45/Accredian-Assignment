# Project Repository Structure

This document outlines the organized, clean directory structure of the Accredian Enterprise Landing Page and Backend application. This organization separates developer resources, frontend client views, and backend service logic to maximize maintainability.

```
Accredian-Assignment/
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── bun.lock                # Lockfile for Bun package installer
├── dist/                   # Bundled production builds (Vite client + Express server)
├── docs/                   # Unified technical documentation (recruiter-friendly)
│   ├── API.md              # REST API reference manual
│   ├── DATABASE.md         # Database fallback & schemas specification
│   ├── DEPLOYMENT.md       # Multi-platform production deployment guide
│   ├── ENVIRONMENT.md      # Detailed environment configuration documentation
│   ├── PROJECT_STRUCTURE.md # This project directory organization index
│   ├── SECURITY.md         # Security audit summary (Helmet, CORS, rate limits)
│   ├── postman_collection.json # Postman integration test suite
│   └── requests.http       # REST Client test file
├── index.html              # Frontend HTML document root
├── metadata.json           # Project metadata and major capabilities list
├── package.json            # Node scripts, dependencies, and metadata
├── package-lock.json       # Lockfile for NPM package installer
├── server/                 # Full Express backend application
│   └── src/
│       ├── app.ts          # Express application setup & middleware configurations
│       ├── server.ts       # Main listener start & database bootstrap entrypoint
│       ├── config/         # App configuration & env validator
│       ├── constants/      # Seeder constants & system-wide fallbacks
│       ├── controllers/    # Express API endpoints controllers
│       ├── database/       # Seeder runtime triggers
│       ├── middlewares/    # Error handlers, CORS filters, and schema parsing
│       ├── models/         # Mongoose schema models
│       ├── routes/         # Express API route maps
│       ├── services/       # Mongoose + In-Memory storage failover services
│       ├── types/          # Backend TypeScript interfaces
│       ├── utils/          # Logger formatters and API response contracts
│       └── validators/     # Zod payload validators
├── src/                    # Full React frontend client application
│   ├── main.tsx            # React client mount root
│   ├── App.tsx             # Root React container & event router
│   ├── components/         # Reusable frontend components
│   │   ├── common/         # Custom complex cards and landing pages modals
│   │   │   ├── AccordionItem.tsx
│   │   │   ├── BookDemoModal.tsx
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── ProgramCatalogModal.tsx
│   │   │   ├── ROICalculator.tsx
│   │   │   ├── StatisticCard.tsx
│   │   │   └── TestimonialCard.tsx
│   │   ├── layout/         # General containers & structural blocks
│   │   │   ├── Container.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Section.tsx
│   │   └── ui/             # Core base interactive atoms (Tailwind-styled)
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Modal.tsx
│   │       └── Toast.tsx
│   ├── constants/          # Static content definitions & lists
│   ├── sections/           # Landing page visual folds
│   ├── styles/             # Stylesheet configuration folder (Vite Tailwind v4)
│   │   └── index.css
│   ├── types/              # React typings and props declarations
│   └── utils/              # Tailwind merger and style helper utilities
├── tsconfig.json           # Unified TypeScript config paths mapping
├── vercel.json             # Serverless routing rules for Vercel
└── vite.config.ts          # Vite engine build configuration
```

## Architectural Guidelines

1. **Frontend / Backend Separation:**
   - The `/src` directory is strictly dedicated to client-side assets, styling, and views.
   - The `/server` directory is strictly dedicated to server-side Express config, routing, logic, and data layers.

2. **Clean Component Hierarchy:**
   - `/components/ui` houses raw, atomic visual elements (like `Button`, `Card`) that don't depend on business logic.
   - `/components/common` houses compound components that represent specific features (like `ROICalculator` or `BookDemoModal`).
   - `/components/layout` houses structure components (like `Navbar` and `Footer`).

3. **Database Uptime & Fallback Strategy:**
   - Service layers (`server/src/services`) contain dynamic try-catch blocks. Database connection state triggers automatic fallback to memory arrays (`server/src/services/store.service.ts`) if queries fail, ensuring 100% application uptime.
