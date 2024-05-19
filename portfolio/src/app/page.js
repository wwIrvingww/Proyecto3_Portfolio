import Image from "next/image";
import Welcome from "../components/Welcome";
import styles from "./page.module.css";
import AboutMe from "@/components/AboutMe";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Sidebar />
     <Contact />
    </main>
  );
}
