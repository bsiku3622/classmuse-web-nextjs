import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "학생 계정 만들기",
};

// this is server component. you could use `metadata` as well
const SignupNewAccountStudentLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      {/* <title>Login to my app</title> */}
      {children}
    </div>
  );
};

export default SignupNewAccountStudentLayout;
