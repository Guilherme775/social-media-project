import { useReducer, createContext, useContext } from "react";

type State = {
  dark: boolean;
}

type Functions = {
  setDark: () => void;
}

type Actions =
  | {
    type: 'SET_DARK';
    payload: boolean;
  };

const initialState = {
  dark: false,
};

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "SET_DARK":
      return {
        dark: action.payload,
      };

    default:
      return state;
  }
};

export const useTheme = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    actions: {
      setDark: () => {
        dispatch({
          type: 'SET_DARK',
          payload: true
        });
      }
    },
  };
};

export const ThemeContext = createContext<{ state: State, actions: Functions }>({
  state: initialState,
  actions: {
    setDark: () => { },
  },
});

export const useThemeContext = () => useContext(ThemeContext);
