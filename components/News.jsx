import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/news.module.css";
import app_css from "../styles/App.module.css";
// LANGUAGE
import { useRouter } from 'next/router';
import lang from "../lang.json"
// LANGUAGE


function News() {

    // LANGUAGE
    const router = useRouter();
    const { locale } = router;
    const t = lang[locale];
    // LANGUAGE
    
    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    const [width,height] = useWindowSize();
  

    const [page,set_page] = useState(0);

    const [news,set_news] = useState([
        {
            name: t?.what_is_ehs,
            content: t?.what_is_ehs_text,
            day: 12,
            month: 11,
            year: 2023,
            author: "EHS",
            views: 2173
        },
        {
            name: t?.what_is_ehs,
            content: t?.what_is_ehs_text,
            day: 12,
            month: 11,
            year: 2023,
            author: "EHS",
            views: 2173
        },
        {
            name: t?.what_is_ehs,
            content: t?.what_is_ehs_text,
            day: 12,
            month: 11,
            year: 2023,
            author: "EHS",
            views: 2173
        },
        {
            name: t?.what_is_ehs,
            content: t?.what_is_ehs_text,
            day: 12,
            month: 11,
            year: 2023,
            author: "EHS",
            views: 2173
        },
        {
            name: t?.what_is_ehs,
            content: t?.what_is_ehs_text,
            day: 12,
            month: 11,
            year: 2023,
            author: "EHS",
            views: 2173
        },
        {
            name: t?.what_is_ehs,
            content: t?.what_is_ehs_text,
            day: 12,
            month: 11,
            year: 2023,
            author: "EHS",
            views: 2173
        },
        {
            name: t?.what_is_ehs,
            content: t?.what_is_ehs_text,
            day: 12,
            month: 11,
            year: 2023,
            author: "EHS",
            views: 2173
        },
        {
            name: t?.what_is_ehs,
            content: t?.what_is_ehs_text,
            day: 12,
            month: 11,
            year: 2023,
            author: "EHS",
            views: 2173
        }
    ]);

    useEffect(()=>{
        let new_news = [];

        for(let i = 0;i<100;i++){
            new_news.push({
                name: t?.what_is_ehs,
                content: t?.what_is_ehs_text,
                day: Math.floor(Math.random()*27)+1,
                month: Math.floor(Math.random()*11)+1,
                year: Math.floor(Math.random()*4)+2020,
                author: "EHS",
                views: Math.floor(Math.random()*2000)+1000
            })
        }

        set_news(new_news);
    },[])

    const [windows,set_windows] = useState([]);

    const [new_per_window,set_new_per_window] = useState(3);

    const [grid_template_columns_str,set_grid_template_columns_str] = useState("");

    
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

        let window_handler=[];

        let new_windows=[];

        let column_str="";

        for(let i=0;i<new_per_window;i++){
            column_str += "1fr "
        }

        news.forEach((item,index) => {

            window_handler.push(item);

            if(index%new_per_window==new_per_window-1){
                new_windows.push(window_handler);
                window_handler = [];
            }else if(index==news.length-1){
                new_windows.push(window_handler);
                window_handler = [];
            }

        });

        set_windows(new_windows);
        set_grid_template_columns_str(column_str)
    },[new_per_window,news]);

    useEffect(()=>{

        console.log("WIDTH : ",width)
        console.log("HEIGHT: ",height)

        if(width>=950 && width<1300){
            set_new_per_window(3);
        }else if(width>=740 && width<950){
            set_new_per_window(2);
        }else if(width<740){
            set_new_per_window(1);
        }else{
            set_new_per_window(4);
        }

    },[width,height])

    let random_color = (opacity=1) => {
        let r = Math.random()*100+100;
        let g = Math.random()*100+100;
        let b = Math.random()*100+100;

        return "rgba("+r+","+g+","+b+","+opacity+")";
    }

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <h3 className={app_css.h3}>
                    {t?.ehs_news}
                </h3>
                <div className={app_css.line}></div>
                <div className={styles.description}>
                    {t?.ehs_news_text}
                </div>
                <div className={styles.slider_wrapper}>
                    <div className={styles.prev_button_container}>
                        <button onClick={()=>{
                            if(page==0){
                                set_page(windows.length-1);    
                            }else{
                                set_page(page-1)
                            }
                        }} className={styles.prev_button+" "+styles.button}>
                            <svg stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
                        </button>
                    </div>
                    <div className={styles.slider_windows}>
                        {
                            windows.map((window,index)=>{
                                return (
                                    <div key={"window"+index} className={styles.window} style={{transform: "translateX("+(index-page)*100+"%)",gridTemplateColumns:grid_template_columns_str}}>
                                        {
                                            window.map((item,item_index)=>{
                                            return (
                                                <div key={index} className={styles.new_item}>
                                                    <div className={styles.date}>
                                                        <div className={styles.day}>
                                                            {item.day}
                                                        </div>
                                                        <div className={styles.month}>
                                                            {months[item.month-1]}
                                                        </div>
                                                        <div className={styles.year}>
                                                            {item.year}
                                                        </div>
                                                    </div>
                                                    <div className={styles.views}>
                                                        <div className={styles.icon}>
                                                            <svg strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                                        </div>
                                                        <div className={styles.number}>
                                                            {item.views}
                                                        </div>
                                                    </div>
                                                    <div className={styles.image}>
                                                        <img src="https://www.alastyr.com/blog/wp-content/uploads/2021/01/blog-ile-para-nasil-kazanilir.png" />
                                                    </div>
                                                    <div className={styles.body}>
                                                        <div className={styles.name}>
                                                            {item.name}
                                                        </div>
                                                        <div className={styles.author}>
                                                            {t?.by} {item.author}
                                                        </div>
                                                        <div className={styles.content}>
                                                            {item.content.slice(0,220)}...
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.next_button_container}>
                        <button onClick={()=>{
                            
                            if(page==windows.length-1){
                                set_page(0);    
                            }else{
                                set_page(page+1)
                            }
                        }} className={styles.next_button+" "+styles.button}>
                            <svg stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default News;
