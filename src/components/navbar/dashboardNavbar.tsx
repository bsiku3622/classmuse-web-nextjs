"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { FaBars, FaBuffer, FaTimes } from "react-icons/fa";
import { TfiSearch } from "react-icons/tfi";
import { PiBellLight, PiCaretRightLight } from "react-icons/pi";
import { AiFillCaretDown } from "react-icons/ai";

import { useAuth } from "@/lib/contexts/useAuth";
import { useMessage } from "@/lib/contexts/useMessage";

const DashboardNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuToggle, setMenuToggle] = useState(false);
  const { handleMessage } = useMessage();
  const { userLoading, loggedIn, hasProfile, userProfile } = useAuth();

  useEffect(() => {
    if (!loggedIn) {
      handleMessage?.({
        type: "default",
        message: "로그인 후에 사용할 수 있습니다. 로그인해주세요.",
      });
      router.push("/");
    } else if (!hasProfile) {
      handleMessage?.({
        type: "default",
        message: "아직 프로필이 존재하지 않습니다.",
      });
      router.push("/auth/signup/new_profile/select_role");
    }
  }, [userLoading]);

  return (
    <>
      <nav className="lg:flex hidden h-16 border-b border-gray-200 px-12 items-center">
        <div className="flex-none">
          <Link href="/dashboard" className="flex items-center text-gray-700">
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
              pathname == "/dashboard/class" ? "text-gray-700" : "text-gray-400"
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
            {userProfile?.profile_image ? (
              <Image
                src={userProfile?.profile_image}
                alt="프로필 사진"
                width={36}
                height={36}
                className="block w-9 h-9 object-fit:cover rounded-full"
              ></Image>
            ) : (
              <div className="block w-9 h-9 bg-gray-700 object-fit:cover rounded-full flex items-center justify-center">
                <p className="text-gray-100 font-semibold">
                  {userProfile?.username.substring(0, 1)}
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
        <nav className="flex h-16 border-b border-gray-200 px-4 items-center block">
          {/* logo */}
          <div className="flex-auto">
            <Link
              href="/dashobard"
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
            href="/dashboard"
            onClick={() => setMenuToggle(false)}
            className="py-2 ps-3 pe-4 mx-5 border-2 border-gray-100 rounded-lg flex items-center bg-white hover:bg-gray-100"
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
              <p className="break-words text-slate-600 hover:text-slate-900 text-lg text-start">
                {userProfile?.username}
              </p>
              <p className="text-slate-500 hover:text-slate-700 text-md text-start">
                내 프로필 보기
              </p>
            </div>
            <PiCaretRightLight className="flex-end w-6 h-6" />
          </Link>
          <Link
            href="/dashboard"
            className={`px-5 ${
              pathname == "/dashboard" ? "text-gray-700" : "text-gray-400"
            } hover:text-gray-700 block py-5 px-6`}
            onClick={() => setMenuToggle(false)}
          >
            홈
          </Link>
          <hr className="mx-4 bg-gray-200 h-px" />
          <Link
            href="/dashboard/class"
            className={`px-5 ${
              pathname == "/dashboard/class" ? "text-gray-700" : "text-gray-400"
            } hover:text-gray-700 block py-5 px-6`}
            onClick={() => setMenuToggle(false)}
          >
            클래스
          </Link>
          <hr className="mx-4 bg-gray-200 h-px" />
          <Link
            href="/dashboard/browse"
            className={`px-5 ${
              pathname == "/dashboard/browse"
                ? "text-gray-700"
                : "text-gray-400"
            } hover:text-gray-700 block py-5 px-6`}
            onClick={() => setMenuToggle(false)}
          >
            탐색
          </Link>
          <hr className="mx-4 bg-gray-200 h-px" />
          <Link
            href="/dashboard/message"
            className={`px-5 ${
              pathname == "/dashboard/message"
                ? "text-gray-700"
                : "text-gray-400"
            } hover:text-gray-700 block py-5 px-6`}
            onClick={() => setMenuToggle(false)}
          >
            메시지
          </Link>
          <div className="flex flex-col justify-center py-8 px-6 absolute w-screen bottom-0 space-y-3">
            <p
              onClick={() => setMenuToggle(false)}
              className="h-14 text-xl px-3 py-3 flex-1 flex justify-center items-center bg-red-500 border-2 border-gray-200 hover:bg-red-200 text-slate-100 hover:text-slate-900 rounded-md transition duration-300"
            >
              {" "}
              로그아웃
            </p>

            <p className="text-center">
              <span>
                <Link href="#"> v.{process.env.NEXT_PUBLIC_APP_VERSION}</Link>
              </span>
              <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <span>
                <Link href="#">문의하기</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
