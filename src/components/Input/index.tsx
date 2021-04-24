import styled from "styled-components";

type Props = {
  width: string;
  height: string;
  error?: boolean;
};

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
  error?: boolean;
};

const Label = styled.p<LabelProps>`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.error ? "#eb5757" : "#333237")};
  margin: 0 0 8px 0;
`;

type TextfieldProps = {
  width: string;
  height: string;
  error?: string;
  label?: string;
};

export const Textfield = ({ label, error, width, height }: TextfieldProps) => {
  return (
    <>
      {label && <Label error={!!error}>{label}</Label>}

      <Input width={width} height={height} error={!!error} />

      {error && <Error>{error}</Error>}
    </>
  );
};
