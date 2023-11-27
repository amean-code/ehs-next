import Image from "next/image";
import { useEffect, useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/header.module.css";
import  jwt  from "../node_modules/jsonwebtoken";
import Cookies from "../node_modules/js-cookie";
import Link from "next/link";

// LANGUAGE
import { useRouter } from 'next/router';
import lang from "../lang.json"
// LANGUAGE

function Header() {
  const [mobile_menu, set_mobile_menu] = useState(false);

  const [user,set_user] = useState(null);

  const router = useRouter()

  const { locale, locales, defaultLocale } = router

  const t = lang[locale];


  const changeLanguage = (e) => {
    const locale = e.target.value
    router.push('/', '/', { locale })
  }

  useEffect(()=>{
    console.log('Cookies.get("ehs_user_token")',Cookies.get("ehs_user_token"));
    if(Cookies.get("ehs_user_token")){
      set_user(jwt.decode(Cookies.get("ehs_user_token")));
    }
  },[]);

  return (
    <header className={styles.site_header} >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      {/* <div className={styles.header_top}>
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
      </div> */}
      <div className={styles.header_container}>
        <div className={styles.header_left}>
          <Link href="/" className={styles.header_logo}>
            <Image width={200} height={200} src="/images/logo.png" alt="" />
          </Link>
        </div>
        <div className={styles.header_right}>  
          <Link href="/#about-us">{t?.about_us}</Link>
          <Link href="/#events">{t?.events}</Link>
          <Link href="/#mentoring">{t?.mentoring}</Link>
          <Link href="/sponsors">{t?.sponsors}</Link>
          <Link href="/blog">{t?.blog}</Link>
          <Link href="/#contact-us">{t?.contact_us}</Link>
          <Link href="/hackathon">{t?.hackathon}</Link>
          {
            user?
            <>
              <Link className={styles.button} href="/form">{t?.mentee_form}</Link>
              <Link className={styles.button} href="/university-form">{t?.university_representative_form}</Link>
            </>:
            <>
            <Link className={styles.button} href="/login">{t?.login}</Link>
            <Link className={styles.button} href="/register">{t?.register}</Link>
            </>

          }
          <div className={styles.lang_container}>
              <select
                  className={styles.change_lang}
                  value={locale}
                  onChange={changeLanguage}
              >
                  {locales.map((locale) => {
                  return <option key={locale} value={locale}>{locale.toUpperCase()}</option>
                  })}
              </select>
          </div>
        </div>
        <div onClick={(e)=>{
          e.preventDefault();
          e.stopPropagation();
          set_mobile_menu(!mobile_menu);
        }} className={styles.toggle_btn}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">  <path d="M480 224H32a32 32 0 0 0 0 64h448a32 32 0 0 0 0-64zM32 138.67h448a32 32 0 0 0 0-64H32a32 32 0 0 0 0 64zm448 234.66H32a32 32 0 0 0 0 64h448a32 32 0 0 0 0-64z"/></svg>
        </div>
        {/*mobile menu*/}
        <div className={styles.mobile_menu+" "+(
          mobile_menu?
          styles.open:""
        )} onClick={(e)=>{
          e.preventDefault();
          e.stopPropagation();
        }}>
          <li className={styles.mobile_li}><Link className={styles.mobiler_a} href="#about-us">{t?.about_us}</Link></li>
          <li className={styles.mobile_li}><Link className={styles.mobiler_a} href="#events">{t?.events}</Link></li>
          <li className={styles.mobile_li}><Link className={styles.mobiler_a} href="#mentoring">{t?.mentoring}</Link></li>
          <li className={styles.mobile_li}><Link className={styles.mobiler_a} href="/sponsors">{t?.sponsors}</Link></li>
          <li className={styles.mobile_li}><Link className={styles.mobiler_a} href="#contact-us">{t?.contact_us}</Link></li>
          <li className={styles.mobile_li}><Link className={styles.mobiler_a} href="/hackathon">{t?.hackathon}</Link></li>
          {
            user?
            <>
            
            <li className={styles.mobile_li}>
              <Link className={styles.button} href="/form">Mentee Form</Link>
            </li>
            <li className={styles.mobile_li}>
              <Link className={styles.button} href="/university-form">Universite Temsilci Formu</Link>
            </li>
            </>:
            <>
            <li className={styles.mobile_li}>
              <Link className={styles.button} href="/login">Login</Link>
            </li>
            <li className={styles.mobile_li}>
              <Link className={styles.button} href="/register">Register</Link>
            </li>

            </>

          }
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
