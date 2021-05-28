import { MdMessage, MdMoreVert } from "react-icons/md";
import { GrStatusCriticalSmall } from "react-icons/gr";
import ChatCard from "@components/ChatCard";

export default function Home() {
  return (
    <div className="h-screen p-8 font-serif text-white bg-gray-900">
      <div className="grid h-full grid-cols-6 bg-gray-800 rounded-md">
        <div className="col-span-6 border border-r border-gray-400 border-red-500 lg:col-span-2">
          {/* header start*/}
          <div className="flex items-center justify-between p-4 bg-gray-700 shadow-md header">
            <img
              src="https://cdn.dribbble.com/users/81997/avatars/small/6606012741df3f8cdbb2dfdf7bb52933.jpg?1603031532"
              className="w-12 h-12 rounded-full"
              alt=""
            />
            <div className="flex space-x-6">
              <GrStatusCriticalSmall size={24} />
              <MdMessage size={24} />
              <MdMoreVert size={24} />
            </div>
          </div>
          {/* header end*/}
          <div className="h-full border border-blue-600 ">
            <ChatCard />
            <ChatCard />
          </div>
        </div>
        <div className="relative h-full cols-span-6 lg:col-span-4">
          <div className="flex items-center justify-between w-full h-20 p-4 bg-gray-700 shadow-md"></div>
          chat
          <div className="absolute bottom-0 left-0 flex items-center justify-between w-full h-16 p-4 bg-gray-700 shadow-md"></div>
        </div>
      </div>
    </div>
  );
}
