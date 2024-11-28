import React from "react";
import {
  LoginContainer,
  LoginBox,
  Form,
  Input,
  Button,
  Title,
  StyledLink,
} from "../styles/LoginStyles";

const LoginForm = () => {
  return (
    <LoginContainer>
      <LoginBox>
        <Title>Login</Title>
        <Form>
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" />
          <Button type="submit">Entrar</Button>
        </Form>
        <StyledLink href="/cadastro">Cadastro</StyledLink>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginForm;
