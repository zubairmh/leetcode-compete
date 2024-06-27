import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LeetCode-Compete",
  description: "Minimal dashboard to track and compete on leetcode.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
