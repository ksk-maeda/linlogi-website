import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LinLogi | 物流を、設計から変える。",
  description:
    "荷主として12年間、自社の物流コストと向き合い続けた私たちが、あなたの会社に最適な物流を設計し、実行までやり切ります。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJP.variable} antialiased`}
    >
      <body className="min-h-screen font-[family-name:var(--font-noto-sans-jp)]">
        {children}
      </body>
    </html>
  );
}
