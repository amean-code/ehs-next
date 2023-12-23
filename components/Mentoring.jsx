import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/mentoring.module.css";
import app_css from "../styles/App.module.css";

// LANGUAGE
import { useRouter } from 'next/router';
import lang from "../lang.json"
// LANGUAGE
function Mentoring() {
  // LANGUAGE
  const router = useRouter();
  const { locale } = router;
  const t = lang[locale];
  // LANGUAGE
  const [activeNav, setActiveNav] = useState("");

  return (
    <section className={styles.section} id="mentoring">
      <div className={styles.banner}>
        <h3 className={app_css.h3}>
          {
            t?.mentoring
          }
        </h3>
        <div className={app_css.line}>

        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FF5722" d="M32.6,21.8L44,3.8L28,14.4l3.8-7c0,0-18.8,10.2-24.2,15.8c-4.8,4.8-4.8,12.4,0,17.2s12.4,4.8,17.2,0c5.6-5.6,14-20.8,14-20.8L32.6,21.8z"/><path fill="#FF9800" d="M26.7,26.2L33,15.1l-11.4,7.1l1.8-5.6c0,0-9,5.7-13,9.6C8.9,27.7,8,29.7,8,32c0,4.5,3.5,8,8,8c2.3,0,4.3-1,5.8-2.4c3-3,10.9-13.1,10.9-13.1L26.7,26.2z"/><path fill="#FFC107" d="M16,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S18.8,27,16,27z"/><path fill="#FFF9C4" d="M16,29.5c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5S17.4,29.5,16,29.5z"/></svg>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                Lisans ve Lisansüstü Tez Mentörlüğü
              </div>
              <div className={styles.description}>
                Energy Hack Space, lisans ve lisansüstü tez çalışmaları sürecinde öğrencilere yol gösterir. Özellikle enerji alanında inovasyon ve sürdürülebilirlik konularına odaklanan bu mentörlük, öğrencilere tez konularını belirlemeden araştırma metodolojilerini oluşturmaya kadar geniş bir perspektif sunar. Bilimsel literatürün analizi, veri toplama yöntemleri ve sonuçların yorumlanması konularında destek sağlar.
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FF5722" d="M32.6,21.8L44,3.8L28,14.4l3.8-7c0,0-18.8,10.2-24.2,15.8c-4.8,4.8-4.8,12.4,0,17.2s12.4,4.8,17.2,0c5.6-5.6,14-20.8,14-20.8L32.6,21.8z"/><path fill="#FF9800" d="M26.7,26.2L33,15.1l-11.4,7.1l1.8-5.6c0,0-9,5.7-13,9.6C8.9,27.7,8,29.7,8,32c0,4.5,3.5,8,8,8c2.3,0,4.3-1,5.8-2.4c3-3,10.9-13.1,10.9-13.1L26.7,26.2z"/><path fill="#FFC107" d="M16,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S18.8,27,16,27z"/><path fill="#FFF9C4" d="M16,29.5c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5S17.4,29.5,16,29.5z"/></svg>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                Proje Mentörlüğü
              </div>
              <div className={styles.description}>
                Energy Hack Space, enerji sektöründeki projelerde öncü ve yenilikçi fikirlerin hayata geçirilmesi için rehberlik eder. Proje fikrinin oluşumundan uygulamaya kadar olan sürecin her aşamasında, teknik danışmanlığın yanı sıra stratejik ve operasyonel önerilerle projenin başarılı bir şekilde tamamlanmasına katkıda bulunur
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FF5722" d="M32.6,21.8L44,3.8L28,14.4l3.8-7c0,0-18.8,10.2-24.2,15.8c-4.8,4.8-4.8,12.4,0,17.2s12.4,4.8,17.2,0c5.6-5.6,14-20.8,14-20.8L32.6,21.8z"/><path fill="#FF9800" d="M26.7,26.2L33,15.1l-11.4,7.1l1.8-5.6c0,0-9,5.7-13,9.6C8.9,27.7,8,29.7,8,32c0,4.5,3.5,8,8,8c2.3,0,4.3-1,5.8-2.4c3-3,10.9-13.1,10.9-13.1L26.7,26.2z"/><path fill="#FFC107" d="M16,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S18.8,27,16,27z"/><path fill="#FFF9C4" d="M16,29.5c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5S17.4,29.5,16,29.5z"/></svg>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                Akademik ve Kariyer Mentörlüğü
              </div>
              <div className={styles.description}>
                Energy Hack Space, enerji sektöründe kariyer yapmayı hedefleyen bireyler için akademik ve kariyer yollarını şekillendirme konusunda rehberlik sunar. Eğitim seçimleri, staj ve iş başvuruları, kariyer planlama ve profesyonel gelişim stratejileri gibi konularda deneyimli mentörlerin yönlendirmesiyle bireylerin kariyer hedeflerine ulaşmalarına yardımcı olur.
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FF5722" d="M32.6,21.8L44,3.8L28,14.4l3.8-7c0,0-18.8,10.2-24.2,15.8c-4.8,4.8-4.8,12.4,0,17.2s12.4,4.8,17.2,0c5.6-5.6,14-20.8,14-20.8L32.6,21.8z"/><path fill="#FF9800" d="M26.7,26.2L33,15.1l-11.4,7.1l1.8-5.6c0,0-9,5.7-13,9.6C8.9,27.7,8,29.7,8,32c0,4.5,3.5,8,8,8c2.3,0,4.3-1,5.8-2.4c3-3,10.9-13.1,10.9-13.1L26.7,26.2z"/><path fill="#FFC107" d="M16,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S18.8,27,16,27z"/><path fill="#FFF9C4" d="M16,29.5c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5S17.4,29.5,16,29.5z"/></svg>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                Girişimcilik Mentörlüğü
              </div>
              <div className={styles.description}>
                Energy Hack Space, enerji sektöründe girişimci olmayı düşünen bireyler için vizyon oluşturma, iş modeli geliştirme ve pazar analizi gibi konularda rehberlik eder. Girişimciliğin zorluklarına ve fırsatlarına dair gerçekçi bir perspektif sunarak, girişimcilerin sürdürülebilir ve başarılı işletmeler kurmaları için gereken bilgi ve becerilere erişmelerini sağlar.
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FF5722" d="M32.6,21.8L44,3.8L28,14.4l3.8-7c0,0-18.8,10.2-24.2,15.8c-4.8,4.8-4.8,12.4,0,17.2s12.4,4.8,17.2,0c5.6-5.6,14-20.8,14-20.8L32.6,21.8z"/><path fill="#FF9800" d="M26.7,26.2L33,15.1l-11.4,7.1l1.8-5.6c0,0-9,5.7-13,9.6C8.9,27.7,8,29.7,8,32c0,4.5,3.5,8,8,8c2.3,0,4.3-1,5.8-2.4c3-3,10.9-13.1,10.9-13.1L26.7,26.2z"/><path fill="#FFC107" d="M16,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S18.8,27,16,27z"/><path fill="#FFF9C4" d="M16,29.5c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5S17.4,29.5,16,29.5z"/></svg>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                Akran Mentörlüğü
              </div>
              <div className={styles.description}>
                Energy Hack Space, enerji sektöründeki profesyonellerin yanı sıra üniversite öğrencilerinin de birbirleriyle bilgi ve deneyimlerini paylaşmaları için bir platform sunar. Akran mentörlüğü, deneyimli profesyonellerden yeni başlayanlara, lisans ve lisansüstü öğrencilerinden mezunlara kadar farklı deneyim seviyelerindeki bireylerin kendi deneyimlerini, başarılarını ve zorluklarını paylaşarak birbirlerine ilham vermesini ve rehberlik etmesini teşvik eder. Özellikle üniversite öğrencileri için, sektöre ilk adımlarını atan veya akademik çalışmalarında yön arayan gençler için bu yaklaşım, hem profesyonel hem de akademik gelişimi destekler ve enerji sektöründe işbirliği ve dayanışma ruhunu teşvik eder.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mentoring;
