"use client";

import React, { useState, useEffect } from "react";
import { FaLock } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useMessage } from "../../../lib/contexts/useMessage";
import { useAuth } from "../../../lib/contexts/useAuth";
import Link from "next/link";
import Google from "@/assets/authIcons/google.svg";
import Kakao from "@/assets/authIcons/kakao.svg";
import Apple from "@/assets/authIcons/apple.svg";

const Signup = ({ params }: { params: { mode: string } }) => {
  const { oAuthSignIn } = useAuth();
  const { handleMessage } = useMessage();

  const handleSumbit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    // eslint-disable-next-line react/jsx-key
    <div className="mt-8 block px-4 py-10 mx-auto max-w-sm bg-white ">
      <div className="w-full text-center mb-4 flex flex-col place-items-center">
        <FaLock className="w-6 h-6" />

        <h1 className="text-2xl mt-2 md:text-4xl text-gray-700 font-bold">
          회원가입
        </h1>
      </div>
      <div className="flex-col">
        <div className="flex-col h-full">
          <div className="flex-auto flex-col px-2 py-5 space-y-3">
            <Link
              href="/auth/signup/email"
              className="w-full bg-white text-black block h-14 border-2 border-gray-200 rounded-md flex justify-center items-center relative"
            >
              <span>이메일로 가입</span>
            </Link>
            <hr className="border" />
            <button
              onClick={() => oAuthSignIn?.("google")}
              className="w-full bg-white text-black block h-14 border-2 border-gray-200 rounded-md flex justify-center items-center relative"
            >
              <span>
                <Google className="h-10 w-10 absolute left-4 top-2" />
              </span>
              <span>구글로 가입</span>
            </button>
            <button
              onClick={() => oAuthSignIn?.("kakao")}
              className="w-full bg-[#FEE500] text-black block h-14 border-2 border-[#FEE500] rounded-md flex justify-center items-center relative"
            >
              <span>
                <Kakao className="h-10 w-10 absolute left-4 top-2" />
              </span>
              <span className="">카카오로 가입</span>
            </button>
            <button
              onClick={() => {}}
              className="w-full bg-black text-white block h-14 border-2 border-black rounded-lg  flex justify-center items-center relative"
            >
              <span>
                <Apple className="h-10 w-10 absolute left-4 top-2" />
              </span>
              <span className="">애플로 가입</span>
            </button>
            <hr className="border border-black-500" />
          </div>
          <p className="flex-auto text-center align-bottom">
            <span>
              <Link
                href={`/info/version/${process.env.NEXT_PUBLIC_APP_VERSION}`}
              >
                V.{process.env.NEXT_PUBLIC_APP_VERSION}
              </Link>
            </span>
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span>
              <Link href="/auth/login">로그인</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
