import "./globals.css";

export const metadata = {
  title: "Next Weather App",
  description:
    "A simple open source weather application built to learn and apply the concepts of React.js with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
