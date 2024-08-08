import { Inter } from "next/font/google";
import "./globals.css";
import {Provider} from './Providers'
import Script from "next/script";

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
      <body className="body">
        <Provider>
        {children}
        </Provider>
        <Script src="https://cdn.jsdelivr.net/npm/chart.js"></Script>
        </body>
    </html>
  );
}
