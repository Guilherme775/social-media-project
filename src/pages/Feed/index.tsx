import React from "react";
import {
  Wrapper,
  InfosWrapper,
  Header,
  FeedWrapper,
  PeopleIcon,
  LogoutIcon,
  TextWrapper,
  Username,
  Email,
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
import { ThemeSwitcher, Button } from "../../components";
import { useThemeContext } from "../../hooks/useTheme";

export const Feed = () => {
  const { state } = useThemeContext();
  const posts = [0, 1];

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
        {posts.map((post) => (
          <PostWrapper key={post}>
            <PostHeader>
              <DarkPeopleIcon darkMode={state.dark} />
              <Name darkMode={state.dark}>Thomas Geci</Name>
            </PostHeader>
            <Post darkMode={state.dark}>
              lorem ipsum, ashdsauiash ashdsauiash ashdsauiashashdsauiash
              ashdsauiash ashdsauiash ashdsauiash.
            </Post>
          </PostWrapper>
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
      <ThemeSwitcher />
    </Wrapper>
  );
};

export default Feed;
