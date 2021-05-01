import React from "react";
import styled, { keyframes } from "styled-components";
import { GrFormClose } from "react-icons/gr";
import { useAlertsContext } from "../../utils/useAlerts";

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

const PositionWrapper = styled.div`
  box-sizing: border-box;
  left: 50%;
  margin: auto;
  max-width: 755px;
  position: fixed;
  transform: translateX(-50%);
  width: 100%;
  z-index: 5;
  top: 112px;

  @media screen and (max-width: 768px) {
    top: 72px;
    max-width: 70%;
  }
`;

const AlertWrapper = styled.div<Props>`
  width: 100%;
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

export const Alert = () => {
  const { state: alerts, actions } = useAlertsContext();

  return (
    <PositionWrapper>
      {alerts.map((alert) => (
        <AlertWrapper key={alert.id} danger={alert.danger}>
          {alert.text}
          <CloseIcon onClick={() => actions.removeAlert(alert.id)} />
        </AlertWrapper>
      ))}
    </PositionWrapper>
  );
};

export const AlertStorybook = ({ children, danger }: AlertProps) => {
  return (
    <AlertWrapper danger={danger}>
      {children}
      <CloseIcon />
    </AlertWrapper>
  );
};
