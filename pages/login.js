import styles from '../styles/Login.module.css'
import Link from 'next/link'

import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';

export default function Login () {

    const router = useRouter();
  

    const [show_pass,set_show_pass] = useState(false);

    const [login_form,set_login_form] = useState({
        email: "",
        password :""
    })

    const changeLanguage = (e) => {
        const locale = e.target.value
        router.push('/login', '/login', { locale })
    }

    const [info,set_info] = useState("");
    const [error,set_error] = useState("");

    let onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        ////console.log(login_form);
        // router.push("/verify-code","/verify-code", { locale })

        set_error("");
        set_info("");
        // AuthService.login({
        //     body: JSON.stringify({
        //         ...login_form
        //     })
        // }).then(res=>res.json()).then(data=>{
        //     //console.log(data);

        //     if(data.success){
        //         router.push("/verify-code?email="+login_form.email,"/verify-code");
        //     }else if(data.message=="auth_failed"){
            
        //     }else if(data.message=="user_not_found"){
            
        //     }else if(data.message=="not_accepted"){
            
        //     }
        // })
    }

    return (
        <>
        <Head>
            <title>
                Giriş Yap || EHS
            </title>
        </Head>
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.login_container}>
                    <div className={styles.login_body}>
                        <Link href="/" className={styles.logo_container}>
                            <img src="/images/logo.png" />
                        </Link>
                        <form className={styles.form} onSubmit={onSubmit}>
                            <label for="email">
                                Email
                            </label>
                            <input required onInput={(e)=>{set_login_form(form=>{return {...form,email:e.target.value}})}} type="email" name="email" id="email" />
                            <label for="password">
                                Password
                            </label>
                            <div className={styles.password_input}>
                                <input required onInput={(e)=>{set_login_form(form=>{return {...form,password:e.target.value}})}} type={show_pass?"text":"password"} name="password" id="password" />
                                <div onClick={()=>{set_show_pass(!show_pass)}} className={styles.eye_icon}>
                                    {
                                        show_pass?
                                        <svg stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                        :
                                        <svg stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"/></svg>
                                    }
                                </div>
                            </div>
                            <Link href="/forgot-password" className={styles.forgot_password}>
                                Şifremi Unuttum
                            </Link>
                            <div className={styles.error}>
                                {error}
                            </div>
                            <div className={styles.info}>
                                {info}
                            </div>
                            <button type="submit">
                                Giriş Yap
                            </button>
                            <Link href="/register" className={styles.button}>
                                Kayıt Ol
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}