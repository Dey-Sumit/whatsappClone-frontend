import { MdMessage, MdMoreVert, MdSearch } from "react-icons/md";
import { GrStatusCriticalSmall } from "react-icons/gr";

const ChatHeader = () => {
  return (
    <div className="flex items-center p-4 bg-gray-700 shadow-md cursor-pointer header">
      <img
        src="https://cdn.dribbble.com/users/81997/avatars/small/6606012741df3f8cdbb2dfdf7bb52933.jpg?1603031532"
        className="w-12 h-12 mr-4 rounded-full"
        alt=""
      />
      <div className="flex flex-col">
        <span className="font-medium">Group 69</span>
        <span className="text-gray-300">Sam,Sumax,Sumit</span>
      </div>
      <div className="flex ml-auto space-x-4">
        <MdSearch size={24} />
        <MdMoreVert size={24} />
      </div>
    </div>
  );
};

export default ChatHeader;
