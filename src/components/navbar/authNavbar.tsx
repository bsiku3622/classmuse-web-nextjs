"use client";

import { useAuth } from "@/lib/contexts/useAuth";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBuffer } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { useMessage } from "@/lib/contexts/useMessage";

const AuthNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { userLoading, loggedIn, hasProfile, user } = useAuth();
  const { handleMessage } = useMessage();

  useEffect(() => {
    console.log(loggedIn);
    if (loggedIn) {
      if (!hasProfile) {
        handleMessage?.({
          type: "default",
          message: "아직 프로필이 존재하지 않습니다.",
        });
        if (!pathname.startsWith("/auth/signup/new_profile")) {
          router.push("/auth/signup/new_profile/select_role");
        }
      } else {
        handleMessage?.({ type: "error", message: "이미 로그인되었습니다." });
        router.push("/");
      }
    }
  }, [userLoading, loggedIn, hasProfile]);
  return (
    <>
      <nav className="lg:flex hidden h-16 border-b border-gray-200 px-12 items-center">
        <div className="flex-none">
          <Link href="/" className="flex items-center text-gray-700">
            <FaBuffer className="w-6 h-6" />
            <span className="font-bold ps-6 pe-4 text-lg font-medium">
              클래스뮤즈
            </span>
          </Link>
        </div>
      </nav>
      {/* mobile */}
      <nav
        className={`lg:hidden flex h-16 border-b border-gray-200 px-4 items-center`}
      >
        {/* logo */}
        <div className="flex-auto">
          <Link href="/" className="flex items-center text-gray-700">
            <FaBuffer className="w-6 h-6" />
            <span className="font-bold ps-4 pe-4 text-lg font-medium">
              클래스뮤즈
            </span>
          </Link>
        </div>
      </nav>
      {/* mobile menu */}
    </>
  );
};

export default AuthNavbar;
