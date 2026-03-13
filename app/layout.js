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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fontDatatype.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
