import Image from "next/image";
import Welcome from "../components/Welcome";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome />
    </main>
  );
}
