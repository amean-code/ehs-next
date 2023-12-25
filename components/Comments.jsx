import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/comments.module.css";
import app_css from "../styles/App.module.css";
import Link from "next/link";

// LANGUAGE
import { useRouter } from 'next/router';
import lang from "../lang.json"
// LANGUAGE
function Comments() {

  // LANGUAGE
  const router = useRouter();
  const {locale} = router;
  const t = lang[locale];
  // LANGUAGE


  return (
    <>
    <section className={styles.section}>
        <div className={styles.title}>
            <h3 className={app_css.h3}>
                {t?.mentee_comments}
            </h3>
        </div>
        <div className={app_css.line}>

        </div>
        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.card_body}>
                    <div className={styles.card_top}>
                        <div className={styles.photo}>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#81d4fa" d="M24,42.2c-9.5,0-16.3-4.8-16.3-4.8V23c0-9.2,4.8-17.3,16.3-17.3s16.3,7.9,16.3,17.1v14.6 C40.3,37.4,33.5,42.2,24,42.2z"/><path fill="#1e88e5" d="M7.7,29.8h-1c-1.1,0-1.9-0.9-1.9-1.9V23c0-1.1,0.9-1.9,1.9-1.9h1V29.8z M40.3,21.1h1 c1.1,0,1.9,0.9,1.9,1.9v4.8c0,1.1-0.9,1.9-1.9,1.9h-1V21.1z M7.7,34.6v2.9c0,0,6.9,4.8,16.3,4.8s16.3-4.8,16.3-4.8v-2.9 c0,0-6.9,4.8-16.3,4.8S7.7,34.6,7.7,34.6z"/><path fill="#7e57c2" d="M24,35.5c-8.2,0-13.4-3.4-13.4-8.6V22c0-4.4,3.5-9.6,13.4-9.6s13.4,5.2,13.4,9.6v4.8 C37.4,32.1,32.2,35.5,24,35.5z"/><path fill="#b3e5fc" d="M24,13.4c9.3,0,12.5,4.7,12.5,8.6v4.8c0,4.6-4.8,7.7-12.5,7.7s-12.5-3.1-12.5-7.7V22 C11.5,18.1,14.7,13.4,24,13.4 M24,11.5C13.4,11.5,9.6,17.2,9.6,22v4.8c0,5.8,5.7,9.6,14.4,9.6s14.4-3.8,14.4-9.6V22 C38.4,16.8,33.9,11.5,24,11.5z"/><path fill="#7e57c2" d="M24,35.5c-8.2,0-13.4-3.4-13.4-8.6V22c0-4.4,3.5-9.6,13.4-9.6s13.4,5.2,13.4,9.6v4.8 C37.4,32.1,32.2,35.5,24,35.5z"/><path fill="#b3e5fc" d="M24,13.4c9.3,0,12.5,4.7,12.5,8.6v4.8c0,4.6-4.8,7.7-12.5,7.7s-12.5-3.1-12.5-7.7V22 C11.5,18.1,14.7,13.4,24,13.4 M24,11.5C13.4,11.5,9.6,17.2,9.6,22v4.8c0,5.8,5.7,9.6,14.4,9.6s14.4-3.8,14.4-9.6V22 C38.4,16.8,33.9,11.5,24,11.5z"/><path fill="#7e57c2" d="M36.5,26.9c0,4.6-4.8,7.7-12.5,7.7s-12.5-3.1-12.5-7.7V22c0-3.9,3.2-8.6,12.5-8.6s12.5,4.7,12.5,8.6 V26.9z"/><path fill="#4a148c" d="M36.5,25.9c0,0,0,1.3-0.8,2.1c-0.5,0.5-1.2,0.7-2.1,0.7h-4.1c-0.3-0.6-0.9-1-1.7-1 c-1.1,0-1.9,0.9-1.9,1.9c0,1.1,0.9,1.9,1.9,1.9c0.7,0,1.3-0.4,1.7-1h4.1c1.4,0,2.6-0.4,3.4-1.3c1.4-1.4,1.4-3.4,1.4-3.5L36.5,25.9z"/><path fill="#b388ff" d="M15.4,27.9c-0.6,0-1-0.4-1-1V22c0-3.6,3.7-5.8,9.6-5.8c0.6,0,1,0.4,1,1s-0.4,1-1,1 c-4.6,0-7.6,1.5-7.6,3.8v4.8C16.4,27.4,15.9,27.9,15.4,27.9z"/><path fill="#b3e5fc" d="M24,13.4c9.3,0,12.5,4.7,12.5,8.6v4.8c0,4.6-4.8,7.7-12.5,7.7s-12.5-3.1-12.5-7.7V22 C11.5,18.1,14.7,13.4,24,13.4 M24,11.5C13.4,11.5,9.6,17.2,9.6,22v4.8c0,5.8,5.7,9.6,14.4,9.6s14.4-3.8,14.4-9.6V22 C38.4,16.8,33.9,11.5,24,11.5z"/></svg>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.username}>
                                Emir Kaan TUTUŞ
                            </div>
                            <div className={styles.department}>
                                Manisa Celal Bayar Üniversitesi / Elektrik Elektronik Mühendisliği (YL)
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.card_bottom}>
                        <div className={styles.comment}>
                            <p className={styles.p}>
                                Energy Hack Space, birçok alanda sunduğu mentörlük hizmetleriyle öğrencilere büyük faydalar sağlamaktadır. Bu geniş yelpazenin içinde, ben de Lisans ve Lisansüstü Tez Mentörlüğü programından faydalanmaktayım. Bu mentörlük programının benim için özel kılan yönü; mentörüm Semanur Sancarın bilgisi ve rehberliğinin etkileyici olmasıdır. Lisansüstü tezimi yazma sürecim başladığından bu yana tartışmak üzere belirli aralıklarla bir araya gelmekteyiz ve bu toplantılar benim için sadece bilgi kazanmakla kalmadı, aynı zamanda düşünce yapımı derinleştirmeme ve geliştirmeme katkıda bulundu. Semanur Hoca, sadece bana bir şeyi ezberletmek yerine, konuları uygulamalı ispatlarla açıklamaya ve aklıma yatırmaya odaklanan bir yaklaşım benimsediği için, bu durum teorik bilgileri daha rahat anlamama yardımcı olmaktadır.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.card_body}>
                    <div className={styles.card_top}>
                        <div className={styles.photo}>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#81d4fa" d="M24,42.2c-9.5,0-16.3-4.8-16.3-4.8V23c0-9.2,4.8-17.3,16.3-17.3s16.3,7.9,16.3,17.1v14.6 C40.3,37.4,33.5,42.2,24,42.2z"/><path fill="#1e88e5" d="M7.7,29.8h-1c-1.1,0-1.9-0.9-1.9-1.9V23c0-1.1,0.9-1.9,1.9-1.9h1V29.8z M40.3,21.1h1 c1.1,0,1.9,0.9,1.9,1.9v4.8c0,1.1-0.9,1.9-1.9,1.9h-1V21.1z M7.7,34.6v2.9c0,0,6.9,4.8,16.3,4.8s16.3-4.8,16.3-4.8v-2.9 c0,0-6.9,4.8-16.3,4.8S7.7,34.6,7.7,34.6z"/><path fill="#7e57c2" d="M24,35.5c-8.2,0-13.4-3.4-13.4-8.6V22c0-4.4,3.5-9.6,13.4-9.6s13.4,5.2,13.4,9.6v4.8 C37.4,32.1,32.2,35.5,24,35.5z"/><path fill="#b3e5fc" d="M24,13.4c9.3,0,12.5,4.7,12.5,8.6v4.8c0,4.6-4.8,7.7-12.5,7.7s-12.5-3.1-12.5-7.7V22 C11.5,18.1,14.7,13.4,24,13.4 M24,11.5C13.4,11.5,9.6,17.2,9.6,22v4.8c0,5.8,5.7,9.6,14.4,9.6s14.4-3.8,14.4-9.6V22 C38.4,16.8,33.9,11.5,24,11.5z"/><path fill="#7e57c2" d="M24,35.5c-8.2,0-13.4-3.4-13.4-8.6V22c0-4.4,3.5-9.6,13.4-9.6s13.4,5.2,13.4,9.6v4.8 C37.4,32.1,32.2,35.5,24,35.5z"/><path fill="#b3e5fc" d="M24,13.4c9.3,0,12.5,4.7,12.5,8.6v4.8c0,4.6-4.8,7.7-12.5,7.7s-12.5-3.1-12.5-7.7V22 C11.5,18.1,14.7,13.4,24,13.4 M24,11.5C13.4,11.5,9.6,17.2,9.6,22v4.8c0,5.8,5.7,9.6,14.4,9.6s14.4-3.8,14.4-9.6V22 C38.4,16.8,33.9,11.5,24,11.5z"/><path fill="#7e57c2" d="M36.5,26.9c0,4.6-4.8,7.7-12.5,7.7s-12.5-3.1-12.5-7.7V22c0-3.9,3.2-8.6,12.5-8.6s12.5,4.7,12.5,8.6 V26.9z"/><path fill="#4a148c" d="M36.5,25.9c0,0,0,1.3-0.8,2.1c-0.5,0.5-1.2,0.7-2.1,0.7h-4.1c-0.3-0.6-0.9-1-1.7-1 c-1.1,0-1.9,0.9-1.9,1.9c0,1.1,0.9,1.9,1.9,1.9c0.7,0,1.3-0.4,1.7-1h4.1c1.4,0,2.6-0.4,3.4-1.3c1.4-1.4,1.4-3.4,1.4-3.5L36.5,25.9z"/><path fill="#b388ff" d="M15.4,27.9c-0.6,0-1-0.4-1-1V22c0-3.6,3.7-5.8,9.6-5.8c0.6,0,1,0.4,1,1s-0.4,1-1,1 c-4.6,0-7.6,1.5-7.6,3.8v4.8C16.4,27.4,15.9,27.9,15.4,27.9z"/><path fill="#b3e5fc" d="M24,13.4c9.3,0,12.5,4.7,12.5,8.6v4.8c0,4.6-4.8,7.7-12.5,7.7s-12.5-3.1-12.5-7.7V22 C11.5,18.1,14.7,13.4,24,13.4 M24,11.5C13.4,11.5,9.6,17.2,9.6,22v4.8c0,5.8,5.7,9.6,14.4,9.6s14.4-3.8,14.4-9.6V22 C38.4,16.8,33.9,11.5,24,11.5z"/></svg>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.username}>
                                Kaan Menevşe
                            </div>
                            <div className={styles.department}>
                                Yıldız Teknik Üniversitesi - Bilgisayar Mühendisliği
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.card_bottom}>
                        <div className={styles.comment}>
                            <p className={styles.p}>
                                Semanur ile geçen sene okulda tanıştım. Okul ve okul dışı projelerde sektörün içinden gelen birisi olarak bana çok destek verdi ve vermeye devam ediyor. Sıcakkanlı, enerjik, eğitim/öğretime önem veren, destekleyici ve en önemlisi birlikte çalışması keyifli birisi. Umarım ileride birlikte çok daha güzel işlere imza atarız.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.card_body}>
                    <div className={styles.card_top}>
                        <div className={styles.photo}>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#81d4fa" d="M24,42.2c-9.5,0-16.3-4.8-16.3-4.8V23c0-9.2,4.8-17.3,16.3-17.3s16.3,7.9,16.3,17.1v14.6 C40.3,37.4,33.5,42.2,24,42.2z"/><path fill="#1e88e5" d="M7.7,29.8h-1c-1.1,0-1.9-0.9-1.9-1.9V23c0-1.1,0.9-1.9,1.9-1.9h1V29.8z M40.3,21.1h1 c1.1,0,1.9,0.9,1.9,1.9v4.8c0,1.1-0.9,1.9-1.9,1.9h-1V21.1z M7.7,34.6v2.9c0,0,6.9,4.8,16.3,4.8s16.3-4.8,16.3-4.8v-2.9 c0,0-6.9,4.8-16.3,4.8S7.7,34.6,7.7,34.6z"/><path fill="#7e57c2" d="M24,35.5c-8.2,0-13.4-3.4-13.4-8.6V22c0-4.4,3.5-9.6,13.4-9.6s13.4,5.2,13.4,9.6v4.8 C37.4,32.1,32.2,35.5,24,35.5z"/><path fill="#b3e5fc" d="M24,13.4c9.3,0,12.5,4.7,12.5,8.6v4.8c0,4.6-4.8,7.7-12.5,7.7s-12.5-3.1-12.5-7.7V22 C11.5,18.1,14.7,13.4,24,13.4 M24,11.5C13.4,11.5,9.6,17.2,9.6,22v4.8c0,5.8,5.7,9.6,14.4,9.6s14.4-3.8,14.4-9.6V22 C38.4,16.8,33.9,11.5,24,11.5z"/><path fill="#7e57c2" d="M24,35.5c-8.2,0-13.4-3.4-13.4-8.6V22c0-4.4,3.5-9.6,13.4-9.6s13.4,5.2,13.4,9.6v4.8 C37.4,32.1,32.2,35.5,24,35.5z"/><path fill="#b3e5fc" d="M24,13.4c9.3,0,12.5,4.7,12.5,8.6v4.8c0,4.6-4.8,7.7-12.5,7.7s-12.5-3.1-12.5-7.7V22 C11.5,18.1,14.7,13.4,24,13.4 M24,11.5C13.4,11.5,9.6,17.2,9.6,22v4.8c0,5.8,5.7,9.6,14.4,9.6s14.4-3.8,14.4-9.6V22 C38.4,16.8,33.9,11.5,24,11.5z"/><path fill="#7e57c2" d="M36.5,26.9c0,4.6-4.8,7.7-12.5,7.7s-12.5-3.1-12.5-7.7V22c0-3.9,3.2-8.6,12.5-8.6s12.5,4.7,12.5,8.6 V26.9z"/><path fill="#4a148c" d="M36.5,25.9c0,0,0,1.3-0.8,2.1c-0.5,0.5-1.2,0.7-2.1,0.7h-4.1c-0.3-0.6-0.9-1-1.7-1 c-1.1,0-1.9,0.9-1.9,1.9c0,1.1,0.9,1.9,1.9,1.9c0.7,0,1.3-0.4,1.7-1h4.1c1.4,0,2.6-0.4,3.4-1.3c1.4-1.4,1.4-3.4,1.4-3.5L36.5,25.9z"/><path fill="#b388ff" d="M15.4,27.9c-0.6,0-1-0.4-1-1V22c0-3.6,3.7-5.8,9.6-5.8c0.6,0,1,0.4,1,1s-0.4,1-1,1 c-4.6,0-7.6,1.5-7.6,3.8v4.8C16.4,27.4,15.9,27.9,15.4,27.9z"/><path fill="#b3e5fc" d="M24,13.4c9.3,0,12.5,4.7,12.5,8.6v4.8c0,4.6-4.8,7.7-12.5,7.7s-12.5-3.1-12.5-7.7V22 C11.5,18.1,14.7,13.4,24,13.4 M24,11.5C13.4,11.5,9.6,17.2,9.6,22v4.8c0,5.8,5.7,9.6,14.4,9.6s14.4-3.8,14.4-9.6V22 C38.4,16.8,33.9,11.5,24,11.5z"/></svg>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.username}>
                                Hakan İrek
                            </div>
                            <div className={styles.department}>
                                Fatih Sultan Mehmet Üniversitesi/Elektrik Elektronik Mühendisliği
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.card_bottom}>
                        <div className={styles.comment}>
                            <p className={styles.p}>
                                Semanur Hocamız ile lisans eğitimimizin son senesinde Lisans tezi  vasıtasıyla tanıştık. Tezin  planlanmasında,  araştırma ve geliştirme  becerilerimizin geliştirilmesinde ve akademik hedeflerimize ulaşmamızda büyük rol oynadı. Tez boyunca bir çok noktada deneyim eksikliklerimizden dolayı büyük problemlerle karşılaştık, bu noktalarda akademi ve sektör tecrübesi ile bize yol göstererek sorunları çözmemize ve tezi daha iyi bir seviyeye getirmemize katkı sundu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.card_body}>
                    <div className={styles.card_top}>
                        <div className={styles.photo}>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#81d4fa" d="M24,42.2c-9.5,0-16.3-4.8-16.3-4.8V23c0-9.2,4.8-17.3,16.3-17.3s16.3,7.9,16.3,17.1v14.6 C40.3,37.4,33.5,42.2,24,42.2z"/><path fill="#1e88e5" d="M7.7,29.8h-1c-1.1,0-1.9-0.9-1.9-1.9V23c0-1.1,0.9-1.9,1.9-1.9h1V29.8z M40.3,21.1h1 c1.1,0,1.9,0.9,1.9,1.9v4.8c0,1.1-0.9,1.9-1.9,1.9h-1V21.1z M7.7,34.6v2.9c0,0,6.9,4.8,16.3,4.8s16.3-4.8,16.3-4.8v-2.9 c0,0-6.9,4.8-16.3,4.8S7.7,34.6,7.7,34.6z"/><path fill="#7e57c2" d="M24,35.5c-8.2,0-13.4-3.4-13.4-8.6V22c0-4.4,3.5-9.6,13.4-9.6s13.4,5.2,13.4,9.6v4.8 C37.4,32.1,32.2,35.5,24,35.5z"/><path fill="#b3e5fc" d="M24,13.4c9.3,0,12.5,4.7,12.5,8.6v4.8c0,4.6-4.8,7.7-12.5,7.7s-12.5-3.1-12.5-7.7V22 C11.5,18.1,14.7,13.4,24,13.4 M24,11.5C13.4,11.5,9.6,17.2,9.6,22v4.8c0,5.8,5.7,9.6,14.4,9.6s14.4-3.8,14.4-9.6V22 C38.4,16.8,33.9,11.5,24,11.5z"/><path fill="#7e57c2" d="M24,35.5c-8.2,0-13.4-3.4-13.4-8.6V22c0-4.4,3.5-9.6,13.4-9.6s13.4,5.2,13.4,9.6v4.8 C37.4,32.1,32.2,35.5,24,35.5z"/><path fill="#b3e5fc" d="M24,13.4c9.3,0,12.5,4.7,12.5,8.6v4.8c0,4.6-4.8,7.7-12.5,7.7s-12.5-3.1-12.5-7.7V22 C11.5,18.1,14.7,13.4,24,13.4 M24,11.5C13.4,11.5,9.6,17.2,9.6,22v4.8c0,5.8,5.7,9.6,14.4,9.6s14.4-3.8,14.4-9.6V22 C38.4,16.8,33.9,11.5,24,11.5z"/><path fill="#7e57c2" d="M36.5,26.9c0,4.6-4.8,7.7-12.5,7.7s-12.5-3.1-12.5-7.7V22c0-3.9,3.2-8.6,12.5-8.6s12.5,4.7,12.5,8.6 V26.9z"/><path fill="#4a148c" d="M36.5,25.9c0,0,0,1.3-0.8,2.1c-0.5,0.5-1.2,0.7-2.1,0.7h-4.1c-0.3-0.6-0.9-1-1.7-1 c-1.1,0-1.9,0.9-1.9,1.9c0,1.1,0.9,1.9,1.9,1.9c0.7,0,1.3-0.4,1.7-1h4.1c1.4,0,2.6-0.4,3.4-1.3c1.4-1.4,1.4-3.4,1.4-3.5L36.5,25.9z"/><path fill="#b388ff" d="M15.4,27.9c-0.6,0-1-0.4-1-1V22c0-3.6,3.7-5.8,9.6-5.8c0.6,0,1,0.4,1,1s-0.4,1-1,1 c-4.6,0-7.6,1.5-7.6,3.8v4.8C16.4,27.4,15.9,27.9,15.4,27.9z"/><path fill="#b3e5fc" d="M24,13.4c9.3,0,12.5,4.7,12.5,8.6v4.8c0,4.6-4.8,7.7-12.5,7.7s-12.5-3.1-12.5-7.7V22 C11.5,18.1,14.7,13.4,24,13.4 M24,11.5C13.4,11.5,9.6,17.2,9.6,22v4.8c0,5.8,5.7,9.6,14.4,9.6s14.4-3.8,14.4-9.6V22 C38.4,16.8,33.9,11.5,24,11.5z"/></svg>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.username}>
                                Alper İhtiyar
                            </div>
                            <div className={styles.department}>
                                Yıldız Teknik Üniversitesi - Elektrik Mühendisliği
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.card_bottom}>
                        <div className={styles.comment}>
                            <p className={styles.p}>
                                Akademik ve kariyer mentörlüğü kapsamında tanıştığımız Semanur ile üniversite 1. sınıf lisans öğrenciliğinden, enerji alanında uluslararası konsey temsilcisi olduğum bugüne kadar; hem akademik hem de kariyer alanlarında çeşitli deneyimlere sahip oldum. Networkün ne kadar önemli olduğunu ve büyük adımlar atmak kadar, doğru yolda olmanın da ciddi bir öneme sahip olduğunun farkına vardım. Semanurla kimyamız sürekli abla kardeş çerçevesinde başarılı bir şekilde devam ediyor. Eksiklerim veya zor zamanlarımı fark ettiğinde bana karşı tolerans göstermesi ve beni başaracağıma inandırıp gerekli zamanı tanıdığı için bu programın ve yapmış olduğu işin anlamı benim için çok büyük. Kendisiyle ortak bir işte olduğum zaman tarifsiz bir heyecan yaşıyorum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Comments;
