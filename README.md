# Nimrah Qureshi — AI Engineer & Full-Stack Developer Portfolio

A premium portfolio platform built with React 19, Vite, TypeScript, Tailwind CSS v4,
and Framer Motion, with an Express + MongoDB backend.

## Project structure

```
.
├── src/                 # Frontend (React + Vite)
│   ├── components/       # UI sections & effects
│   ├── data/             # Content: projects, services, testimonials, etc.
│   ├── lib/api.ts        # Centralized API client (reads VITE_API_URL)
│   └── ...
├── backend/             # Express API + Mongoose models
│   ├── routes/           # contact, leads, subscribers, blog, projects, etc.
│   ├── models/           # MongoDB schemas
│   └── server.js
├── public/              # favicon, robots.txt, sitemap.xml
└── .env.example         # Frontend env template
```

## Getting started

### 1. Frontend

```bash
npm install
cp .env.example .env        # then fill in values
npm run dev                 # http://localhost:5173
npm run build               # production build → dist/
```

Set `VITE_API_URL` in `.env` to your backend URL (default `http://localhost:5000/api`).

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env        # set MONGODB_URI, RESEND_API_KEY, etc.
npm run dev                 # http://localhost:5000
```

The backend needs a MongoDB connection string (`MONGODB_URI`). Without it the
server starts but database writes will fail. For emails, set `RESEND_API_KEY`.

## What's wired up (Phase 1)

- Contact form → `POST /api/contact` → saves a Lead in MongoDB + sends emails (Resend).
- Newsletter (footer) → `POST /api/subscribers` → saves a Subscriber.
- All content (projects, services, about, SEO, socials, chatbot facts) uses
  Nimrah Qureshi's real profile information.

## Not yet built (planned phases)

- Phase 2: React Router multi-page conversion
- Phase 3: Clerk auth + secured admin CRUD dashboard
- Phase 4: Real OpenAI-powered chatbot & AI tools (currently keyword/template based)
- Phases 5–7: integrations, full SEO, performance (remove single-file build)

## Note on testimonials

`src/data/testimonials.ts` contains **sample placeholders only**. Replace them with
real client feedback (with permission) before going live.
