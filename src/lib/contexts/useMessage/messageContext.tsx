"use client";

import { createContext, useState } from "react";

export type MessageType = "default" | "success" | "error";

export type MessageProps = {
  type: MessageType;
  message: string;
};

export type MessageContextProps = {
  messages: MessageProps[];
  handleMessage: (MessageProps: any) => void;
};

export const MessageContext = createContext<Partial<MessageContextProps>>({});

export const MessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messages, setMessages] = useState<MessageProps[]>([]);

  const handleMessage = (message: MessageProps) => {
    setMessages((prevMessages) => prevMessages.concat([message]));
    setTimeout(() => {
      setMessages((prevMessages) => prevMessages.slice(1));
    }, 5000);
  };

  return (
    <MessageContext.Provider
      value={{
        messages,
        handleMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
