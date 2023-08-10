import { createContext, useState, useEffect } from "react";
import { authInstance } from "../../supabase";
import { User, UserResponse } from "@supabase/supabase-js";
import { useMessage } from "../useMessage";
import { SupabaseAuthPayload } from "./auth.types";

export type AuthContextProps = {
  user: User | null | UserResponse;
  signUp: (payload: SupabaseAuthPayload) => void;
  signIn: (payload: SupabaseAuthPayload) => void;
  oAuthSignIn: (provider: any) => void;
  signOut: () => void;
  loading: boolean;
  loggedIn: boolean;
  handleLoggedIn: (isLoggedIn: boolean) => void;
  handleUserLoading: (isUserLoading: boolean) => void;
  userLoading: boolean;
};

export const AuthContext = createContext<Partial<AuthContextProps>>({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null | UserResponse>(null);
  const [userLoading, setUserLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const { handleMessage } = useMessage();

  // sign-up a user with provided details
  const signUp = async (payload: SupabaseAuthPayload) => {
    try {
      setLoading(true);
      const { error } = await authInstance.signUp(payload);
      if (error) {
        console.log(error);
        handleMessage?.({ message: error.message, type: "error" });
      } else {
        handleMessage?.({
          message:
            "Signup successful. Please check your inbox for a confirmation email!",
          type: "success",
        });
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

  // sign-in a user with provided details
  const signIn = async (payload: SupabaseAuthPayload) => {
    try {
      setLoading(true);
      const { error } = await authInstance.signInWithPassword(payload);
      if (error) {
        console.log(error);
        handleMessage?.({ message: error.message, type: "error" });
      } else {
        handleMessage?.({
          message: "Log in successful. I'll redirect you once I'm done",
          type: "success",
        });
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
      handleMessage?.({
        message: error.error_description || error,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => await authInstance.signOut();

  const handleLoggedIn = (isLoggedIn: boolean) => {
    setLoggedIn(isLoggedIn);
  };

  const handleUserLoading = (isUserLoading: boolean) => {
    setUserLoading(isUserLoading);
  };

  useEffect(() => {
    const checkLoggedIn = async () => {
      await authInstance.onAuthStateChange(async (event, session) => {
        const {
          data: { user },
        } = await authInstance.getUser();
        if (user) setLoggedIn(true);
        console.log(user);
        console.log("user load complete.");
        setUserLoading(false);
      });
    };
    checkLoggedIn();
  }, []);

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
