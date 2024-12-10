import { useEffect, useState } from "react";
import styled from "styled-components";
import useStore from "../../zustand/store";
import { BattleState, BattleStatus } from "../../types";
import { io, Socket } from "socket.io-client";
import WaitScreen from "./WaitScreen";
import ConnectError from "./ConnectError";
import Battle from "./Battle";
import Disconnect from "./Disconnect";

export default function BattleConnect() {
  const { user } = useStore();
  const [battleStatus, setBattleStatus] = useState<BattleStatus>(
    BattleStatus.WAITING
  );
  const [battleState, setBattleState] = useState<BattleState | null>(null);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io("http://localhost:8000", {
      query: { userId: user?._id },
    });

    newSocket.on("connect", () => console.log("connect"));

    newSocket.send();

    newSocket.on("connect_error", () =>
      setBattleStatus(BattleStatus.CONNECT_ERROR)
    );

    newSocket.on("battle_start", (battleState) => {
      setBattleStatus(BattleStatus.CONNECTED);
      setBattleState(battleState);
    });

    newSocket.on("update_state", (battleState) => {
      setBattleState(battleState);
      if (battleState.status === BattleStatus.FINISHED) {
        newSocket.disconnect();
        setSocket(null);
      }
    });

    newSocket.on("opponent_disconnected", () => {
      setBattleStatus(BattleStatus.DISCONNECTED);
      setBattleState(null);
    });

    return () => {
      newSocket.disconnect();
      setSocket(null);
    };
  }, []);

  const getContent = () => {
    if (battleStatus === BattleStatus.WAITING) return <WaitScreen />;
    if (battleStatus === BattleStatus.DISCONNECTED) return <Disconnect />;
    if (battleStatus === BattleStatus.CONNECT_ERROR) return <ConnectError />;
    if (battleStatus === BattleStatus.CONNECTED && !!battleState && !!socket)
      return <Battle battleState={battleState} socket={socket} />;
  };

  return <Container>{getContent()}</Container>;
}

const Container = styled.div`
  display: flex;
  margin-top: 72px;
  justify-content: center;
`;
