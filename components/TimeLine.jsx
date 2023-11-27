import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/timeline.module.css";

// LANGUAGE
import { useRouter } from 'next/router';
import lang from "../lang.json"
// LANGUAGE

function TimeLine() {

  // LANGUAGE
  const router = useRouter();
  const { locale } = router;
  const t = lang[locale];
  // LANGUAGE
  const [activeNav, setActiveNav] = useState(1);

  return (
    <section>
      <div className={styles.process_wrapper} id="about-us">
        <div className={styles.progress_bar_container}>
          <ul className={styles.ul}>
            <li onClick={() => {
              setActiveNav(1);
            }} className={styles.step + " " + (
              activeNav == 1 || activeNav == 2 || activeNav == 3 || activeNav == 4 || activeNav == 5 ?
                styles.active : ""
            ) + " " + styles.li}>
              <div className={styles.step_inner}>{t?.home_work}</div>
            </li>
            <li onClick={() => {
              setActiveNav(2);
            }} className={styles.step + " " +
              (
                activeNav == 2 || activeNav == 3 || activeNav == 4 || activeNav == 5 ?
                  styles.active : ""
              )
              + " " + styles.li}>
              <div className={styles.step_inner}>{t?.responsive_part}</div>
            </li>
            <li onClick={() => {
              setActiveNav(3);
            }} className={styles.step + " " +
              (
                activeNav == 3 || activeNav == 4 || activeNav == 5 ?
                  styles.active : ""
              )
              + " " + styles.li}>
              <div className={styles.step_inner}>{t?.creative_creations}</div>
            </li>
            <li onClick={() => {
              setActiveNav(4);
            }} className={styles.step + " " +
              (
                activeNav == 4 || activeNav == 5 ?
                  styles.active : ""
              )
              + " " + styles.li}>
              <div className={styles.step_inner}>{t?.testimonials_part}</div>
            </li>
            <li onClick={() => {
              setActiveNav(5);
            }} className={styles.step + " " +
              (
                activeNav == 5 ?
                  styles.active : ""
              )
              + " " + styles.li}>
              <div className={styles.step_inner}>{t?.our_locations}</div>
            </li>
          </ul>

          <div className={styles.line}>
            <div className={styles.line_progress} style={{
              width: (
                activeNav == 1 ?
                  "3%" :
                  activeNav == 2 ?
                    "25%" :
                    activeNav == 3 ?
                      "50%" :
                      activeNav == 4 ?
                        "75%" :
                        activeNav == 5 ?
                          "100%" : ""
              )
            }}></div>
          </div>
        </div>

        <div className={styles.progress_content_section}>
          <div className={styles.section_content + " " + styles.discovery + " " +
              (
                activeNav == 1 ?
                  styles.active : ""
              )}>
            <h2 className={styles.timeline_h2}>{t?.home_section}</h2>
            <p className={styles.p}>{t?.home_section_text}</p>
          </div>

          <div className={styles.section_content + " " + styles.strategy + " " +
              (
                activeNav == 2 ?
                  styles.active : ""
              )}>
            <h2 className={styles.timeline_h2}>{t?.gallery_section}</h2>
            <p className={styles.p}>{t?.gallery_section_text}</p>
          </div>

          <div className={styles.section_content + " " + styles.creative + " " +
              (
                activeNav == 3 ?
                  styles.active : ""
              )}>
            <h2 className={styles.timeline_h2}>{t?.creative_creations}</h2>
            <p className={styles.p}>{t?.creative_creations_text}</p>
          </div>

          <div className={styles.section_content + " " + styles.production + " " +
              (
                activeNav == 4 ?
                  styles.active : ""
              )}>
            <h2 className={styles.timeline_h2}>{t?.testimonials_now}</h2>
            <p className={styles.p}>{t?.testimonials_now_text}</p>
          </div>

          <div className={styles.section_content + " " + styles.analysis + " " +
              (
                activeNav == 5 ?
                  styles.active : ""
              )}>
            <h2 className={styles.timeline_h2}>{t?.our_locations}</h2>
            <p className={styles.p}>{t?.our_locations_text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimeLine;
