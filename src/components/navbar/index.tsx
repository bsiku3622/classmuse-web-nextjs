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

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { userLoading, loggedIn } = useAuth();
  const { handleMessage } = useMessage();

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
