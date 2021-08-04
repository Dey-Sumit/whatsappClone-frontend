import { Chat } from "libs/types";
import React, { createContext, useContext, useReducer } from "react";

interface IState {
  showAuthUserDetails: boolean;
  showChatDetails: boolean;
  showNewChatTab: boolean;
  activeChat: {
    _id: string;
    chatName: string;
  };
  chats: Chat[];
  notifications: Record<string, number>;
}
type ActionType =
  | "SHOW_AUTH_USER_DETAILS"
  | "SHOW_CHAT_DETAILS"
  | "SET_ACTIVE_CHAT"
  | "SET_CHATS"
  | "SET_NOTIFICATIONS"
  | "INCREMENT_NOTIFICATION"
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
    case "SET_CHATS":
      return {
        ...state,
        chats: payload,
      };
    case "SET_NOTIFICATIONS":
      return {
        ...state,
        notifications: payload,
      };
    case "INCREMENT_NOTIFICATION":
      const notis = state.notifications[payload];

      return {
        ...state,
        notifications: {
          ...state.notifications,
          [payload]: notis ? notis + 1 : 1,
        },
      };
      

    default:
      throw new Error(`Unknown action type"${type}`);
  }
};

export const LayoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(reducer, {
    showChatDetails: false,
    showAuthUserDetails: false,
    showNewChatTab: false,
    activeChat: null,
    chats: [],
    notifications: {},
  });

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useLayoutState = () => useContext(StateContext);
export const useLayoutDispatch = () => useContext(DispatchContext);
