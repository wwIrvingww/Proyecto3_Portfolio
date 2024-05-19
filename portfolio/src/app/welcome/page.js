// Welcome.js
import styles from "../page.module.css";
import WelcomeSection from "@/components/Welcome";

export default function Welcome() {
  return (
    <div className={styles.main}>
      <WelcomeSection />
    </div>
  );
}
