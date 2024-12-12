import React from "react";
import Spinner from "../../../assets/spinner.gif";
import styled from "styled-components";
import { LinkButton } from "../../../styles";

export default function WaitScreen() {
  return (
    <Container>
      <Text> Waiting for an opponent to join... </Text>
      <Image height={128} src={Spinner} />
      <LinkButton to={"/"}> Cancel </LinkButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Image = styled.img`
  margin-bottom: 24px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
