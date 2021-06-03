import { MdMessage, MdMoreVert } from "react-icons/md";
import { GrStatusCriticalSmall } from "react-icons/gr";
import { useLayoutDispatch } from "src/context/layout.context";

const UserHeader = () => {
  const dispatch = useLayoutDispatch();

  return (
    <div className="flex items-center justify-between h-20 p-4 bg-gray-700 shadow-md">
      <img
        src="https://cdn.dribbble.com/users/81997/avatars/small/6606012741df3f8cdbb2dfdf7bb52933.jpg?1603031532"
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
        <MdMessage size={24} />
        <MdMoreVert size={24} />
      </div>
    </div>
  );
};

export default UserHeader;
