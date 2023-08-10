import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "소개 및 가이드",
};

// this is server component. you could use `metadata` as well
const IntroductionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <title>Login to my app</title> */}
      {children}
    </div>
  );
};

export default IntroductionLayout;
