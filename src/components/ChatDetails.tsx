import { motion, Variants } from "framer-motion";
import { MdClear } from "react-icons/md";
import { useLayoutDispatch } from "src/context/layout.context";
const slideInRight: Variants = {
  hidden: {
    width: "0%",
    // x: "100%",
  },
  show: {
    width: "66.666667%",
    // x: "0%",
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
  exit: {
    width: "0%",
    // x: "100%",
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
      delay: 0.2,
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
const ChatDetails = () => {
  const dispatch = useLayoutDispatch();

  return (
    <motion.div
      className="flex flex-col w-2/3 h-full ml-auto space-y-3 overflow-y-scroll border-l border-gray-500"
      variants={slideInRight}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {/* //TODO fix the height */}
      <div className="flex items-center h-20 space-x-6 bg-gray-700 shadow-md p-7">
        <MdClear
          size={20}
          //TODO   FIX THIS
          className="cursor-pointer"
          onClick={() =>
            dispatch({
              type: "SHOW_CHAT_DETAILS",
              payload: false,
            })
          }
        />
        <span className="text-lg">Chat Info</span>
      </div>
      <motion.div
        variants={slideInBottom}
        exit="exit"
        initial="hidden"
        animate="show"
      >
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
      </motion.div>
    </motion.div>
  );
};

export default ChatDetails;
