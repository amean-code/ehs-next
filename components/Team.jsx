import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/App.module.css";
import Link from "next/link";

function Team() {
  const [activeNav, setActiveNav] = useState("");

  return (
    <section className={styles.section}>
        <div className={styles.text_center}>
          <h2 className={styles.title_h2}>Our Team</h2>
          <div className={styles.small_border}></div>
        </div>

        
        <div className={styles.cardArea}>
          {/* SEMANUR */}
          <div className={styles.cardRight}>
            <figure className={styles.snip1192}>
              <div className={styles.author}>
                <img src="" alt="sq-sample1" />
                <div className={styles.linkedinArea}>
                <Link href="#"><i className="fa-brands fa-linkedin fa-xl w-[24px] h-[24px]" style={{ color: "#166bfe" }}></i></Link>
                {/* <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/turan-güzel-6383aa226/">Turan Mete Güzel</a> */}
              </div>
                <h5 className={styles.h5}>Semanur Sancar <span className={styles.span}>Founding Partner & Academy Manager</span></h5>
              </div>
              <p className={styles.briefbioText}>Must explain to you how mistaken idea denouncing pleasure & praising pain was born & we will give expound actual human happiness.</p>
             
            </figure>
          </div>

          {/* YEABSIRA */}
          <div className={styles.cardRight}>
            <figure className={styles.snip1192}>
              <div className={styles.author}>
                <img src="https://st.ourhtmldemo.com/new/Life_Guide/images/testimonial/1.png" alt="sq-sample1" />
                <div className={styles.linkedinArea}>
                <Link href="#"><i className="fa-brands fa-linkedin fa-xl w-[24px] h-[24px]" style={{ color: "#166bfe" }}></i></Link>
                {/* <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/turan-güzel-6383aa226/">Turan Mete Güzel</a> */}
              </div>
                <h5 className={styles.h5}>Yeabsira Yetagessu <span className={styles.span}>Founding Partner & Academy Manager</span></h5>
              </div>
              <p className={styles.briefbioText}>Must explain to you how mistaken idea denouncing pleasure & praising pain was born & we will give expound actual human happiness.</p>
             
            </figure>
          </div>

          {/* CAN ARSLAN */}
          <div className={styles.cardRight}>
            <figure className={styles.snip1192}>
              <div className={styles.author}>
                <img src="https://st.ourhtmldemo.com/new/Life_Guide/images/testimonial/1.png" alt="sq-sample1" />
                <div className={styles.linkedinArea}>
                <Link href="#"><i className="fa-brands fa-linkedin fa-xl w-[24px] h-[24px]" style={{ color: "#166bfe" }}></i></Link>
                {/* <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/turan-güzel-6383aa226/">Turan Mete Güzel</a> */}
              </div>
                <h5 className={styles.h5}> Can Arslan <span className={styles.span}> Stratejist</span></h5>
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

export default Team;
