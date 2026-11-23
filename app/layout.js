import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import NavTracker from "@/components/NavTracker";
import BottomNav from "@/components/BottomNav";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Orange Mobile Store",
  description: "Mobile sales, accessories and service in Salem",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${dmSans.className} flex min-h-screen w-full flex-col overflow-x-hidden bg-white text-ink`}
      >
        <NavTracker />
        <Navbar />
        <main className="w-full flex-1">{children}</main>
        <Footer />
        <FloatingContact />
        // <BottomNav />
      </body>
    </html>
  );
}
