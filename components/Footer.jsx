import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import footerStyle from "../styles/footer.module.css";

function Footer() {
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
                                    <p className={footerStyle.p}>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.</p>
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
                                    <h3 className={footerStyle.h3}>Links</h3>
                                </div>
                                <ul className={footerStyle.ul}>
                                    <li className={footerStyle.li}><a className={footerStyle.a} href="#">About Us</a></li>
                                    <li className={footerStyle.li}><a className={footerStyle.a} href="#">Events</a></li>
                                    <li className={footerStyle.li}><a className={footerStyle.a} href="#">Mentoring</a></li>
                                    <li className={footerStyle.li}><a className={footerStyle.a} href="#">Sponsors</a></li>
                                    <li className={footerStyle.li}><a className={footerStyle.a} href="#">Blog</a></li>
                                    <li className={footerStyle.li}><a className={footerStyle.a} href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={footerStyle.col_xl_4+" "+footerStyle.col_lg_4+" "+footerStyle.col_md_6+" "+footerStyle.mb_50}>
                            <div className={footerStyle.footer_widget}>
                                <div className={footerStyle.footer_widget_heading}>
                                    <h3 className={footerStyle.h3}>Subscribe</h3>
                                </div>
                                <div className={footerStyle.footer_text+" "+footerStyle.mb_25}>
                                    <p className={footerStyle.p}>Bizim hakkımızda önerileriniz varsa buraya yazabilirsiniz.</p>
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
                                <p className={footerStyle.p}>Copyright &copy; 2023 <a className={footerStyle.a} href="https://codepen.io/anupkumar92/">AMEAN</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
