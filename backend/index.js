import express from "express";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://auth-frontend-z2on.onrender.com",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/auth", authRoutes);

export default app;
