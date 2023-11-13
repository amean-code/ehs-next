import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/App.module.css";

function Slider() {
    const [active_button, set_active_button] = useState("who-we-are");

    return (
        <section>
        <div className={styles.main_container}>
          <div className={styles.containLeft}>
            <Image className={styles.slider_imageleft} width={200} height={200} src="/images/containLeft.jpg" alt="" />
          </div>
          
          <div className={styles.containRight}>
            <h4>
              Who we are?
            </h4>
            <h2>Our Services</h2>
            <div className={styles.buttons}>
              <div onClick={()=>set_active_button("who-we-are")} className={styles.item+" "+(
                active_button=="who-we-are"?
                styles.active:""
              )}>
                Who we are?
              </div>
              <div onClick={()=>set_active_button("what-we-do")} className={styles.item+" "+(
                active_button=="what-we-do"?
                styles.active:""
              )}>
                What we do?
              </div>
              <div onClick={()=>set_active_button("why-join")} className={styles.item+" "+(
                active_button=="why-join"?
                styles.active:""
              )}>
                Why join? 
              </div>
            </div>
            {
              active_button=="who-we-are"?
                <p>
                  Energy Hack Space (EHS), enerji sektöründeki inovatif yaklaşımları ve sürdürülebilir çözümleri teşvik eden bir platformdur. Misyonumuz, enerji dönüşümünün hızını artırmak, öğrencilere, yeni mezunlara ve sektör profesyonellerine eşsiz öğrenme ve ağ kurma fırsatları sunmaktır. Multidisipliner bir yaklaşım ile enerji sektöründe karşılaşılan zorlukları ve fırsatları ele alıyor, bu alandaki tutkulu bireyleri bir araya getirerek bilgi alışverişini ve işbirliğini destekliyoruz. EHS, enerji sektörünün geleceğini şekillendirmek isteyen herkes için bir buluşma noktasıdır.
                </p>
              :active_button=="what-we-do"?
                <p>
                  Energy Hack Space (EHS) olarak enerji sektöründe inovasyonun ve sürdürülebilirliğin önündeki engelleri kaldırmayı hedefliyoruz. Bu amaç doğrultusunda, enerjiye dair hackathonlar, atölyeler ve eğitimler düzenleyerek sektöre yeni soluklar kazandırıyoruz. Öğrencilerden profesyonellere kadar geniş bir kitleye enerji, optimizasyon ve yapay zeka üzerine eğitimler ve mentörlük programları sunuyoruz. Ayrıca, sektördeki yenilikçi fikirleri ve projeleri desteklemek için bir ağ oluşturma ve işbirliği fırsatları yaratma görevini üstleniyoruz. EHS, enerji dönüşümünü hızlandırmak ve bu alandaki potansiyeli maksimize etmek için kapsamlı çözümler sunmaktadır.
                </p>
              :active_button=="why-join"?
                <p>
                  Energy Hack Space (EHS) katıldığınızda, enerji sektöründe gerçek bir değişiklik yaratma potansiyeline sahip bir topluluğun parçası olursunuz. EHS, sadece teorik bilgi sunmakla kalmaz, aynı zamanda uygulamalı deneyimler, endüstri içi ağ kurma fırsatları ve kariyer gelişimine yönelik mentörlük programlarıyla bireyleri destekler. Enerji, optimizasyon ve yapay zeka gibi alanlarda uzmanlaşmayı hedefleyenler için mükemmel bir öğrenme ve paylaşma platformudur. Katılımcılarımız, sektördeki en güncel trendler, teknolojiler ve yenilikçi çözümler hakkında bilgi sahibi olma fırsatı bulurken, aynı zamanda potansiyel işbirlikleri ve ortaklıklar için kapılar açılır. EHSye katılarak, enerji sektöründe geleceğin liderlerinden biri olma yolunda büyük bir adım atmış olursunuz.
                </p>
              :""
            }
          </div>
        </div>
      </section>

    );
}

export default Slider;
