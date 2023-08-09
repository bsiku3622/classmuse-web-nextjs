import Head from "next/head";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-start py-36 min-h-screen">
      <Head>
        <title>클래스뮤즈 - 홈</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-6xl font-bold">Welcome to Classmuse</h1>
    </div>
  );
};

export default Index();
