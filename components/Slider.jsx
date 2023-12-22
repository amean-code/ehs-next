import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/slider.module.css";

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
    <section className={styles.section} id="about-us">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>
              {t?.ehs}
            </h1>
            <div className={styles.buttons}>
              <button onClick={() => set_active_button("who-we-are")} className={styles.item + " " + (
                active_button == "who-we-are" ?
                  styles.active : ""
              )}>
                {t?.who_we_are}
              </button>
              <button onClick={() => set_active_button("what-we-do")} className={styles.item + " " + (
                active_button == "what-we-do" ?
                  styles.active : ""
              )}>
                {t?.what_we_do}
              </button>
              <button onClick={() => set_active_button("why-join")} className={styles.item + " " + (
                active_button == "why-join" ?
                  styles.active : ""
              )}>
                {t?.why_join}
              </button>
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
          <div className={styles.image_container}>
            <img src="/ills/metaverse.png" />
          </div>
        </div>
      </div>
    </section>

  );
}

export default Slider;
