"use client";

import React, { useState, useEffect } from "react";
import { FaLock } from "react-icons/fa";
import classNames from "classnames";
import { useMessage } from "@/lib/contexts/useMessage";
import { useFormFields } from "@/lib/utils/utils";
import { useAuth } from "@/lib/contexts/useAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";

type FormFieldProps = {
  email: string;
  password: string;
};

const FORM_VALUES: FormFieldProps = {
  email: "",
  password: "",
};

const Signup = ({ params }: { params: { mode: string } }) => {
  const router = useRouter();

  const { signUpLoading, emailSignIn } = useAuth();
  const { handleMessage } = useMessage();

  const [values, handleChange, resetFormFields] =
    useFormFields<FormFieldProps>(FORM_VALUES);

  // Form submit handler to call the above function
  const handleSumbit = (event: React.FormEvent) => {
    event.preventDefault();
    emailSignIn?.(values);
  };
  return (
    // eslint-disable-next-line react/jsx-key
    <div className="mt-8 block px-4 py-10 mx-auto max-w-sm bg-white ">
      <div className="w-full text-center mb-4 flex flex-col place-items-center">
        <FaLock className="w-6 h-6" />

        <h1 className="text-2xl mt-2 md:text-4xl text-gray-700 font-bold">
          이메일로 로그인
        </h1>
      </div>
      <div className="flex-col">
        <div className="flex-auto flex-col px-2 space-y-3">
          <form onSubmit={handleSumbit} className="flex-1 pt-6 pb-2 ">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                이메일 주소
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="이메일 주소"
                required
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                비밀번호
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호"
                required
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <button
              className="bg-indigo-500 hover:bg-blue-700 text-white font-semibold py-3 w-full rounded-md focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {!signUpLoading ? "로그인" : "처리중 ..."}
            </button>
          </form>
          <hr className="border" />
          <p className="flex-auto text-center">
            <Link href="/auth/login">돌아가기</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
