import Image from "next/image";
import { useEffect, useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/events.module.css";
// LANGUAGE
import { useRouter } from 'next/router';
import lang from "../lang.json"
// LANGUAGE


function Events() {
    // LANGUAGE
    const router = useRouter();
    const { locale } = router;
    const t = lang[locale];
    // LANGUAGE
    const [activeNav, setActiveNav] = useState("");

    const [events,set_events] = useState([]);

    const [filtered_events,set_filtered_events] = useState([]);

    const [year_filter,set_year_filter] = useState("*");
    const [month_filter,set_month_filter] = useState("*");

    const months = [
        t?.january,
        t?.february,
        t?.march,
        t?.april,
        t?.may,
        t?.jun,
        t?.july,
        t?.august,
        t?.september,
        t?.october,
        t?.november,
        t?.december,
    ]

    useEffect(()=>{
        let new_events = [];

        for(let i = 0; i<3000;i++){
            new_events.push({
                name: "Cupidatat ad dolore anim irure esse non duis ea.",
                location: "Antalya/Turkey",
                hour: Math.floor(Math.random()*13)+8,
                minute: Math.floor(Math.random()*60),
                year: Math.floor(Math.random()*3)+2021,
                month: Math.floor(Math.random()*12)+1,
                day: Math.floor(Math.random()*27)+1
            })
        }

        set_events(new_events);

    },[])

    useEffect(()=>{

        console.log("events",events);

        let new_filtered_events=[];

        events.forEach(a=>{

            let pass = true;

            if(year_filter!="*"){
                if(a.year!=parseInt(year_filter)){
                    pass = false
                }
            }
            if(month_filter!="*"){
                if(a.month!=parseInt(month_filter)){
                    pass = false
                }
            }
        

            if(pass&&new_filtered_events.length<10){
                new_filtered_events.push(a);
            }
        })
        
        set_filtered_events(new_filtered_events);



    },[year_filter,month_filter,events]);

    useEffect(()=>{
        console.log("filtered_events:",filtered_events);
    },[filtered_events])

    return (
        <div className={styles.events_wrapper}id="events">
            <div className={styles.events_container}>
                <div className={styles.title}>
                   {t?.ehs_events}
                </div>
                <div className={styles.filters}>
                    <div className={styles.select_filter}>
                        <label>
                            {t?.year}
                        </label>
                        <select value={year_filter} onChange={(e)=>set_year_filter(e.target.value)}>
                            <option value="*">
                                {t?.all}
                            </option>
                            <option value="2023">
                                2023
                            </option>
                            <option value="2022">
                                2022
                            </option>
                            <option value="2021">
                                2021
                            </option>
                        </select>
                    </div>
                    <div className={styles.select_filter}>
                        <label>
                            {t?.month}
                        </label>
                        <select value={month_filter} onChange={(e)=>set_month_filter(e.target.value)}>
                            <option value="*">
                                {t?.all}
                            </option>
                            <option value="1">
                                {t?.january}
                            </option>
                            <option value="2">
                                {t?.february}
                            </option>
                            <option value="3">
                                {t?.march}
                            </option>
                            <option value="4">
                                {t?.april}
                            </option>
                            <option value="5">
                                {t?.may}
                            </option>
                            <option value="6">
                                {t?.jun}
                            </option>
                            <option value="7">
                                {t?.july}
                            </option>
                            <option value="8">
                                {t?.august}
                            </option>
                            <option value="9">
                                {t?.september}
                            </option>
                            <option value="10">
                                {t?.october}
                            </option>
                            <option value="11">
                                {t?.november}
                            </option>
                            <option value="12">
                                {t?.december}
                            </option>
                        </select>
                    </div>
                </div>
                <div className={styles.events_list}>
                    {
                        filtered_events.map(event=>{
                            return (
                                <div className={styles.item} key={event}>
                                    <div className={styles.date}>
                                        <div className={styles.day}>
                                            {event.day}
                                        </div>
                                        <div className={styles.month}>
                                            {months[event.month-1]}
                                        </div>
                                    </div>
                                    <div className={styles.content}>
                                        <div className={styles.name}>
                                            {event.name}
                                        </div>
                                        <div className={styles.info}>
                                            <div className={styles.location}>
                                                <span>
                                                    {t?.location}
                                                </span>
                                                {event.location}
                                            </div>
                                            <div className={styles.time}>
                                                <span>
                                                    {t?.time}
                                                </span>
                                                {event.hour}:{event.minute}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.buttons}>
                    <div className={styles.button}>
                        {t?.all}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
