"use client";

import { createContext, useState, useEffect } from "react";
import { authInstance, supabaseInstance } from "../../supabase";
import { User, UserResponse } from "@supabase/supabase-js";
import { useMessage } from "../useMessage";
import { useRouter } from "next/navigation";

export type SupabaseAuthPayload = {
  email: string;
  password: string;
};

export type AuthContextProps = {
  // user status values
  loggedIn: boolean;
  preLoggedIn: boolean;
  hasProfile: boolean;
  userLoading: boolean;
  // loading status value when signup
  signUpLoading: boolean;

  user: User | null;
  userProfileList: any[];
  userProfileIndex: number;
  userProfile: any;

  emailSignUp: (payload: SupabaseAuthPayload) => void;
  emailSignIn: (payload: SupabaseAuthPayload) => void;
  oAuthSignIn: (provider: any) => void;
  signOut: () => void;

  // setUserProfileIndex: (index: number) => void;
};

export const AuthContext = createContext<Partial<AuthContextProps>>({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { handleMessage } = useMessage();
  // user status values
  const [loggedIn, setLoggedIn] = useState(false);
  const [preLoggedIn, setPreLoggedIn] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);
  const [userLoading, setUserLoading] = useState(true);
  // loading status value when signup
  const [signUpLoading, setSignUpLoading] = useState(false);
  // user instances
  const [user, setUser] = useState<User | null>(null);
  const [userProfileList, setUserProfileList] = useState<any>([]);
  const [userProfileIndex, setUserProfileIndex] = useState(0);
  let userProfile = userProfileList[userProfileIndex];

  // auth functions
  const emailSignUp = async (payload: SupabaseAuthPayload) => {
    try {
      setSignUpLoading(true);
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
        router.replace("/auth/signup/select_role");
      }
    } catch (error: any) {
      console.log(error);
      handleMessage?.({
        message: "회원가입에 실패했습니다. 나중에 다시시도 바랍니다",
        type: "error",
      });
    } finally {
      setSignUpLoading(false);
    }
  };

  const emailSignIn = async (payload: SupabaseAuthPayload) => {
    try {
      setSignUpLoading(true);
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
      setSignUpLoading(false);
    }
  };

  const oAuthSignIn = async (provider: any) => {
    try {
      setSignUpLoading(true);
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
      setSignUpLoading(false);
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
          if (data && data.length != 0) {
            setUserProfileList(data);
            setLoggedIn(true);
            setHasProfile(true);
            setPreLoggedIn(false);
          } else {
            setLoggedIn(false);
            setHasProfile(false);
            setPreLoggedIn(true);
          }
          setUserLoading(false);
          console.log("user load complete.");
        }
        if (!user) {
          setLoggedIn(false);
          setHasProfile(false);
          setPreLoggedIn(false);
          setUserLoading(false);
          console.log("user load complete.");
        }
      });
    };
    if (userLoading) checkLoggedIn();
  });

  return (
    <AuthContext.Provider
      value={{
        // user status values
        loggedIn,
        preLoggedIn,
        hasProfile,
        userLoading,
        // loading status value when signup
        signUpLoading,
        // user instances
        user,
        userProfileList,
        userProfileIndex,
        userProfile,
        // auth functions
        emailSignUp,
        emailSignIn,
        oAuthSignIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
