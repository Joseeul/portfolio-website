import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jose Portfolio",
  description: "Jose Andreas web portfolio 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-gabarito`}
      >
        {children}
      </body>
    </html>
  );
}
