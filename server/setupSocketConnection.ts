import { Server } from "socket.io";
import { startBattle, queueTurn, processTurns } from "./battleEngine/index";
import { BattleState, Turn } from "./types.js";

const userToBattleMap = new Map();
const connectedUsers = new Map();
const waitingUsers = new Map();
const battleMap = new Map();

function getOpponentId(
  battleState: BattleState,
  userId: string | string[] | undefined
) {
  const opponentId = battleState.playerIds.find((id) => id != userId);
  return opponentId ? opponentId.toString() : "";
}

const socketSetupFunction = (io: Server) => {
  io.on("connection", async (socket) => {
    const userId = <string>socket.handshake.query.userId;
    connectedUsers.set(userId, socket.id);

    socket.on("turn", async (turnData: Turn) => {
      const battleState = battleMap.get(turnData.battleId);
      if (!battleState) return;

      let newBattleState = battleState;
      newBattleState = queueTurn(battleState, turnData);

      //if all users have moved
      if (!newBattleState.currentTurn.length) {
        newBattleState = await processTurns(newBattleState);
        const opponentId = getOpponentId(newBattleState, userId);
        io.to(connectedUsers.get(opponentId)).emit(
          "update_state",
          newBattleState
        );
      } else {
        //otherwise user should wait
        newBattleState.text[userId] = "Waiting for opponent...";
      }

      socket.emit("update_state", newBattleState);
      battleMap.set(newBattleState.id, newBattleState);
    });

    socket.on("disconnect", () => {
      connectedUsers.delete(userId);
      waitingUsers.delete(userId);

      const battleId = userToBattleMap.get(userId);
      if (battleId) {
        const battleToDelete = battleMap.get(battleId);
        const opponentId = (
          battleToDelete.playerIds.find((id: string) => id != userId) || ""
        ).toString();

        io.to(connectedUsers.get(opponentId)).emit("opponent_disconnected");
      }
    });

    //match connecting user to someone waiting if there is someone
    if (waitingUsers.size > 0) {
      const opponentId = waitingUsers.keys().next().value;

      const { battleId, battleState } = await startBattle(userId, opponentId);
      battleMap.set(battleId, battleState);
      userToBattleMap.set(userId, battleId);
      userToBattleMap.set(opponentId, battleId);

      io.to(waitingUsers.get(opponentId)).emit("battle_start", battleState);
      socket.emit("battle_start", battleState);

      waitingUsers.delete(opponentId);
    } else {
      waitingUsers.set(userId, socket.id);
    }
  });
};

export default socketSetupFunction;
