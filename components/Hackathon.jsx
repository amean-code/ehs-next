import Image from "next/image";
import { useState } from "react";
import styles from "../styles/hackathon.module.css";
// LANGUAGE
import { useRouter } from 'next/router';
import Link from "next/link";
import lang from "../lang.json"
// LANGUAGE


function Hackathon() {

    // LANGUAGE
    const router = useRouter();
    const { locale } = router;
    const t = lang[locale];
    // LANGUAGE
    const [activeNav, setActiveNav] = useState("");
    const [active_button, set_active_button] = useState("who-we-are");


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
                    <p className={styles.about_us_title}>{t?.about_us}</p>
                    <div className={styles.about_us_container}>
                        <img src="/images/shape.jpeg" alt="" />
                        <p>{t?.about_us_text}</p>
                    </div>
                </div>
            </div>
            {/* SLIDER */}
                <div className={styles.main_container}>

                    <div className={styles.containRight}>
                        <h4>
                            {t?.ehs}
                        </h4>
                        <h2>{t?.gorevler_title}</h2>
                        <div className={styles.buttons}>
                            <div onClick={() => set_active_button("who-we-are")} className={styles.item + " " + (
                                active_button == "who-we-are" ?
                                    styles.active : ""
                            )}>
                                {t?.gorev1}
                            </div>
                            <div onClick={() => set_active_button("what-we-do")} className={styles.item + " " + (
                                active_button == "what-we-do" ?
                                    styles.active : ""
                            )}>
                                {t?.gorev2}
                            </div>
                            <div onClick={() => set_active_button("why-join")} className={styles.item + " " + (
                                active_button == "why-join" ?
                                    styles.active : ""
                            )}>
                                {t?.gorev3}
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
                    <div className={styles.containLeft}>
                        <Image className={styles.slider_imageleft} width={600} height={600} src="/images/shape.jpeg" alt="" />
                    </div>
                </div>  
            {/*SLIDER*/}

            {/*ODULLER*/}
                <div className={styles.prizes}>
                    <p>{t?.oduller}</p>
                    <div className={styles.prize}>
                        <div className={styles.item}>
                            <img src="/images/second.png" alt="" />
                            <p className={styles.price}>$350</p>
                            <p>{t?.per_person}</p>
                        </div>
                        <div className={styles.item}>
                            <img src="/images/first.png" alt="" />
                            <p className={styles.price}>$500</p>
                            <p>{t?.per_person}</p>
                        </div>
                        <div className={styles.item}>
                            <img src="/images/third.png" alt="" />
                            <p className={styles.price}>$250</p>
                            <p>{t?.per_person}</p>
                        </div>
                    </div>
                </div>
            {/*ODULLER*/}
            {/*HAKEMLER*/}
                <div className={styles.judge}>
                    <div className={styles.title}>
                        <p>{t?.judge}</p>
                    </div>
                </div>
            {/*HAKEMLER*/}
        </section>
    );
}

export default Hackathon;
