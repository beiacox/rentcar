import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rentcar",
  description: "Rent the car of your choice",
};

export default function RootLayout({
  children
}) {
  return (
    <html lang="en" className="html">
      <body className="body">{children}</body>
    </html>
  );
}
