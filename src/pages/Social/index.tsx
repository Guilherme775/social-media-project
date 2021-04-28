import React from "react";
import {
  Wrapper,
  InfosWrapper,
  Header,
  PeopleIcon,
  LogoutIcon,
  TextWrapper,
  Username,
  Email,
} from "./styles";
import { Feed } from "./Feed";
import { ThemeSwitcher } from "../../components";

export const Social = () => {
  return (
    <Wrapper>
      <InfosWrapper>
        <Header>
          <PeopleIcon />
          <TextWrapper>
            <Username>Sara Brava</Username>
            <Email>email@email.com</Email>
          </TextWrapper>
        </Header>
        <LogoutIcon />
      </InfosWrapper>
      <Feed />
      <ThemeSwitcher />
    </Wrapper>
  );
};

export default Social;
