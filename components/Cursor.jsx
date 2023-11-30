import { createRef, useEffect, useRef, useState } from "react";
import styles from "../styles/cursor.module.css" 

function Cursor () {

    const [mousePosition,setMousePosition] = useState({ x: null, y: null });

    const [cursors,set_cursors] = useState([])

    useEffect(()=>{
        let new_cursors = [];

        let number = 100;

        for(let i = 0;i<number; i++){
            let max_size = 12;
            let size = max_size*((i+1)/(number));

            let duration = 0.1 * ((max_size-size)/max_size);
            let color_i = 0;

            if(size > max_size*3/4){
                color_i = 0;
            }else if(size > max_size*2/4){
                color_i = 1;
            }else if(size > max_size*1/4){
                color_i = 2;
            } else if(size > max_size*0/4){
                color_i = 3;
            }

            let colors = [
                "#00720801",
                "#00720802",
                "#00720803",
                "#00720804"
            ];

            new_cursors.push({
                size: size,
                color: colors[color_i],
                transition: duration,
                ref: createRef()
            })
        }

        set_cursors(new_cursors)
    },[])
    
    useEffect(() => {
        const updateMousePosition = ev => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    useEffect(()=>{
            cursors.forEach(cursor=>{
                
                if(cursor.ref.current){
                    cursor.ref.current.style.top = mousePosition.y+"px";
                    cursor.ref.current.style.left = mousePosition.x+"px";
                }
            })
    },[cursors,mousePosition])
    


    return (
        <>
            {
                cursors.map(cursor=>{
                    return (
                        <div key={cursor.size} ref={cursor.ref} className={styles.cursor} style={{transitionDuration: cursor.transition+"s",width: cursor.size+"px",height: cursor.size+"px",background: cursor.color}}>

                        </div>
                    )
                })
            }
        </>
    )
} 

export default Cursor