import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/timeline.module.css";

function TimeLine() {
  const [activeNav, setActiveNav] = useState(1);

  return (
    <section>
      <div className={styles.process_wrapper}>
        <div className={styles.progress_bar_container}>
          <ul className={styles.ul}>
            <li onClick={() => {
              setActiveNav(1);
            }} className={styles.step + " " + (
              activeNav == 1 || activeNav == 2 || activeNav == 3 || activeNav == 4 || activeNav == 5 ?
                styles.active : ""
            ) + " " + styles.li}>
              <div className={styles.step_inner}>HOME WORK</div>
            </li>
            <li onClick={() => {
              setActiveNav(2);
            }} className={styles.step + " " +
              (
                activeNav == 2 || activeNav == 3 || activeNav == 4 || activeNav == 5 ?
                  styles.active : ""
              )
              + " " + styles.li}>
              <div className={styles.step_inner}>RESPONSIVE PART</div>
            </li>
            <li onClick={() => {
              setActiveNav(3);
            }} className={styles.step + " " +
              (
                activeNav == 3 || activeNav == 4 || activeNav == 5 ?
                  styles.active : ""
              )
              + " " + styles.li}>
              <div className={styles.step_inner}>Creative cREATIONS</div>
            </li>
            <li onClick={() => {
              setActiveNav(4);
            }} className={styles.step + " " +
              (
                activeNav == 4 || activeNav == 5 ?
                  styles.active : ""
              )
              + " " + styles.li}>
              <div className={styles.step_inner}>TESTIMONIALS PART</div>
            </li>
            <li onClick={() => {
              setActiveNav(5);
            }} className={styles.step + " " +
              (
                activeNav == 5 ?
                  styles.active : ""
              )
              + " " + styles.li}>
              <div className={styles.step_inner}>OUR LOCATIONS</div>
            </li>
          </ul>

          <div className={styles.line}>
            <div className={styles.line_progress} style={{
              width: (
                activeNav == 1 ?
                  "3%" :
                  activeNav == 2 ?
                    "25%" :
                    activeNav == 3 ?
                      "50%" :
                      activeNav == 4 ?
                        "75%" :
                        activeNav == 5 ?
                          "100%" : ""
              )
            }}></div>
          </div>
        </div>

        <div className={styles.progress_content_section}>
          <div className={styles.section_content + " " + styles.discovery + " " +
              (
                activeNav == 1 ?
                  styles.active : ""
              )}>
            <h2 className={styles.timeline_h2}>HOME SECTION</h2>
            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum
              ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in
              dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor
              mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas
              volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit
              orci.</p>
          </div>

          <div className={styles.section_content + " " + styles.strategy + " " +
              (
                activeNav == 2 ?
                  styles.active : ""
              )}>
            <h2 className={styles.timeline_h2}>GALLERY SECTION</h2>
            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum
              ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in
              dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor
              mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas
              volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit
              orci.</p>
          </div>

          <div className={styles.section_content + " " + styles.creative + " " +
              (
                activeNav == 3 ?
                  styles.active : ""
              )}>
            <h2 className={styles.timeline_h2}>Creative CREATIONS</h2>
            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum
              ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in
              dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor
              mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas
              volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit
              orci.</p>
          </div>

          <div className={styles.section_content + " " + styles.production + " " +
              (
                activeNav == 4 ?
                  styles.active : ""
              )}>
            <h2 className={styles.timeline_h2}>TESTIMONIALS NOW</h2>
            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum
              ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in
              dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor
              mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas
              volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit
              orci.</p>
          </div>

          <div className={styles.section_content + " " + styles.analysis + " " +
              (
                activeNav == 5 ?
                  styles.active : ""
              )}>
            <h2 className={styles.timeline_h2}>OUR LOCATIONS</h2>
            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum
              ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in
              dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor
              mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas
              volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit
              orci.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimeLine;
