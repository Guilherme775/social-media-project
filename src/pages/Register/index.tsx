import React from "react";
import { useHistory } from "react-router-dom";
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
import { useAlertsContext } from "../../utils/useAlerts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "react-relay/hooks";
import CreateUserMutation from "../../operations/CreateUserMutation";
import { CreateUserMutation as CreateUserMutationTypes } from "../../operations/__generated__/CreateUserMutation.graphql";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const schema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string().required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});

export const Register = () => {
  const { state } = useThemeContext();
  const { actions } = useAlertsContext();
  const history = useHistory();

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const [commit] = useMutation<CreateUserMutationTypes>(CreateUserMutation);

  const onSubmit = (formValues: FormValues) => {
    commit({
      variables: {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
      },
      onCompleted() {
        actions.addSuccessAlert("Usuário cadastrado com sucesso!");
        history.push("/");
      },
      onError() {
        actions.addDangerAlert("Erro ao cadastrar usuário");
      },
    });
  };

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
            name="name"
            onChange={(e) => setValue("name", e.target.value)}
            error={errors.name?.message}
            width="250"
            height="52"
            darkMode={state.dark}
          />
          <Textfield
            label="Email"
            name="email"
            onChange={(e) => setValue("email", e.target.value)}
            error={errors.email?.message}
            width="250"
            height="52"
            darkMode={state.dark}
          />
          <Textfield
            label="Password"
            name="password"
            onChange={(e) => setValue("password", e.target.value)}
            error={errors.password?.message}
            width="250"
            height="52"
            darkMode={state.dark}
          />
          <Container>
            <Text darkMode={state.dark}>Already have account ?</Text>
            <BlueLink to="/">Sign in</BlueLink>
          </Container>
          <Button
            width="250"
            height="52"
            font="16"
            onClick={handleSubmit(onSubmit)}
          >
            Sign Up
          </Button>
        </Form>
      </FormContainer>
      <ThemeSwitcher />
    </Wrapper>
  );
};

export default Register;
