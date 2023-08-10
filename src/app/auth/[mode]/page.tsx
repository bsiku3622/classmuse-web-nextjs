"use client";

import React, { useState, useEffect } from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";
import classNames from "classnames";
import { useFormFields } from "../../../lib/utils";
import { useMessage } from "../../../lib/contexts/useMessage";
import { useAuth } from "../../../lib/contexts/useAuth";

type FormFieldProps = {
  email: string;
  password: string;
};

// type ModeType = "signup" | "login"; // type alias

type SupabaseAuthPayload = FormFieldProps; // type alias

const FORM_VALUES: FormFieldProps = {
  email: "",
  password: "",
};

const Auth = ({ params }: { params: { mode: string } }) => {
  useEffect(() => {
    if (params.mode == "login") setisLoginMode(true);
    else if (params.mode == "signup") setisLoginMode(false);
  }, []);
  const [isLoginMode, setisLoginMode] = useState(true);

  const { loading, signIn, signUp, oAuthSignIn } = useAuth();
  const { messages, handleMessage } = useMessage();

  const [values, handleChange, resetFormFields] =
    useFormFields<FormFieldProps>(FORM_VALUES);

  // Form submit handler to call the above function
  const handleSumbit = (event: React.FormEvent) => {
    event.preventDefault();
    isLoginMode ? signIn?.(values) : signUp?.(values);
    resetFormFields();
  };

  return (
    // eslint-disable-next-line react/jsx-key

    <div className="mt-8 container px-5 py-8 mx-auto max-w-2xl bg-white shadow-md rounded-xl border-solid border border-black-800 h-fit">
      <div className="w-full text-center mb-4 flex flex-col place-items-center">
        {isLoginMode ? (
          <FaLockOpen className="w-6 h-6" />
        ) : (
          <FaLock className="w-6 h-6" />
        )}
        <h1 className="text-2xl md:text-4xl text-gray-700 font-semibold">
          {isLoginMode ? "Log In" : "Sign Up"}
        </h1>
      </div>
      {messages &&
        messages.map((message, index) => (
          <div
            key={index}
            className={classNames(
              "shadow-md rounded px-3 py-2 text-shadow transition-all mt-2 text-center",
              message.type === "error"
                ? "bg-red-500 text-white"
                : message.type === "success"
                ? "bg-green-300 text-gray-800"
                : "bg-gray-100 text-gray-800"
            )}
          >
            {message.message}
          </div>
        ))}
      <div className="flex flex-wrap">
        <form onSubmit={handleSumbit} className="flex-1  px-8 pt-6 pb-8 ">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-64"
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              required
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-64"
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              required
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div className="gap-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {isLoginMode ? "Log In" : "Sign Up"}
            </button>
          </div>
        </form>
        <div className="flex-1 flex-col h-full">
          <div className="flex-auto flex-col px-2 py-5">
            <button
              onClick={() => oAuthSignIn?.("google")}
              className="w-64 bg-orange-100 block px-5 py-2 border border-black-500 rounded-md"
            >
              Sign with google
            </button>
            <button
              onClick={() => oAuthSignIn?.("kakao")}
              className="w-64 bg-orange-100 mt-2 block px-5 py-2 border border-black-500 rounded-md"
            >
              Sign with kakao
            </button>
            <button
              onClick={() => {}}
              className="w-64 bg-orange-100 mt-2 block px-5 py-2 border border-black-500 rounded-md"
            >
              Sign with apple
            </button>
          </div>
          <div className="flex-auto text-right align-bottom">
            <small className="block text-gray-600">
              {isLoginMode ? "Not a member yet?" : "Already a member?"}{" "}
            </small>
            <a
              className="block font-semibold"
              href=""
              onClick={(e) => {
                e.preventDefault();
                setisLoginMode(!isLoginMode);
              }}
            >
              {isLoginMode ? "Sign Up" : "Log In"}
            </a>
          </div>
        </div>
      </div>
      {loading && (
        <div className="shadow-md rounded px-3 py-2 text-shadow transition-all mt-2 text-center">
          Loading...
        </div>
      )}
    </div>
  );
};

export default Auth;
