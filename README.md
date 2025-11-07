# 💧 Aquaclear Water Management – AI-Enhanced Web Platform

A **modern, Dockerized web platform** built for **Aquaclear Water Management**, a UK-based environmental services company.  
The platform features an **AI-powered client assistant** with **persistent chat memory**, **context-aware RAG retrieval** (via OpenAI embeddings, pgvector, and section filtering), and a **professional, interactive frontend** designed for smooth client engagement across the UK.

---

### 🌐 Live Demo: [https://www.aquaclear.onrender.com](https://www.aquaclear.onrender.com)

---

## 🚀 Key Features

- 🤖 **AI Assistant** powered by OpenAI with context retrieval (RAG + section filters)  
- 💬 **Persistent chat history** using Supabase for long-term memory  
- 🧩 **React + TypeScript frontend** with Tailwind, React Router, and TanStack Query  
- 🧠 **Node.js/Express backend** with Zod validation and modular architecture  
- 🧪 **Centralized Jest + Supertest mocking system** for reliable testing  
- 🔒 **Security middleware:** Helmet, rate limiting, XSS filtering, cookie parsing  
- 🐳 **Docker Compose orchestration** for full-stack local setup  
- 🔄 **CI/CD pipeline** deployed on Render  

---

## 🧰 Tech Stack

**Frontend:** React · TypeScript · Tailwind · React Router · TanStack Query · DaisyUI  
**Backend:** Node.js · Express · TypeScript · OpenAI · Supabase · pgvector · Zod  
**Testing:** Jest · Supertest · Vitest · React Testing Library  
**DevOps:** Docker · Docker Compose · Render CI/CD  
**Utilities:** Brevo API (email) · Nodemailer · Helmet · CORS · Express Rate Limit  

---

## 🏗️ Project Architecture

```
aquaclear/
├── frontend/                     # React + TypeScript + Tailwind frontend
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   ├── pages/                # Route-based views (React Router)
│   │   ├── hooks/                # Custom hooks (TanStack Query, etc.)
│   │   ├── utils/                # Helpers and constants
│   │   └── main.tsx              # Frontend entry point
│   ├── Dockerfile                # Frontend container configuration
│   └── package.json
│
├── backend/                      # Node.js + Express + TypeScript backend
│   ├── src/
│   │   ├── routes/               # API route definitions
│   │   ├── controllers/          # Request handlers and logic
│   │   ├── services/             # OpenAI, Supabase, Brevo integrations
│   │   ├── utils/                # Zod validation, error handling, helpers
│   │   ├── db/                   # Supabase client & pgvector setup
│   │   └── index.ts              # Server entry point
│   ├── tests/                    # Jest + Supertest tests with central mocks
│   ├── Dockerfile                # Backend container configuration
│   ├── .env.example              # Required environment variables
│   └── package.json
│
├── docker-compose.yml            # Orchestrates frontend, backend, and database
└── README.md
```

---

## ⚙️ Setup & Local Development

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/aquaclear-platform.git
cd aquaclear-platform
```
2. Install dependencies
```bash
cd frontend && npm install
cd ../backend && npm install
```
3. Configure environment variables
Create a .env file in the backend directory with the following keys:

```bash
OPENAI_API_KEY=your_openai_key
SUPABASE_URL=your_supabase_url
SUPABASE_API_KEY=your_supabase_service_key
BREVO_API_KEY=your_brevo_api_key
BREVO_SENDER_EMAIL=your_sender_email
BREVO_CONTACT_RECEIVER=receiver_email
BREVO_SENDER_NAME=your_sender_name
```
(The frontend typically does not require a .env for local dev unless using environment-specific API endpoints.)

4. 🐳 Run with Docker
To run both frontend and backend with Docker Compose:

```bash
docker-compose up --build
```
⚠️ Keep the dotenv lines commented out in the backend when running with Docker,
as environment variables are passed through the container environment.

To Run locally (development)
In backend/src/index.ts and backend/src/supabaseClient.ts,
uncomment the dotenv config lines to enable local .env loading.

Then run the backend:

```bash
npm run dev
Run the frontend in another terminal:
```
```bash
cd frontend
npm run dev
```

---

## 🧪 Testing
Backend tests
```bash
npm test
```
Frontend tests
```bash
cd frontend
npm run test
```
Backend: Centralized Jest + Supertest mocking for API and integration tests

Frontend: Vitest and React Testing Library for UI and interaction tests

---

📦 Deployment
Deployed on Render using a full CI/CD pipeline.
Each push to the main branch triggers automatic builds and deployments of both frontend and backend Docker containers.

---

🧾 License
Private project © Aquaclear Water Management
For inquiries, please contact the repository owner.
