import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import footerStyle from "../styles/footer.module.css";
import Link from "next/link";

// LANGUAGE
import { useRouter } from 'next/router';
import lang from "../lang.json"
// LANGUAGE
function Footer() {
    // LANGUAGE
    const router = useRouter();
    const { locale } = router;
    const t = lang[locale];
    // LANGUAGE
    const [activeNav, setActiveNav] = useState("");

    return (
        <footer className={footerStyle.footer_section}>
            <link rel="stylesheet" href="styles/footer.module.css" />
            <div className={footerStyle.footer_container}>
                <div className={footerStyle.footer_cta} style={{paddingBottom: "2rem",paddingTop: "2rem"}}>
                    <div className={footerStyle.sponsor_row}>
                        <img className={footerStyle.footer_sponsorImg} src="/images/s1_vareint_logo.webp" alt="" />
                        <img className={footerStyle.footer_sponsorImg} src="/images/s2_smartPulse_logo.webp" alt="" />
                        <img className={footerStyle.footer_sponsorImg} src="/images/s3_foton_logo.webp" alt="" />
                        <img className={footerStyle.footer_sponsorImg} src="/images/s4_pomega_logo.webp" alt="" />
                        <img className={footerStyle.footer_sponsorImg} src="/images/s5_odyssey_logo.webp" alt="" />
                        <img className={footerStyle.footer_sponsorImg} src="/images/s8_solarian_logo.webp" alt="" />
                    </div>
                </div>
                <div className={footerStyle.footer_content} style={{paddingBottom: "3rem",paddingTop: "3rem"}}>
                    <div className={footerStyle.row}>
                        <div className={footerStyle.col_xl_4+" "+footerStyle.col_lg_4+" "+footerStyle.mb_50}>
                            <div className={footerStyle.footer_widget}>
                                <div className={footerStyle.footer_logo}>
                                    <a className={footerStyle.a} href="index.jsx"><img src="/images/logo.png" className={footerStyle.img_fluid} alt="logo" /></a>
                                </div>
                                <div className={footerStyle.footer_text}>
                                    <p className={footerStyle.p}>{t?.who_we_are_text_short}</p>
                                </div>
                                {/* <div className={footerStyle.footer_social_icon}>
                                    <span className={footerStyle.span}>Sosyal Medya</span>
                                    <a href="app/public/uploads/linkedin.svg"><i className="fab fa_facebook_f facebook_bg"></i></a>
                                    <a href="app/public/uploads/twitter.svg"><i className="fab fa_twitter twitter_bg"></i></a>
                                    <a href="app/public/uploads/youtube.svg"><i className="fab fa_google_plus_g google_bg"></i></a>
                                </div> */}
                            </div>
                        </div>
                        <div className={footerStyle.col_xl_4+" "+footerStyle.col_lg_4+" "+footerStyle.col_md_6+" "+footerStyle.mb_30} style={{display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"60px"}}>
                            <div className={footerStyle.footer_widget}>
                                <div className={footerStyle.footer_widget_heading}>
                                    <h3 className={footerStyle.h3}>{t?.links}</h3>
                                </div>
                                <ul className={footerStyle.ul}>
                                    <li className={footerStyle.li}><Link className={footerStyle.a} href="/#about-us">{t?.about_us}</Link></li>
                                    <li className={footerStyle.li}><Link className={footerStyle.a} href="/#events">{t?.events}</Link></li>
                                    <li className={footerStyle.li}><Link className={footerStyle.a} href="/#mentoring">{t?.mentoring}</Link></li>
                                    <li className={footerStyle.li}><Link className={footerStyle.a} href="/sponsors">{t?.sponsors}</Link></li>
                                    <li className={footerStyle.li}><Link className={footerStyle.a} href="/blog">{t?.blog}</Link></li>
                                    <li className={footerStyle.li}><Link className={footerStyle.a} href="/#contact-us">{t?.contact_us}</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={footerStyle.col_xl_4+" "+footerStyle.col_lg_4+" "+footerStyle.col_md_6+" "+footerStyle.mb_50}>
                            <div className={footerStyle.footer_widget}>
                                <div className={footerStyle.footer_widget_heading}>
                                    <h3 className={footerStyle.h3}>{t?.subscribe}</h3>
                                </div>
                                <div className={footerStyle.footer_text+" "+footerStyle.mb_25}>
                                    <p className={footerStyle.p}>{t?.suggestion}</p>
                                </div>
                                <div className={footerStyle.subscribe_form}>
                                    <form className={footerStyle.form} action="#">
                                        <input className={footerStyle.input} type="text" placeholder="Email Address" />
                                        <button className={footerStyle.button}><img src="/images/send.png" alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={footerStyle.copyright_area}>
                <div className={footerStyle.footer_container}>
                    <div className={footerStyle.footer_row}>
                        <div className="col_xl_6 col_lg_6 text_center text_lg_left">
                            <div className={footerStyle.copyright_text}>
                                <p className={footerStyle.p}>{t?.copyright} &copy; 2023 <a className={footerStyle.a} href="https://codepen.io/anupkumar92/">AMEAN</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
