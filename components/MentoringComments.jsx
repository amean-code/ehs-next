import styles from "../styles/mentoring_comments.module.css";
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
                        <h2 className={styles.h2}>{
                        t?.mentor_comments
                        }</h2>
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
                                            ML & Optimization Engineer @ Foton Energy
                                        </h3>
                                        <h3 className={styles.h3}>
                                            Co-Founder @ Energy Hack Space
                                        </h3>
                                        <h3 className={styles.h3}>
                                            Ph.D (c) @ YTÜ Electrical Engineering
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.bottom_body}>
                                <p>
                                Energy Hack Spacein kurucu ortaklarından biri olarak, enerji sektörüne dair edindiğim bilgileri genç yeteneklerle paylaşmayı her zaman önemli buldum. Özellikle enerji alanında optimizasyon ve yapay zeka konularında çalışan öğrenci ve yeni mezunlarla gerçekleştirdiğim mentörlük seansları, benim için ayrı bir öneme sahip. Mentörlük yolculuğum Energy Hack Space öncesine de uzanıyor ve bu kısa süre zarfında birçok yeteneğe kılavuzluk ederek onların kariyer yollarını şekillendirmelerine katkıda bulundum. Energy Hack Spacedeki görevim sayesinde, bu deneyimi daha geniş bir kitleye ulaştırma şansım oldu. Kendi mentee deneyimlerimden elde ettiğim içgörülerle, enerji sektöründeki geleceğin profesyonellerine rehberlik ediyorum. Bu süreçte hem bilgi ve deneyimlerimi paylaşma hem de yeni nesille birlikte öğrenme fırsatı buluyorum.
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
                                            Co-Founder @ Foton Türkiye IREC Platform
                                        </h3>
                                        <h3 className={styles.h3}>
                                            Co-Founder @ Energy Hack Space
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.bottom_body}>
                                <p>
                                    Foton Türkiye IREC Platformu ve Energy Hack Spacein kurucu ortağı olarak, enerji sektöründe yenilikçi fikirlerin ve genç yeteneklerin teşvik edilmesini her zaman destekledim. Enerji alanında bir kariyer veya girişimci olmayı düşünenler için sağladığım mentörlük, bana sektördeki taze fikirleri ve inovatif yaklaşımları yakından gözlemleme şansı veriyor. EHSnin mentörlük programları, sektöre adım atmaya kararlı gençleri deneyimli profesyonellerle bir araya getiriyor ve bu, hem mentörler için hem de menteeler için son derece değerli bir fırsat. Bu programların içinde yer almak, enerji sektöründeki gençleri motive etmek, onlara rehberlik etmek ve kariyerlerinin her aşamasında yanlarında olmak adına büyük bir ayrıcalık. EHSnin mentörlük programlarına katılan her bireyin, enerji alanında katma değer yaratan, yenilikçi ve sürdürülebilir projelerde yer alacağına inanıyorum.
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
