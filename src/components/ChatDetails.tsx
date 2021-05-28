import { MdClear } from "react-icons/md";

const ChatDetails = ({ setShowChatDetails }) => {
  return (
    <div className="flex flex-col w-2/3 h-full ml-auto space-y-3 overflow-y-scroll border-l border-gray-500">
      {/* //TODO fix the height */}
      <div className="flex items-center p-4 space-x-6 bg-gray-700 border shadow-md ">
        <MdClear
          size={20}
          //TODO   FIX THIS
          className="cursor-pointer"
          onClick={() => setShowChatDetails(false)}
        />
        <span className="text-lg">Chat Info</span>
      </div>
      <div className="p-5 text-center">
        <img
          src="https://cdn.dribbble.com/users/81997/avatars/small/6606012741df3f8cdbb2dfdf7bb52933.jpg?1603031532"
          className="object-contain mx-auto my-4 rounded-full w-36 h-36"
          alt=""
        />
        <span className="text-2xl ">Group 69</span>
      </div>
      <div className="flex flex-col p-5 space-y-1 bg-gray-900">
        <span className="text-green-500">Description</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
          quis?
        </span>
      </div>
      <div className="flex flex-col p-5 space-y-1 bg-gray-900">
        <span className="text-green-500">About & Phone Number </span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
          quis?
        </span>
        <span>893749392</span>
      </div>
      <div className="p-5 text-xl text-red-500 bg-gray-900">Block</div>
      <div className="p-5 text-xl text-red-500 bg-gray-900">Report</div>
      <div className="p-5 text-xl text-red-500 bg-gray-900">Delete</div>
    </div>
  );
};

export default ChatDetails;
