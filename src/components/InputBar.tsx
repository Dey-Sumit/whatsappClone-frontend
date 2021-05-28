import { MdMoreVert, MdSearch, MdSend } from "react-icons/md";

const InputBar = () => {
  return (
    <div className="absolute bottom-0 left-0 flex items-center w-full h-16 p-3 space-x-4 bg-gray-700 shadow-md">
      <MdSearch size={24} />
      <MdMoreVert size={24} />
      <input
        type="text"
        className="flex-1 h-full px-5 bg-gray-600 rounded-full focus:outline-none"
        placeholder="Type a message "
      />
      <MdSend size={24} />
    </div>
  );
};

export default InputBar;
