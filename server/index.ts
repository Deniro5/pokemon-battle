import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import http from "http";
import setupSocketFunctions from "./setupSocketConnection"; // Import without file extension .js
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // React app origin
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Import routes with TS style

setupSocketFunctions(io);

dotenv.config();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // if you want to allow cookies or other credentials
  })
);

app.use(express.json());

// Use routes
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

mongoose.connect(
  `mongodb+srv://deantowheed5:${process.env.DB_PASS}@cluster0.dcdf4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});

// Simple route for testing
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the MeRN server!");
});
