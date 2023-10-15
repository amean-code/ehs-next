import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/mentoring.module.css";

function Mentoring() {
  const [activeNav, setActiveNav] = useState("");

  return (
    <section className={styles.section_methods}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col_lg_12}>
            <div className={styles.text_center}>
              <h2 className={styles.title_h2}>Our Method</h2>
              <div className={styles.small_border}></div>
            </div>
          </div>

          <div className={styles.col_lg_4 + " " + styles.col_md_6 + " " + styles.mb30}>
            <div className={styles.f_box + " " + styles.f_icon_left + " " + styles.f_icon_rounded}>
              <i className={styles.fa + " " + styles.fa_book + " " + styles.id_color + " " + styles.bg_color_op_1+" "+styles.i}></i>
              <div className={styles.fb_text}>
                <h4 className={styles.h4}>Edutainment</h4>
                <p className={styles.p}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.col_lg_4 + " " + styles.col_md_6 + " " + styles.mb30}>
            <div className={styles.f_box + " " + styles.f_icon_left + " " + styles.f_icon_rounded}>
              <i className={styles.fa + " " + styles.fa_pencil + " " + styles.id_color + " " + styles.bg_color_op_1+" "+styles.i}></i>
              <div className={styles.fb_text}>
                <h4 className={styles.h4}>Experential Learning</h4>
                <p className={styles.p}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.col_lg_4 + " " + styles.col_md_6 + " " + styles.mb30}>
            <div className={styles.f_box + " " + styles.f_icon_left + " " + styles.f_icon_rounded}>
              <i className={styles.fa + " " + styles.fa_search + " " + styles.id_color + " " + styles.bg_color_op_1+" "+styles.i}></i>
              <div className={styles.fb_text}>
                <h4 className={styles.h4}>Self Discovery</h4>
                <p className={styles.p}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.col_lg_4 + " " + styles.col_md_6 + " " + styles.mb30}>
            <div className={styles.f_box + " " + styles.f_icon_left + " " + styles.f_icon_rounded}>
              <i className={styles.fa + " " + styles.fa_camera + " " + styles.id_color + " " + styles.bg_color_op_1+" "+styles.i}></i>
              <div className={styles.fb_text}>
                <h4 className={styles.h4}>Inspirational Movie</h4>
                <p className={styles.p}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.col_lg_4 + " " + styles.col_md_6 + " " + styles.mb30}>
            <div className={styles.f_box + " " + styles.f_icon_left + " " + styles.f_icon_rounded}>
              <i className={styles.fa + " " + styles.fa_gears + " " + styles.id_color + " " + styles.bg_color_op_1+" "+styles.i}></i>
              <div className={styles.fb_text}>
                <h4 className={styles.h4}>Simulation</h4>
                <p className={styles.p}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.col_lg_4 + " " + styles.col_md_6 + " " + styles.mb30}>
            <div className={styles.f_box + " " + styles.f_icon_left + " " + styles.f_icon_rounded}>
              <i className={styles.fa + " " + styles.fa_child + " " + styles.id_color + " " + styles.bg_color_op_1+" "+styles.i}></i>
              <div className={styles.fb_text}>
                <h4 className={styles.h4}>Fun Games</h4>
                <p className={styles.p}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
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
