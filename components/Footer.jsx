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
                <div className={footerStyle.footer_cta} style={{paddingBottom: "3rem",paddingTop: "3rem"}}>
                    <div className={footerStyle.row}>
                        <div className={footerStyle.col_xl_4+" "+footerStyle.col_md_4+" "+footerStyle.mb_30}>
                            <div className={footerStyle.single_cta}>
                                <i className="fas fa_map_marker_alt"></i>
                                <div className={footerStyle.cta_text}>
                                    <h4 className={footerStyle.h4}>Adres</h4>
                                    <span className={footerStyle.span}>1010 Avenue, sw 54321, chandigarh</span>
                                </div>
                            </div>
                        </div>
                        <div className={footerStyle.col_xl_4+" "+footerStyle.col_md_4+" "+footerStyle.mb_30}>
                            <div className={footerStyle.single_cta}>
                                <i className="fas fa_phone"></i>
                                <div className={footerStyle.cta_text}>
                                    <h4 className={footerStyle.h4}>Telefon:</h4>
                                    <span className={footerStyle.span}>+90 (123) 123 12 12</span>
                                </div>
                            </div>
                        </div>
                        <div className={footerStyle.col_xl_4+" "+footerStyle.col_md_4+" "+footerStyle.mb_30}>
                            <div className={footerStyle.single_cta}>
                                <i className="far fa_envelope_open"></i>
                                <div className={footerStyle.cta_text}>
                                    <h4 className={footerStyle.h4}>E-mail</h4>
                                    <span className={footerStyle.span}>ehs@info.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_content" style={{paddingBottom: "3rem",paddingTop: "3rem"}}>
                    <div className={footerStyle.row}>
                        <div className="col_xl_4 col_lg_4 mb_50">
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
                        <div className="col_xl_4 col_lg_4 col_md_6 mb_30">
                            <div className={footerStyle.footer_widget}>
                                <div className={footerStyle.footer_widget_heading}>
                                    <h3 className={footerStyle.h3}>Linkler</h3>
                                </div>
                                <ul className={footerStyle.ul}>
                                    <li className={footerStyle.li}><a className={footerStyle.a} href="#">About Us</a></li>
                                    <li className={footerStyle.li}><a className={footerStyle.a} href="#">Events</a></li>
                                    <li className={footerStyle.li}><a className={footerStyle.a} href="#">Mentoring</a></li>
                                    <li className={footerStyle.li}><a className={footerStyle.a} href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col_xl_4 col_lg_4 col_md_6 mb_50">
                            <div className={footerStyle.footer_widget}>
                                <div className={footerStyle.footer_widget_heading}>
                                    <h3 className={footerStyle.h3}>Öneriler</h3>
                                </div>
                                <div className="footer_text mb_25">
                                    <p className={footerStyle.p}>Bizim hakkımızda önerileriniz varsa buraya yazabilirsiniz.</p>
                                </div>
                                <div className={footerStyle.subscribe_form}>
                                    <form className={footerStyle.form} action="#">
                                        <input className={footerStyle.input} type="text" placeholder="Email Address" />
                                        <button className={footerStyle.button}><i className="fab fa_telegram_plane"></i></button>
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
