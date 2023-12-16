import Image from "next/image";
import { useState } from "react";
import styles from "../styles/hackathon2.module.css";
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
            {/* TIMELINE */}
            <section className={styles.timeline_section}>
                <h3>
                    Takvim
                </h3>
                <div className={styles.timeline}>
                    <div className={styles.date_item}>
                        <div className={styles.events}>
                            <div className={styles.event_item}>
                                1 - Başvuru Açılması
                            </div>
                            <div className={styles.event_item}>
                                21 - Başvuru Kapanışı
                            </div>
                            <div className={styles.event_item}>
                                28 - Katılımcıların İlani
                            </div>
                        </div>
                        <div className={styles.month}>
                            Nisan
                        </div>
                        <div className={styles.events}>
                        </div>
                    </div>
                    <div className={styles.line}>

                    </div>
                    <div className={styles.date_item}>
                        <div className={styles.events}>
                        </div>
                        <div className={styles.month}>
                            1 <br/> Mayıs
                        </div>
                        <div className={styles.events+" "+styles.left_align}>
                            <div className={styles.event_item}>
                                Tanışma Toplantısı
                            </div>
                            <div className={styles.event_item}>
                                Elektrik Düzenlemeleri Eğitim
                            </div>
                            <div className={styles.event_item}>
                                Katılımcıların İlani
                            </div>
                        </div>
                    </div>
                    <div className={styles.line}>
                        
                    </div>
                    <div className={styles.date_item}>
                        <div className={styles.events}>
                            <div className={styles.event_item}>
                                Tanışma Toplantısı
                            </div>
                            <div className={styles.event_item}>
                                Elektrik Düzenlemeleri Eğitim
                            </div>
                            <div className={styles.event_item}>
                                Katılımcıların İlani
                            </div>
                        </div>
                        <div className={styles.month}>
                            2 <br/> Mayıs
                        </div>
                        <div className={styles.events}>
                        </div>
                    </div>
                    <div className={styles.line}>
                        
                    </div>
                    <div className={styles.date_item}>
                        <div className={styles.events}>
                        </div>
                        <div className={styles.month}>
                            3 <br/> Mayıs
                        </div>
                        <div className={styles.events+" "+styles.left_align}>
                            <div className={styles.event_item}>
                                Tanışma Toplantısı
                            </div>
                            <div className={styles.event_item}>
                                Elektrik Düzenlemeleri Eğitim
                            </div>
                            <div className={styles.event_item}>
                                Katılımcıların İlani
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* TIMELINE */}

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
                    <div className={styles.button}>
                        <button className={styles.criterion}>Görev Değerlendirme Kriterleri</button>
                    </div>
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
                <div className={styles.wrapper}>
                    <div className={styles.cardRight}>
                        <figure className={styles.snip1192}>
                            <div className={styles.author}>
                                <img src="/images/baris_sanli.jpeg" alt="sq-sample1" />
                                <h5 className={styles.h5}>Barış Sanlı <span className={styles.span}>{t?.energy_policy_center}</span></h5>
                                <Link href="http://barissanli.com" target="_blank" className={styles.p}>barissanli.com</Link>
                                <div className={styles.linkedinArea}>
                                    <Link href="#"><i className="fa-brands fa-linkedin fa-xl w-[24px] h-[24px]" style={{ color: "#478AFF", fontWeight: "700" }}></i></Link>
                                    {/* <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/turan-güzel-6383aa226/">Turan Mete Güzel</a> */}
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div className={styles.cardRight}>
                        <figure className={styles.snip1192}>
                            <div className={styles.author}>
                                <img src="/images/ozan_erdinc.jpeg" alt="sq-sample1" />
                                <h5 className={styles.h5}>Dr. Ozan Erdinç</h5>
                                <p className={styles.uni}>{t?.yildiz_teknik_uni}</p>
                                <p className={styles.status}>{t?.senior}</p>
                                <div className={styles.linkedinArea}>
                                    <Link href="#"><i className="fa-brands fa-linkedin fa-xl w-[24px] h-[24px]" style={{ color: "#478AFF", fontWeight: "700" }}></i></Link>
                                    {/* <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/turan-güzel-6383aa226/">Turan Mete Güzel</a> */}
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div className={styles.cardRight}>
                        <figure className={styles.snip1192}>
                            <div className={styles.author}>
                                <img src="/images/ayse_erenoglu.jpeg" alt="sq-sample1" />
                                <h5 className={styles.h5}>Dr. Ayşe Kübra Erenoğlu</h5>
                                <p className={styles.uni}>{t?.yildiz_teknik_uni}</p>
                                <p className={styles.status}>{t?.treasuser}</p>
                                <div className={styles.linkedinArea}>
                                    <Link href="#"><i className="fa-brands fa-linkedin fa-xl w-[24px] h-[24px]" style={{ color: "#478AFF", fontWeight: "700" }}></i></Link>
                                    {/* <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/turan-güzel-6383aa226/">Turan Mete Güzel</a> */}
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
            {/*HAKEMLER*/}
        </section>
    );
}

export default Hackathon;
