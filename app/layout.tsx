import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StreamScout — Find your next favorite",
  description: "A demo guide to films and series worth your next watch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
