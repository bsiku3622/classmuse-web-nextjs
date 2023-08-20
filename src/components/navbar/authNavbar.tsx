"use client";

import { useAuth } from "@/lib/contexts/useAuth";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaBuffer, FaTimes } from "react-icons/fa";
import { TfiSearch } from "react-icons/tfi";
import { PiBellLight, PiCaretRightLight } from "react-icons/pi";
import { AiFillCaretDown } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";
import { useMessage } from "@/lib/contexts/useMessage";

const AuthNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuToggle, setMenuToggle] = useState(false);
  const { userLoading, loggedIn, hasProfile } = useAuth();
  const { handleMessage } = useMessage();

  if (loggedIn) {
    if (!hasProfile && !pathname.startsWith("/auth/signup/new_profile")) {
      handleMessage?.({
        type: "default",
        message: "아직 계정이 존재하지 않습니다.",
      });
      router.push("/");
    } else {
      handleMessage?.({ type: "error", message: "이미 로그인되었습니다." });
      router.push("/");
    }
  } else {
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
  }
};

export default AuthNavbar;
