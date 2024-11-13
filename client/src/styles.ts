import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  border: none;
  color: white;
  background: darkblue;
  cursor: pointer;
  width: 150px;
  border-radius: 4px;

  &:hover {
    background: blue;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const LinkButton = styled(Link)`
  height: 40px;
  border: none;
  color: white;
  background: darkblue;
  cursor: pointer;
  width: 200px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background: blue;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
