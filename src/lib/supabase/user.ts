import type { User } from "@supabase/supabase-js";
import { authInstance, supabaseInstance } from ".";

export const createUserProfile = async (
  user: User,
  handle: string,
  username: string,
  statusMessage: string,
  birthday: string
) => {
  console.log(user);
  // const { error } = await supabaseInstance
  // .from('user_profiles')
  // .insert({ useruid: user  })
};

export const getUserProfile = async (user: string) => {
  const { data, error, status, statusText } = await supabaseInstance
    .from("user_profiles")
    .select()
    .eq("handle", user);
  // return { data: data, error: error, status: status, statusText: statusText };
};

export const getUser = async () => {
  const { data } = await authInstance.getUser();
  return data;
};
