import React from "react";
import { Textfield, Button, ThemeSwitcher } from "../../components";
import {
  Wrapper,
  IconContainer,
  Image,
  FormContainer,
  Form,
  Title,
  Container,
  Text,
  BlueLink,
} from "./styles";
import social from "../../assets/social-media.png";
import { useThemeContext } from "../../hooks/useTheme";

export const Login = () => {
  const { state } = useThemeContext();

  return (
    <Wrapper>
      <IconContainer>
        <Image src={social} alt="social-media" />
      </IconContainer>
      <FormContainer darkMode={state.dark}>
        <Form>
          <Title darkMode={state.dark}>Sign In</Title>
          <Textfield
            label="Email"
            width="250"
            height="52"
            darkMode={state.dark}
          />
          <Textfield
            label="Password"
            width="250"
            height="52"
            darkMode={state.dark}
          />
          <Container>
            <Text darkMode={state.dark}>Don't have account ?</Text>
            <BlueLink to="/register">Sign up</BlueLink>
          </Container>
          <Button width="250" height="52" font="16">
            Sign In
          </Button>
        </Form>
      </FormContainer>
      <ThemeSwitcher />
    </Wrapper>
  );
};

export default Login;
