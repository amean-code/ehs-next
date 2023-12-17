import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/mentoring.module.css";

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
    <section className={styles.section_methods} id="mentoring">
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col_lg_12}>
            <div className={styles.text_center}>
              <h2 className={styles.title_h2}>{t?.our_method}</h2>
              <div className={styles.small_border}></div>
            </div>
          </div>

          <div className={styles.col_lg_4 + " " + styles.col_md_6 + " " + styles.mb30}>
            <div className={styles.f_box + " " + styles.f_icon_left + " " + styles.f_icon_rounded}>
              <i className={styles.fa + " " + styles.fa_book + " " + styles.id_color + " " + styles.bg_color_op_1+" "+styles.i}></i>
              <div className={styles.fb_text}>
                <h4 className={styles.h4}>
                  Lisans ve Lisansüstü Tez Mentörlüğü
                </h4>
                <p className={styles.p}>
                  Energy Hack Space, lisans ve lisansüstü tez çalışmaları sürecinde öğrencilere yol gösterir. Özellikle enerji alanında inovasyon ve sürdürülebilirlik konularına odaklanan bu mentörlük, öğrencilere tez konularını belirlemeden araştırma metodolojilerini oluşturmaya kadar geniş bir perspektif sunar. Bilimsel literatürün analizi, veri toplama yöntemleri ve sonuçların yorumlanması konularında destek sağlar.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.col_lg_4 + " " + styles.col_md_6 + " " + styles.mb30}>
            <div className={styles.f_box + " " + styles.f_icon_left + " " + styles.f_icon_rounded}>
              <i className={styles.fa + " " + styles.fa_pencil + " " + styles.id_color + " " + styles.bg_color_op_1+" "+styles.i}></i>
              <div className={styles.fb_text}>
                <h4 className={styles.h4}>
                  Proje Mentörlüğü
                </h4>
                <p className={styles.p}>
                  Energy Hack Space, enerji sektöründeki projelerde öncü ve yenilikçi fikirlerin hayata geçirilmesi için rehberlik eder. Proje fikrinin oluşumundan uygulamaya kadar olan sürecin her aşamasında, teknik danışmanlığın yanı sıra stratejik ve operasyonel önerilerle projenin başarılı bir şekilde tamamlanmasına katkıda bulunur.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.col_lg_4 + " " + styles.col_md_6 + " " + styles.mb30}>
            <div className={styles.f_box + " " + styles.f_icon_left + " " + styles.f_icon_rounded}>
              <i className={styles.fa + " " + styles.fa_search + " " + styles.id_color + " " + styles.bg_color_op_1+" "+styles.i}></i>
              <div className={styles.fb_text}>
                <h4 className={styles.h4}>
                  Akademik ve Kariyer Mentörlüğü
                </h4>
                <p className={styles.p}>
                  Energy Hack Space, enerji sektöründe kariyer yapmayı hedefleyen bireyler için akademik ve kariyer yollarını şekillendirme konusunda rehberlik sunar. Eğitim seçimleri, staj ve iş başvuruları, kariyer planlama ve profesyonel gelişim stratejileri gibi konularda deneyimli mentörlerin yönlendirmesiyle bireylerin kariyer hedeflerine ulaşmalarına yardımcı olur.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.col_lg_4 + " " + styles.col_md_6 + " " + styles.mb30}>
            <div className={styles.f_box + " " + styles.f_icon_left + " " + styles.f_icon_rounded}>
              <i className={styles.fa + " " + styles.fa_camera + " " + styles.id_color + " " + styles.bg_color_op_1+" "+styles.i}></i>
              <div className={styles.fb_text}>
                <h4 className={styles.h4}>
                  Girişimcilik Mentörlüğü
                </h4>
                <p className={styles.p}>
                  Energy Hack Space, enerji sektöründe girişimci olmayı düşünen bireyler için vizyon oluşturma, iş modeli geliştirme ve pazar analizi gibi konularda rehberlik eder. Girişimciliğin zorluklarına ve fırsatlarına dair gerçekçi bir perspektif sunarak, girişimcilerin sürdürülebilir ve başarılı işletmeler kurmaları için gereken bilgi ve becerilere erişmelerini sağlar.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.col_lg_4 + " " + styles.col_md_6 + " " + styles.mb30}>
            <div className={styles.f_box + " " + styles.f_icon_left + " " + styles.f_icon_rounded}>
              <i className={styles.fa + " " + styles.fa_gears + " " + styles.id_color + " " + styles.bg_color_op_1+" "+styles.i}></i>
              <div className={styles.fb_text}>
                <h4 className={styles.h4}>
                  Akran Mentörlüğü
                </h4>
                <p className={styles.p}>
                  Energy Hack Space, enerji sektöründeki profesyonellerin yanı sıra üniversite öğrencilerinin de birbirleriyle bilgi ve deneyimlerini paylaşmaları için bir platform sunar. Akran mentörlüğü, deneyimli profesyonellerden yeni başlayanlara, lisans ve lisansüstü öğrencilerinden mezunlara kadar farklı deneyim seviyelerindeki bireylerin kendi deneyimlerini, başarılarını ve zorluklarını paylaşarak birbirlerine ilham vermesini ve rehberlik etmesini teşvik eder. Özellikle üniversite öğrencileri için, sektöre ilk adımlarını atan veya akademik çalışmalarında yön arayan gençler için bu yaklaşım, hem profesyonel hem de akademik gelişimi destekler ve enerji sektöründe işbirliği ve dayanışma ruhunu teşvik eder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mentoring;
