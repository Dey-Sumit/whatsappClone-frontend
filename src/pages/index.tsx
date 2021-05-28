import ChatCard from "@components/ChatCard";
import UserHeader from "@components/UserHeader";
import ChatHeader from "@components/ChatHeader";
import InputBar from "@components/InputBar";
import Message from "@components/Message";
import ChatDetails from "@components/ChatDetails";
import { useState } from "react";

export default function Home() {
  const [showChatDetails, setShowChatDetails] = useState(false);
  return (
    <div className="h-screen p-8 font-serif text-white bg-gray-900">
      <div className="flex h-full bg-gray-800">
        <div className="flex flex-col w-1/3 h-full col-span-6 bg-gray-800 border-r border-gray-700 ">
          <UserHeader />
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
          </div>
        </div>

        <div className="flex w-2/3 h-full ">
          <div className="relative flex flex-col w-full h-full">
            <div onClick={() => setShowChatDetails(true)}>
              <ChatHeader />
            </div>

            <div className="flex-1 p-5 pb-24 overflow-y-scroll messageWrapper">
              <Message
                name="Ramos"
                text="I am a message"
                showName={true}
                nameColor="text-red-500"
              />
              <Message
                name="Ramos"
                text="I am a message"
                showName={true}
                nameColor="text-red-500"
              />
              <Message
                name="Ramos"
                text="I am a message"
                showName={false}
                nameColor="text-red-500"
              />
              <Message
                name="Ramos"
                text="I am a message"
                showName={false}
                nameColor="text-red-500"
              />
              <Message
                name="Ramos"
                text="I am a message"
                showName={false}
                nameColor="text-red-500"
              />
              <Message
                name="Ramos"
                text="I am a message"
                showName={false}
                nameColor="text-red-500"
              />

              <Message
                name="Ramos"
                text="I am a message"
                showName={false}
                nameColor="text-red-500"
              />
              <Message
                name="Zidane"
                text="I am a message"
                showName={true}
                nameColor="text-yellow-500"
              />
              <Message
                name="Zidane"
                text="I am a message  am a message"
                showName={false}
                nameColor="text-red-500"
              />
              <Message
                name="User"
                text="This message is from user"
                showName={false}
                userMessage
                nameColor="text-red-500"
              />
              <Message
                name="Ramos"
                text="I am a message"
                showName
                nameColor="text-red-500"
              />
              <Message
                name="Ramos"
                text="I am a message"
                showName={false}
                nameColor="text-red-500"
              />
              <Message
                name="Ramos"
                text="I am a message"
                showName={false}
                nameColor="text-red-500"
              />
            </div>

            <InputBar />
          </div>
          {showChatDetails && (
            <ChatDetails setShowChatDetails={setShowChatDetails} />
          )}
        </div>
      </div>
    </div>
  );
}
