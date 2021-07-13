import { Chat } from "libs/types";
import Image from "next/image";
import { FunctionComponent } from "react";
import { useLayoutDispatch } from "src/context/layout.context";
import dayjs from "dayjs";
const ChatCard: FunctionComponent<{ chat: Chat }> = ({
  chat: {
    latestMessage: { text, createdAt },
    chatName,
    groupIcon,
    _id,
  },
}) => {
  //!idea get only   { latestMessage, chatName, groupIcon } these props from backend for chat all , if the chat is selected then get all chats, for example we don't need to all the messages of a inactive chats, if the chat is active, we will fetch the chats in chat screen

  const dispatch = useLayoutDispatch();

  return (
    <div
      className="flex items-center w-full p-3 border-b border-gray-700 cursor-pointer hover:bg-gray-900"
      onClick={() =>
        dispatch({
          type: "SET_ACTIVE_CHAT",
          payload: { chatName, _id },
        })
      }
    >
      {/* //! need to render conditionally for one to one chat */}
      {/* <Image src={groupIcon} height={50} width={50} className="rounded-full " alt="" /> */}
      <div className="flex flex-col">
        <span className="font-medium">{chatName}</span>
        <span className="text-gray-300">{text}</span>
      </div>
      {/* // use justify self */}
      <div className="ml-auto text-gray-400">
        <span>{dayjs(createdAt).format("hh:mm")}</span>
      </div>
    </div>
  );
};

export default ChatCard;
