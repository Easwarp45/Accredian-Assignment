# Security Hardening & Audit Summary

The Accredian Enterprise application has been hardened against common security vulnerabilities using industry best practices and standard Express/React security patterns.

---

## 🛡️ Implemented Protections

### 1. HTTP Headers Hardening (Helmet)
We use `helmet` to manage and inject secure headers to shield the web application from common vectors.
- **CSP (Content Security Policy):** Conditionally tightens script execution. In production mode, `'unsafe-eval'` is removed from `scriptSrc` directives to block inline code injection vulnerabilities while allowing Vite Dev Server HMR during local development.
- **Header Suppression:** Express fingerprinting header (`x-powered-by`) is disabled globally to prevent reconnaissance scanners from detecting backend tech stacks.
- **Referrer Policy:** Set strictly to `strict-origin-when-cross-origin` to shield internal paths during link navigation.

### 2. Configurable Cross-Origin Resource Sharing (CORS)
- REST APIs are restricted to whitelist hosts defined in the `CORS_ALLOWED_ORIGINS` environment variables.
- Out of the box, production defaults to same-origin requests to prevent CSRF.
- During development mode, localhost origins (`http://localhost:*` and `http://127.0.0.1:*`) are dynamically allowed for developer ease of use.

### 3. Comprehensive Rate Limiting
We use `express-rate-limit` to prevent brute force and denial of service attacks:
- **Global API Rate Limiter:** Applied to all `/api` routes. Limits incoming requests to 300 requests per 15 minutes per IP.
- **Form Submission Rate Limiter:** Applied to form submission endpoints (`/api/contact` and `/api/demo-request`). Restricts requests to 20 submissions per hour per IP to prevent spamming and database congestion.

### 4. Input Parsing & Payload Size Constraints
- **Payload Limits:** Request JSON body parser is restricted to `100kb` to prevent memory flooding via massive POST payloads.
- **URL Encoding Limits:** Restricted to `100kb` with extended URL parameters.

### 5. Strict Schema Validation (Zod)
- All request parameters and body inputs are validated against strict Zod schemas before hitting business logic.
- Input validation filters use `.strict()` parsing to reject unrecognized parameters.
- Form fields are sanitized to strip whitespace and prevent script tags or malicious strings from reaching the database.

### 6. Database Protection & In-Memory Fallback
- No database credentials or connection URIs are hardcoded. They are read from environment variables.
- Mongoose queries use clean models and validation.
- If database services are unreachable or disconnect, the application seamlessly switches query routing to an internal in-memory store rather than bubbling raw DB error traces or throwing HTTP 500 errors to the client.
