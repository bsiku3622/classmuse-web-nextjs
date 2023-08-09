import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Navbar from "../components/navbar";
import Head from "next/head";

const notoSansKR = Noto_Sans_KR({
  preload: false,
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "클래스뮤즈",
  description: "모두가 즐거운 교육공간, 클래스뮤즈",
};

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <body className={`${notoSansKR.className} w-full p-0`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};
