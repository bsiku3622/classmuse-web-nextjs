"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaBuffer, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const PrimaryNavbar = () => {
  const pathname = usePathname();
  const [menuToggle, setMenuToggle] = useState(false);

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
            className="ms-2 h-10 px-3 flex items-center bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-slate-200 hover:text-slate-900 rounded-md transition duration-300"
          >
            회원가입
          </Link>
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
            <div className="space-y-2">
              <Link
                onClick={() => setMenuToggle(false)}
                href="/auth/login"
                className="h-14 text-xl px-3 py-3 flex-1 flex justify-center items-center bg-white border-2 border-gray-200 hover:bg-gray-100 text-slate-900 hover:text-slate-700 rounded-md transition duration-300"
              >
                {/* <div className="h-9 px-2.5 rounded bg-white hover:bg-gray-100 text-slate-900 hover:text-slate-700 flex items-center"> */}
                로그인
                {/* </div> */}
              </Link>
              <Link
                onClick={() => setMenuToggle(false)}
                href="/auth/signup"
                className="h-14 text-xl px-3 py-3 flex-1 flex justify-center items-center bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-slate-200 hover:text-slate-900 rounded-md transition duration-300"
              >
                회원가입
              </Link>
            </div>

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
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimaryNavbar;
