import Head from "next/head";

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-start py-36 min-h-screen">
      <Head>
        <title>클래스뮤즈 - 블로그</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-6xl font-bold">Welcome to 블로그</h1>
    </div>
  );
};

export default Blog;
