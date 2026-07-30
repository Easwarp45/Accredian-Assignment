# Accredian Enterprise Landing Page & API Backend

Production-ready, lightweight, secure, and fully typed full-stack solution for the **Accredian Enterprise Landing Page**.

---

## 🌟 Key Features

- **Production-Ready REST APIs**: Complete backend support for features, enterprise learning programs, impact statistics, client testimonials, searchable FAQs, contact requests, and demo bookings.
- **Resilient Dual Storage Architecture**: Operates with **MongoDB / Mongoose** when connected, and seamlessly transitions to an **Auto-Seeding In-Memory Data Store** if MongoDB is offline or `MONGODB_URI` is unconfigured.
- **Robust Security Stack**: Hardened with **Helmet**, **CORS**, **Rate Limiting** (`express-rate-limit`), **Morgan** logging, **Compression**, and **Zod schema validation**.
- **Unified TypeScript Full-Stack Setup**: Modern Express.js server integrated with Vite dev server middleware and single-command bundling via `esbuild`.

---

## 🏗️ Architecture & Project Structure

```
server/
  src/
    config/           # Environment and Database configuration
      env.ts
      database.ts
    constants/        # Seed data and default content
      seedData.ts
    controllers/      # Express route controllers
      health.controller.ts
      features.controller.ts
      programs.controller.ts
      testimonials.controller.ts
      faqs.controller.ts
      statistics.controller.ts
      contact.controller.ts
      demo.controller.ts
      roi.controller.ts
    database/         # MongoDB seeder script
      seed.ts
    middlewares/      # Error, 404, rate limiter, and Zod validation
      error.middleware.ts
      notFound.middleware.ts
      rateLimiter.middleware.ts
      validate.middleware.ts
    models/           # Mongoose schemas & models
      Feature.ts
      Program.ts
      FAQ.ts
      Testimonial.ts
      Statistic.ts
      ContactSubmission.ts
      DemoRequest.ts
    routes/           # API router declarations
      index.ts
      health.routes.ts
      features.routes.ts
      programs.routes.ts
      testimonials.routes.ts
      faqs.routes.ts
      statistics.routes.ts
      contact.routes.ts
      demo.routes.ts
      roi.routes.ts
    services/         # Business logic & persistence store layers
      contact.service.ts
      demo.service.ts
      faqs.service.ts
      features.service.ts
      programs.service.ts
      statistics.service.ts
      store.service.ts
      testimonials.service.ts
    types/            # Backend TypeScript interfaces
      index.ts
    utils/            # Logging, API response helpers, and async wrapper
      apiResponse.ts
      asyncHandler.ts
      logger.ts
    validators/       # Zod schemas for payload validation
      contact.validator.ts
      demo.validator.ts
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

### 3. Run Development Server
```bash
npm run dev
```
The server will start on `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 🧪 Documentation Artifacts
- **[API Documentation](API.md)**
- **[Database Guide](DATABASE.md)**
- **[Environment Variables](ENVIRONMENT.md)**
- **[REST Client Requests](requests.http)**
- **[Postman Collection](postman_collection.json)**
