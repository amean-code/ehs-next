import styles from '../styles/VerifyCode.module.css'
import Link from 'next/link'

import { useState,useEffect,createRef } from 'react';
import { useRouter } from 'next/router';
import Cookies from "js-cookie";

import Head from 'next/head';

import AuthService from '../services/Auth';

export default function VerifyCode () {

    const router = useRouter();

    const [show_pass,set_show_pass] = useState(false);
    const [err,set_err] = useState("");

    const [verify_code_form,set_verify_code_form] = useState([
        "",
        "",
        "",
        "",
        "",
        ""
    ])

    const [verify_code_ref,set_verify_code_red] = useState([
        createRef(),
        createRef(),
        createRef(),
        createRef(),
        createRef(),
        createRef()
    ])

    const button_ref = createRef();

    const [email,set_email] = useState("");

    useEffect(()=>{
        if(router.isReady){
            if(!router.query.email){
                router.push("/login","/login");
            }else{
                set_email(router.query.email);
            }
        }
    },[router.isReady])

    let onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        ////console.log(verify_code_form)
        // router.push('/app', '/app', { locale })

        ////console.log(router.query);

        set_err("");

        AuthService.verifyMail({
            body: JSON.stringify({
                email: email,
                verify_code : verify_code_form.join("")
            })
        }).then(res=>res.json()).then(data=>{
            ////console.log(data);

            if(data.message=="verify_code_wrong"){
                set_err("Doğrulama Kodu Hatalı")
            }else{
                Cookies.set("ehs_user_token",data.accessToken);

                router.push("/","/");
            }
        })
    }

    let handle_cell_input = (e,index) => {
        let new_value = e.target.value;
        if(new_value.length>1){
            new_value = new_value[1];
        }

        set_verify_code_form(arr=>{
            return arr.map((code,code_index)=>{
                if(index==code_index){
                    return new_value
                }return code
            })
        })

        if(new_value.length>0){
            if(index+1<verify_code_ref.length){
                verify_code_ref[index+1].current.focus()
            }else{
                button_ref.current.focus();
            }
        }

        
    }

    return (
        <>
        <Head>
            <title>
                Güvenlik Aşaması || EHS
            </title>
        </Head>
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.verify_code_container}>
                    <div className={styles.verify_code_body}>
                        <Link href="/" className={styles.logo_container}>
                            <img src="/images/logo.png" />
                        </Link>
                        <form className={styles.form} onSubmit={onSubmit}>
                            <div className={styles.code_container}>
                                {
                                    verify_code_form.map((code,index)=>{
                                        return (
                                            <input required type="number" key={index} value={code} onInput={(e)=>handle_cell_input(e,index)} ref={verify_code_ref[index]}/>
                                        )
                                    })
                                }
                            </div>
                            <div className={styles.error}>
                                {err}
                            </div>
                            <button type="submit" ref={button_ref}>
                                Gönder
                            </button>
                        </form>
                    </div>
                </div>                
            </div>
        </main>
        </>
    )
}