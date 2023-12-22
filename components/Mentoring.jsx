import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/mentoring.module.css";
import app_css from "../styles/App.module.css";

// LANGUAGE
import { useRouter } from 'next/router';
import lang from "../lang.json"
// LANGUAGE
function Mentoring() {
  // LANGUAGE
  const router = useRouter();
  const { locale } = router;
  const t = lang[locale];
  // LANGUAGE
  const [activeNav, setActiveNav] = useState("");

  return (
    <section className={styles.section_methods} id="mentoring">
      
    </section>
  );
}

export default Mentoring;
