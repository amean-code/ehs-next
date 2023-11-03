import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/blog.module.css";

function Blog() {
    const [activeNav, setActiveNav] = useState("");

    return (
        <div className={styles.page_wrapper}>
            <div className={styles.backtotop}>
                <a href="#" className={styles.scroll}>
                    <i className={styles.far+" "+styles.fa_arrow_up}></i>
                </a>
            </div>
            <section className={styles.page_banner}>
                <div className={styles.container}>
                    <div className={styles.content_wrapper}>
                        <div className={styles.row+" "+styles.align_items_center}>
                            <div className={styles.col+" "+styles.col_lg_8}>
                                <ul className={styles.breadcrumb_nav+" "+styles.unordered_list}>
                                    <li><a href="in_ex_html{">Home</a></li>
                                    <li><a href="#!">Blogs</a></li><li>Blog Details</li>
                                </ul>
                                <h1 className={styles.page_title+" "+styles.mb_0}>
                                    Create An Epic Resume For Your Dream Job
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Blog;
