"use client";

import { useAuth } from "@/lib/contexts/useAuth";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useMessage } from "@/lib/contexts/useMessage";
import DashboardStudentNavbar from "./dashboardNavbar/dashboardStudentNavbar";
import PrimaryNavbar from "./primaryNavbar";
import SignedPrimaryNavbar from "./signedPrimaryNavbar";
import AuthNavbar from "./authNavbar";
import DashboardTeacherNavbar from "./dashboardNavbar/dashboardTeacherNavbar";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { userLoading, loggedIn, hasProfile, userProfile } = useAuth();
  const { handleMessage } = useMessage();

  useEffect(() => {
    if (!userLoading) {
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

      if (pathname == "/dashboard") {
        if (userProfile.is_teacher) {
          router.push("/dashboard/t/");
        } else if (!userProfile.is_teacher) {
          router.push("/dashboard/s/");
        } else {
          handleMessage?.({
            type: "error",
            message: "계정 데이터에 오류가 있습니다.",
          });
          router.push("/");
        }
      }
    }
  }, [userLoading, loggedIn, hasProfile, pathname]);

  if (!userLoading) {
    if (pathname.startsWith("/auth")) {
      return <AuthNavbar />;
    } else if (pathname.startsWith("/dashboard/s")) {
      return <DashboardStudentNavbar />;
    } else if (pathname.startsWith("/dashboard/t")) {
      return <DashboardTeacherNavbar />;
    } else {
      return loggedIn ? <SignedPrimaryNavbar /> : <PrimaryNavbar />;
    }
  }
};

export default Navbar;
