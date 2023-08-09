import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Navbar from "../components/navbar";
import Head from "next/head";
import { MessageProvider } from "../lib/message";

const notoSansKR = Noto_Sans_KR({
  preload: true,
  subsets: ["latin"],
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
      <MessageProvider>
        <body className={`${notoSansKR.className} w-full p-0`}>
          <Navbar />
          {children}
        </body>
      </MessageProvider>
    </html>
  );
};
