import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/vision.module.css";

function Vision() {
    const [activeNav, setActiveNav] = useState("");

    return (
        <div className={styles.container_experience}>
            <div className={styles.row_experience}>
                <div className={styles.left}>
                    <div className={styles.title}>
                        SINCE 1984 IAM SERVING AS
                    </div>
                    <div className={styles.title_bold}>
                        SINCE 1984 IAM SERVING AS
                    </div>

                    <div className={styles.seperator}></div>
                    
                    <div className={styles.inner_content}>
                        <div className={styles.top_text}>
                            Positive behavioral supports is a behavior management system used to understand behavior.
                        </div>

                        <div className={styles.text}>
                            <p>Pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                            <p>Praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the of human happiness great expound the actual teachings.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.row_experience}>
                        <div className={styles.col_md_6}>
                            <div className={styles.single_box}>
                                <div className={styles.img_holder}>
                                    <img src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="" />
                                </div>

                                <div className={styles.text_holder}>
                                    <h3 className={styles.text_holder_title}>Mission</h3>
                                    <p className={styles.text_holder_text}>Great explorer of the truth, master builder of all human happiness reject avoids us pleasure extreamly.</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.col_md_6}>
                        <div className={styles.single_box}>
                                <div className={styles.img_holder}>
                                    <img src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="" />
                                </div>

                                <div className={styles.text_holder}>
                                    <h3 className={styles.text_holder_title}>Vision</h3>
                                    <p className={styles.text_holder_text}>Great explorer of the truth, master builder of all human happiness reject avoids us pleasure extreamly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Vision;
