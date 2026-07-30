# REST API Reference Manual

All API endpoints return JSON formatted with a consistent response contract:

### Success Response Format
```json
{
  "success": true,
  "message": "Human readable message",
  "data": { ... },
  "meta": { ... }
}
```

### Failure Response Format
```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    {
      "field": "fieldName",
      "message": "Validation message"
    }
  ]
}
```

---

## Endpoints

### 1. Health Check
- **GET** `/api/health`
- **Description**: Returns system health, uptime, timestamp, and database status.
- **Response**:
```json
{
  "success": true,
  "message": "Health check passed",
  "data": {
    "status": "ok",
    "uptime": 142.5,
    "version": "1.0.0",
    "timestamp": "2026-07-29T10:00:00.000Z",
    "database": "In-Memory Store Active"
  }
}
```

---

### 2. Enterprise Features
- **GET** `/api/features`
- **Description**: Retrieves all enterprise feature cards.
- **Response**:
```json
{
  "success": true,
  "message": "Enterprise features retrieved successfully",
  "data": [
    {
      "id": "upskill-scale",
      "icon": "Users",
      "title": "Upskill at Scale",
      "description": "Simultaneously train hundreds or thousands of global employees...",
      "category": "admin",
      "badge": "Enterprise Growth",
      "linkText": "Explore Scale Pathways"
    }
  ]
}
```

---

### 3. Enterprise Programs
- **GET** `/api/programs`
- **Query Parameters**:
  - `category` (optional): Filter programs by category (e.g. `data-ai`, `cloud-devops`, `product-tech`, `cybersecurity`, or `all`).
- **Response**:
```json
{
  "success": true,
  "message": "Enterprise programs retrieved successfully",
  "data": [ ... ],
  "meta": {
    "count": 6,
    "filteredCategory": "all"
  }
}
```

---

### 4. Client Testimonials
- **GET** `/api/testimonials`
- **Description**: Returns executive testimonials and ROI metric highlights.
- **Response**:
```json
{
  "success": true,
  "message": "Testimonials retrieved successfully",
  "data": [ ... ]
}
```

---

### 5. Frequently Asked Questions (FAQs)
- **GET** `/api/faqs`
- **Query Parameters**:
  - `q` (optional): Search query string to filter questions/answers.
- **Response**:
```json
{
  "success": true,
  "message": "FAQs retrieved successfully",
  "data": [ ... ],
  "meta": {
    "count": 6,
    "searchQuery": null
  }
}
```

---

### 6. Impact Statistics
- **GET** `/api/statistics`
- **Description**: Returns impact benchmarks and quantifiable numbers.
- **Response**:
```json
{
  "success": true,
  "message": "Impact statistics retrieved successfully",
  "data": [ ... ]
}
```

---

### 7. Contact Form Submission
- **POST** `/api/contact`
- **Request Body**:
```json
{
  "fullName": "Sarah Jenkins",
  "workEmail": "sarah@acme.com",
  "companyName": "Acme Corp",
  "phone": "+15550192834",
  "teamSize": "50-200",
  "interestedProgram": "Enterprise Executive AI Transformation",
  "message": "Looking to upskill 150 engineers."
}
```
- **Response**: `201 Created`
```json
{
  "success": true,
  "message": "Contact message logged successfully",
  "data": {
    "id": "SUB-1785293200000-482",
    "fullName": "Sarah Jenkins",
    "workEmail": "sarah@acme.com",
    "companyName": "Acme Corp",
    "phone": "+15550192834",
    "createdAt": "2026-07-29T10:00:00.000Z"
  }
}
```

---

### 8. Book Enterprise Demo Request
- **POST** `/api/demo-request`
- **Request Body**:
```json
{
  "fullName": "Michael Scott",
  "workEmail": "mscott@dundermifflin.com",
  "companyName": "Dunder Mifflin",
  "phone": "+15559021122",
  "designation": "Regional Manager",
  "organizationSize": "200-1000",
  "preferredDate": "2026-08-10",
  "message": "Interested in custom AI sales training."
}
```
- **Response**: `201 Created`
```json
{
  "success": true,
  "message": "Demo request received successfully",
  "data": {
    "id": "DEMO-1785293200000",
    "referenceId": "ACC-DEMO-684920",
    "fullName": "Michael Scott",
    "workEmail": "mscott@dundermifflin.com",
    "companyName": "Dunder Mifflin",
    "phone": "+15559021122",
    "createdAt": "2026-07-29T10:00:00.000Z"
  }
}
```

---

### 9. Workforce ROI Calculator
- **POST** `/api/roi-calculate`
- **Request Body**:
```json
{
  "teamSize": 100,
  "avgSalary": 100000,
  "turnoverRate": 15
}
```
- **Response**:
```json
{
  "success": true,
  "message": "ROI calculation completed successfully",
  "data": {
    "productivityGain": 1800000,
    "turnoverSavings": 300000,
    "totalBenefit": 2100000,
    "estimatedInvestment": 85000,
    "netROI": 2371,
    "paybackPeriodMonths": 0.5
  }
}
```
