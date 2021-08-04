import { Chat } from "libs/types";
import React, { createContext, useContext, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import useSWR, { mutate } from "swr";
import { useAuthState } from "./auth.context";
import { useLayoutDispatch, useLayoutState } from "./layout.context";

const SocketContext = createContext<Socket>(null);
export const SocketProvider = ({ children }) => {
  const { user } = useAuthState();
  const dispatch = useLayoutDispatch();

      // const {notifications} =  useLayoutState()

  //TODO change context name, make single context

  const [socket, setSocket] = useState<Socket>(null);
  // console.log({ socket });

  useEffect(() => {
    if (user && socket && !socket.connected) {
      setSocket(socket.connect());
      return;
    }
    if (user && !socket) {
      const temp_socket = io(process.env.NEXT_PUBLIC_API_BASE_ENDPOINT, {
        query: {
          userId: user._id,
        },
      });
      setSocket(temp_socket);

      temp_socket.on("error", function (err) {
        console.log(err);
      });

      temp_socket.on("SEND_MESSAGE_TO_CLIENT", (data) => {
        console.log("SEND_MESSAGE_TO_CLIENT", data);

        mutate(
          `/api/chats/${data.chat}`,
          (previousData: Chat) => {
            const newData = {
              ...previousData,
              messages: [...previousData.messages, data],
            };

            return newData;
          },
          false
        );
      });

      temp_socket.on("GET_CHATS", (chats) => {
        // console.log({ chats });
        dispatch({
          type: "SET_CHATS",
          payload: chats,
        });
      });
      temp_socket.on("NOTIFY", (chatId) => {
        console.log("Notification From ", chatId);

        dispatch({
          type: "INCREMENT_NOTIFICATION",
          payload: chatId,
        });


      });
      temp_socket.on("GET_NOTIFICATIONS", (notifications) => {
        console.log("Notifications ", notifications);
        dispatch({
          type: "SET_NOTIFICATIONS",
          payload: notifications,
        });
      });
    }

    return () => {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    };
    //eslint-disable-next-line
  }, [user, socket]);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export const useSocket = () => useContext(SocketContext);
