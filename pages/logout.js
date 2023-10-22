import styles from '../styles/Login.module.css'
import Link from 'next/link'

import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';
import AuthService from '../services/Auth';
import Cookies from "js-cookie";

export default function Login () {

    const router = useRouter();

    useEffect(()=>{
        Cookies.remove("ehs_user_token");

        router.push("/login")
    },[])

    return (<></>)
}