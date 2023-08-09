"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaBuffer, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  let status = "not authenticated";
  return (
    //   navbar goes here
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo */}
            <div>
              <Link
                href="/"
                className="flex items-center py-5 px-2 text-gray-700"
              >
                <FaBuffer className="w-6 h-6" />
                <span className="font-bold px-2">클래스뮤즈</span>
              </Link>
            </div>

            {/* primary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="/"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                홈
              </Link>
              <Link
                href="/introduction"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                소개 및 가이드
              </Link>
              <Link
                href="/feature"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                주요 기능
              </Link>
              <Link
                href="/blog"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                블로그
              </Link>
              <Link
                href="/price"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                요금제
              </Link>
            </div>
          </div>
          {/* secondary nav */}
          {status === "authenticated" ? (
            <div className="hidden md:flex items-center space-x-1">
              <button
                className="py-5 px-3"
                onClick={(evt) => {
                  evt.preventDefault();
                  alert("Log out");
                }}
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-1">
              <a href="/login" className="py-5 px-3">
                Login
              </a>
              <a
                href="/signup"
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >
                Signup
              </a>
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
        </div>
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
          href="/feture"
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

        {status === "authenticated" ? (
          <button
            className="block py-2 px-4 text-sm hover:bg-gray-200"
            onClick={(evt) => {
              evt.preventDefault();
              alert("Log out");
            }}
          >
            로그아웃
          </button>
        ) : (
          <div>
            <Link
              href="/login"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
            >
              로그인
            </Link>
            <Link
              href="/signup"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
            >
              회원가입
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
