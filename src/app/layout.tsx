import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { PHProvider } from "~/providers";

import dynamic from "next/dynamic";

const PostHogPageView = dynamic(() => import("~/components/PostHogPageView"), {
  ssr: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Alex Chen",
  description: "Alex Chen's personal website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PHProvider>
        <body className={`font-sans ${inter.variable} overscroll-none`}>
          <PostHogPageView />
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </PHProvider>
    </html>
  );
}
