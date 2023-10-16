import styles from '../styles/Register.module.css'
import Link from 'next/link'

import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';

export default function SignUp () {

    const router = useRouter();

    const [register,set_register] = useState({
        name:"",
        surname:"",
        email: "",
        password :""
    })

    const [show_pass,set_show_pass] = useState(false);

    const [info,set_info] = useState("");
    const [error,set_error] = useState("");

    let onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        ////console.log(register);

        set_error("");
        set_info("");
        // AuthService.register({
        //     body: JSON.stringify(register)
        // }).then((res)=>res.json()).then((data)=>{
        //     ////console.log(data);

        //     if(data.success){
            
        //     }else if(data.message=="min_pass_length_6"){
            
        //     }else if(data.message=="email_already_used"){
            
        //     }
        // })
        
    }

    return (
        <>
        <Head>
            <title>
                Kayıt Ol || EHS
            </title>
        </Head>
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.register_container}>
                    <div className={styles.register_body}>
                        <Link href="/" className={styles.logo_container}>
                            <img src="/images/logo.png" />
                        </Link>
                        <form className={styles.form} onSubmit={onSubmit}>
                            <label for="name">
                                İsim
                            </label>
                            <input required value={register.name} onInput={(e)=>{set_register(form=>{return {...form,name:e.target.value}})}} type="text" name="name" id="name" />
                            <label for="name">
                                Soyisim
                            </label>
                            <input required value={register.surname} onInput={(e)=>{set_register(form=>{return {...form,surname:e.target.value}})}} type="text" name="surname" id="surname" />
                            <label for="email">
                                Email
                            </label>
                            <input required value={register.email} onInput={(e)=>{set_register(form=>{return {...form,email:e.target.value}})}} type="email" name="email" id="email" />
                            <label for="password">
                                Şifre
                            </label>
                            <div className={styles.password_input}>
                                <input required value={register.password} onInput={(e)=>{set_register(form=>{return {...form,password:e.target.value}})}} type={show_pass?"text":"password"} name="password" id="password" />
                                <div onClick={()=>{set_show_pass(!show_pass)}} className={styles.eye_icon}>
                                    {
                                        show_pass?
                                        <svg stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                        :
                                        <svg stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"/></svg>
                                    }
                                </div>
                            </div>
                            <div className={styles.error}>
                                {error}
                            </div>
                            <div className={styles.info}>
                                {info}
                            </div>
                            <button type="submit">
                                Kayıt Ol
                            </button>
                            <Link href="/login" className={styles.button}>
                                Giriş Yap
                            </Link>
                        </form>                        
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}