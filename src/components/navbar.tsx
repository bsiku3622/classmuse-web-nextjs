"use client";

import { useAuth } from "@/lib/contexts/useAuth";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaBuffer, FaTimes } from "react-icons/fa";
import { TfiSearch } from "react-icons/tfi";
import { PiBellLight } from "react-icons/pi";
import { AiFillCaretDown } from "react-icons/ai";
const DashboardNavbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const { signOut, loggedIn } = useAuth();

  return (
    //   navbar goes here
    <nav className="flex h-16 border-b border-gray-200 px-6 items-center">
      <div className="flex-none">
        <Link href="/" className="flex items-center text-gray-700">
          <FaBuffer className="w-6 h-6" />
          <span className="font-bold ps-6 pe-4 text-lg font-medium">
            클래스뮤즈
          </span>
        </Link>
      </div>
      <div className="flex-auto ms-6">
        <Link
          href="/dashboard/"
          className="px-6 text-gray-700 hover:text-gray-900"
        >
          홈
        </Link>
        <Link
          href="/dashboard/class"
          className="px-6 text-gray-700 hover:text-gray-900"
        >
          클래스
        </Link>
        <Link
          href="/dashboard/browse"
          className="px-6 text-gray-700 hover:text-gray-900"
        >
          탐색
        </Link>
        <Link
          href="/dashboard/message"
          className="px-6 text-gray-700 hover:text-gray-900"
        >
          메시지
        </Link>
      </div>
      <div className="flex-end flex items-center">
        <div className="flex items-center h-10 border-2 border-black-500 px-4 rounded-md me-4">
          <input
            type="text"
            placeholder="클래스뮤즈에서 검색"
            className="w-48"
          />
          <TfiSearch className="w-4 h-4" />
        </div>
        <PiBellLight className="w-6 h-6 me-4" />
        <button
          onClick={() => {}}
          className="ps-1 pe-2 h-11 border border-gray-300 bg-gray-100 rounded-full items-center justify-center flex"
        >
          <Image
            src="/test.jpg"
            alt="bsiku"
            width={36}
            height={36}
            className="block w-9 h-9 object-fit:cover rounded-full"
          ></Image>
          <AiFillCaretDown className="w-3.5 h-3.5 ms-2 text-gray-400"></AiFillCaretDown>
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
