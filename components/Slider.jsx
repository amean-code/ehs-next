import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/App.module.css";

function Header() {
    const [activeNav, setActiveNav] = useState("");

    return (
        <section>
        <div className={styles.main_container}>
          <div className={styles.containLeft}>
            <Image width={200} height={200} src="/images/containLeft.jpg" alt="" />
          </div>
          <div className={styles.containRight}>
            <h4>WHAT WE DO</h4>
            <h2>Our Services</h2>
            <p>Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.</p>
          </div>
        </div>
      </section>

    );
}

export default Header;
