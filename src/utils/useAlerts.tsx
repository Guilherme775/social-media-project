import { createContext, useContext, useReducer } from "react";

type Alert = {
  id: number;
  text: string;
  danger: boolean;
};

type InitialState = Alert[];

type Actions = {
  addSuccessAlert: (text: string) => void;
  addDangerAlert: (text: string) => void;
  removeAlert: (id: number) => void;
};

type ReducerActionTypes =
  | {
      type: "ADD_ALERT";
      payload: Alert;
    }
  | {
      type: "REMOVE_ALERT";
      payload: number;
    };

const initialState: InitialState = [];

const reducer = (
  state: InitialState = initialState,
  action: ReducerActionTypes
) => {
  switch (action.type) {
    case "ADD_ALERT": {
      return [...state, action.payload];
    }
    case "REMOVE_ALERT": {
      return state.filter((alert) => alert.id !== action.payload);
    }
    default: {
      return state;
    }
  }
};

export const useAlerts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    actions: {
      addSuccessAlert: (text: string) => {
        const id = Date.now();
        dispatch({
          type: "ADD_ALERT",
          payload: {
            id,
            text,
            danger: false,
          },
        });
        setTimeout(() => dispatch({ type: "REMOVE_ALERT", payload: id }), 5000);
      },
      addDangerAlert: (text: string) => {
        const id = Date.now();
        dispatch({
          type: "ADD_ALERT",
          payload: {
            id: Date.now(),
            text,
            danger: true,
          },
        });
        setTimeout(() => dispatch({ type: "REMOVE_ALERT", payload: id }), 5000);
      },
      removeAlert: (id: number) => {
        dispatch({ type: "REMOVE_ALERT", payload: id });
      },
    },
  };
};

export const AlertsContext = createContext<{
  state: InitialState;
  actions: Actions;
}>({
  state: initialState,
  actions: {
    addSuccessAlert: (text: string) => {},
    addDangerAlert: (text: string) => {},
    removeAlert: (id: number) => {},
  },
});

export const useAlertsContext = () => useContext(AlertsContext);
