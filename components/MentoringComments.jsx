import styles from "../styles/mentoring_comments.module.css";
import app_css from "../styles/App.module.css";
// LANGUAGE
import { useRouter } from 'next/router';
import lang from "../lang.json"
// LANGUAGE

function MentoringComments() {

    // LANGUAGE
    const router = useRouter();
    const {locale} = router;
    const t = lang[locale];
    // LANGUAGE
  
  

    return (
        <section className={styles.comments}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.top_title}>
                        <h3 className={app_css.h3}>{
                        t?.mentor_comments
                        }</h3>
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
                <div className={app_css.line}>
                    
                </div>
                <div className={styles.bottom}>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={styles.top_body}>
                                <div className={styles.card_left}>
                                    <img className={styles.card_image} src="/images/semanur_sancar.jpeg" alt="" />
                                </div>
                                <div className={styles.card_right}>
                                    <div className={styles.card_top}>
                                        <div className={styles.name}>
                                            Semanur Sancar
                                        </div>
                                    </div>
                                    <div className={styles.card_title}>
                                        <h3 className={styles.h3}>
                                            {t?.mentoring_comments_title_1}
                                        </h3>
                                        <h3 className={styles.h3}>
                                            {t?.mentoring_comments_title_2}
                                        </h3>
                                        <h3 className={styles.h3}>
                                            {t?.mentoring_comments_title_3}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.bottom_body}>
                                <p>
                                    {t?.mentor_comments_text_1}
                                </p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.top_body}>
                                <div className={styles.card_left}>
                                    <img className={styles.card_image} src="/images/can_arslan.jpeg" alt="" />
                                </div>
                                <div className={styles.card_right}>
                                    <div className={styles.card_top}>
                                        <div className={styles.name}>
                                            Can Arslan
                                        </div>
                                    </div>
                                    <div className={styles.card_title}>
                                        <h3 className={styles.h3}>
                                            {t?.mentoring_comments_title_4}
                                        </h3>
                                        <h3 className={styles.h3}>
                                            {t?.mentoring_comments_title_5}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.bottom_body}>
                                <p>
                                    {t?.mentor_comments_text_2}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MentoringComments;
