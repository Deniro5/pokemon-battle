import React from "react";
import styled from "styled-components";
import useStore from "../../../zustand/store";

export default function Stats() {
  const { user } = useStore();
  return (
    <StatContainer>
      <Row>
        {" "}
        <b> Battles: </b> {user?.battles}{" "}
      </Row>
      <Row>
        {" "}
        <b> Wins: </b> {user?.wins}{" "}
      </Row>
      <Row>
        {" "}
        <b> Losses: </b> {user?.losses}{" "}
      </Row>
    </StatContainer>
  );
}

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Row = styled.p`
  margin: 0;
`;
