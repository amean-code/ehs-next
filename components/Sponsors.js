import Link from "next/link";
import styles from "../styles/sponsors.module.css";
import Contact from "./Contact";

// LANGUAGE
import { useRouter } from 'next/router';
import lang from "../lang.json"
// LANGUAGE
function Sponsors() {

  // LANGUAGE
  const router = useRouter();
  const { locale } = router;
  const t = lang[locale];
  // LANGUAGE
    return (
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.title_1}>
                    {t?.sponsor_partner}
                </div>
                <div className={styles.title_2}>
                    {t?.sponsors}
                </div>
                <div className={styles.description}>
                    {t?.sponsors_text}
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.row}>
                    <div className={styles.card}>
                        <div className={styles.name}>
                            {t?.main_sponsor}
                        </div>
                        <div className={styles.info}>
                            Aute sunt aute occaecat eu veniam sunt laboris aute reprehenderit aliquip.
                        </div>
                        <div className={styles.card_title}>
                            {t?.sponsor_rights}
                        </div>
                        <div className={styles.list}>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    {t?.right_text_1}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    {t?.right_text_2}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    {t?.right_text_3}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    {t?.right_text_4}
                                </div>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <Link href="#contact-us" className={styles.button}>
                                {t?.more_info}
                            </Link>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.name}>
                            {t?.sponsor}
                        </div>
                        <div className={styles.info}>
                            Aute sunt aute occaecat eu veniam sunt laboris aute reprehenderit aliquip.
                        </div>
                        <div className={styles.card_title}>
                            {t?.sponsor_rights}
                        </div>
                        <div className={styles.list}>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    {t?.right_text_5}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    {t?.right_text_1}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    {t?.right_text_4}
                                </div>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <Link href="#contact-us" className={styles.button}>
                                {t?.more_info}
                            </Link>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.name}>
                            {t?.marathon_sponsor}
                        </div>
                        <div className={styles.info}>
                            Aute sunt aute occaecat eu veniam sunt laboris aute reprehenderit aliquip.
                        </div>
                        <div className={styles.card_title}>
                            {t?.sponsor_rights}
                        </div>
                        <div className={styles.list}>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    {t?.right_text_6}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    {t?.right_text_4}
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    {t?.right_text_6}
                                </div>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <Link href="#contact-us" className={styles.button}>
                                {t?.more_info}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.title_3} style={{textAlign:"center"}}>
                    {t?.year_sponsor_2022}
                </div>
                <div className={styles.title_2} style={{textAlign:"center",color:"black"}}>
                    {t?.main_sponsors}
                </div>
                <div className={styles.row}>
                    <div className={styles.gallery} style={{gridTemplateColumns:"1fr 1fr"}}>
                        <div className={styles.gallery_image} style={{padding:"20px"}}>
                            <img style={{minWidth:"150px"}} src="/images/s1_vareint_logo.webp" />
                        </div>
                        <div className={styles.gallery_image}>
                            <img style={{minWidth:"150px"}} src="/images/s2_smartPulse_logo.webp" />
                        </div>
                    </div>
                </div>
                <div className={styles.title_2} style={{textAlign:"center",color:"black"}}>
                    {t?.sponsors}
                </div>
                <div className={styles.row}>
                    <div className={styles.gallery} style={{gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
                        <div className={styles.gallery_image} style={{padding: "20px"}}>
                            <img style={{minWidth:"100px"}} src="/images/s8_solarian_logo.webp" />
                        </div>
                        <div className={styles.gallery_image} style={{padding: "20px"}}>
                            <img style={{minWidth:"100px"}} src="/images/s1_vareint_logo.webp" />
                        </div>
                        <div className={styles.gallery_image} style={{padding: "20px"}}>
                            <img style={{minWidth:"100px"}} src="/images/s6_gelecekbilimde_logo.webp" />
                        </div>
                        <div className={styles.gallery_image} style={{padding: "20px"}}>
                            <img style={{minWidth:"100px"}} src="/images/s4_pomega_logo.webp" />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.title_3} style={{textAlign:"center"}}>
                    {t?.year_sponsor_2023}
                </div>
                <div className={styles.title_2} style={{textAlign:"center",color:"black"}}>
                    {t?.main_sponsor}
                </div>
                <div className={styles.row}>
                    <div className={styles.gallery} style={{gridTemplateColumns:"1fr 1fr"}}>
                        <div className={styles.gallery_image} style={{padding:"20px"}}>
                            <img style={{minWidth:"150px"}} src="/images/s5_odyssey_logo.webp" />
                        </div>
                        <div className={styles.gallery_image}>
                            <img style={{minWidth:"150px"}} src="/images/s2_smartPulse_logo.webp" />
                        </div>
                    </div>
                </div>
                <div className={styles.title_2} style={{textAlign:"center",color:"black"}}>
                    {t?.sponsor}
                </div>
                <div className={styles.row}>
                    <div className={styles.gallery} style={{gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
                        <div className={styles.gallery_image} style={{padding: "20px"}}>
                            <img style={{minWidth:"100px"}} src="/images/s1_vareint_logo.webp" />
                        </div>
                        <div className={styles.gallery_image} style={{padding: "20px"}}>
                            <img style={{minWidth:"100px"}} src="/images/s6_gelecekbilimde_logo.webp" />
                        </div>
                        <div className={styles.gallery_image} style={{padding: "20px"}}>
                            <img style={{minWidth:"100px"}} src="/images/s2_smartPulse_logo.webp" />
                        </div>
                        <div className={styles.gallery_image} style={{padding: "20px"}}>
                            <img style={{minWidth:"100px"}} src="/images/s4_pomega_logo.webp" />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.title_2}>
                    {t?.partners}
                </div>
                <div className={styles.description}>
                    {t?.partners_text}
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.title_3} style={{textAlign:"center"}}>
                    {t?.year_partners_2022}
                </div>
                <div className={styles.row}>
                    <div className={styles.gallery} style={{gridTemplateColumns:"1fr 1fr"}}>
                        <div className={styles.gallery_image} style={{padding:"20px"}}>
                            <img style={{minWidth:"150px"}} src="/images/s2_smartPulse_logo.webp" />
                        </div>
                        <div className={styles.gallery_image} style={{padding:"20px"}}>
                            <img style={{minWidth:"150px"}} src="/images/s4_pomega_logo.webp" />
                        </div>
                        <div className={styles.gallery_image} style={{padding:"20px"}}>
                            <img style={{minWidth:"150px"}} src="/images/s6_gelecekbilimde_logo.webp" />
                        </div>
                        <div className={styles.gallery_image} style={{padding:"20px"}}>
                            <img style={{minWidth:"150px"}} src="/images/s1_vareint_logo.webp" />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.title_3} style={{textAlign:"center"}}>
                    {t?.year_partners_2023}
                </div>
                <div className={styles.row}>
                    <div className={styles.gallery} style={{gridTemplateColumns:"1fr 1fr"}}>
                        <div className={styles.gallery_image} style={{padding:"20px"}}>
                            <img style={{minWidth:"150px"}} src="/images/s1_vareint_logo.webp" />
                        </div>
                        <div className={styles.gallery_image} style={{padding:"20px"}}>
                            <img style={{minWidth:"150px"}} src="/images/s2_smartPulse_logo.webp" />
                        </div>
                        <div className={styles.gallery_image} style={{padding:"20px"}}>
                            <img style={{minWidth:"150px"}} src="/images/s6_gelecekbilimde_logo.webp" />
                        </div>
                        <div className={styles.gallery_image} style={{padding:"20px"}}>
                            <img style={{minWidth:"150px"}} src="/images/s4_pomega_logo.webp" />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.title_2}>
                    {t?.academic}
                </div>
                <div className={styles.akademik_birlikler}>
                    <div className={styles.item}>
                        <div className={styles.profile}>
                            <img src="/images/ayse_erenoglu.jpeg" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                Ayşe Kübra Erenoğlu
                            </div>
                            <div className={styles.university}>
                                Yıldız Teknik {t?.university}
                            </div>
                            <div className={styles.links}>
                                <Link href="" className={styles.link_item}>
                                    <svg style={{fill:"#0474B3"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs/><path d="M18.33 0C19.251 0 20 .748 20 1.67v16.66A1.67 1.67 0 0118.33 20H1.67A1.67 1.67 0 010 18.33V1.67C0 .749.748 0 1.67 0h16.66zm-4.811 7.5c-1.42 0-2.39.627-2.823 1.356l-.071.13V7.625H7.917v9.583h2.916v-4.642c0-1.556.573-2.545 1.95-2.545.95 0 1.349.84 1.381 2.337l.003.208v4.642h2.916v-5.293c0-2.857-.683-4.415-3.564-4.415zm-7.686 0H2.917v9.583h2.916V7.5zm-1.458-5a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z" fillRule="evenodd"/></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.profile}>
                            <img src="/images/ozan_erdinc.jpeg" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                Ozan Erdinç
                            </div>
                            <div className={styles.university}>
                                Yıldız Teknik {t?.university}
                            </div>
                            <div className={styles.links}>
                                <Link href="" className={styles.link_item}>
                                    <svg style={{fill:"#0474B3"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs/><path d="M18.33 0C19.251 0 20 .748 20 1.67v16.66A1.67 1.67 0 0118.33 20H1.67A1.67 1.67 0 010 18.33V1.67C0 .749.748 0 1.67 0h16.66zm-4.811 7.5c-1.42 0-2.39.627-2.823 1.356l-.071.13V7.625H7.917v9.583h2.916v-4.642c0-1.556.573-2.545 1.95-2.545.95 0 1.349.84 1.381 2.337l.003.208v4.642h2.916v-5.293c0-2.857-.683-4.415-3.564-4.415zm-7.686 0H2.917v9.583h2.916V7.5zm-1.458-5a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z" fillRule="evenodd"/></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.profile}>
                            <img src="/images/ersan_senturk.jpeg" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                Ersan Şentürk
                            </div>
                            <div className={styles.university}>
                                Yıldız Teknik {t?.university}
                            </div>
                            <div className={styles.links}>
                                <Link href="" className={styles.link_item}>
                                    <svg style={{fill:"#0474B3"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs/><path d="M18.33 0C19.251 0 20 .748 20 1.67v16.66A1.67 1.67 0 0118.33 20H1.67A1.67 1.67 0 010 18.33V1.67C0 .749.748 0 1.67 0h16.66zm-4.811 7.5c-1.42 0-2.39.627-2.823 1.356l-.071.13V7.625H7.917v9.583h2.916v-4.642c0-1.556.573-2.545 1.95-2.545.95 0 1.349.84 1.381 2.337l.003.208v4.642h2.916v-5.293c0-2.857-.683-4.415-3.564-4.415zm-7.686 0H2.917v9.583h2.916V7.5zm-1.458-5a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z" fillRule="evenodd"/></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.profile}>
                            <img src="/images/gokturk_poyrazoglu.jpeg" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                Göktürk Poyrazoğlu
                            </div>
                            <div className={styles.university}>
                                Özyeğin {t?.university}
                            </div>
                            <div className={styles.links}>
                                <Link href="" className={styles.link_item}>
                                    <svg style={{fill:"#0474B3"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs/><path d="M18.33 0C19.251 0 20 .748 20 1.67v16.66A1.67 1.67 0 0118.33 20H1.67A1.67 1.67 0 010 18.33V1.67C0 .749.748 0 1.67 0h16.66zm-4.811 7.5c-1.42 0-2.39.627-2.823 1.356l-.071.13V7.625H7.917v9.583h2.916v-4.642c0-1.556.573-2.545 1.95-2.545.95 0 1.349.84 1.381 2.337l.003.208v4.642h2.916v-5.293c0-2.857-.683-4.415-3.564-4.415zm-7.686 0H2.917v9.583h2.916V7.5zm-1.458-5a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z" fillRule="evenodd"/></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.profile}>
                            <img src="/images/yavuz_ates.jpeg" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                Yavuz Ateş
                            </div>
                            <div className={styles.university}>
                                Manisa Celal Bayar {t?.university}
                            </div>
                            <div className={styles.links}>
                                <Link href="" className={styles.link_item}>
                                    <svg style={{fill:"#0474B3"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs/><path d="M18.33 0C19.251 0 20 .748 20 1.67v16.66A1.67 1.67 0 0118.33 20H1.67A1.67 1.67 0 010 18.33V1.67C0 .749.748 0 1.67 0h16.66zm-4.811 7.5c-1.42 0-2.39.627-2.823 1.356l-.071.13V7.625H7.917v9.583h2.916v-4.642c0-1.556.573-2.545 1.95-2.545.95 0 1.349.84 1.381 2.337l.003.208v4.642h2.916v-5.293c0-2.857-.683-4.415-3.564-4.415zm-7.686 0H2.917v9.583h2.916V7.5zm-1.458-5a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z" fillRule="evenodd"/></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.profile}>
                            <img src="/images/kaan_tutus.jpeg" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                Kaan Tutuş
                            </div>
                            <div className={styles.university}>
                                Manisa Celal Bayar {t?.university}
                            </div>
                            <div className={styles.links}>
                                <Link href="" className={styles.link_item}>
                                    <svg style={{fill:"#0474B3"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs/><path d="M18.33 0C19.251 0 20 .748 20 1.67v16.66A1.67 1.67 0 0118.33 20H1.67A1.67 1.67 0 010 18.33V1.67C0 .749.748 0 1.67 0h16.66zm-4.811 7.5c-1.42 0-2.39.627-2.823 1.356l-.071.13V7.625H7.917v9.583h2.916v-4.642c0-1.556.573-2.545 1.95-2.545.95 0 1.349.84 1.381 2.337l.003.208v4.642h2.916v-5.293c0-2.857-.683-4.415-3.564-4.415zm-7.686 0H2.917v9.583h2.916V7.5zm-1.458-5a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z" fillRule="evenodd"/></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.profile}>
                            <img src="/images/alper_cicek.png" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                Alper Çiçek
                            </div>
                            <div className={styles.university}>
                                Trakya {t?.university}
                            </div>
                            <div className={styles.links}>
                                <Link href="" className={styles.link_item}>
                                    <svg style={{fill:"#0474B3"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs/><path d="M18.33 0C19.251 0 20 .748 20 1.67v16.66A1.67 1.67 0 0118.33 20H1.67A1.67 1.67 0 010 18.33V1.67C0 .749.748 0 1.67 0h16.66zm-4.811 7.5c-1.42 0-2.39.627-2.823 1.356l-.071.13V7.625H7.917v9.583h2.916v-4.642c0-1.556.573-2.545 1.95-2.545.95 0 1.349.84 1.381 2.337l.003.208v4.642h2.916v-5.293c0-2.857-.683-4.415-3.564-4.415zm-7.686 0H2.917v9.583h2.916V7.5zm-1.458-5a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z" fillRule="evenodd"/></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.profile}>
                            <img src="/images/akin_tascıkaraoglu.jpeg" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                Akın Taşcıkaraoğlu
                            </div>
                            <div className={styles.university}>
                                Muğla Sıtkı Koçman {t?.university}
                            </div>
                            <div className={styles.links}>
                                <Link href="" className={styles.link_item}>
                                    <svg style={{fill:"#0474B3"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs/><path d="M18.33 0C19.251 0 20 .748 20 1.67v16.66A1.67 1.67 0 0118.33 20H1.67A1.67 1.67 0 010 18.33V1.67C0 .749.748 0 1.67 0h16.66zm-4.811 7.5c-1.42 0-2.39.627-2.823 1.356l-.071.13V7.625H7.917v9.583h2.916v-4.642c0-1.556.573-2.545 1.95-2.545.95 0 1.349.84 1.381 2.337l.003.208v4.642h2.916v-5.293c0-2.857-.683-4.415-3.564-4.415zm-7.686 0H2.917v9.583h2.916V7.5zm-1.458-5a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z" fillRule="evenodd"/></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.profile}>
                            <img src="/images/ibrahim_sengor.jpeg" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                İbrahim Şengör
                            </div>
                            <div className={styles.university}>
                                University College Cork
                            </div>
                            <div className={styles.links}>
                                <Link href="" className={styles.link_item}>
                                    <svg style={{fill:"#0474B3"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs/><path d="M18.33 0C19.251 0 20 .748 20 1.67v16.66A1.67 1.67 0 0118.33 20H1.67A1.67 1.67 0 010 18.33V1.67C0 .749.748 0 1.67 0h16.66zm-4.811 7.5c-1.42 0-2.39.627-2.823 1.356l-.071.13V7.625H7.917v9.583h2.916v-4.642c0-1.556.573-2.545 1.95-2.545.95 0 1.349.84 1.381 2.337l.003.208v4.642h2.916v-5.293c0-2.857-.683-4.415-3.564-4.415zm-7.686 0H2.917v9.583h2.916V7.5zm-1.458-5a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z" fillRule="evenodd"/></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.profile}>
                            <img src="/images/bilal_canol.jpeg" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                Bilal Canol
                            </div>
                            <div className={styles.university}>
                                Kocaeli {t?.university}
                            </div>
                            <div className={styles.links}>
                                <Link href="" className={styles.link_item}>
                                    <svg style={{fill:"#0474B3"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs/><path d="M18.33 0C19.251 0 20 .748 20 1.67v16.66A1.67 1.67 0 0118.33 20H1.67A1.67 1.67 0 010 18.33V1.67C0 .749.748 0 1.67 0h16.66zm-4.811 7.5c-1.42 0-2.39.627-2.823 1.356l-.071.13V7.625H7.917v9.583h2.916v-4.642c0-1.556.573-2.545 1.95-2.545.95 0 1.349.84 1.381 2.337l.003.208v4.642h2.916v-5.293c0-2.857-.683-4.415-3.564-4.415zm-7.686 0H2.917v9.583h2.916V7.5zm-1.458-5a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z" fillRule="evenodd"/></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.profile}>
                            <img src="/images/sitki_guner.jpeg" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                Sıtkı Güner
                            </div>
                            <div className={styles.university}>
                                Erzurum Teknik {t?.university}
                            </div>
                            <div className={styles.links}>
                                <Link href="" className={styles.link_item}>
                                    <svg style={{fill:"#0474B3"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs/><path d="M18.33 0C19.251 0 20 .748 20 1.67v16.66A1.67 1.67 0 0118.33 20H1.67A1.67 1.67 0 010 18.33V1.67C0 .749.748 0 1.67 0h16.66zm-4.811 7.5c-1.42 0-2.39.627-2.823 1.356l-.071.13V7.625H7.917v9.583h2.916v-4.642c0-1.556.573-2.545 1.95-2.545.95 0 1.349.84 1.381 2.337l.003.208v4.642h2.916v-5.293c0-2.857-.683-4.415-3.564-4.415zm-7.686 0H2.917v9.583h2.916V7.5zm-1.458-5a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z" fillRule="evenodd"/></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.profile}>
                            <img src="/images/asiye_kaymaz.jpeg" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                Asiye Kaymaz
                            </div>
                            <div className={styles.university}>
                                Fatih Sultan Mehmet Vakıf {t?.university}
                            </div>
                            <div className={styles.links}>
                                <Link href="" className={styles.link_item}>
                                    <svg style={{fill:"#0474B3"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs/><path d="M18.33 0C19.251 0 20 .748 20 1.67v16.66A1.67 1.67 0 0118.33 20H1.67A1.67 1.67 0 010 18.33V1.67C0 .749.748 0 1.67 0h16.66zm-4.811 7.5c-1.42 0-2.39.627-2.823 1.356l-.071.13V7.625H7.917v9.583h2.916v-4.642c0-1.556.573-2.545 1.95-2.545.95 0 1.349.84 1.381 2.337l.003.208v4.642h2.916v-5.293c0-2.857-.683-4.415-3.564-4.415zm-7.686 0H2.917v9.583h2.916V7.5zm-1.458-5a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z" fillRule="evenodd"/></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.profile}>
                            <img src="/images/baris_sanli.jpeg" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                Barış Sanlı
                            </div>
                            <div className={styles.university}>
                                
                            </div>
                            <div className={styles.links}>
                                <Link href="" className={styles.link_item}>
                                    <svg style={{fill:"#0474B3"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs/><path d="M18.33 0C19.251 0 20 .748 20 1.67v16.66A1.67 1.67 0 0118.33 20H1.67A1.67 1.67 0 010 18.33V1.67C0 .749.748 0 1.67 0h16.66zm-4.811 7.5c-1.42 0-2.39.627-2.823 1.356l-.071.13V7.625H7.917v9.583h2.916v-4.642c0-1.556.573-2.545 1.95-2.545.95 0 1.349.84 1.381 2.337l.003.208v4.642h2.916v-5.293c0-2.857-.683-4.415-3.564-4.415zm-7.686 0H2.917v9.583h2.916V7.5zm-1.458-5a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z" fillRule="evenodd"/></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>  
            </section>
            <div id="contact-us" style={{width:"100%"}}>
                <Contact />
            </div>
        </div>
    );
}

export default Sponsors;
