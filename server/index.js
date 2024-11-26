const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { Server } = require("socket.io");
const app = express();
const http = require("http");
const {
  startBattle,
  setActivePokemon,
  queueTurn,
  processTurns,
} = require("./data/battleEngine");
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

const connectedUsers = new Map();
const waitingUsers = new Map();
const battleMap = new Map();

function getOpponentId(battleState, userId) {
  return battleState.playerIds.find((id) => id != userId).toString();
}

io.on("connection", async (socket) => {
  const userId = socket.handshake.query.userId;
  socket.on("turn", (turnData) => {
    const battleState = battleMap.get(turnData.battleId);
    if (!battleState) return;

    let newBattleState = battleState;
    newBattleState = queueTurn(battleState, turnData);

    //if all users have moved
    if (!newBattleState.currentTurn.length) {
      newBattleState = processTurns(newBattleState);
      const opponentId = getOpponentId(newBattleState, userId);
      console.log(opponentId);
      console.log(connectedUsers);
      console.log(connectedUsers.get(opponentId));
      io.to(connectedUsers.get(opponentId)).emit(
        "update_state",
        newBattleState
      );
    } else {
      newBattleState.text = "Waiting for opponent...";
    }

    socket.emit("update_state", newBattleState);
    battleMap.set(newBattleState.id, newBattleState);
  });

  socket.on("message", (message) => {
    socket.emit("message", `Server received: ${message}`);
  });

  socket.on("handle-disconnect", (userId) => {
    connectedUsers.delete(userId);
  });

  socket.on("disconnect", () => {});

  connectedUsers.set(userId, socket.id);

  if (waitingUsers.size) {
    const opponentId = waitingUsers.keys().next().value;

    const { battleId, battleState } = await startBattle(userId, opponentId);
    battleMap.set(battleId, battleState);

    io.to(waitingUsers.get(opponentId)).emit("battle_start", battleState);
    socket.emit("battle_start", battleState);

    waitingUsers.delete(opponentId);
    return;
  }
  waitingUsers.set(userId, socket.id);
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
