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
              Energy Hack Space
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
                  Energy Hack Space (EHS) is a platform that fosters innovative approaches and sustainable solutions in the energy sector. Our mission is to accelerate the pace of energy transformation and provide unique learning and networking opportunities for students, recent graduates and industry professionals. With a multidisciplinary approach, we address the challenges and opportunities in the energy sector, bringing together passionate individuals in the field to promote knowledge exchange and collaboration. EHS is a meeting point for everyone who wants to shape the future of the energy sector.
                </p>
              :active_button=="what-we-do"?
                <p>
                  As Energy Hack Space (EHS), we aim to remove the barriers to innovation and sustainability in the energy sector. To this end, we organize hackathons, workshops and trainings on energy and bring new breaths to the sector. We offer trainings and mentoring programs on energy, optimization and artificial intelligence to a wide audience from students to professionals. We are also on a mission to create networking and collaboration opportunities to support innovative ideas and projects in the industry. EHS offers comprehensive solutions to accelerate the energy transition and maximize its potential.
                </p>
              :active_button=="why-join"?
                <p>
                  In your participation in Energy Hack Space (EHS), you become part of the potential to create real change in the energy sector. EHS not only offers theoretical knowledge, but also engages individuals with hands-on experiences, intra-industry networking opportunities and career-oriented mentoring programs. It is an excellent learning and sharing platform for experts in areas such as energy and artificial intelligence. Our participants have the opportunity to learn about current trends, technologies and comprehensive solutions in the industry, while also opening doors for potential collaborations and partnerships. By joining EHS, you take a big step towards becoming one of the future leaders in the energy sector.
                </p>
              :""
            }
          </div>
        </div>
      </section>

    );
}

export default Slider;
