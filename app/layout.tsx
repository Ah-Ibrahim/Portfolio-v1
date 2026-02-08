import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Ahmed Ibrahim",
  description: "Ahmed Ibrahim's Personal Portfolio",
};

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
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
