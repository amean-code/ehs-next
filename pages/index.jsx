import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/App.module.css"
export default function Home() {
  return (
    <>
      <Header />

      <section>
        <div className={styles.main_container}>
          <div className={styles.containLeft}>
            <Image width={200} height={200} src="/images/containLeft.jpg" alt="" />
          </div>
          <div className={styles.containRight}>
            <h4>WHAT WE DO</h4>
            <h2>Our Services</h2>
            <p>Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.</p>
          </div>
        </div>
      </section>
      <section className={styles.sectionTwo}>
        <div className={styles.containerNumber}>
          <ul className={styles.numberList}>
            <li className={styles.list}>
              <h1 className={styles.h1}>600+</h1>
              <h4 className={styles.h4}>Trainings</h4>
            </li>
            <li className={styles.list}>
              <h1 className={styles.h1}>120k</h1>
              <h4 className={styles.h4}>Participants</h4>
            </li>
            <li className={styles.list}>
              <h1 className={styles.h1}>85</h1>
              <h4 className={styles.h4}>Companies</h4>
            </li>
            <li className={styles.list}>
              <h1 className={styles.h1}>50k</h1>
              <h4 className={styles.h4}>Topics</h4>
            </li>
            <li className={styles.list}>
              <h1 className={styles.h1}>20</h1>
              <h4 className={styles.h4}>Speakers</h4>
            </li>
            <li className={styles.list}>
              <h1 className={styles.h1}>100+</h1>
              <h4 className={styles.numberList}>Countries</h4>
            </li>
          </ul>
        </div>
      </section>
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
                <i className="fa-brands fa-linkedin fa-xl" style={{color: "#166bfe"}}></i>
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
                <i className="fa-brands fa-linkedin fa-xl" style={{color: "#166bfe"}}></i>
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
                <i className="fa-brands fa-linkedin fa-xl" style={{color: "#166bfe"}}></i>
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
                <i className="fa-brands fa-linkedin fa-xl" style={{color: "#166bfe"}}></i>
                <a target="_blank" href="https://www.linkedin.com/in/turan-güzel-6383aa226/">Turan Mete Güzel</a>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
