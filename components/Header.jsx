import Image from "next/image";
import { useEffect, useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/header.module.css";
import  jwt  from "../node_modules/jsonwebtoken";
import Cookies from "../node_modules/js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";

function Header() {
  const [mobile_menu, set_mobile_menu] = useState(false);

  const [user,set_user] = useState(null);

  const router = useRouter();

  useEffect(()=>{
    if(Cookies.get("emobilite_user_token")){
      set_user(jwt.decode(Cookies.get("emobilite_user_token")));
    }
  },[]);

  return (
    <header className={styles.site_header} >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
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
          <Link href="#about-us">About Us</Link>
          <Link href="#events">Events</Link>
          <Link href="#mentoring">Mentoring</Link>
          <Link href="#contact-us">Contact Us</Link>
        </div>
        <div onClick={(e)=>{
          e.preventDefault();
          e.stopPropagation();
          set_mobile_menu(!mobile_menu);
        }} className={styles.toggle_btn}>
          <i className={
            mobile_menu?
            "fa-solid fa-xmark":
            "fa-solid fa-bars"
          }></i>
        </div>
        {/*mobile menu*/}
        <div className={styles.mobile_menu+" "+(
          mobile_menu?
          styles.open:""
        )} onClick={(e)=>{
          e.preventDefault();
          e.stopPropagation();
        }}>
          <li className={styles.mobile_li}><a className={styles.mobiler_a} href="anasayfa.php">About Us</a></li>
          <li className={styles.mobile_li}><a className={styles.mobiler_a} href="hakkimizda.php">Events</a></li>
          <li className={styles.mobile_li}><a className={styles.mobiler_a} href="contact.php">Mentoring</a></li>
          <li className={styles.mobile_li}><a className={styles.mobiler_a} href="prof.php">Contact Us</a></li>
          <div className={styles.mobile_languages} style={{height:"auto"}}>
            <img className={styles.img} src="/images/tr-buton.svg" alt="" />
            <img className={styles.img} src="/images/us-buton.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
