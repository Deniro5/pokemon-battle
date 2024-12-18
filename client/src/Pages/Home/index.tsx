import styled from "styled-components";
import { LinkButton } from "../../styles";
import TeamDisplay from "./TeamDisplay";
import Stats from "./Stats";
import useStore from "../../zustand/store";

export default function Home() {
  const { user } = useStore();

  return (
    <HomeContainer>
      <h2> Welcome {user?.username}! </h2>
      <Stats />
      {user && <TeamDisplay team={user.team} />}
      <ButtonContainer>
        <LinkButton to="/team-selection">Choose Team</LinkButton>
        <LinkButton disabled={!user?.team?.length} to="/battle">
          Start Battle
        </LinkButton>
      </ButtonContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;
