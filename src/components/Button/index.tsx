import styled from "styled-components";

type Props = {
  width: string;
  height: string;
  font: string;
};

export const Button = styled.button<Props>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background-color: #00d4ff;
  border: 0;
  outline: none;
  border-radius: 25px;
  display: grid;
  place-items: center;
  color: #ffffff;
  font-family: "Oxygen";
  font-weight: 400;
  font-size: ${(props) => `${props.font}px`};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
    transition: 1s;
  }

  &:focus {
    opacity: 1;
    transition: 1s;
  }
`;
