"use client";
import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer"; 
import './globals.css';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isWelcomePage = pathname === '/';

  return (
    <html lang="en">
      <body>
        {!isWelcomePage && <Navbar />}
        <Sidebar />
        <main>{children}</main>
        {!isWelcomePage && <Footer />} 
      </body>
    </html>
  );
}
