"use client";

import { useMessage } from "../lib/contexts/useMessage";
import classNames from "classnames";
import { PiWarningCircleBold } from "react-icons/pi";

const MessageContainer = () => {
  const { messages } = useMessage();
  return (
    <div className="absolute right-4 bottom-4 space-y-2 flex flex-col-reverse items-end lg:max-w-sm max-w-xs">
      {messages &&
        messages.map((message, index) => (
          <div
            key={index}
            className={classNames(
              "flex space-x-2 shadow-md rounded px-4 py-3 text-shadow transition-all mt-2 w-fit right-0 break-all",
              message.type === "error"
                ? "bg-red-500 text-white"
                : message.type === "success"
                ? "bg-green-300 text-gray-800"
                : "bg-gray-100 text-gray-800"
            )}
          >
            <PiWarningCircleBold className="w-6 h-6" />
            <span className="font-medium">{message.message}</span>
          </div>
        ))}
    </div>
  );
};

export default MessageContainer;
