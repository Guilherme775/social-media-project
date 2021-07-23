import React from "react";
import { Wrapper } from "./styles";
import { SunIcon, MoonIcon } from "../Icons";

type Props = {
  theme: boolean;
  action: () => void;
};

export const ThemeSwitcher = ({ theme, action }: Props) => {
  return (
    <Wrapper>
      {theme ? <SunIcon onClick={action} /> : <MoonIcon onClick={action} />}
    </Wrapper>
  );
};

export default ThemeSwitcher;
