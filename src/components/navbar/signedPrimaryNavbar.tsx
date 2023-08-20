"use client";

import { useAuth } from "@/lib/contexts/useAuth";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaBuffer, FaTimes } from "react-icons/fa";
import { PiCaretRightLight } from "react-icons/pi";
import { AiFillCaretDown } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const SignedPrimaryNavbar = () => {
  const pathname = usePathname();
  const [menuToggle, setMenuToggle] = useState(false);
  const { signOut, userProfile } = useAuth();
  const router = useRouter();

  return (
    //   navbar goes here
    <>
      <nav
        className={`lg:flex hidden h-16 border-b border-gray-200 px-12 items-center`}
      >
        {/* logo */}
        <div className="flex-auto">
          <Link href="/" className="flex items-center text-gray-700">
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
            className={`px-5 ${
              pathname == "/" ? "text-gray-700" : "text-gray-400"
            } hover:text-gray-700`}
          >
            홈
          </Link>
          <Link
            href="/introduction"
            className={`px-5 ${
              pathname == "/introduction" ? "text-gray-700" : "text-gray-400"
            } hover:text-gray-700`}
          >
            소개 및 가이드
          </Link>
          <Link
            href="/feature"
            className={`px-5 ${
              pathname == "/feature" ? "text-gray-700" : "text-gray-400"
            } hover:text-gray-700`}
          >
            주요 기능
          </Link>
          <Link
            href="/blog"
            className={`px-5 ${
              pathname == "/blog" ? "text-gray-700" : "text-gray-400"
            } hover:text-gray-700`}
          >
            블로그
          </Link>
          <Link
            href="/price"
            className={`px-5 ${
              pathname == "/price" ? "text-gray-700" : "text-gray-400"
            } hover:text-gray-700`}
          >
            요금제
          </Link>
        </div>
        {/* secondary nav */}
        <button
          onClick={() => router.push("/dashboard")}
          className="ms-10 items-center justify-center flex"
        >
          <span className="text-gray-500 hover:text-gray-900">
            만나서 반갑습니다. {userProfile?.username}님
          </span>
          <div className="h-12 ms-2 px-1.5 pe-2 hover:bg-gray-100 rounded-l-full rounded-r-full items-center justify-center flex">
            {userProfile?.profile_image ? (
              <Image
                src={userProfile?.profile_image}
                alt="bsiku"
                width={36}
                height={36}
                className=" block w-9 h-9 object-fit:cover rounded-full"
              ></Image>
            ) : (
              <div className="block w-9 h-9 bg-gray-700 hover:bg-gray-500 object-fit:cover rounded-full flex items-center justify-center">
                <p className="text-gray-100 font-semibold">
                  {userProfile?.username.substring(0, 1)}
                </p>
              </div>
            )}
            <AiFillCaretDown className="w-3.5 h-3.5 ms-2 text-gray-400"></AiFillCaretDown>
          </div>
        </button>
      </nav>
      {/* mobile */}
      <nav
        className={`${
          menuToggle ? "hidden" : "block"
        } lg:hidden flex h-16 border-b border-gray-200 px-4 items-center`}
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

        {/* mobile menu */}
        <button onClick={() => setMenuToggle(!menuToggle)}>
          {menuToggle ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </nav>
      {/* mobile menu */}
      <div
        className={`${
          menuToggle ? "block" : "hidden"
        } absolute inset-0 bg-white flex flex-col align-center`}
      >
        <nav className=" flex h-16 border-b border-gray-200 px-4 items-center block">
          {/* logo */}
          <div className="flex-auto">
            <Link
              href="/"
              className="flex items-center text-gray-700"
              onClick={() => setMenuToggle(false)}
            >
              <FaBuffer className="w-6 h-6" />
              <span className="font-bold ps-4 pe-4 text-lg font-medium">
                클래스뮤즈
              </span>
            </Link>
          </div>

          {/* mobile menu */}
          <button onClick={() => setMenuToggle(!menuToggle)}>
            {menuToggle ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </nav>
        <div className="py-2">
          <Link
            href="/"
            className={`px-5 ${
              pathname == "/" ? "text-gray-700" : "text-gray-400"
            } hover:text-gray-700 block py-5 px-6`}
            onClick={() => setMenuToggle(false)}
          >
            홈
          </Link>
          <Link
            href="/introduction"
            className={`px-5 ${
              pathname == "/introduction" ? "text-gray-700" : "text-gray-400"
            } hover:text-gray-700 block py-5 px-6`}
            onClick={() => setMenuToggle(false)}
          >
            소개 및 가이드
          </Link>
          <Link
            href="/feature"
            className={`px-5 ${
              pathname == "/feature" ? "text-gray-700" : "text-gray-400"
            } hover:text-gray-700 block py-5 px-6`}
            onClick={() => setMenuToggle(false)}
          >
            주요 기능
          </Link>
          <Link
            href="/blog"
            className={`px-5 ${
              pathname == "/blog" ? "text-gray-700" : "text-gray-400"
            } hover:text-gray-700 block py-5 px-6`}
            onClick={() => setMenuToggle(false)}
          >
            블로그
          </Link>
          <Link
            href="/price"
            className={`px-5 ${
              pathname == "/price" ? "text-gray-700" : "text-gray-400"
            } hover:text-gray-700 block py-5 px-6`}
            onClick={() => setMenuToggle(false)}
          >
            요금제
          </Link>
          <div className="flex flex-col justify-center py-8 px-6 absolute w-screen bottom-0 space-y-3">
            <Link
              href="/dashboard"
              onClick={() => setMenuToggle(false)}
              className="py-2 ps-3 pe-4 border-2 border-gray-100 rounded-lg flex items-center bg-white hover:bg-gray-100"
            >
              {/* user profile image */}
              <div className="flex-none flex h-12 w-12 px-1.5 hover:bg-gray-100 rounded-full items-center justify-center">
                {userProfile?.profile_image ? (
                  <Image
                    src={userProfile?.profile_image}
                    alt={userProfile?.username}
                    width={36}
                    height={36}
                    className="flex-none block w-9 h-9 object-fit:cover rounded-full"
                  ></Image>
                ) : (
                  <div className="block w-9 h-9 bg-gray-700 hover:bg-gray-500 object-fit:cover rounded-full flex items-center justify-center">
                    <p className="text-gray-100 font-semibold">
                      {userProfile?.username.substring(0, 1)}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex-1 ms-3 max-w-[16rem] flex flex-col">
                <p className="break-words text-slate-600 hover:text-slate-900 text-lg text-end">
                  만나서 반가워요, {userProfile?.username}님!
                </p>
                <p className="text-slate-500 hover:text-slate-700 text-md text-end">
                  대쉬보드로 이동
                </p>
              </div>
              <PiCaretRightLight className="flex-end w-6 h-6" />
            </Link>

            <p className="text-center">
              <span>
                <Link href={`/info/version/catalog/`}>
                  V.{process.env.NEXT_PUBLIC_APP_VERSION}
                </Link>
              </span>
              <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <span>
                <Link href="/help/ask">문의하기</Link>
              </span>

              <>
                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <span
                  onClick={() => {
                    signOut?.();
                    setMenuToggle(false);
                  }}
                >
                  로그아웃
                </span>
              </>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignedPrimaryNavbar;
