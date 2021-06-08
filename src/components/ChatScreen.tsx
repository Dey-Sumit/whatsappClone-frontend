import { useLayoutDispatch, useLayoutState } from "src/context/layout.context";
import ChatHeader from "./ChatHeader";
import InputBar from "./InputBar";
import Message from "./Message";

const ChatScreen = () => {
  const dispatch = useLayoutDispatch();
  const { activeChat } = useLayoutState();

  return (
    <div className="relative flex flex-col w-full h-full">
      {!activeChat ? (
        <div className="mx-auto my-auto">
          <h1 className="text-4xl">Finish this project</h1>
        </div>
      ) : (
        <>
          <div
            onClick={() =>
              dispatch({
                type: "SHOW_CHAT_DETAILS",
                payload: true,
              })
            }
          >
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
        </>
      )}
    </div>
  );
};

export default ChatScreen;
