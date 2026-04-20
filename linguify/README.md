# Linguify — Language Learning Website (MERN + Tailwind)

A modern language learning web app built with:
- MongoDB
- Express.js
- React (Vite)
- Node.js
- Tailwind CSS

## Features
- JWT authentication
- Choose target language and level
- Structured modules: characters, vocabulary, grammar, sentences, listening, speaking, conversations
- Progress tracking dashboard
- Modern responsive UI with Tailwind CSS
- Sample seeded lessons for Japanese beginner learners

## Folder Structure
- `client/` — React + Tailwind frontend
- `server/` — Express + MongoDB backend

## Run locally

### 1. Install dependencies
```bash
npm run install:all
```

### 2. Setup environment variables
Create `server/.env`:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/linguify
JWT_SECRET=supersecretjwtkey
CLIENT_URL=http://localhost:5173
```

### 3. Seed sample data
```bash
cd server
npm run seed
```

### 4. Run app
From root:
```bash
npm run dev
```

Frontend: `http://localhost:5173`
Backend: `http://localhost:5000`

## Notes
- Speaking uses browser speech recognition for MVP.
- Listening and conversations use seeded lesson data.
- You can extend this with AI chat, pronunciation scoring, spaced repetition, and more later.
