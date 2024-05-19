import Welcome from "@/components/Welcome";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Welcome />
    </div>
  );
}
