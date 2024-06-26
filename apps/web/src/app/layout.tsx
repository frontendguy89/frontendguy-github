import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Roboto } from "next/font/google";
import Template from "./template";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// dark:bg-[#66023c] dark:text-[#efefef]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-[#e6e6e6] dark:bg-[#47012a] ${roboto.className} transition-colors`}
      >
        <ThemeProvider attribute="class"><Template>{children}</Template></ThemeProvider>
      </body>
    </html>
  );
}
