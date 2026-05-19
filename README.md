# Packers & Movers Landing Page (MERN)

Responsive service landing page for a Packers and Movers assignment with a React frontend and Express/MongoDB backend for contact form submissions.

## Features
- Responsive layout: header, hero, services, process, contact form, footer
- Basic animations with reduced-motion support
- SEO-friendly metadata
- Express API with MongoDB Atlas storage

## Tech Stack
- React (Vite)
- Node.js + Express
- MongoDB Atlas + Mongoose

## Project Structure
- client/ - React app
- client/src/components - Header/Footer layout components
- client/src/sections - Page sections
- client/src/data - Content data
- client/src/hooks - Client hooks
- server/ - Express API

## Local Setup

### 1) Backend
```bash
cd server
npm install
```

Create a `.env` file in `server/` (see `.env.example`):
```
MONGODB_URI=your_mongodb_atlas_uri
PORT=5000
ALLOWED_ORIGIN=http://localhost:5173
```

Start the API:
```bash
npm run dev
```

### 2) Frontend
```bash
cd client
npm install
npm run dev
```

The contact form posts to `/api/contacts` via the Vite proxy.

## API
- `POST /api/contacts`
  - Body: `{ name, phone, service }`
- `GET /api/health`

## Deployment Notes

### Frontend (Vercel)
- Root Directory: `client`
- Build Command: `npm run build`
- Output Directory: `dist`

### Backend (Render)
- Root Directory: `server`
- Build Command: `npm install`
- Start Command: `npm start`
- Environment variables: `MONGODB_URI`, `PORT`, `ALLOWED_ORIGIN`

## Scripts (root)
- `npm run client:dev`
- `npm run server:dev`
- `npm run client:build`
- `npm run server:start`
