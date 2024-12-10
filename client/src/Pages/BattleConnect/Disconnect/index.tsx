import { LinkButton } from "../../../styles";
import styled from "styled-components";

export default function Disconnect() {
  return (
    <Container>
      Your opponent left the battle
      <LinkButton to={"/"}> Go Back Home </LinkButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
