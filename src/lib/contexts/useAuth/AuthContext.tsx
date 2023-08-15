"use client";

import { createContext, useState, useEffect } from "react";
import { authInstance, supabaseInstance } from "../../supabase";
import { User, UserResponse } from "@supabase/supabase-js";
import { useMessage } from "../useMessage";
import { SupabaseAuthPayload } from "./auth.types";
import { useRouter } from "next/navigation";

export type AuthContextProps = {
  user: User | null;
  signUp: (payload: SupabaseAuthPayload) => void;
  signIn: (payload: SupabaseAuthPayload) => void;
  oAuthSignIn: (provider: any) => void;
  signOut: () => void;
  loading: boolean;
  loggedIn: boolean;
  handleLoggedIn: (isLoggedIn: boolean) => void;
  handleUserLoading: (isUserLoading: boolean) => void;
  userLoading: boolean;
  hasProfile: boolean;
  userProfile: any;
  userProfileList: any[];
  userProfileIndex: number;
  // setUserProfileIndex: (index: number) => void;
};

export const AuthContext = createContext<Partial<AuthContextProps>>({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [userLoading, setUserLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);
  const [userProfileList, setUserProfileList] = useState<any>([]);
  const [userProfileIndex, setUserProfileIndex] = useState(0);

  const { handleMessage } = useMessage();

  // sign-up a user with provided details
  const signUp = async (payload: SupabaseAuthPayload) => {
    try {
      setLoading(true);
      const { error } = await authInstance.signUp(payload);
      if (error) {
        console.log(error);
        handleMessage?.({
          message:
            "회원가입에 실패했습니다. 이메일과 비밀번호를 다시한번 확인해주세요.",
          type: "error",
        });
      } else {
        handleMessage?.({
          message: "회원가입에 성공했습니다.",
          type: "success",
        });
        signIn(payload);
      }
    } catch (error: any) {
      console.log(error);
      handleMessage?.({
        message: "회원가입에 실패했습니다. 나중에 다시시도 바랍니다",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // sign-in a user with provided details
  const signIn = async (payload: SupabaseAuthPayload) => {
    try {
      setLoading(true);
      const { error } = await authInstance.signInWithPassword(payload);
      if (error) {
        console.log(error);
        handleMessage?.({
          message: "로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.",
          type: "error",
        });
      } else {
        handleMessage?.({
          message: "로그인 되었습니다.",
          type: "success",
        });
        router.push("/");
      }
    } catch (error: any) {
      console.log(error);
      handleMessage?.({
        message: error.error_description || error,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const oAuthSignIn = async (provider: any) => {
    try {
      setLoading(true);
      const { error } = await authInstance.signInWithOAuth({
        provider: provider,
        options: {},
      });
      if (error) {
        console.log(error);
        handleMessage?.({ message: error.message, type: "error" });
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      const { error } = await authInstance.signOut();
      if (error) handleMessage?.({ message: error.message, type: "error" });
    } catch (error: any) {
      console.log(error);
      handleMessage?.({
        message: error.error_description || error,
        type: "error",
      });
    }
  };

  const handleLoggedIn = (isLoggedIn: boolean) => {
    setLoggedIn(isLoggedIn);
  };

  const handleUserLoading = (isUserLoading: boolean) => {
    setUserLoading(isUserLoading);
  };

  let userProfile = userProfileList[userProfileIndex];

  const updateUserProfile = async () => {};
  const deleteUserProfile = async () => {};

  useEffect(() => {
    const checkLoggedIn = async () => {
      await authInstance.onAuthStateChange(async (event, session) => {
        const {
          data: { user },
        } = await authInstance.getUser();
        if (user) {
          setUser(user);
          const { data, error, status, statusText } = await supabaseInstance
            .from("user_profiles")
            .select()
            .eq("useruid", user.id);
          setLoggedIn(true);
          if (data) {
            setUserProfileList(data);
            setHasProfile(true);
          } else {
            setHasProfile(false);
          }
          setUserLoading(false);
          console.log("user load complete.");
        }
        if (!user) {
          setLoggedIn(false);
          console.log("user load complete.");
          setUserLoading(false);
        }
      });
    };
    if (userLoading) checkLoggedIn();
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        signIn,
        oAuthSignIn,
        signOut,
        loading,
        loggedIn,
        handleLoggedIn,
        userLoading,
        handleUserLoading,
        hasProfile,
        userProfile,
        userProfileList,
        userProfileIndex,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
