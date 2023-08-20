import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "회원가입",
};

// this is server component. you could use `metadata` as well
const SignupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <title>Login to my app</title> */}
      {children}
    </div>
  );
};

export default SignupLayout;
