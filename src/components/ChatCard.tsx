import { useLayoutDispatch } from "src/context/layout.context";

const ChatCard = () => {
  const dispatch = useLayoutDispatch();

  return (
    <div
      className="flex items-center w-full p-3 border-b border-gray-700 cursor-pointer hover:bg-gray-900"
      onClick={() =>
        dispatch({
          type: "SET_ACTIVE_CHAT",
          payload: "hahaha",
        })
      }
    >
      <img
        src="https://cdn.dribbble.com/users/81997/avatars/small/6606012741df3f8cdbb2dfdf7bb52933.jpg?1603031532"
        className="mr-4 rounded-full w-14 h-14"
        alt=""
      />
      <div className="flex flex-col">
        <span className="font-medium">{"Sumit"}</span>
        <span className="text-gray-300">What's up</span>
      </div>
      {/* // use justify self */}
      <div className="ml-auto text-gray-400">
        <span>13:31</span>
      </div>
    </div>
  );
};

export default ChatCard;
