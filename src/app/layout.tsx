import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import "@flaticon/flaticon-uicons/css/all/all.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abercrombie & Fitch ",
  description: "Abercrombie & Fitch template by Alex and Alam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="stylesheet" href="" />
      </Head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
