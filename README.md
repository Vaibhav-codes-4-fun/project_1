# User Authentication & Profile App (MERN)

A minimal full-stack authentication application built with **React (Vite)**, **Node.js**, **Express**, and **MongoDB**.  
The project demonstrates clean backend architecture, JWT-based authentication, and a simple, professional UI.

---

## 🚀 Features

- User Registration & Login
- JWT-based Authentication
- Protected Profile Route
- Password Hashing with bcrypt
- RESTful APIs
- MongoDB Database Integration
- Clean UI using Tailwind CSS
- Client-side route protection

---

## 🛠 Tech Stack

### Frontend

- React (Vite)
- Tailwind CSS
- React Router

### Backend

- Node.js
- Express
- MongoDB (Mongoose)
- JWT Authentication

---

## 📂 Project Structure

### Backend

backend/
├── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── config/
│ └── index.js
└── server.js

### Frontend

frontend/
├── src/
│ ├── pages/
│ ├── App.jsx
│ └── main.jsx

---

## 🔐 API Endpoints

| Method | Endpoint           | Description                  |
| ------ | ------------------ | ---------------------------- |
| POST   | /api/auth/register | Register user                |
| POST   | /api/auth/login    | Login user                   |
| GET    | /api/auth/profile  | Get user profile (protected) |

---

## ▶️ How to Run Locally

### Backend

cd backend
npm install
npm run dev

Create a .env file:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

Frontend

cd frontend
npm install
npm run dev

📌 Notes

Frontend route protection is for UX only

Backend middleware enforces real security

Designed to be simple, readable, and scalable

👤 Author

Vaibhav Upasani
