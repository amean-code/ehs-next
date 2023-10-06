import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/header.module.css";

function Header() {
  const [activeNav, setActiveNav] = useState("");

  return (
    <header className={styles.site_header} >
      <div className={styles.header_top}>
        <div className={styles.header_top_left}>
          <div className={styles.whatsapp}>
            <Image width={20} height={20} className={styles.whatsapp_logo} src="/images/whatsapp.svg" alt="" />
            <p>+90 (123) 123 12 12</p>
          </div>
          <div className={styles.email}>
            <Image width={20} height={20} className={styles.email_logo} src="/images/gmail.svg" alt="" />
            <p>ehs@gmail.com</p>
          </div>
        </div>
        <div className={styles.header_top_right}>
          <div className={styles.languages}>
            <Image width={200} height={200} src="/images/tr-buton.svg" alt="" />
            <Image width={200} height={200} src="/images/us-buton.svg" alt="" />
          </div>
          <div className={styles.social_media}>
            <Image width={200} height={200} src="/images/linkedin.svg" alt="" />
            <Image width={200} height={200} src="/images/instagram.svg" alt="" />
            <Image width={200} height={200} src="/images/youtube.svg" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.header_container}>
        <div className={styles.header_left}>
          <div className={styles.header_logo}>
            <Image width={200} height={200} src="/images/logo.png" alt="" />
          </div>
        </div>
        <div className={styles.header_right}>
          <a href="anasayfa.php">About Us</a>
          <a href="hakkimizda.php">Events</a>
          <a href="contact.php">Mentoring</a>
          <a href="prof.php">Contact Us</a>
        </div>

      </div>
    </header>
  );
}

export default Header;
