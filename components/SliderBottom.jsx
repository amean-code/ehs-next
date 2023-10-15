import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/App.module.css";

function SliderBottom() {
  const [activeNav, setActiveNav] = useState("");

  return (
    <section className={styles.sectionTwo}>
        <div className={styles.containerNumber}>
          <ul className={styles.numberList}>
            <li className={styles.list}>
              <h1 className={styles.h1}>600+</h1>
              <h4 className={styles.numberList}>Trainings</h4>
            </li>
            <li className={styles.list}>
              <h1 className={styles.h1}>120k</h1>
              <h4 className={styles.numberList}>Participants</h4>
            </li>
            <li className={styles.list}>
              <h1 className={styles.h1}>85</h1>
              <h4 className={styles.numberList}>Companies</h4>
            </li>
            <li className={styles.list}>
              <h1 className={styles.h1}>50k</h1>
              <h4 className={styles.numberList}>Topics</h4>
            </li>
            <li className={styles.list}>
              <h1 className={styles.h1}>20</h1>
              <h4 className={styles.numberList}>Speakers</h4>
            </li>
            <li className={styles.list}>
              <h1 className={styles.h1}>100+</h1>
              <h4 className={styles.numberList}>Countries</h4>
            </li>
          </ul>
        </div>
      </section>
  );
}

export default SliderBottom;
