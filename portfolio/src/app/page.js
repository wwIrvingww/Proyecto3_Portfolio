import Image from "next/image";
import Welcome from "../components/Welcome";
import styles from "./page.module.css";
import AboutMe from "@/components/AboutMe";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Sidebar />
      <Projects />
    </main>
  );
}
