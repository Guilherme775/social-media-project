import { Wrapper, Title, Image } from "./styles";
import atauine from "../../assets/atauine.png";

export const Error = () => {
  return (
    <Wrapper>
      <Title>Not Found</Title>
      <Image src={atauine} alt="atauine" />
    </Wrapper>
  );
};

export default Error;
