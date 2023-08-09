import { useContext } from "react";
import { MessageContext } from "./messageContext";

export const useMessage = () => {
  const context = useContext(MessageContext);

  if (context === undefined) {
    throw new Error("useMessage must be used within a MessageContext.Provider");
  }

  return context;
};
