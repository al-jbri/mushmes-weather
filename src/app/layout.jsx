import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import Navbar from "@/components/nav";

export const metadata = {
  title: "Mushmes Weather App",
  description:
    "A simple open source weather application built to learn and apply the concepts of React.js with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={`h-full antialiased`}>
      <body className="min-h-svh flex flex-col">
        <Toaster position="bottom-center" reverseOrder={false} />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
