import { useEffect, useRef } from "react";
import styled from "styled-components";
import { LogEntry } from "../../../../types";

type BattleLogProps = {
  log: LogEntry[];
};

export default function BattleLog({ log }: BattleLogProps) {
  const battleLogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom whenever log changes
    if (battleLogRef.current) {
      battleLogRef.current.scrollTop = battleLogRef.current.scrollHeight;
    }
  }, [log]);

  return (
    <Container ref={battleLogRef}>
      {" "}
      {log.map((item, index) =>
        item.type === "header" ? (
          <BattleLogHeader key={item.text + index}>
            {" "}
            {item.text}{" "}
          </BattleLogHeader>
        ) : (
          <BattleLogText key={item.text + index}> {item.text} </BattleLogText>
        )
      )}{" "}
    </Container>
  );
}

const Container = styled.div`
  height: 500px;
  overflow: scroll;
  border: 1px solid lightgrey;
  border-radius: 4px;
  padding: 24px;
  margin-top: 48px;
`;

const BattleLogHeader = styled.h3`
  margin-top: 24px;
`;
const BattleLogText = styled.p``;
