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

export const Register = () => {
  const { state } = useThemeContext();

  return (
    <Wrapper>
      <IconContainer>
        <Image src={social} alt="social-media" />
      </IconContainer>
      <FormContainer darkMode={state.dark}>
        <Form>
          <Title darkMode={state.dark}>Sign Up</Title>
          <Textfield
            label="Name"
            width="250"
            height="52"
            darkMode={state.dark}
          />
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
            <Text darkMode={state.dark}>Already have account ?</Text>
            <BlueLink to="/">Sign in</BlueLink>
          </Container>
          <Button width="250" height="52" font="16">
            Sign Up
          </Button>
        </Form>
      </FormContainer>
      <ThemeSwitcher />
    </Wrapper>
  );
};

export default Register;
