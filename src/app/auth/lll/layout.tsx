import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "로그인",
};

// this is server component. you could use `metadata` as well
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <title>Login to my app</title> */}
      {children}
    </div>
  );
};

export default AuthLayout;
