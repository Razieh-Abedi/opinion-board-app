# 🗣️ Opinion Board App

A full-stack web application that allows users to submit and vote on opinions. Built with **React 19 (Vite)** on the frontend and **Node.js + Express.js** on the backend. Data is persisted using a local JSON file to simulate a database.

## 🚀 Features

### 🌐 Frontend

- Built with **React 19** and **Vite**
- **Context API** for global state management
- Modern React hooks:
  - `useActionState`
  - `useOptimistic`
  - `use`
  - `useFormStatus` (from `react-dom`)
- Handles HTTP requests and form submissions
- Optimistic UI updates for voting
- Basic client-side form validation
- Styled with **Vanilla CSS**

### 🔧 Backend

- Built with **Node.js** and **Express.js**
- JSON file used as a simulated database
- Endpoints for:
  - Submitting a new opinion
  - Getting all opinions
  - Voting up/down on an opinion
- Read/write/update operations on local files

## 🛠️ Installation

### Backend

```bash
cd backend
npm install
npm start

cd frontend
npm install
npm run dev
```
