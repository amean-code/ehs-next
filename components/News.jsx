import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/news.module.css";

function Header() {
    const [activeNav, setActiveNav] = useState("");

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col_lg_4 + " " + styles.col_md_6 + " " + styles.mb30}>
                        <div className={styles.bloglist + " " + styles.item}>
                            <div className={styles.post_content}>
                                <div className={styles.date_box}>
                                    <div className={styles.m}>10</div>
                                    <div className={styles.d}>NOV</div>
                                </div>
                                <div className={styles.post_image}>
                                    <img className={styles.img} alt="" src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" />
                                </div>
                                <div className={styles.post_text}>
                                    <span className={styles.p_tagline}>Motivation</span>
                                    <h4 className={styles.h4}><a href="news-single.html">The Things Every Successful Enterpreneur Does</a></h4>
                                    <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <span className={styles.p_author}>Fynley Wilkinson</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.col_lg_4 + " " + styles.col_md_6 + " " + styles.mb30}>
                        <div className={styles.bloglist + " " + styles.item}>
                            <div className={styles.post_content}>
                                <div className={styles.date_box}>
                                    <div className={styles.m}>10</div>
                                    <div className={styles.d}>NOV</div>
                                </div>
                                <div className={styles.post_image}>
                                    <img className={styles.img} alt="" src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" />
                                </div>
                                <div className={styles.post_text}>
                                    <span className={styles.p_tagline}>Motivation</span>
                                    <h4 className={styles.h4}><a href="news-single.html">The Things Every Successful Enterpreneur Does</a></h4>
                                    <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <span className={styles.p_author}>Fynley Wilkinson</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.col_lg_4 + " " + styles.col_md_6 + " " + styles.mb30}>
                        <div className={styles.bloglist + " " + styles.item}>
                            <div className={styles.post_content}>
                                <div className={styles.date_box}>
                                    <div className={styles.m}>10</div>
                                    <div className={styles.d}>NOV</div>
                                </div>
                                <div className={styles.post_image}>
                                    <img className={styles.img} alt="" src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" />
                                </div>
                                <div className={styles.post_text}>
                                    <span className={styles.p_tagline}>Motivation</span>
                                    <h4 className={styles.h4}><a href="news-single.html">The Things Every Successful Enterpreneur Does</a></h4>
                                    <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <span className={styles.p_author}>Fynley Wilkinson</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.col_lg_4 + " " + styles.col_md_6 + " " + styles.mb30}>
                        <div className={styles.bloglist + " " + styles.item}>
                            <div className={styles.post_content}>
                                <div className={styles.date_box}>
                                    <div className={styles.m}>10</div>
                                    <div className={styles.d}>NOV</div>
                                </div>
                                <div className={styles.post_image}>
                                    <img className={styles.img} alt="" src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" />
                                </div>
                                <div className={styles.post_text}>
                                    <span className={styles.p_tagline}>Motivation</span>
                                    <h4 className={styles.h4}><a href="news-single.html">The Things Every Successful Enterpreneur Does</a></h4>
                                    <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <span className={styles.p_author}>Fynley Wilkinson</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.col_lg_4 + " " + styles.col_md_6 + " " + styles.mb30}>
                        <div className={styles.bloglist + " " + styles.item}>
                            <div className={styles.post_content}>
                                <div className={styles.date_box}>
                                    <div className={styles.m}>10</div>
                                    <div className={styles.d}>NOV</div>
                                </div>
                                <div className={styles.post_image}>
                                    <img className={styles.img} alt="" src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" />
                                </div>
                                <div className={styles.post_text}>
                                    <span className={styles.p_tagline}>Motivation</span>
                                    <h4 className={styles.h4}><a href="news-single.html">The Things Every Successful Enterpreneur Does</a></h4>
                                    <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <span className={styles.p_author}>Fynley Wilkinson</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.col_lg_4 + " " + styles.col_md_6 + " " + styles.mb30}>
                        <div className={styles.bloglist + " " + styles.item}>
                            <div className={styles.post_content}>
                                <div className={styles.date_box}>
                                    <div className={styles.m}>10</div>
                                    <div className={styles.d}>NOV</div>
                                </div>
                                <div className={styles.post_image}>
                                    <img className={styles.img} alt="" src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" />
                                </div>
                                <div className={styles.post_text}>
                                    <span className={styles.p_tagline}>Motivation</span>
                                    <h4 className={styles.h4}><a href="news-single.html">The Things Every Successful Enterpreneur Does</a></h4>
                                    <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <span className={styles.p_author}>Fynley Wilkinson</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
