import { BiArrowBack } from "react-icons/bi";
import { AnimatePresence, motion, Variant, Variants } from "framer-motion";
import { useLayoutDispatch } from "src/context/layout.context";
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
const AuthUserDetails = () => {
  const dispatch = useLayoutDispatch();

  return (
    <motion.div
      variants={slideInRight}
      initial="hidden"
      animate="show"
      exit="exit"
      className="absolute top-0 left-0 flex flex-col w-1/3 h-full col-span-6 bg-gray-800 border-r border-gray-700 "
    >
      {/* header start */}
      <div className="flex items-center h-20 p-6 space-x-6 text-xl bg-gray-700 shadow-md header">
        <BiArrowBack
          className="cursor-pointer "
          onClick={() =>
            dispatch({
              type: "SHOW_AUTH_USER_DETAILS",
              payload: false,
            })
          }
        />
        <span>Profile</span>
      </div>
      {/* header end */}
      <div className="flex flex-col items-center flex-1 p-8 space-y-12 overflow-y-scroll">
        <motion.img
          src="https://cdn.dribbble.com/users/81997/avatars/small/6606012741df3f8cdbb2dfdf7bb52933.jpg?1603031532"
          alt=""
          className="rounded-full w-44 h-44"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              delay: 0.2,
              ease: "easeOut",
              duration: 0.3,
            },
          }}
        />
        <motion.div
          variants={slideInBottom}
          exit="exit"
          initial="hidden"
          animate="show"
        >
          <div className="flex flex-col mb-8 space-y-2">
            <span className="text-sm text-green-500"> Your Name</span>
            <span className="text-xl">Sumit</span>
            <p className="text-sm">This is not your username or pin</p>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-sm text-green-500"> Your About</span>
            <span className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AuthUserDetails;
