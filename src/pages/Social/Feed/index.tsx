import React from "react";
import {
  FeedWrapper,
  Title,
  InputWrapper,
  PostIcon,
  Input,
  SubmitWrapper,
  PostWrapper,
  PostHeader,
  DarkPeopleIcon,
  Name,
  Post,
  ButtonsWrapper,
} from "./styles";
import { Button } from "../../../components";
import { useThemeContext } from "../../../hooks/useTheme";
import { useFragment } from "react-relay/hooks";
import { TweetsQueryResponse } from "../../../operations/__generated__/TweetsQuery.graphql";
import TweetsFragment from "../../../operations/TweetsFragment";
import { TweetsFragment_Posts$key } from "../../../operations/__generated__/TweetsFragment_Posts.graphql";

type Props = {
  node: TweetsFragment_Posts$key;
};

const Posts = ({ node }: Props) => {
  const { state } = useThemeContext();

  const { id, author, description } = useFragment<TweetsFragment_Posts$key>(
    TweetsFragment,
    node
  );

  return (
    <PostWrapper key={id}>
      <PostHeader>
        <DarkPeopleIcon darkMode={state.dark} />
        <Name darkMode={state.dark}>{author?.name}</Name>
      </PostHeader>
      <Post darkMode={state.dark}>{description}</Post>
    </PostWrapper>
  );
};

type QueryResponse = {
  data: TweetsQueryResponse;
};

export const Feed = ({ data }: QueryResponse) => {
  const { state } = useThemeContext();

  return (
    <FeedWrapper darkMode={state.dark}>
      <Title darkMode={state.dark}>Make Post</Title>
      <InputWrapper>
        <PostIcon darkMode={state.dark} />
        <Input darkMode={state.dark} placeholder="what’s up , Sara ?" />
      </InputWrapper>
      <SubmitWrapper>
        <Button width="120" height="32" font="16">
          Submit
        </Button>
      </SubmitWrapper>
      <Title darkMode={state.dark}>Posts</Title>
      {data.tweets.edges.map((post) => (
        <Posts node={post.node} />
      ))}
      <ButtonsWrapper>
        <Button width="80" height="32" font="16">
          Prev
        </Button>
        <Button width="80" height="32" font="16">
          Next
        </Button>
      </ButtonsWrapper>
    </FeedWrapper>
  );
};

export default Feed;
