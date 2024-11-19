const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { Server } = require("socket.io");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // React app origin
    methods: ["GET", "POST"],
    credentials: true,
  },
});

//---------------------------------------

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  io.emit("message", "message");

  socket.on("message", (message) => {
    console.log(`Message from ${socket.id}: ${message}`);
    socket.emit("message", `Server received: ${message}`);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

dotenv.config();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // if you want to allow cookies or other credentials
  })
);

app.use(express.json());

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
app.get("/", (req, res) => {
  res.send("Welcome to the MERN server!");
});
