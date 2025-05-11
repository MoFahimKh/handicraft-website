import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {/* <AnimatedGradient className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"> */}
        <div className="pt-16">{children}</div>
        {/* </AnimatedGradient> */}
        <Footer />
      </body>
    </html>
  );
}
