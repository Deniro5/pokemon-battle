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
  const { user, refetchUser } = useStore();
  const [battleStatus, setBattleStatus] = useState<BattleStatus>(
    BattleStatus.WAITING
  );
  const [battleState, setBattleState] = useState<BattleState | null>(null);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    if (!user) {
      setBattleStatus(BattleStatus.CONNECT_ERROR);
      return;
    }

    const newSocket = io("http://localhost:8000", {
      query: { userId: user._id },
    });

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
        setBattleStatus(BattleStatus.FINISHED);
        newSocket.disconnect();
        setSocket(null);
        refetchUser(user._id);
      }
    });

    newSocket.on("opponent_disconnected", () => {
      setBattleStatus(BattleStatus.DISCONNECTED);
      setBattleState(null);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
      setSocket(null);
    };
  }, []);

  const getContent = () => {
    if (battleStatus === BattleStatus.WAITING) return <WaitScreen />;
    if (battleStatus === BattleStatus.DISCONNECTED) return <Disconnect />;
    if (battleStatus === BattleStatus.CONNECT_ERROR) return <ConnectError />;
    if (
      (battleStatus === BattleStatus.FINISHED && !!battleState) ||
      (battleStatus === BattleStatus.CONNECTED && !!battleState && !!socket)
    )
      return <Battle battleState={battleState} socket={socket} />;
  };

  return <Container>{getContent()}</Container>;
}

const Container = styled.div`
  display: flex;
  margin-top: 72px;
  justify-content: center;
`;
