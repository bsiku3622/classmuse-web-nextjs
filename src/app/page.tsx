import Head from "next/head";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start py-36">
      <Head>
        <title>클래스뮤즈</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-6xl font-bold">Welcome to Classmuse</h1>
    </div>
  );
};

export default Home;
