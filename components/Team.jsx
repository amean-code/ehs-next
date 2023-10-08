import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/App.module.css";

function Team() {
  const [activeNav, setActiveNav] = useState("");

  return (
    <section>
        <div className={styles.cardArea}>
          <link rel="stylesheet" href="styles/contact.module.css" />
          <div className={styles.cardRight}>
            <figure className={styles.snip1192}>
              <div className={styles.author}>
                <img src="https://st.ourhtmldemo.com/new/Life_Guide/images/testimonial/1.png" alt="sq-sample1" />
                <h5>Teena Venanda <span>CEO/Founder</span></h5>
              </div>
              <p>Must explain to you how mistaken idea denouncing pleasure & praising pain was born & we will give expound actual human happiness.</p>
              <div className={styles.linkedinArea}>
                <i className="fa-brands fa-linkedin fa-xl" style={{ color: "#166bfe" }}></i>
                <a target="_blank" href="https://www.linkedin.com/in/turan-güzel-6383aa226/">Turan Mete Güzel</a>
              </div>
            </figure>
          </div>
          <div className={styles.cardRight}>
            <figure className={styles.snip1192}>
              <div className={styles.author}>
                <img src="https://st.ourhtmldemo.com/new/Life_Guide/images/testimonial/1.png" alt="sq-sample1" />
                <h5 className={styles.h5}>Teena Venanda <span className={styles.span}>CEO/Founder</span></h5>
              </div>
              <p>Must explain to you how mistaken idea denouncing pleasure & praising pain was born & we will give expound actual human happiness.</p>
              <div className={styles.linkedinArea}>
                <i className="fa-brands fa-linkedin fa-xl" style={{ color: "#166bfe" }}></i>
                <a target="_blank" href="https://www.linkedin.com/in/turan-güzel-6383aa226/">Turan Mete Güzel</a>
              </div>
            </figure>
          </div>
        </div>
        <div className={styles.cardArea}>
          <div className={styles.cardRight}>
            <figure className={styles.snip1192}>
              <div className={styles.author}>
                <img src="https://st.ourhtmldemo.com/new/Life_Guide/images/testimonial/1.png" alt="sq-sample1" />
                <h5>Teena Venanda <span>CEO/Founder</span></h5>
              </div>
              <p>Must explain to you how mistaken idea denouncing pleasure & praising pain was born & we will give expound actual human happiness.</p>
              <div className={styles.linkedinArea}>
                <i className="fa-brands fa-linkedin fa-xl" style={{ color: "#166bfe" }}></i>
                <a target="_blank" href="https://www.linkedin.com/in/turan-güzel-6383aa226/">Turan Mete Güzel</a>
              </div>
            </figure>
          </div>
          <div className={styles.cardRight}>
            <figure className={styles.snip1192}>
              <div className={styles.author}>
                <img src="https://st.ourhtmldemo.com/new/Life_Guide/images/testimonial/1.png" alt="sq-sample1" />
                <h5>Teena Venanda <span>CEO/Founder</span></h5>
              </div>
              <p>Must explain to you how mistaken idea denouncing pleasure & praising pain was born & we will give expound actual human happiness.</p>
              <div className={styles.linkedinArea}>
                <i className="fa-brands fa-linkedin fa-xl" style={{ color: "#166bfe" }}></i>
                <a target="_blank" href="https://www.linkedin.com/in/turan-güzel-6383aa226/">Turan Mete Güzel</a>
              </div>
            </figure>
          </div>
        </div>
      </section>
  );
}

export default Team;
