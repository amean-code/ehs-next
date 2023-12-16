import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/comments.module.css";
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
            <h1 className={styles.h1}>
                {t?.mentee_comments}
            </h1>
        </div>
        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.card_body}>
                    <div className={styles.card_top}>
                        <div className={styles.photo}>
                            <img className={styles.card_image} src="/images/profile_figure.png" alt="" />
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
                            <img className={styles.card_image} src="/images/profile_figure.png" alt="" />
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
                            <img className={styles.card_image} src="/images/profile_figure.png" alt="" />
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
                            <img className={styles.card_image} src="/images/profile_figure.png" alt="" />
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
