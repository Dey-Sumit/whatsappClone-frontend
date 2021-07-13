import { FunctionComponent } from "react";
import classnames from "classnames";
import { Message as IMessage } from "libs/types";
import { useAuthState } from "src/context/auth.context";
// text: string;
//   name: string;
//   showName: boolean;
//   nameColor: string;
//   userMessage?: boolean;
const Message: FunctionComponent<{
  message: IMessage;

  //   time: Date;
}> = ({
  message: {
    _id: messageId,
    text,
    media,
    sender: { username, _id: senderId },
    createdAt,
  },
}) => {
  const {
    user: { _id: authUserId },
  } = useAuthState();
  const showName = authUserId !== senderId;

  //TODO nameColor ?🙄 how to add this feature, different color for different chats

  return (
    <div
      className={classnames(
        "relative flex flex-col p-2 pr-24 m-2 bg-gray-900 rounded-md max-w-max",
        { "ml-auto bg-gray-700": authUserId == senderId }
      )}
    >
      {showName && <span>{username}</span>}
      <span>{text}</span>
      <span className="absolute text-sm text-gray-300 right-2 bottom-2">09:45</span>
    </div>
  );
};

export default Message;
