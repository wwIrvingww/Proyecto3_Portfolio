import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <section id="about" className={styles.section}>
        <AboutMe />
      </section>
      <section id="projects" className={styles.section}>
        <Projects />
      </section>
      <section id="contact" className={styles.section}>
        <Contact />
      </section>
    </div>
  );
}