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
                    <Image className={styles.slider_imageleft} width={200} height={200} src="/images/shape.jpeg" alt="" />
                </div>
            </div>
            {/*SLIDER*/}
            <div className={styles.text_center}>
          <h2 className={styles.title_h2}>Our Team</h2>
          <div className={styles.small_border}></div>
        </div>

        
        <div className={styles.cardArea}>
          {/* SEMANUR */}
          <div className={styles.cardRight}>
            <figure className={styles.snip1192}>
              <div className={styles.author}>
                <img src="https://st.ourhtmldemo.com/new/Life_Guide/images/testimonial/1.png" alt="sq-sample1" />
                <div className={styles.linkedinArea}>
                <Link href="#"><i className="fa-brands fa-linkedin fa-xl w-[24px] h-[24px]" style={{ color: "#166bfe" }}></i></Link>
                {/* <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/turan-güzel-6383aa226/">Turan Mete Güzel</a> */}
              </div>
                <h5 className={styles.h5}>Semanur Sancar <span className={styles.span}>Founding Partner & Academy Manager</span></h5>
              </div>
              <p className={styles.briefbioText}>Must explain to you how mistaken idea denouncing pleasure & praising pain was born & we will give expound actual human happiness.</p>
             
            </figure>
          </div>

          
        </div>

        
        <div className={styles.cardArea}>
          {/* OPERASYON */}
          <div className={styles.cardRight}>
            <figure className={styles.snip1192}>
              <div className={styles.author}>
                <img src="https://st.ourhtmldemo.com/new/Life_Guide/images/testimonial/1.png" alt="sq-sample1" />
                <div className={styles.linkedinArea}>
                <Link href="#"><i className="fa-brands fa-linkedin fa-xl w-[24px] h-[24px]" style={{ color: "#166bfe" }}></i></Link>
                {/* <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/turan-güzel-6383aa226/">Turan Mete Güzel</a> */}
              </div>
                <h5 className={styles.h5}> ######## <span className={styles.span}>Operations Manager</span></h5>
              </div>
              <p className={styles.briefbioText}>Must explain to you how mistaken idea denouncing pleasure & praising pain was born & we will give expound actual human happiness.</p>
             
            </figure>
          </div>

          {/* ILETISIM */}
          <div className={styles.cardRight}>
            <figure className={styles.snip1192}>
              <div className={styles.author}>
                <img src="https://st.ourhtmldemo.com/new/Life_Guide/images/testimonial/1.png" alt="sq-sample1" />
                <h5 className={styles.h5}>Teena Venanda <span className={styles.span}>CEO/Founder</span></h5>
              </div>
              <p className={styles.briefbioText}>Must explain to you how mistaken idea denouncing pleasure & praising pain was born & we will give expound actual human happiness.</p>
              <div className={styles.linkedinArea}>
                <Link href="#"><i className="fa-brands fa-linkedin fa-xl w-[24px] h-[24px]" style={{ color: "#166bfe" }}></i></Link>
                {/* <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/turan-güzel-6383aa226/">Turan Mete Güzel</a> */}
              </div>
            </figure>
          </div>
        </div>
        </section>
    );
}

export default Hackathon;
