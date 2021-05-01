import React from "react";
import {
  InfosWrapper,
  Header,
  PeopleIcon,
  LogoutIcon,
  TextWrapper,
  Username,
  Email,
} from "./styles";

export const Infos = () => {
  return (
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
  );
};

export default Infos;
