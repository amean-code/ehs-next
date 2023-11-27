import Link from "next/link";
import { useState } from "react";
import styles from "../styles/hackathon.module.css";
// LANGUAGE
import { useRouter } from 'next/router';
import lang from "../lang.json"
// LANGUAGE


function Hackathon() {

    // LANGUAGE
    const router = useRouter();
    const { locale } = router;
    const t = lang[locale];
    // LANGUAGE
    const [activeNav, setActiveNav] = useState("");

    return (
        <section className={styles.section_methods}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                            EHS Hackathon 24
                        </div>
                        <div className={styles.description}>
                            <p>{t?.description}</p>
                            <p>{t?.description}</p>
                        </div>
                        <div className={styles.apply_button}>
                            <button className={styles.apply}>Başvur</button>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <img src="/images/electricity.jpeg" alt="" />
                    </div>
                </div>
                <div className={styles.sponsors}>
                    <p>{t?.sponsors}</p>
                    <div className={styles.images}>
                        <img src="/images/s1_vareint_logo.webp" alt="" />
                        <img src="/images/s5_odyssey_logo.webp" alt="" />
                        <img src="/images/s2_smartPulse_logo.webp" alt="" />
                        <img src="/images/s8_solarian_logo.webp" alt="" />
                        <img src="/images/s4_pomega_logo.webp" alt="" />
                        <img src="/images/s1_vareint_logo.webp" alt="" />
                    </div>
                </div>
                <div className={styles.about_us}>
                    <p>{t?.about_us}</p>
                    <div className="about_us_container">
                        <img src="" alt="" />
                    <p>{t?.about_us_text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hackathon;
