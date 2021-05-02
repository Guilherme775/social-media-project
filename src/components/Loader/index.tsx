import styled, { keyframes } from "styled-components";
import { RiLoader3Line } from "react-icons/ri";

const spin = keyframes`
    to {
      transform: rotate(-360deg);
    }
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: var(--white);
  display: grid;
  place-items: center;
`;

const LoaderWrapper = styled.div`
  width: 200px;
  display: grid;
  place-items: center;
  row-gap: 10px;
`;

const Icon = styled(RiLoader3Line)`
  width: 200px;
  height: 200px;
  animation: ${spin} 4s linear infinite;
`;

export const Loader = () => {
  return (
    <Wrapper>
      <LoaderWrapper>
        <Icon />
      </LoaderWrapper>
    </Wrapper>
  );
};

export default Loader;
