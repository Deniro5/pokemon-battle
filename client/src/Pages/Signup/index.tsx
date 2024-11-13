import React, { useState } from "react";
import styled from "styled-components";
import useStore from "../../zustand/store";
import { useNavigate } from "react-router-dom";
import { isValidUsername } from "../../utils";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useStore();
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    setError("");
  };

  const handleSubmit = async () => {
    if (!username || !password || !confirmPassword) {
      setError("Please fill out all fields");
      return;
    }
    if (!isValidUsername(username)) {
      setError("Username contains invalid characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const success = await signup(username, password);

    if (success) {
      navigate("/");
    } else {
      setError(
        "Something went wrong during sign up. Please wait a moment and try again"
      );
    }
  };

  return (
    <LoginContainer>
      <Title> Signup</Title>
      {error && <ErrorMessage> {error} </ErrorMessage>}
      <InputContainer>
        <Label> Username: </Label>
        <StyledInput value={username} onChange={handleUsernameChange} />
      </InputContainer>

      <InputContainer>
        <Label> Password: </Label>
        <StyledInput
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </InputContainer>

      <InputContainer>
        <Label> Confirm Password: </Label>
        <StyledInput
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </InputContainer>
      <LoginButton onClick={handleSubmit}> Create Account </LoginButton>
    </LoginContainer>
  );
}

const Title = styled.p`
  text-align: center;
  font-weight: bold;
  margin-top: 0;
`;

const LoginContainer = styled.div`
  margin: auto;
  padding: 24px;
  gap: 24px;
  margin-top: 20vh;
  border: 1px solid grey;
  border-radius: 8px;
  width: 400px;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

const StyledInput = styled.input`
  height: 40px;
  width: 100%;
  padding: 0px 12px;
`;

const InputContainer = styled.div`
  margin: 12px 0px;
`;

const Label = styled.p`
  margin-bottom: 16px;
`;

const LinkContainer = styled.div`
  text-align: center;
  margin-top: 24px;
`;

const LoginButton = styled.button`
  margin-top: 24px;
  width: 100%;
  height: 40px;
  background: navy;
  color: white;
  border: none;
  border-radius: 4px;

  &:hover {
    background: blue;
    cursor: pointer;
  }
`;
