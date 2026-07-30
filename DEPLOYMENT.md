# Production Deployment Guide

This guide details step-by-step instructions for deploying the **Accredian Enterprise Full-Stack Application** across various cloud infrastructure providers.

---

## 🧰 Build & Production Verification

Before deploying, run full compilation and linting checks locally:

```bash
# 1. Type check
npm run lint

# 2. Build single bundled server and Vite static assets
npm run build

# 3. Test production launch locally
npm start
```

---

## ☁️ Option 1: GCP Cloud Run / Container Deployment (Recommended)

Accredian Enterprise is packaged with a single-command ESBuild + Node production entrypoint (`dist/server.cjs`) designed for containerized deployment on Google Cloud Run, AWS ECS, or Docker hosts.

### `Dockerfile` (Reference)
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/server.cjs"]
```

---

## 🚀 Option 2: Render / Railway Deployment

### Render Configuration (`render.yaml`)
```yaml
services:
  - type: web
    name: accredian-enterprise
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 3000
      - key: MONGODB_URI
        sync: false
```

### Railway Setup
1. Connect your repository to Railway.
2. Set Build Command: `npm run build`
3. Set Start Command: `npm start`
4. Set Environment Variables: `NODE_ENV=production`, `PORT=3000`, `MONGODB_URI=your_mongodb_atlas_uri`.

---

## 🔼 Option 3: Vercel Deployment

For Vercel serverless deployments, `vercel.json` routes static requests to `/dist` and API requests to `/api`.

### `vercel.json`
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.ts",
      "use": "@vercel/node"
    },
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "server.ts" },
    { "src": "/(.*)", "dest": "/dist/$1" }
  ]
}
```

---

## 🍃 MongoDB Atlas Setup

1. Create a free or dedicated cluster in [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Under **Network Access**, allow access from `0.0.0.0/0` (or specified cloud provider IP range).
3. Under **Database Access**, create a database user with Read/Write privileges on the `accredian_enterprise` database.
4. Copy the connection string into the `MONGODB_URI` variable.
5. On initial server launch, the seeder automatically populates initial enterprise data (programs, features, testimonials, FAQs, impact stats).
6. If `MONGODB_URI` is omitted or temporarily unreachable, the app seamlessly falls back to its persistent, auto-seeded in-memory data store without crashing or throwing 500 errors.
