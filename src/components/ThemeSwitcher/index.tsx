import React from "react";
import { Wrapper } from "./styles";
import { SunIcon, MoonIcon } from "../Icons";
import { useThemeContext } from "../../hooks/useTheme";

export const ThemeSwitcher = () => {
  const { state, actions } = useThemeContext();

  return (
    <Wrapper>
      {state.dark ? (
        <SunIcon onClick={actions.setLight} />
      ) : (
        <MoonIcon onClick={actions.setDark} />
      )}
    </Wrapper>
  );
};

export default ThemeSwitcher;
