# Database Architecture & Persistence Strategy

The Accredian Enterprise backend utilizes a flexible **Dual-Layer Persistence Strategy** to guarantee 100% uptime regardless of database server availability.

---

## ⚙️ Persistence Modes

### Mode 1: MongoDB / Mongoose (When `MONGODB_URI` is set)
When `MONGODB_URI` is configured in `.env`, Mongoose establishes a connection to MongoDB.
- Collections are automatically created and seeded if empty upon startup.
- Full Mongoose Schema validation, indexes, and persistence apply.

### Mode 2: High-Performance Auto-Seeded Memory Store (Fallback Mode)
If `MONGODB_URI` is omitted or MongoDB is unreachable:
- The server logs a notification and initializes an in-memory data layer populated with enterprise seed data (`SEED_FEATURES`, `SEED_PROGRAMS`, `SEED_FAQS`, `SEED_TESTIMONIALS`, `SEED_STATISTICS`).
- New form submissions (`/api/contact` and `/api/demo-request`) are captured in memory with unique reference IDs.

---

## 🗄️ Database Schemas & Collections

### 1. `Feature`
- `id`: String (Unique)
- `icon`: String
- `title`: String
- `description`: String
- `category`: Enum ('admin', 'employee', 'leadership')
- `badge`: String (Optional)
- `linkText`: String (Optional)

### 2. `Program`
- `id`: String (Unique)
- `title`: String
- `category`: Enum ('data-ai', 'cloud-devops', 'leadership', 'product-tech', 'cybersecurity')
- `categoryLabel`: String
- `duration`: String
- `level`: Enum ('Foundational', 'Intermediate', 'Executive', 'Advanced')
- `description`: String
- `enrolledCount`: Number
- `rating`: Number
- `skillsCovered`: Array of Strings
- `modulesCount`: Number
- `highlights`: Array of Strings
- `iconName`: String
- `featured`: Boolean

### 3. `FAQ`
- `id`: String (Unique)
- `question`: String
- `answer`: String
- `category`: String

### 4. `Testimonial`
- `id`: String (Unique)
- `quote`: String
- `author`: String
- `role`: String
- `company`: String
- `avatarUrl`: String
- `rating`: Number
- `metricHighlight`: String
- `companyLogoText`: String
- `category`: String

### 5. `Statistic`
- `id`: String (Unique)
- `value`: Number
- `suffix`: String
- `prefix`: String (Optional)
- `label`: String
- `description`: String
- `changeBadge`: String (Optional)

### 6. `ContactSubmission`
- `id`: String (Unique)
- `fullName`: String
- `workEmail`: String
- `companyName`: String
- `phone`: String
- `teamSize`: String (Optional)
- `interestedProgram`: String (Optional)
- `message`: String (Optional)
- `createdAt`: ISO Date String

### 7. `DemoRequest`
- `id`: String (Unique)
- `referenceId`: String (Unique, e.g. `ACC-DEMO-948123`)
- `fullName`: String
- `workEmail`: String
- `companyName`: String
- `phone`: String
- `designation`: String (Optional)
- `organizationSize`: String (Optional)
- `preferredDate`: String (Optional)
- `preferredTime`: String (Optional)
- `message`: String (Optional)
- `createdAt`: ISO Date String
