import { MdKeyboardArrowRight, MdMessage, MdMoreVert } from "react-icons/md";
import { GrStatusCriticalSmall } from "react-icons/gr";
import { useLayoutDispatch } from "src/context/layout.context";
import { useAuthState } from "src/context/auth.context";
import useSWR from "swr";
import axios from "axios";
import { useEffect } from "react";

const UserHeader = () => {
  const dispatch = useLayoutDispatch();
  const { user } = useAuthState();
  // const { data, mutate } = useSWR("api/users/60ea7ffea8810838600dedaf", {

  // });

  return (
    <div className="flex items-center justify-between h-20 p-4 bg-gray-700 shadow-md">
      <img
        src={user?.profilePicture}
        className="w-12 h-12 rounded-full cursor-pointer"
        alt=""
        onClick={() =>
          dispatch({
            type: "SHOW_AUTH_USER_DETAILS",
            payload: true,
          })
        }
      />
      <div className="flex space-x-6">
        <GrStatusCriticalSmall size={24} />
        <MdMessage
          size={24}
          onClick={() =>
            dispatch({
              type: "SHOW_NEW_CHAT_TAB",
              payload: true,
            })
          }
          className="cursor-pointer"
        />
        <MdMoreVert size={24} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default UserHeader;
