import Image from "next/image";
import { useEffect, useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/mentoring_comments.module.css";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";

function MentoringComments() {
    const [mobile_menu, set_mobile_menu] = useState(false);

    const [user, set_user] = useState(null);

    const router = useRouter();

    useEffect(() => {
        console.log('Cookies.get("ehs_user_token")', Cookies.get("ehs_user_token"));
        if (Cookies.get("ehs_user_token")) {
            set_user(jwt.decode(Cookies.get("ehs_user_token")));
        }
    }, []);

    return (
        <section className={styles.comments}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.top_title}>
                        <h2 className={styles.h2}>Don’t just take our word for it</h2>
                    </div>
                    {/* <div className={styles.buttons}>
                        <div className={styles.left_arrow}>
                            <img className={styles.img} src="/images/left_arrow.png" alt="" />
                        </div>
                        <div className={styles.right_arrow}>
                            <img className={styles.img} src="/images/right_arrow.png" alt="" />
                        </div>
                    </div> */}
                </div>
                <div className={styles.bottom}>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={styles.card_left}>
                                <img className={styles.card_image} src="/images/image1.jpeg" alt="" />
                            </div>
                            <div className={styles.card_right}>
                                <div className={styles.card_top}>
                                    <ul className={styles.stars}>
                                        <li className={styles.active}>
                                            <img src="/images/star.png" className={styles.star} alt="" />
                                        </li>
                                        <li className={styles.active}>
                                            <img src="/images/star.png" className={styles.star} alt="" />
                                        </li><li className={styles.active}>
                                            <img src="/images/star.png" className={styles.star} alt="" />
                                        </li><li className={styles.active}>
                                           <img src="/images/star.png" className={styles.star} alt="" />                                            
                                        </li>
                                        <li className={styles.active}>
                                            <img src="/images/star.png" className={styles.star} alt="" />
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.card_title}>
                                    <h3 className={styles.h3}>Very interesting course</h3>
                                </div>
                                <div className={styles.card_text}>
                                    <p className={styles.p}>Elit ut aliquam purus sit amet luctus venenatis lectus magna. Sed nisi lacus sed viverra tellus in hac habitasse platea</p>
                                </div>
                                <div className={styles.card_auth}>
                                    <h5 className={styles.testimonial_name}>Matthew Lina</h5>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.card_left}>
                                <img className={styles.card_image} src="/images/image2.jpeg" alt="" />
                            </div>
                            <div className={styles.card_right}>
                                <div className={styles.card_top}>
                                    <ul className={styles.stars}>
                                        <li className={styles.active}>
                                            <img src="/images/star.png" className={styles.star} alt="" />
                                        </li>
                                        <li className={styles.active}>
                                            <img src="/images/star.png" className={styles.star} alt="" />
                                        </li><li className={styles.active}>
                                            <img src="/images/star.png" className={styles.star} alt="" />
                                        </li><li className={styles.active}>
                                           <img src="/images/star.png" className={styles.star} alt="" />                                            
                                        </li>
                                        <li className={styles.active}>
                                            <img src="/images/star.png" className={styles.star} alt="" />
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.card_title}>
                                    <h3 className={styles.h3}>Very interesting course</h3>
                                </div>
                                <div className={styles.card_text}>
                                    <p className={styles.p}>Elit ut aliquam purus sit amet luctus venenatis lectus magna. Sed nisi lacus sed viverra tellus in hac habitasse platea</p>
                                </div>
                                <div className={styles.card_auth}>
                                    <h5 className={styles.testimonial_name}>Matthew Lina</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MentoringComments;
