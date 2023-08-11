"use client";

import { useAuth } from "@/lib/contexts/useAuth";
import Head from "next/head";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const { userLoading, loggedIn } = useAuth();

  if (userLoading) {
    return (
      <div className="flex items-center justify-center">
        <p>Loading</p>
      </div>
    );
  } else {
    if (loggedIn) router.push("/dashboard");
    return (
      <div className="flex flex-col items-center justify-start py-36">
        <Head>
          <title>클래스뮤즈</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-6xl font-bold">Welcome to Classmuse</h1>
      </div>
    );
  }
};

export default Home;
