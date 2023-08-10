import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "요금제",
};

// this is server component. you could use `metadata` as well
const PriceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <title>Login to my app</title> */}
      {children}
    </div>
  );
};

export default PriceLayout;
