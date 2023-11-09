import Image from "next/image";
import { useEffect, useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/sponsors.module.css";
import Contact from "./Contact";

function Sponsors() {

    return (
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.title_1}>
                    Sponsors & Partners
                </div>
                <div className={styles.title_2}>
                    Sponsors
                </div>
                <div className={styles.description}>
                    Enerji sektöründe çığır açan teknolojilere, açık kaynak bilgiye ve teknolojiye erişimin artması, enerji dönüşümüne herkesin katılımını sağlamak amacıyla inovatif projeler ve eğitimlerle ilerliyoruz. EHS'nin vizyonu ve misyonu doğrultusunda, enerji sektöründeki genç yetenekleri destekleyerek, bilimsel araştırmalarla endüstrinin pratik ihtiyaçlarını birleştiriyor, enerji dönüşümüne gerçek anlamda katkıda bulunuyoruz. Siz de bu dönüşümün bir parçası olabilir, genç yeteneklerle erken aşamada bağlantı kurarak onların bu misyonu gerçekleştirmelerine yardımcı olabilirsiniz. EHS sponsoru olarak sadece bir organizasyona destek vermekle kalmayıp, enerji sektöründe sürdürülebilir bir geleceği birlikte inşa etmenin liderlerinden biri olabilirsiniz.
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.row}>
                    <div className={styles.card}>
                        <div className={styles.name}>
                            Main Sponsor
                        </div>
                        <div className={styles.info}>
                            Aute sunt aute occaecat eu veniam sunt laboris aute reprehenderit aliquip.
                        </div>
                        <div className={styles.card_title}>
                            Sponsor Hakları
                        </div>
                        <div className={styles.list}>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    EHS News bültenlerinde ayda bir firma tanıtımı.
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    CV havuzuna 1 yıl süresince erişim.
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    EHS Marathon 202* ana sponsoru olarak tanıtım.
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    EHS web sitesinde 1 yıl süresince sponsorluk logosunun görüntülenmesi.
                                </div>
                            </div>
                        </div>
                        <div className={styles.card_title} style={{textAlign:"center"}}>
                            Sponsor Sorumlulukları
                        </div>
                        <div className={styles.card_number}>
                            $10,000
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.name}>
                            Sponsor
                        </div>
                        <div className={styles.info}>
                            Aute sunt aute occaecat eu veniam sunt laboris aute reprehenderit aliquip.
                        </div>
                        <div className={styles.card_title}>
                            Sponsor Hakları
                        </div>
                        <div className={styles.list}>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    EHS News bültenlerinde üç ayda bir firma tanıtımı.
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    CV havuzuna 1 yıl süresince erişim.
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    EHS web sitesinde 1 yıl süresince sponsorluk logosunun görüntülenmesi.
                                </div>
                            </div>
                        </div>
                        <div className={styles.card_title} style={{textAlign:"center"}}>
                            Sponsor Sorumlulukları
                        </div>
                        <div className={styles.card_number}>
                            $5,000
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.name}>
                            Marathon Sponsor
                        </div>
                        <div className={styles.info}>
                            Aute sunt aute occaecat eu veniam sunt laboris aute reprehenderit aliquip.
                        </div>
                        <div className={styles.card_title}>
                            Sponsor Hakları
                        </div>
                        <div className={styles.list}>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    EHS Marathon 202* CV havuzuna erişim.
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    EHS Marathon 202* web sayfasında sponsorluk logosunun görüntülenmesi.
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <svg stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/></svg>
                                </div>
                                <div className={styles.text}>
                                    EHS Marathon 202* sponsor olarak tanıtım.
                                </div>
                            </div>
                        </div>
                        <div className={styles.card_title} style={{textAlign:"center"}}>
                            Sponsor Sorumlulukları
                        </div>
                        <div className={styles.card_number}>
                            $5,000
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    );
}

export default Sponsors;
