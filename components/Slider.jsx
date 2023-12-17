import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/App.module.css";

// LANGUAGE
import { useRouter } from 'next/router';
import lang from "../lang.json"
// LANGUAGE

function Slider() {
  // LANGUAGE
  const router = useRouter();
  const { locale } = router;
  const t = lang[locale];
  // LANGUAGE

  const [active_button, set_active_button] = useState("who-we-are");

  return (
    <section id="about-us">
      <div className={styles.main_container}>
        <div className={styles.containLeft}>
          <img className={styles.slider_imageleft} width={200} height={200} src="/images/slider_left_image.png" alt="" />
        </div>

        <div className={styles.containRight}>
          <h4>
            {t?.ehs}
          </h4>
          <h2>{t?.about_us}</h2>
          <div className={styles.buttons}>
            <div onClick={() => set_active_button("who-we-are")} className={styles.item + " " + (
              active_button == "who-we-are" ?
                styles.active : ""
            )}>
              {t?.who_we_are}
            </div>
            <div onClick={() => set_active_button("what-we-do")} className={styles.item + " " + (
              active_button == "what-we-do" ?
                styles.active : ""
            )}>
              {t?.what_we_do}
            </div>
            <div onClick={() => set_active_button("why-join")} className={styles.item + " " + (
              active_button == "why-join" ?
                styles.active : ""
            )}>
              {t?.why_join}
            </div>
          </div>
          {
            active_button == "who-we-are" ?
              <p>
                {t?.who_we_are_text}
              </p>
              : active_button == "what-we-do" ?
                <p>
                  {t?.what_we_do_text}
                </p>
                : active_button == "why-join" ?
                  <p>
                    {t?.why_join_text}
                  </p>
                  : ""
          }
        </div>
      </div>
    </section>

  );
}

export default Slider;
