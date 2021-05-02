import { InputHTMLAttributes } from "react";
import styled from "styled-components";

type Props = {
  width: string;
  height: string;
  error?: boolean;
};

const Wrapper = styled.div``;

const Input = styled.input<Props>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border-radius: 8px;
  border: ${(props) => (props.error ? `1px solid #eb5757` : `1px solid #ccc`)};
  outline: none;
  font-family: "Oxygen";
  font-weight: 400;
  font-size: 16px;
  padding: 4px 12px;

  &:focus {
    border: 1px solid #333237;
  }
`;

const Error = styled.p`
  font-family: "Oxygen";
  font-weight: 300;
  font-size: 12px;
  color: #eb5757;
  margin: 4px 0 0 8px;
`;

type LabelProps = {
  darkMode?: boolean;
};

const Label = styled.p<LabelProps>`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.darkMode ? "#FFFFFF" : "#333237")};
  margin: 0 0 8px 0;
`;

interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  width: string;
  height: string;
  error?: string;
  label?: string;
  darkMode?: boolean;
}

export const Textfield = ({
  label,
  error,
  width,
  height,
  darkMode,
  ...rest
}: TextfieldProps) => {
  return (
    <Wrapper>
      {label && <Label darkMode={darkMode}>{label}</Label>}

      <Input {...rest} width={width} height={height} error={!!error} />

      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};
