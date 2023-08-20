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

const SignupSelectRole = ({ params }: { params: { mode: string } }) => {
  const router = useRouter();

  const { signUpLoading, emailSignUp } = useAuth();
  const { handleMessage } = useMessage();

  const [values, handleChange, resetFormFields] =
    useFormFields<FormFieldProps>(FORM_VALUES);

  // Form submit handler to call the above function
  const handleSumbit = (event: React.FormEvent) => {
    event.preventDefault();
    emailSignUp?.(values);
  };
  return (
    // eslint-disable-next-line react/jsx-key
    <div className="mt-8 block px-4 py-10 mx-auto max-w-sm bg-white ">
      <div className="w-full text-center mb-4 flex flex-col place-items-center">
        <FaLock className="w-6 h-6" />

        <h1 className="text-2xl mt-2 md:text-4xl text-gray-700 font-bold">
          역할 선택
        </h1>
      </div>
      <div className="flex-col">
        <div className="flex-auto flex-col px-2 space-y-3">
          <div className="flex space-x-3">
            <Link
              href="/auth/signup/new_profile/student"
              className="block py-20 w-full font-semibold text-xl bg-emerald-500 text-white rounded-xl text-center"
            >
              저는 학생입니다.
            </Link>
            <Link
              href="/auth/signup/new_profile/student"
              className="block py-20 w-full font-semibold text-xl bg-indigo-500 text-white rounded-xl text-center"
            >
              저는 교사입니다.
            </Link>
          </div>
          <Link
            href="https://org.cm.bsiku.dev"
            className="block pt-8 w-full text-center"
          >
            <p>기관 관리 기능이 필요하신가요?</p>
            <p>기관 관리 페이지로 이동</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupSelectRole;
