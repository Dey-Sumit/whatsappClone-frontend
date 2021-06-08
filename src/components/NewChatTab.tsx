import { BiArrowBack } from "react-icons/bi";
import { AnimatePresence, motion, Variant, Variants } from "framer-motion";
import { useLayoutDispatch } from "src/context/layout.context";
import { MdGroupAdd, MdSearch } from "react-icons/md";
import SearchInput from "./SearchInput";
import ChatCard from "./ChatCard";
const slideInRight: Variants = {
  hidden: {
    // width: "0%"
    x: "-100%",
  },
  show: {
    // width: "33.33%",
    x: "0%",
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
  exit: {
    x: "-100%",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const slideInBottom: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    y: 0,
    opacity: 1,
    // x: "0%",
    transition: {
      delay: 0.3,
      ease: "easeOut",
      duration: 0.5,
    },
  },
  exit: {
    // y: -50,
    opacity: 0,
    // x: "0%",
    transition: {
      delay: 0,
      ease: "easeOut",
      duration: 0.1,
    },
  },
};
const NewChatTab = () => {
  const dispatch = useLayoutDispatch();

  return (
    <motion.div
      variants={slideInRight}
      initial="hidden"
      animate="show"
      exit="exit"
      className="absolute top-0 left-0 flex flex-col w-1/3 h-full col-span-6 bg-gray-800 border-r border-gray-400 "
    >
      {/* header start */}
      <div className="flex items-center h-20 p-6 space-x-6 text-xl bg-gray-700 shadow-md header">
        <BiArrowBack
          className="cursor-pointer "
          onClick={() =>
            dispatch({
              type: "SHOW_NEW_CHAT_TAB",
              payload: false,
            })
          }
        />
        <span>New Chat</span>
      </div>
      {/* header end */}
      <div className="flex flex-col items-center flex-1 h-full p-2">
        <SearchInput />
        {/* new group */}
        <div className="flex items-center w-full p-2 space-x-3 border-b border-gray-600 cursor-pointer hover:bg-gray-700 ">
          <MdGroupAdd className="p-3 bg-green-500 rounded-full w-14 h-14" />
          <span className="font-semibold">New Group</span>
        </div>

        {/* new group */}
        <div className="flex-1 w-full overflow-y-scroll">
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
          <ChatCard />
          <ChatCard />
          <ChatCard />
        </div>
      </div>
    </motion.div>
  );
};

export default NewChatTab;
