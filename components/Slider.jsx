import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/App.module.css";

function Slider() {
    const [active_button, set_active_button] = useState("public-seminar");

    return (
        <section>
        <div className={styles.main_container}>
          <div className={styles.containLeft}>
            <Image width={200} height={200} src="/images/containLeft.jpg" alt="" />
          </div>
          
          <div className={styles.containRight}>
            <h4>
              WHAT WE DO
            </h4>
            <h2>Our Services</h2>
            <div className={styles.buttons}>
              <div onClick={()=>set_active_button("public-seminar")} className={styles.item+" "+(
                active_button=="public-seminar"?
                styles.active:""
              )}>
                Public Seminar
              </div>
              <div onClick={()=>set_active_button("house-training")} className={styles.item+" "+(
                active_button=="house-training"?
                styles.active:""
              )}>
                In House Training
              </div>
              <div onClick={()=>set_active_button("personal-coaching")} className={styles.item+" "+(
                active_button=="personal-coaching"?
                styles.active:""
              )}>
                Personal Coaching
              </div>
            </div>
            {
              active_button=="public-seminar"?
                <p>
                  Culpa qui proident amet sunt. Amet labore velit sunt anim velit commodo aliquip et cillum Lorem anim sit ullamco ipsum. Sunt eiusmod irure et velit do consequat officia laboris do labore deserunt dolor do. Ad nostrud elit elit mollit est quis in culpa.
                </p>
              :active_button=="house-training"?
                <p>
                  Elit sit sint duis incididunt magna sint deserunt nostrud ad dolore magna cillum consectetur fugiat. Dolore amet ut Lorem in sunt id velit cillum voluptate ipsum cillum aliqua minim. Reprehenderit esse occaecat aliquip fugiat laboris quis ut sunt adipisicing deserunt. Ipsum excepteur consectetur aliquip minim magna ipsum pariatur anim eu anim. Sunt in aliquip eu incididunt laboris cillum nisi est velit ut incididunt.ud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
                </p>
              :active_button=="personal-coaching"?
                <p>
                  Eiusmod non consectetur nisi velit amet ullamco consectetur consectetur nulla. Occaecat esse voluptate amet est eu enim ullamco eiusmod. Et aliqua pariatur do ullamco et laboris aute adipisicing. Sunt reprehenderit duis consequat excepteur dolore. Laboris aliqua excepteur aute in tempor ullamco ipsum labore. Eiusmod velit et reprehenderit id velit do exercitation. Aliqua Lorem proident tempor consequat tempor cillum qui occaecat non commodo.
                </p>
              :""
            }
          </div>
        </div>
      </section>

    );
}

export default Slider;
