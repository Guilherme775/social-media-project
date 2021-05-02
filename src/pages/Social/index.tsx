import React from "react";
import { useHistory } from "react-router-dom";
import { Wrapper } from "./styles";
import { Infos } from "./Infos";
import { Feed } from "./Feed";
import { ThemeSwitcher } from "../../components";
import Cookie from "js-cookie";

export const Social = () => {
  const history = useHistory();
  const token = Cookie.get("token");

  if (!token) {
    history.push("/");
  }

  return (
    <Wrapper>
      <Infos />
      <Feed />
      <ThemeSwitcher />
    </Wrapper>
  );
};

export default Social;
