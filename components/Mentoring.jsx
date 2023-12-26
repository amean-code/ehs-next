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
    <section className={styles.section} id="mentoring">
      <div className={styles.banner}>
        <h3 className={app_css.h3}>
          {
            t?.mentoring
          }
        </h3>
        <div className={app_css.line}>

        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src="/mentoring/mentoring1-min.jpg" />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                {t?.mentoring_title_1}
              </div>
              <div className={styles.description}>
                {t?.mentoring_text_1}
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src="/mentoring/mentoring2-min.jpg" />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                {t?.mentoring_title_2}
              </div>
              <div className={styles.description}>
                {t?.mentoring_text_2}
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src="/mentoring/mentoring3-min.jpg" />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                {t?.mentoring_title_3}
              </div>
              <div className={styles.description}>
                {t?.mentoring_text_3}
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src="/mentoring/mentoring4-min.jpg" />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                {t?.mentoring_title_4}
              </div>
              <div className={styles.description}>
                {t?.mentoring_text_4}
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src="/mentoring/mentoring5-min.jpg" />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                {t?.mentoring_title_5}
              </div>
              <div className={styles.description}>
                {t?.mentoring_text_5}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mentoring;
