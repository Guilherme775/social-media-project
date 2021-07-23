import React from "react";
import { useHistory } from "react-router-dom";
import { Textfield, Button } from "../../components";
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
import { useAlertsContext } from "../../utils/useAlerts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "react-relay";
import SignInMutation from "../../operations/SignInMutation";
import { SignInMutation as SignInMutationType } from "../../operations/__generated__/SignInMutation.graphql";
import Cookie from "js-cookie";

type FormValues = {
  email: string;
  password: string;
};

const schema = Yup.object().shape({
  email: Yup.string().required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});

export const Login = () => {
  const { actions } = useAlertsContext();
  const history = useHistory();

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const [commit] = useMutation<SignInMutationType>(SignInMutation);

  const onSubmit = (formValues: FormValues) => {
    commit({
      variables: {
        email: formValues.email,
        password: formValues.password,
      },
      onCompleted(data) {
        Cookie.set("token", data.signIn.token);
        history.push(`/feed/${data.signIn.user.id}`);
      },
      onError() {
        actions.addDangerAlert("Credencias incorretas");
      },
    });
  };

  return (
    <Wrapper>
      <IconContainer>
        <Image src={social} alt="social-media" />
      </IconContainer>
      <FormContainer>
        <Form>
          <Title>Sign In</Title>
          <Textfield
            label="Email"
            name="email"
            onChange={(e) => setValue("email", e.target.value)}
            error={errors.email?.message}
            width="250"
            height="52"
          />
          <Textfield
            label="Password"
            name="password"
            onChange={(e) => setValue("password", e.target.value)}
            error={errors.password?.message}
            width="250"
            height="52"
          />
          <Container>
            <Text>Don't have account ?</Text>
            <BlueLink to="/register">Sign up</BlueLink>
          </Container>
          <Button
            width="250"
            height="52"
            font="16"
            onClick={handleSubmit(onSubmit)}
          >
            Sign In
          </Button>
        </Form>
      </FormContainer>
    </Wrapper>
  );
};

export default Login;
