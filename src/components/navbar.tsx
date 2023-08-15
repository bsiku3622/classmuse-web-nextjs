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
import { useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [menuToggle, setMenuToggle] = useState(false);
  const { signOut, loggedIn, userLoading, hasProfile, userProfile } = useAuth();
  const router = useRouter();

  if (pathname.startsWith("/dashboard")) {
    if (!userLoading) {
      if (!loggedIn) router.push("/");
      else if (!hasProfile) router.push("/account/profile/new/primary");
      else {
        console.log(userProfile);
        return (
          <>
            // navbar goes here
            <nav className="lg:flex hidden h-16 border-b border-gray-200 px-12 items-center">
              <div className="flex-none">
                <Link
                  href="/dashboard"
                  className="flex items-center text-gray-700"
                >
                  <FaBuffer className="w-6 h-6" />
                  <span className="font-bold ps-6 pe-4 text-lg font-medium">
                    클래스뮤즈
                  </span>
                </Link>
              </div>
              <div className="flex-auto ms-6">
                <Link
                  href="/dashboard"
                  className={`px-5 ${
                    pathname == "/dashboard" ? "text-gray-700" : "text-gray-400"
                  } hover:text-gray-700`}
                >
                  홈
                </Link>
                <Link
                  href="/dashboard/class"
                  className={`px-5 ${
                    pathname == "/dashboard/class"
                      ? "text-gray-700"
                      : "text-gray-400"
                  } hover:text-gray-700`}
                >
                  클래스
                </Link>
                <Link
                  href="/dashboard/browse"
                  className={`px-5 ${
                    pathname == "/dashboard/browse"
                      ? "text-gray-700"
                      : "text-gray-400"
                  } hover:text-gray-700`}
                >
                  탐색
                </Link>
                <Link
                  href="/dashboard/message"
                  className={`px-5 ${
                    pathname == "/dashboard/message"
                      ? "text-gray-700"
                      : "text-gray-400"
                  } hover:text-gray-700`}
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
                <button className="p-2 hover:bg-gray-100 rounded-full me-4">
                  <PiBellLight className="w-6 h-6" />
                </button>
                <button
                  onClick={() => {}}
                  className="ps-1.5 pe-2 h-12 hover:bg-gray-100 rounded-full items-center justify-center flex"
                >
                  {userProfile.profile_image ? (
                    <Image
                      src={userProfile.profile_image}
                      alt="프로필 사진"
                      width={36}
                      height={36}
                      className="block w-9 h-9 object-fit:cover rounded-full"
                    ></Image>
                  ) : (
                    <div className="block w-9 h-9 bg-gray-700 object-fit:cover rounded-full flex items-center justify-center">
                      <p className="text-gray-100 font-semibold">
                        {userProfile.username.substring(0, 1)}
                      </p>
                    </div>
                  )}
                  <AiFillCaretDown className="w-3.5 h-3.5 ms-2 text-gray-400"></AiFillCaretDown>
                </button>
              </div>
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
              <nav className="lg:hidden flex h-16 border-b border-gray-200 px-4 items-center block">
                {/* logo */}
                <div className="flex-auto">
                  <Link
                    href="/"
                    className="flex items-center text-gray-700"
                    onClick={() => setMenuToggle(false)}
                  >
                    <FaBuffer className="w-6 h-6" />
                    <span className="font-bold ps-6 pe-4 text-lg font-medium">
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
              <div>
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
                    pathname == "/introduction"
                      ? "text-gray-700"
                      : "text-gray-400"
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
              </div>
            </div>
          </>
        );
      }
    }
  } else if (pathname.startsWith("/auth") && !userLoading && loggedIn) {
    router.push("/");
  } else {
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
          {loggedIn && hasProfile ? (
            <button
              onClick={() => router.push("/dashboard")}
              className="ms-10 items-center justify-center flex"
            >
              <span className="text-gray-500 hover:text-gray-900">
                만나서 반갑습니다. {userProfile.username}님
              </span>
              <div className="h-12 ms-2 px-1.5 pe-2 hover:bg-gray-100 rounded-l-full rounded-r-full items-center justify-center flex">
                {userProfile.profile_image ? (
                  <Image
                    src={userProfile.profile_image}
                    alt="bsiku"
                    width={36}
                    height={36}
                    className=" block w-9 h-9 object-fit:cover rounded-full"
                  ></Image>
                ) : (
                  <div className="block w-9 h-9 bg-gray-700 hover:bg-gray-500 object-fit:cover rounded-full flex items-center justify-center">
                    <p className="text-gray-100 font-semibold">
                      {userProfile.username.substring(0, 1)}
                    </p>
                  </div>
                )}
                <AiFillCaretDown className="w-3.5 h-3.5 ms-2 text-gray-400"></AiFillCaretDown>
              </div>
            </button>
          ) : (
            <div className="ms-8 flex-end flex items-center">
              <Link
                href="/auth/login"
                className="h-10 px-3 flex items-center bg-white border-2 border-black-500 hover:bg-gray-100 text-slate-900 hover:text-slate-700 rounded-md transition duration-300"
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
          <nav className="lg:hidden flex h-16 border-b border-gray-200 px-4 items-center block">
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
          <div>
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
            <div className="flex py-5 px-6 absolute w-screen bottom-0">
              {loggedIn && hasProfile ? (
                <Link
                  href="/dashboard"
                  onClick={() => setMenuToggle(false)}
                  className="px-10 items-center justify-between flex"
                >
                  <span className="text-gray-500 hover:text-gray-900">
                    만나서 반갑습니다. {userProfile.username}님
                  </span>
                  <div className="h-12 ms-2 px-1.5 pe-2 hover:bg-gray-100 rounded-full items-center justify-center flex">
                    {userProfile.profile_image ? (
                      <Image
                        src={userProfile.profile_image}
                        alt="bsiku"
                        width={36}
                        height={36}
                        className=" block w-9 h-9 object-fit:cover rounded-full"
                      ></Image>
                    ) : (
                      <div className="block w-9 h-9 bg-gray-700 hover:bg-gray-500 object-fit:cover rounded-full flex items-center justify-center">
                        <p className="text-gray-100 font-semibold">
                          {userProfile.username.substring(0, 1)}
                        </p>
                      </div>
                    )}
                    <AiFillCaretDown className="w-3.5 h-3.5 ms-2 text-gray-400"></AiFillCaretDown>
                  </div>
                </Link>
              ) : (
                <>
                  <Link
                    onClick={() => setMenuToggle(false)}
                    href="/auth/login"
                    className="h-14 text-xl px-3 flex-1 flex justify-center items-center bg-white border-2 border-black-500 hover:bg-gray-100 text-slate-900 hover:text-slate-700 rounded-md transition duration-300"
                  >
                    {/* <div className="h-9 px-2.5 rounded bg-white hover:bg-gray-100 text-slate-900 hover:text-slate-700 flex items-center"> */}
                    로그인
                    {/* </div> */}
                  </Link>
                  <Link
                    onClick={() => setMenuToggle(false)}
                    href="/auth/signup"
                    className="ms-4 h-14 text-xl px-3 flex-1 flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-slate-200 hover:text-slate-900 rounded-md transition duration-300"
                  >
                    회원가입
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Navbar;
