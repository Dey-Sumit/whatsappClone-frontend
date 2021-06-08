import React, { createContext, useContext, useReducer } from "react";

interface IState {
  showAuthUserDetails: boolean;
  showChatDetails: boolean;
  showNewChatTab: boolean;
  activeChat: string;
}
type ActionType =
  | "SHOW_AUTH_USER_DETAILS"
  | "SHOW_CHAT_DETAILS"
  | "SET_ACTIVE_CHAT"
  | "SHOW_NEW_CHAT_TAB";

interface IAction {
  type: ActionType;
  payload?: any;
}

// create two context; one for the state and one for the dispatch
const StateContext = createContext<IState>(undefined);

const DispatchContext = createContext<React.Dispatch<IAction>>(null);

const reducer = (state: IState, { type, payload }: IAction) => {
  switch (type) {
    case "SHOW_AUTH_USER_DETAILS":
      return {
        ...state,
        showAuthUserDetails: payload,
      };

    case "SHOW_CHAT_DETAILS":
      return {
        ...state,
        showChatDetails: payload,
      };
    case "SHOW_NEW_CHAT_TAB":
      return {
        ...state,
        showNewChatTab: payload,
      };
    case "SET_ACTIVE_CHAT":
      return {
        ...state,
        activeChat: payload,
      };

    default:
      throw new Error(`Unknown action type"${type}`);
  }
};

export const LayoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(
    reducer,
    {
      showChatDetails: false,
      showAuthUserDetails: false,
      showNewChatTab: false,
      activeChat: null,
    }
  );

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useLayoutState = () => useContext(StateContext);
export const useLayoutDispatch = () => useContext(DispatchContext);
