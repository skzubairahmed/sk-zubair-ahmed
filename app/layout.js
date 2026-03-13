import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fontDatatype = localFont({
  src:'../public/fonts/font_Datatype.ttf',
  variable: '--font-Datatype',
});

export const metadata = {
  title: "Sk Zubair Ahmed",
  description: "Created by Zubair",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Datatype:wght@100..900&family=Oswald:wght@200..700&display=swap" rel="stylesheet"></link>
      </title>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fontDatatype.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
