"use client";

import React, { useState, useEffect } from "react";
import { FaLock } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useFormFields } from "@/lib/utils/utils";
import { useMessage } from "@/lib/contexts/useMessage";
import { useAuth } from "@/lib/contexts/useAuth";
import Link from "next/link";

type FormFieldProps = {
  handle: string;
  username: string;
  birthday: string;
};

const FORM_VALUES: FormFieldProps = {
  handle: "",
  username: "",
  birthday: "",
};

const SignupNewAccountTeacher = ({ params }: { params: { mode: string } }) => {
  const { signUpLoading, emailSignUp, user, createTeacherPrimaryProfile } =
    useAuth();
  const { handleMessage } = useMessage();

  const [values, handleChange, resetFormFields] =
    useFormFields<FormFieldProps>(FORM_VALUES);

  // Form submit handler to call the above function
  const handleSumbit = (event: React.FormEvent) => {
    event.preventDefault();
    createTeacherPrimaryProfile?.(values);
  };
  return (
    // eslint-disable-next-line react/jsx-key
    <div className="mt-8 block px-4 py-10 mx-auto max-w-sm bg-white ">
      <div className="w-full text-center mb-4 flex flex-col place-items-center">
        <FaLock className="w-6 h-6" />

        <h1 className="text-2xl mt-2 md:text-4xl text-gray-700 font-bold">
          정보 입력
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
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline disabled:bg-gray-100"
                id="email"
                name="email"
                type="email"
                placeholder="이메일 주소"
                required
                value={user ? user.email : ""}
                onChange={handleChange}
                disabled
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                핸들
              </label>
              <div className="shadow border rounded w-full text-gray-700 flex items-center py-2">
                <span className="ps-3">@</span>
                <input
                  className="w-full ps-2 pe-3 text-gray-700 focus:outline-none focus:shadow-outline disabled:bg-gray-100"
                  id="handle"
                  name="handle"
                  type="text"
                  placeholder="사람들이 나를 식별하는 용도로 사용됩니다."
                  required
                  value={values.handle}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                이름
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline disabled:bg-gray-100"
                id="username"
                name="username"
                type="text"
                placeholder="사람들에게 표시되는 이름입니다."
                required
                value={values.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                생년월일
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline disabled:bg-gray-100"
                id="birthday"
                name="birthday"
                type="date"
                placeholder="사람들에게 표시되는 이름입니다."
                required
                value={values.birthday}
                onChange={handleChange}
              />
            </div>
            <button
              className="bg-indigo-500 hover:bg-blue-700 text-white font-semibold py-3 w-full rounded-md focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {!signUpLoading ? "프로필 생성" : "처리중 ..."}
            </button>
          </form>
          <hr className="border" />
          <p className="flex-auto text-center">
            <Link href="/auth/signup">돌아가기</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupNewAccountTeacher;
