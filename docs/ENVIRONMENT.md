# Environment Configuration Guide

This document describes all environment variables used by the Accredian Enterprise Landing Page application.

## `.env.example` Specification

```env
# Server Port (Defaults to 3000)
PORT=3000

# Node Environment ('development' | 'production')
NODE_ENV=development

# Application Base URL
APP_URL=http://0.0.0.0:3000

# Optional CORS whitelist domains (comma-separated list of origins)
CORS_ALLOWED_ORIGINS=

# Optional MongoDB Connection URI
# Example: mongodb://localhost:27017/accredian_enterprise
# Example: mongodb+cluster.mongodb.net/...
MONGODB_URI=

# Optional Gemini API Key for Server-side AI features
GEMINI_API_KEY=
```

---

## Variable Details

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `PORT` | Number | No | `3000` | Port on which the Express server binds and listens. |
| `NODE_ENV` | String | No | `development` | Defines runtime environment (`development` / `production`). |
| `APP_URL` | String | No | `http://0.0.0.0:3000` | Publicly facing base URL for the server. |
| `CORS_ALLOWED_ORIGINS` | String | No | *(Empty)* | Comma-separated list of external origins allowed by CORS filters. In production, defaults strictly to same-origin. |
| `MONGODB_URI` | String | No | *(Empty)* | MongoDB connection string. If left blank, server gracefully runs using internal auto-seeded memory store. |
| `GEMINI_API_KEY` | String | No | *(Empty)* | Server secret key for Google Gemini GenAI SDK calls. |
