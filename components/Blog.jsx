import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/blog.module.css";

function Blog() {
    const [activeNav, setActiveNav] = useState("");

    return (
        <section className={styles.section}>
            <div className={styles.left}>
                <div className={styles.top}>
                    <div className={styles.blog_image}>
                        <img src="https://html.merku.love/collab/assets/images/blog/blog_details_image_1.jpg" alt="" />
                    </div>
                    <div className={styles.blog_info}>
                        <div className={styles.info}>
                            <img src="/images/pin.png" alt="" />
                            <p>Sticky Post</p>
                        </div>
                        <div className={styles.info}>
                            <img src="/images/user.png" alt="" />
                            <p>by Durrad</p>
                        </div>
                        <div className={styles.info}>
                            <img src="/images/calendar.png" alt="" />
                            <p>Feb 12, 2023</p>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.des_top}>
                            <p>
                                Mauris rhoncus aenean vel elit scelerisque mauris. 
                                Ultrices vitae auctor eu augue ut. Curabitur gravida arcu ac 
                                tortor dignissim convallis aenean et tortor. Proin fermentum 
                                leo vel orci porta non pulvinar neque. At tellus at urna 
                                condimentum mattis pellentesque.
                            </p>
                        </div>
                        <div className={styles.des_mid}>
                            <img src="https://html.merku.love/collab/assets/images/icon/icon_quote.svg" alt="" />
                            <div className={styles.p}>
                                Nec feugiat nisl pretium fusce id velit ut. 
                                Lobortis mattis aliquam faucibus purus in. 
                                Ultricies integer quis auctor elit sed. 
                                Lobortis scelerisque fermentum dui faucibus in ornare quam
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>

            </div>
        </section>
    );
}

export default Blog;
