"use client";

import { useAuth } from "@/lib/contexts/useAuth";
import Head from "next/head";

const Dashboard = () => {
  const { userLoading } = useAuth();

  return (
    <div className="flex flex-col items-center justify-start py-36 min-h-screen">
      {userLoading ? (
        <h1 className="text-6xl font-bold">Loading</h1>
      ) : (
        <h1 className="text-6xl font-bold">Welcome to Dashboard</h1>
      )}{" "}
    </div>
  );
};

export default Dashboard;
