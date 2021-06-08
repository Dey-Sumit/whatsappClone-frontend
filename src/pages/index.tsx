import ChatCard from "@components/ChatCard";
import UserHeader from "@components/UserHeader";

import ChatDetails from "@components/ChatDetails";
import { AnimatePresence, motion, Variant, Variants } from "framer-motion";

import { useLayoutDispatch, useLayoutState } from "src/context/layout.context";
import AuthUserDetails from "@components/AuthUserDetails";
import NewChatTab from "@components/NewChatTab";
import SearchInput from "@components/SearchInput";
import ChatScreen from "@components/ChatScreen";

export default function Home() {
  const { showChatDetails, activeChat, showAuthUserDetails, showNewChatTab } =
    useLayoutState();
  const dispatch = useLayoutDispatch();
  return (
    <div className="h-screen p-8 font-serif text-white bg-gray-900">
      <div className="relative flex h-full overflow-hidden bg-gray-800">
        <div className="flex flex-col w-1/3 h-full col-span-6 bg-gray-800 border-r border-gray-700 ">
          <UserHeader />
          <div className="p-3">
            <SearchInput />
          </div>

          <div className="flex-1 overflow-y-scroll">
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </div>
        </div>

        <AnimatePresence>
          {showAuthUserDetails && <AuthUserDetails />}
          {showNewChatTab && <NewChatTab />}
        </AnimatePresence>

        <div className="flex w-2/3 h-full ">
          <ChatScreen />

          <AnimatePresence>
            {showChatDetails && <ChatDetails />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
