import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Wrapper } from "./styles";
import { Infos } from "./Infos";
import { Feed } from "./Feed";
import { ThemeSwitcher } from "../../components";
import Cookie from "js-cookie";
import { useLazyLoadQuery } from "react-relay/hooks";
import UserQuery from "../../operations/UserQuery";
import { UserQuery as UserQueryTypes } from "../../operations/__generated__/UserQuery.graphql";
import TweetsQuery from "../../operations/TweetsQuery";
import { TweetsQuery as TweetsQueryTypes } from "../../operations/__generated__/TweetsQuery.graphql";

type Params = {
  id: string;
};

export const Social = () => {
  const history = useHistory();
  const token = Cookie.get("token");

  if (!token) {
    history.push("/");
  }

  const { id } = useParams<Params>();

  const { user } = useLazyLoadQuery<UserQueryTypes>(UserQuery, {
    id: id,
  });

  const data = useLazyLoadQuery<TweetsQueryTypes>(TweetsQuery, {
    first: 2,
  });

  return (
    <Wrapper>
      <Infos user={user} />
      <Feed data={data} />
      <ThemeSwitcher />
    </Wrapper>
  );
};

export default Social;
