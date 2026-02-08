import type { Metadata } from "next";
import { Sofia_Sans_Condensed } from "next/font/google";
import { Spline_Sans_Mono } from "next/font/google";
import "./global.css";

export const metadata: Metadata = {
  title: "Ahmed Ibrahim",
  description: "Ahmed Ibrahim's Personal Portfolio",
};

const sofiaSansCondensed = Sofia_Sans_Condensed({
  subsets: ["latin"],
  variable: "--font-sofia-sans-condensed",
});

const splineSansMono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-spline-sans-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000" />
      </head>
      <body
        className={`${sofiaSansCondensed.variable} ${splineSansMono.variable} ${splineSansMono.className}`}
      >
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
