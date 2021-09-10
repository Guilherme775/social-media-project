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
import { useFragment } from "react-relay/hooks";
import { TweetsQueryResponse } from "../../../operations/__generated__/TweetsQuery.graphql";
import TweetsFragment from "../../../operations/TweetsFragment";
import { TweetsFragment_Posts$key } from "../../../operations/__generated__/TweetsFragment_Posts.graphql";

type Props = {
  node: TweetsFragment_Posts$key;
};

// TODO: made pagination here
const Posts = ({ node }: Props) => {
  const { id, author, description } = useFragment<TweetsFragment_Posts$key>(
    TweetsFragment,
    node
  );

  return (
    <PostWrapper key={id}>
      <PostHeader>
        <DarkPeopleIcon />
        <Name>{author?.name}</Name>
      </PostHeader>
      <Post>{description}</Post>
    </PostWrapper>
  );
};

type QueryResponse = {
  data: TweetsQueryResponse;
};

export const Feed = ({ data }: QueryResponse) => {
  return (
    <FeedWrapper>
      <Title>Make Post</Title>
      <InputWrapper>
        <PostIcon />
        <Input placeholder="what’s up?" />
      </InputWrapper>
      <SubmitWrapper>
        <Button width="120" height="32" font="16">
          Submit
        </Button>
      </SubmitWrapper>
      <Title>Posts</Title>
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
