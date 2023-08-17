"use client";

import { useAuth } from "@/lib/contexts/useAuth";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useMessage } from "@/lib/contexts/useMessage";
import DashboardNavbar from "./dashboardNavbar";
import PrimaryNavbar from "./primaryNavbar";
import SignedPrimaryNavbar from "./signedPrimaryNavbar";

const Navbar = () => {
  const pathname = usePathname();
  const { loggedIn, hasProfile, userLoading, preLoggedIn } = useAuth();
  const { handleMessage } = useMessage();
  const router = useRouter();

  if (!userLoading) {
    if (pathname.startsWith("/dashboard")) {
      if (!loggedIn) {
        router.replace("/");
        handleMessage?.({
          type: "error",
          message: "대쉬보드에 접속하려면 로그인하세요.",
        });
      } else if (preLoggedIn) {
        router.replace("/auth/signup/select_role");
        handleMessage?.({
          type: "default",
          message: "아직 계정에 프로필이 존재하지 않습니다.",
        });
        console.log("hi");
      } else {
        return <DashboardNavbar />;
      }
    } else if (
      pathname.startsWith("/auth") &&
      pathname != "/auth/signup/select_role"
    ) {
      if (loggedIn) {
        router.replace("/");
        handleMessage?.({
          type: "error",
          message: "이미 로그인 되었습니다.",
        });
      } else if (preLoggedIn) {
        router.replace("/auth/signup/select_role");
        handleMessage?.({
          type: "default",
          message: "아직 계정에 프로필이 존재하지 않습니다.",
        });
        console.log(pathname);
      } else {
        return null;
      }
    } else {
      if (loggedIn) {
        return <SignedPrimaryNavbar />;
      } else {
        return <PrimaryNavbar />;
      }
    }
  }
};

export default Navbar;
