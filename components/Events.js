import Image from "next/image";
import { useEffect, useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/events.module.css";

function Events() {
    const [activeNav, setActiveNav] = useState("");

    const [events,set_events] = useState([]);

    const [filtered_events,set_filtered_events] = useState([]);

    const [year_filter,set_year_filter] = useState("*");
    const [month_filter,set_month_filter] = useState("*");

    const months = [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık"
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
        <div className={styles.events_wrapper}>
            <div className={styles.events_container}>
                <div className={styles.title}>
                    Energy Hack Space Events
                </div>
                <div className={styles.filters}>
                    <div className={styles.select_filter}>
                        <label>
                            Yıl :
                        </label>
                        <select value={year_filter} onChange={(e)=>set_year_filter(e.target.value)}>
                            <option value="*">
                                Hepsi
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
                            Ay: 
                        </label>
                        <select value={month_filter} onChange={(e)=>set_month_filter(e.target.value)}>
                            <option value="*">
                                Hepsi
                            </option>
                            <option value="1">
                                Ocak
                            </option>
                            <option value="2">
                                Şubat
                            </option>
                            <option value="3">
                                Mart
                            </option>
                            <option value="4">
                                Nisan
                            </option>
                            <option value="5">
                                Mayıs
                            </option>
                            <option value="6">
                                Haziran
                            </option>
                            <option value="7">
                                Temmuz
                            </option>
                            <option value="8">
                                Ağustos
                            </option>
                            <option value="9">
                                Eylül
                            </option>
                            <option value="10">
                                Ekim
                            </option>
                            <option value="11">
                                Kasım
                            </option>
                            <option value="12">
                                Aralık
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
                                                    Location: 
                                                </span>
                                                {event.location}
                                            </div>
                                            <div className={styles.time}>
                                                <span>
                                                    Time: 
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
                        Tümü
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
