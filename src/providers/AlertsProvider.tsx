import { FC } from "react";
import { useAlerts, AlertsContext } from "../utils/useAlerts";
import { Alert } from "../components";

export const AlertsProvider: FC = ({ children }) => {
  const alertsContextValues = useAlerts();

  return (
    <AlertsContext.Provider value={alertsContextValues}>
      <Alert />
      {children}
    </AlertsContext.Provider>
  );
};

export default AlertsProvider;
