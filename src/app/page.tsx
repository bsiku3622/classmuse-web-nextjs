"use client";

import { useAuth } from "@/lib/contexts/useAuth";
import Head from "next/head";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className="w-screen flex-col flex justify-center py-32">
      <h1 className="lg:text-6xl text-3xl font-semibold text-center">
        Welcome to Classmuse
      </h1>
    </div>
  );
};

export default Home;
