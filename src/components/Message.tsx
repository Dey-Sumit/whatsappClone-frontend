import { FunctionComponent } from "react";
import classnames from "classnames";

const Message: FunctionComponent<{
  text: string;
  name: string;
  showName: boolean;
  nameColor: string;
  userMessage?: boolean;
  //   time: Date;
}> = ({ name, showName, text, nameColor, userMessage }) => {
  return (
    <div
      className={classnames(
        "relative flex flex-col p-2 pr-24 m-2 bg-gray-900 rounded-md max-w-max",
        { "ml-auto bg-gray-700": userMessage }
      )}
    >
      {showName && <span className={nameColor}>{name}</span>}
      <span>{text}</span>
      <span className="absolute text-sm text-gray-300 right-2 bottom-2">
        09:45
      </span>
    </div>
  );
};

export default Message;
