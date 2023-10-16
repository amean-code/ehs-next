import { useState } from "react";
import styles from "../../styles/Form.module.css"
import Image from "next/image";

export default function Form(){

    const [state,set_state] = useState(0);
    const [steps,set_steps] = useState([
        {
            name: "İletişim Bilgileri"
        },
        {
            name: "CV Bilgileri"
        },
        {
            name: "Mentörlük Süreci Genel Bilgiler"
        },
        {
            name: "Mentörlük Süreci Ayrıntı Bilgiler"
        },
        {
            name: "Mentörlük Sonrası Süreç"
        }
    ]);

    const [mobile_progress,set_menu_progress] = useState(false);

    return (
        <div className={styles.main}>
            <div className={styles.form_wrapper}>
                <div className={styles.sidebar}>
                    <div className={styles.logo_container}>
                        <Image width={200} height={200} src="/images/logo.png" alt="" className={styles.image} />
                    </div>
                    <div className={styles.title}>
                        <p>
                            Mentee Başvuru Formu
                        </p>
                        <div className={styles.icon+" "+(mobile_progress?styles.active:"")} onClick={()=>set_menu_progress(!mobile_progress)}>
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.959 123.958"><path d="M117.979 28.017h-112c-5.3 0-8 6.4-4.2 10.2l56 56c2.3 2.3 6.1 2.3 8.401 0l56-56c3.799-3.8 1.099-10.2-4.201-10.2z" /></svg>
                        </div>
                    </div>
                    <div className={styles.progress+" "+(mobile_progress?styles.mobile_active:"")}>
                        {
                            steps.map((step,index)=>{
                                return (
                                    <div className={styles.item+" "+(index<=state?styles.active:"")}>
                                        <div className={styles.icon}>
                                            {
                                                index>state?
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="M7 12A5 5 0 107 2a5 5 0 000 10c2.76 0 0 0 0 0zm0 2A7 7 0 107 0a7 7 0 000 14c3.87 0 0 0 0 0z" fill="#2E3A59" fill-rule="evenodd"/></svg>
                                                :index<=state?
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="M7 10a3 3 0 110-6 3 3 0 010 6zm0 4A7 7 0 107 0a7 7 0 000 14c3.87 0 0 0 0 0zm0-2A5 5 0 107 2a5 5 0 000 10c2.76 0 0 0 0 0z" fill="#2E3A59" fill-rule="evenodd"/></svg>:""
                                            }
                                        </div>
                                        <div className={styles.name}>
                                            {step.name}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.form_body}>

                </div>
            </div>
        </div>
    )
}