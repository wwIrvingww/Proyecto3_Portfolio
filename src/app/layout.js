"use client";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
        {!isWelcomePage && <Footer />} 
      </body>
    </html>
  );
}
