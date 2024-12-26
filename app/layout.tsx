import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Know Your Weather",
  description: "Created by Peter Omoh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
