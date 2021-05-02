import React from "react";
import { useHistory } from "react-router-dom";
import {
  InfosWrapper,
  Header,
  PeopleIcon,
  LogoutIcon,
  TextWrapper,
  Username,
  Email,
} from "./styles";
import Cookie from "js-cookie";
import { useFragment } from "react-relay/hooks";
import UserFragment from "../../../operations/UserFragment";
import { UserFragment_Infos$key } from "../../../operations/__generated__/UserFragment_Infos.graphql";

type Props = {
  user: UserFragment_Infos$key;
};

export const Infos = ({ user }: Props) => {
  const data = useFragment<UserFragment_Infos$key>(UserFragment, user);
  const history = useHistory();

  const logout = () => {
    Cookie.set("token", "");
    history.push("/");
  };

  return (
    <InfosWrapper>
      <Header>
        <PeopleIcon />
        <TextWrapper>
          <Username>{data.name}</Username>
          <Email>{data.email}</Email>
        </TextWrapper>
      </Header>
      <LogoutIcon onClick={logout} />
    </InfosWrapper>
  );
};

export default Infos;
