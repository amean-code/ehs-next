import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/App.module.css";



// LANGUAGE
import { useRouter } from 'next/router';
import lang from "../lang.json"
// LANGUAGE

function SliderBottom() {
  // LANGUAGE
  const router = useRouter();
  const { locale } = router;
  const t = lang[locale];
  // LANGUAGE
  const [activeNav, setActiveNav] = useState("");

  return (
    <section className={styles.sectionTwo}>
        <div className={styles.containerNumber}>
          <ul className={styles.numberList}>
            <li className={styles.list}>
              <h1 className={styles.h1}>600+</h1>
              <h4 className={styles.numberList}>{t?.trainings}</h4>
            </li>
            <li className={styles.list}>
              <h1 className={styles.h1}>120k</h1>
              <h4 className={styles.numberList}>{t?.participants}</h4>
            </li>
            <li className={styles.list}>
              <h1 className={styles.h1}>85</h1>
              <h4 className={styles.numberList}>{t?.companies}</h4>
            </li>
            <li className={styles.list}>
              <h1 className={styles.h1}>50k</h1>
              <h4 className={styles.numberList}>{t?.topics}</h4>
            </li>
            <li className={styles.list}>
              <h1 className={styles.h1}>20</h1>
              <h4 className={styles.numberList}>{t?.speakers}</h4>
            </li>
            <li className={styles.list}>
              <h1 className={styles.h1}>100+</h1>
              <h4 className={styles.numberList}>{t?.countries}</h4>
            </li>
          </ul>
        </div>
      </section>
  );
}

export default SliderBottom;
