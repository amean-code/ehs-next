
import Head from "next/head";
import styles from "../../styles/ApplicationForm.module.css";

// LANGUAGE
import { useRouter } from 'next/router';
import lang from "../../lang.json"
import { useState } from "react";
// LANGUAGE

export default function Form(){

    // LANGUAGE
    const router = useRouter();
    const {locale} = router;
    const t = lang[locale];
    // LANGUAGE

    const [page,set_page] = useState(1);

    const max_page = 2;

    return (
        <div className={styles.main}>
            <Head>
                <title>
                    {t?.ehs}
                </title>
            </Head>
            <div className={styles.container}>
                <div className={styles.slider}>
                    <div className={styles.window} style={{transform: "translateX("+(1-page)*100+"%)"}}>
                        <div className={styles.body+" "+styles.landing}>
                            <div className={styles.image}>
                                <img src="/images/logo.png" />
                            </div>
                            <div className={styles.info}>
                                <h1>
                                    Başvuru Formu
                                </h1>
                                <p>
                                    Merhaba, Energy Hack Space Hackaton Başvuru Formuna Hoşgeldin!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.window} style={{transform: "translateX("+(2-page)*100+"%)"}}>
                        <div className={styles.body+" "+styles.form_body}>
                            <h2>
                                Takım Bilgileri
                            </h2>
                            <div className={styles.form}>
                                <div className={styles.item}>
                                    <label>
                                        1. Takımınızın adını giriniz. <span>*</span> <br/>&nbsp;
                                    </label>
                                    <div className={styles.inputs}>
                                        <input type="text" placeholder="Takımınızın Adı" />
                                    </div>
                                    <div className={styles.info}>
                                        Sonradan değiştirebilirsiniz
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <label>
                                        2. Takımın ana irtibat kişisinin Adını ve Soyadını giriniz. <span>*</span>
                                    </label>

                                    <div className={styles.inputs}>
                                        <input type="text" placeholder="Ad" />
                                        <input type="text" placeholder="Soyad" />
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <label>
                                        3. Takımın ana irtibat kişisinin Mailini giriniz. <span>*</span>
                                    </label>
                                    <div className={styles.inputs}>
                                        <input type="text" placeholder="Mail" />
                                    </div>
                                    <div className={styles.info}>
                                        E-postanızı ve Discordu düzenli takip etmeniz gerekmektedir.
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <label>
                                        4. Takımınız kaç kişiden oluşuyor? <span>*</span>
                                    </label>
                                    <div className={styles.inputs}>
                                        <div className={styles.radio_input}>
                                            <div className={styles.radio}>
                                                <div className={styles.checkmark}>

                                                </div>
                                                <div className={styles.label}>
                                                    4
                                                </div>
                                            </div>
                                            <div className={styles.radio}>
                                                <div className={styles.checkmark}>

                                                </div>
                                                <div className={styles.label}>
                                                    5
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.controller}>
                        {
                            page>1?
                            <button onClick={()=>{
                                set_page(page-1);
                            }}className={styles.prev}>
                                Geri
                            </button>
                            :<div></div>
                        }
                        {
                            page<max_page?
                            <button onClick={()=>{
                                set_page(page+1);
                            }} className={styles.next}>
                                İleri
                            </button>
                            :""
                        }
                        {
                            page==max_page?
                            <button onClick={()=>{
                                set_page(page);
                            }} className={styles.next}>
                                Gönder
                            </button>
                            :""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}