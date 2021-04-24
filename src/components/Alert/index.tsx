import React from "react";
import styled, { keyframes } from "styled-components";
import { GrFormClose } from "react-icons/gr";

type Props = {
  danger?: boolean;
};

const appears = keyframes`
    from {
        opactity: 0;
    }

    to {
        opactity: 1;
    }
`;

const AlertWrapper = styled.div<Props>`
  width: 70%;
  background-color: ${(props) => (props.danger ? "#EB5757" : "#47C782")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  font-family: "Roboto";
  font-weight: 700;
  color: #ffffff;
  animation: ${appears} 2s ease-in-out;
`;

const CloseIcon = styled(GrFormClose)`
  cursor: pointer;

  > path {
    stroke: #ffffff;
  }
`;

type AlertProps = {
  children?: React.ReactNode;
  danger?: boolean;
};

export const Alert = ({ children, danger }: AlertProps) => {
  return (
    <AlertWrapper danger={danger}>
      {children}
      <CloseIcon />
    </AlertWrapper>
  );
};
