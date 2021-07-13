import { Message } from "libs/types";
import { useState } from "react";
import { MdMoreVert, MdSearch, MdSend } from "react-icons/md";
import { useAuthState } from "src/context/auth.context";
import { useSocket } from "src/context/socket.context";
import { mutate } from "swr";

const InputBar = ({ chatId,chatName }) => {
  const socket = useSocket();
  const { user } = useAuthState();
  const [text, setText] = useState("");
  const handleSubmit = () => {
    if (!text.length) return;

    socket.emit("SEND_MESSAGE_TO_SERVER", {
      sender: user._id,
      chatId,
      text,
      file:'',
      chatName
    });
    //execute the callback function to notify the client that the data is sent to server(helps to render different icons)
   
  };
  return (
    <div className="absolute bottom-0 left-0 flex items-center w-full h-16 p-3 space-x-4 bg-gray-700 shadow-md">
      <MdSearch size={24} />
      <MdMoreVert size={24} />
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className="flex-1 h-full px-5 bg-gray-600 rounded-full focus:outline-none"
        placeholder="Type a message "
        onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
      />
      <MdSend size={24} onClick={handleSubmit} />
    </div>
  );
};

export default InputBar;
