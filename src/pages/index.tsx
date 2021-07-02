import ChatCard from "@components/ChatCard";
import UserHeader from "@components/UserHeader";

import ChatDetails from "@components/ChatDetails";
import { AnimatePresence, motion, Variant, Variants } from "framer-motion";

import { useLayoutDispatch, useLayoutState } from "src/context/layout.context";
import AuthUserDetails from "@components/AuthUserDetails";
import NewChatTab from "@components/NewChatTab";
import SearchInput from "@components/SearchInput";
import ChatScreen from "@components/ChatScreen";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import axios from "axios";
import useSWR, { mutate } from "swr";
import { useEffect } from "react";

const Home: NextPage<{ initialUsersData: [] }> = ({ initialUsersData }) => {
  const { data: users, error } = useSWR("api/users", {
    initialData: initialUsersData,
  }); // TODO check if it is working or not
  // useEffect(() => {
  //    use swr with initial data is not getting fired when the component did mount because of the initial data :(
  //      but it is getting called all the other times
  //      so if you want to call the explicitly when the component did mount , use useEffect() and call mutate
  //   mutate();
  // }, []);
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
            {/* {users.map((user) => (
              <ChatCard data={user} />
            ))} */}
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
};

export default Home;
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   let users;
//   try {
//     const { data } = await axios.get(
//       `${process.env.API_BASE_ENDPOINT}api/users`
//     );
//     users = data;
//   } catch (error) {
//     console.log("Error", error.response?.data);
//   }

//   return {
//     props: {
//       initialUsersData: users,
//     },
//   };
// };
