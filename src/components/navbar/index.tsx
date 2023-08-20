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
  const { userLoading } = useAuth();
  const { handleMessage } = useMessage();

  if (userLoading) {
    return <PrimaryNavbar />;
  } else {
    if (pathname.startsWith("/auth")) {
      return <AuthNavbar />;
    } else {
      return <PrimaryNavbar />;
    }
  }
};

export default Navbar;
