"use client";

import { useAuth } from "@/lib/contexts/useAuth";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useMessage } from "@/lib/contexts/useMessage";
import DashboardNavbar from "./dashboardNavbar";
import PrimaryNavbar from "./primaryNavbar";
import SignedPrimaryNavbar from "./signedPrimaryNavbar";
import AuthNavbar from "./authNavbar";
import { log } from "console";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { userLoading, loggedIn, hasProfile } = useAuth();
  const { handleMessage } = useMessage();

  useEffect(() => {
    if (
      loggedIn &&
      !hasProfile &&
      !pathname.startsWith("/auth/signup/new_profile")
    ) {
      handleMessage?.({
        type: "default",
        message: "아직 프로필이 존재하지 않습니다.",
      });
      router.push("/auth/signup/new_profile/select_role");
    }
  }, [userLoading, loggedIn, hasProfile]);

  if (!userLoading) {
    if (pathname.startsWith("/auth")) {
      return <AuthNavbar />;
    } else if (pathname.startsWith("/dashboard")) {
      return <DashboardNavbar />;
    } else {
      return loggedIn ? <SignedPrimaryNavbar /> : <PrimaryNavbar />;
    }
  }
};

export default Navbar;
