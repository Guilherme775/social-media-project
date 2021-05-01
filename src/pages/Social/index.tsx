import React from "react";
import { Wrapper } from "./styles";
import { Infos } from "./Infos";
import { Feed } from "./Feed";
import { ThemeSwitcher } from "../../components";

export const Social = () => {
  return (
    <Wrapper>
      <Infos />
      <Feed />
      <ThemeSwitcher />
    </Wrapper>
  );
};

export default Social;
