"use client";

import { useAuth } from "@/lib/contexts/useAuth";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaBuffer, FaTimes } from "react-icons/fa";
import { TfiSearch } from "react-icons/tfi";
import { PiBellLight } from "react-icons/pi";
import { AiFillCaretDown } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [menuToggle, setMenuToggle] = useState(false);
  const { signOut, loggedIn, userLoading } = useAuth();

  if (userLoading) return null;
  else {
    if (pathname.startsWith("/dashboard")) {
      return (
        //   navbar goes here
        <nav className="flex h-16 border-b border-gray-200 px-12 items-center">
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
              className="px-5 text-gray-700 hover:text-gray-900"
            >
              홈
            </Link>
            <Link
              href="/dashboard/class"
              className="px-5 text-gray-700 hover:text-gray-900"
            >
              클래스
            </Link>
            <Link
              href="/dashboard/browse"
              className="px-5 text-gray-700 hover:text-gray-900"
            >
              탐색
            </Link>
            <Link
              href="/dashboard/message"
              className="px-5 text-gray-700 hover:text-gray-900"
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
    } else {
      return (
        //   navbar goes here
        <nav className="flex h-16 border-b border-gray-200 px-12 items-center">
          {/* logo */}
          <div className="flex-auto">
            <Link href="/dashboard" className="flex items-center text-gray-700">
              <FaBuffer className="w-6 h-6" />
              <span className="font-bold ps-6 pe-4 text-lg font-medium">
                클래스뮤즈
              </span>
            </Link>
          </div>

          {/* primary nav */}
          <div className="flex-end ms-6">
            <Link
              href="/"
              className="py-5 px-3 text-gray-700 hover:text-gray-900"
            >
              홈
            </Link>
            <Link
              href="/introduction"
              className="py-5 px-5 text-gray-700 hover:text-gray-900"
            >
              소개 및 가이드
            </Link>
            <Link
              href="/feature"
              className="py-5 px-5 text-gray-700 hover:text-gray-900"
            >
              주요 기능
            </Link>
            <Link
              href="/blog"
              className="py-5 px-5 text-gray-700 hover:text-gray-900"
            >
              블로그
            </Link>
            <Link
              href="/price"
              className="py-5 px-5 text-gray-700 hover:text-gray-900"
            >
              요금제
            </Link>
          </div>
          {/* secondary nav */}
          {loggedIn ? (
            <div className="ms-8 flex-end flex items-center">
              <button
                className="h-10 px-3 flex items-center bg-white  hover:bg-gray-100 text-slate-900 hover:text-slate-700 rounded-md transition duration-300"
                onClick={signOut}
              >
                로그아웃
              </button>
            </div>
          ) : (
            <div className="ms-8 flex-end flex items-center">
              <Link
                href="/auth/login"
                className="h-10 px-3 flex items-center bg-white  hover:bg-gray-100 text-slate-900 hover:text-slate-700 rounded-md transition duration-300"
              >
                {/* <div className="h-9 px-2.5 rounded bg-white hover:bg-gray-100 text-slate-900 hover:text-slate-700 flex items-center"> */}
                로그인
                {/* </div> */}
              </Link>
              <Link
                href="/auth/signup"
                className="ms-2 h-10 px-3 flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-slate-200 hover:text-slate-900 rounded-md transition duration-300"
              >
                회원가입
              </Link>
            </div>
          )}

          {/* mobile menu */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuToggle(!menuToggle)}>
              {menuToggle ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* mobile menu items */}
          <div className={`${!menuToggle ? "hidden" : ""} md:hidden`}>
            <Link
              href="/"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
            ></Link>
            <Link
              href="/introduction"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
            >
              소개 및 가이드
            </Link>
            <Link
              href="/feature"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
            >
              주요 기능
            </Link>
            <Link
              href="/blog"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
            >
              블로그
            </Link>
            <Link
              href="/price"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
            >
              요금제
            </Link>

            {loggedIn ? (
              <button
                className="block py-2 px-4 text-sm hover:bg-gray-200"
                onClick={signOut}
              >
                로그아웃
              </button>
            ) : (
              <div>
                <Link
                  href="/auth"
                  className="block py-2 px-4 text-sm hover:bg-gray-200"
                >
                  로그인
                </Link>
              </div>
            )}
          </div>
        </nav>
      );
    }
  }
};

export default Navbar;
