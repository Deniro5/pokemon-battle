import { LinkButton } from "../../../styles";
import styled from "styled-components";

export default function ConnectError() {
  return (
    <Container>
      Unable to connect to server
      <LinkButton to={"/"}> Go Back </LinkButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
