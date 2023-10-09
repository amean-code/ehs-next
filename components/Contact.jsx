import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/App.module.css";

function Contact() {
  const [activeNav, setActiveNav] = useState("");

  return (


    <section className={styles.contact_section}>
      <div className={styles.contact_block}>
        <h2 className={styles.contact_mainTitle}>Let’s meet together and discuss your beautiful future</h2>
        <div className={styles.contact_container}>

          <div className={styles.contact_containLeft}>
            <h2 className={styles.contact_h2}>Contact Me via Form</h2>
            <form className={styles.contact_form}>
              <input className={styles.contact_input} type="text" name="name" placeholder="Your Name" />
              <input className={styles.contact_input} type="mail" name="mail" placeholder="Your E-mail" />
              <input className={styles.contact_input} type="text" name="about" placeholder="Choose about" />
              <textarea className={styles.contact_text} name="message" placeholder="Your message"></textarea>
              <a className={styles.contact_a} href="#" target="_blank" rel="noopener noreferrer">Contact Me</a>
            </form>
          </div>

          <div className={styles.col_lg_5}>
            <div className={styles.contact_one__info}>
              <div className={styles.block_title+" "+styles.text_left}>
                <h3 className={styles.block_title__text+" "+styles.text_capitalize}>Büromuz</h3>
                <p className={styles.block_title__text_two}>Bizlere büromuza gelerek veya telefon veya mail ile ulaşabilirsiniz.</p>
              </div>
              <div className={styles.contact_one__info_single}>
                <h3 className={styles.contact_one__info_title}>Adresimiz</h3>
                <p className={styles.contact_one__info_text}>Üsküdar İçerenköy Yolu Cad. Bodur İş Merkezi No:8 K:9 D: 38 Ataşehir/İstanbul</p>
              </div>
              <div className={styles.contact_one__info_single}>
                <h3 className={styles.contact_one__info_title}>Telefon Numaramız</h3>
                <p className={styles.contact_one__info_text}>İletişim Hattı <a className={styles.contact_a} href="tel:+90 216 577 75 70"><strong className={styles.contact_strong}>+90 123 123 12 12</strong></a></p>
              </div>
              <div className={styles.contact_one__info_single}>
                <h3 className={styles.contact_one__info_title}>Email</h3>
                <p className={styles.contact_one__info_text}><span className={styles.contact_a} href="mailto:support@the-law-firm.org">support@ehs.com</span></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
