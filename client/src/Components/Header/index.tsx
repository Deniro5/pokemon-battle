import styled from "styled-components";
import useStore from "../../zustand/store";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { user, isAuthenticated, logout } = useStore();
  const navigate = useNavigate();

  const showLogout = !!user && isAuthenticated;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <StyledHeader>
      {showLogout && (
        <LogoutButton onClick={handleLogout}> Logout </LogoutButton>
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  height: 60px;
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;
`;

const LogoutButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
