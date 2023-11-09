import { useEffect, useState } from "react";
import styles from "../../styles/Form.module.css"
import Image from "next/image";
import Head from "next/head";
import { useRef } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import MenteeService from "../../services/Mentee";
import FormService from "../../services/Form";
import Link from "next/link";

export default function Form(){

    const router = useRouter();

    const [user,set_user] = useState();

    useEffect(()=>{
        if(Cookies.get("ehs_user_token")){
          set_user(jwt.decode(Cookies.get("ehs_user_token")));
        }else{
            router.push("/login")
        }
    },[]);

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

    const mentorluk_basvuru_turu_ref = useRef();

    const [error,set_error] = useState({
        code: "",
        message: ""
    });    

    const [mentee_form,set_mentee_form] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        linkedin: ""
    })

    const egitim_form_structure = {
        id: -1,
        department:"",
        university:"",
        rate:"",
        start_date:"",
        finish_date:"",
        interesting_lesson:"",
        project_research_topics:"",
        active_clubs:""
    }

    const [egitim_forms,set_egitim_forms] = useState([
        egitim_form_structure
    ]);



    const tecrube_form_structure = {
        id: -1,
        position:"",
        institution:"",
        start_date:"",
        finish_date:"",
        task_1:"",
        task_2:"",
        task_3:"",
        technologies:""
    }

    const [tecrube_forms,set_tecrube_forms] = useState([
        tecrube_form_structure
    ]);


    const kurs_form_structure = {
        id: -1,
        name:"",
        institution:"",
        finish_date:"",
        skill_1:"",
        skill_2:"",
        skill_3:""
    }

    const [kurs_forms,set_kurs_forms] = useState([
        kurs_form_structure
    ]);

    const proje_form_structure = {
        id: -1,
        project:"",
        city:"",
        supporting_institution:"",
        funding_institution:"",
        budget:"",
        task_1:"",
        task_2:"",
        task_3:"",
        technologies:"",
        awards:""
    }

    const [proje_forms,set_proje_forms] = useState([
        proje_form_structure
    ]);

    const yayin_form_structure = {
        id: -1,
        name:"",
        publishing_institution:"",
        publish_date:"",
        DOI:""
    }

    const [yayin_forms,set_yayin_forms] = useState([
        yayin_form_structure
    ]);

    const hobi_form_structure = {
        id: -1,
        name:"",
        description:"",
        isProfiessional:false
    }

    const [hobi_forms,set_hobi_forms] = useState([
        hobi_form_structure
    ]);

    const bilgisayar_becerisi_form_structure = {
        id: -1,
        skill:"",
        point:0,
        star_show: ""
    }

    const [bilgisayar_becerisi_forms,set_bilgisayar_becerisi_forms] = useState([
        bilgisayar_becerisi_form_structure
    ]);

    const dil_form_structure = {
        id: -1,
        language:"",
        point:0,
        star_show: ""
    }

    const [dil_forms,set_dil_forms] = useState([
        dil_form_structure
    ]);


    let handle_phone_oninput = (e) => {

        let phone = e.target.value;

        let new_phone = "";

        if(phone.length<14){
            phone.split("").forEach((char,index)=>{
                if(index==3||index==7||index==10){
                    if(char!==" "){
                        new_phone += " ";
                    }
                }
    
                new_phone += char;
            })
    
            set_mentee_form({
                ...mentee_form,
                phone: new_phone
            });
        }
    }

    const [mentorluk_sureci_genel_bilgiler_form,set_mentorluk_sureci_genel_bilgiler_form] = useState({
        question_1: "",
        question_3: "",
        question_4: "",
        question_5: ""
    })

    const [mentorluk_sureci_basvuru_turu_form,set_mentorluk_sureci_basvuru_turu_form] = useState([
        {
            name: "Lisans ve Lisansüstü Tez Mentörlüğü",
            key: "lisans-ve-lisansustu-tez-mentorlugu",
            checked: false,
            questions:[
                {
                    question: "Tez konunuz hakkında kısa bir açıklama yapar mısınız?",
                    key: "question_1",
                    answer: ""
                },
                {
                    question: "Hangi aşamadasınız? (Konu belirleme, literatür tarama, veri toplama vb.)",
                    key: "question_2",
                    answer: ""
                },
                {
                    question: "Hangi konularda yardım arıyorsunuz?",
                    key: "question_3",
                    answer: ""
                }
            ]
        },
        {
            name: "Proje Mentörlüğü",
            key: "proje-mentorlugu",
            checked: false,
            questions:[
                {
                    question: "Projenizin kısa bir özeti nedir?",
                    key: "question_1",
                    answer: ""
                },
                {
                    question: "Projenizin şuanki aşaması nedir?",
                    key: "question_2",
                    answer: ""
                },
                {
                    question: "Hangi konularda danışmanlık arıyorsunuz?",
                    key: "question_3",
                    answer: ""
                }
            ]
        },
        {
            name: "Akademik ve Kariyer Mentörlüğü",
            key: "akademik-ve-kariyer-mentorlugu",
            checked: false,
            questions:[
                {
                    question: "Şuanki kariyer hedefiniz nedir?",
                    key: "question_1",
                    answer: ""
                },
                {
                    question: "Hangi alanlarda rehberlik arıyorsunuz? (Örneğin: iş başvurusu, CV hazırlığı vb.)",
                    key: "question_2",
                    answer: ""
                }
            ]
        },
        {
            name: "Girişimcilik Mentörlüğü",
            key: "girisimcilik-mentorlugu",
            checked: false,
            questions:[
                {
                    question: "Girişim fikriniz nedir?",
                    key: "question_1",
                    answer: ""
                },
                {
                    question: "Şuanda hangi aşamadasınız?",
                    key: "question_2",
                    answer: ""
                },
                {
                    question: "Hangi konularda rehberlik arıyorsunuz?",
                    key: "question_3",
                    answer: ""
                }
            ]
        },
        {
            name: "Akran Mentörlüğü",
            key: "akran-mentorlugu",
            checked: false,
            questions:[
                {
                    question: "Hangi deneyimleri veya bilgileri paylaşmak istersiniz?",
                    key: "question_1",
                    answer: ""
                },
                {
                    question: "Hangi konularda akran rehberliği arıyorsunuz?",
                    key: "question_2",
                    answer: ""
                }
            ]
        },
    ])



    const [mentorluk_sonrasi_surec,set_mentorluk_sonrasi_surec] = useState({
        question_2: "",
        question_3: "",
        question_4: ""
    })

    const [mentorluk_sonrasi_surec_iliski_form,set_mentorluk_sonrasi_surec_iliski_form] = useState([
        {
            name: "Aktif bir üye olarak kalmak",
            key: "aktif-uye-kalmak",
            checked: false
        },
        {
            name: "Kendi mentörlük deneyimlerimi paylaşmak",
            key: "mentorluk-deneyimlerini-paylasmak",
            checked: false
        },
        {
            name: "EHS etkinliklerine katılmak veya bu etkinliklerde görev almak",
            key: "etkinliklere-katilmak",
            checked: false
        },
        {
            name: "EHS projelerinde aktif rol almak",
            key: "projelerde-rol-almak",
            checked: false
        },
        {
            name: "EHS'deki diğer bireylerle ağ kurmaya devam etmek",
            key: "ağ-kurmaya-devam-etmek",
            checked: false
        },
    ]);

    const [loader,set_loader] = useState(false);

    let handle_submit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        set_loader(true);

        set_error({
            code: "",
            message: ""
        });
        if(state<steps.length-1){

            if(state==0){
                MenteeService.update_mentee(user?.id,JSON.stringify(mentee_form)).then(res=>res.json())
                .then(data=>{
                    console.log("DATA : ",data);

                    if(data.success){
                        set_state(state+1);                        
                        setTimeout(()=>{
                            set_loader(false);
                        },200)
                        Cookies.set("ehs_user_token",data.accessToken);
                        set_user(data.data);
                    }
                })
            }else if(state==1){
                fill_form_handle();
            }else if(state==3){
                mentorluk_sureci_ayrinti_bilgiler_form_handle();
            }else if(state==4){
                mentorluk_sonrasi_surec_form_handle();
            } else if(state==2){
                if(mentorluk_sureci_basvuru_turu_form.filter(a=>{
                    if(a.checked){
                        return true
                    }return false
                })==0){
                    set_error({
                        code: "mentorluk_basvuru_turu_min_1",
                        message: "En az 1 mentörlük başvuru türü işaretlenmeli"
                    });
                    console.log("mentorluk_basvuru_turu_ref: ",mentorluk_basvuru_turu_ref);
                    console.log("mentorluk_basvuru_turu_ref: ",mentorluk_basvuru_turu_ref.current);
                    mentorluk_basvuru_turu_ref.current.scrollIntoView({
                        behavior: 'smooth'
                    });
                    setTimeout(()=>{
                    set_loader(false);
                    },200)
                }else{
                    mentorluk_sureci_genel_bilgiler_form_handle();
                }
            }else{
                set_state(state+1);
                setTimeout(()=>{
                    set_loader(false);
                },200)
            }
        }else{
            mentorluk_sonrasi_surec_form_handle();
            setTimeout(()=>{
                set_loader(false);
            },200)

        }
    };

    useEffect(()=>{
        if(user){
            console.log("USER: ",user);
            set_mentee_form({
                ...mentee_form,
                name: user.name,
                surname:  user.surname,
                email:  user.email,
                phone:  user.phone,
                linkedin:  user.linkedin
            })

            get_form_handle();
            
        }
    },[user])

    let get_form_handle = () => {
        FormService.get_form(Cookies.get("ehs_user_token")).then(res=>res.json())
        .then(data=>{
            console.log("FORM DATA: ",data);

            if(data.success){
                set_loader(false);
                if(data.educations.length>0){
                    set_egitim_forms(data.educations.map(a=>{
                        let start_date=new Date(a.start_date);
                        let finish_date=new Date(a.finish_date);
                        return {
                            ...a,
                            start_date: start_date.getFullYear()+"-"+((start_date.getMonth()+1)+'').padStart(2,'0')+"-"+(start_date.getDate()+"").padStart(2,'0'),
                            finish_date: finish_date.getFullYear()+"-"+((finish_date.getMonth()+1)+'').padStart(2,'0')+"-"+(finish_date.getDate()+"").padStart(2,'0')
                        }
                    }));
                }else{
                    set_egitim_forms([egitim_form_structure]);
                }
                if(data.experience_informations.length>0){
                    set_tecrube_forms(data.experience_informations.map(a=>{
                        let start_date=new Date(a.start_date);
                        let finish_date=new Date(a.finish_date);
                        return {
                            ...a,
                            start_date: start_date.getFullYear()+"-"+((start_date.getMonth()+1)+'').padStart(2,'0')+"-"+(start_date.getDate()+"").padStart(2,'0'),
                            finish_date: finish_date.getFullYear()+"-"+((finish_date.getMonth()+1)+'').padStart(2,'0')+"-"+(finish_date.getDate()+"").padStart(2,'0')
                        }
                    }));
                }else{
                    set_tecrube_forms([tecrube_form_structure]);
                }
                if(data.course_informations.length>0){
                    set_kurs_forms(data.course_informations.map(a=>{
                        let finish_date=new Date(a.finish_date);
                        return {
                            ...a,
                            finish_date: finish_date.getFullYear()+"-"+((finish_date.getMonth()+1)+'').padStart(2,'0')+"-"+(finish_date.getDate()+"").padStart(2,'0')
                        }
                    }));
                }else{
                    set_kurs_forms([kurs_form_structure]);
                }
                if(data.publishes.length>0){
                    set_yayin_forms(data.publishes.map(a=>{
                        let publish_date=new Date(a.publish_date);
                        return {
                            ...a,
                            publish_date: publish_date.getFullYear()+"-"+((publish_date.getMonth()+1)+'').padStart(2,'0')+"-"+(publish_date.getDate()+"").padStart(2,'0')
                        }
                    }));
                }else{
                    set_yayin_forms([yayin_form_structure]);
                }
                if(data.project_informations.length>0){
                    set_proje_forms(data.project_informations.map(a=>{
                        return {
                            ...a
                        }
                    }));
                }else{
                    set_proje_forms([proje_form_structure]);
                }
                if(data.hobbies.length>0){
                    set_hobi_forms(data.hobbies.map(a=>{
                        return {
                            ...a
                        }
                    }));
                }else{
                    set_hobi_forms([hobi_form_structure]);
                }
                if(data.languages.length>0){
                    set_dil_forms(data.languages.map(a=>{
                        return {
                            ...a,
                            language: a.language,
                            star_show: a.point
                        }
                    }));
                }else{
                    set_dil_forms([dil_forms]);
                }
                if(data.computer_skills.length>0){
                    set_bilgisayar_becerisi_forms(data.computer_skills.map(a=>{
                        return {
                            ...a,
                            skill: a.skill,
                            star_show: a.point
                        }
                    }));
                }else{
                    set_bilgisayar_becerisi_forms([bilgisayar_becerisi_form_structure]);
                }
                if(data.mentoring_process_general_information){
                    set_mentorluk_sureci_genel_bilgiler_form(data.mentoring_process_general_information);

                    set_mentorluk_sureci_basvuru_turu_form(mentorluk_sureci_basvuru_turu_form.map((item,index)=>{
                        if(data.mentoring_process_general_information.question_2.includes(item.key)){
                            return {
                                ...item,
                                checked: true
                            }
                        }else{
                            return {
                                ...item,
                                checked: false
                            }
                        }
                    }))
                }
                if(data.post_mentoring_process){
                    set_mentorluk_sonrasi_surec(data.post_mentoring_process);

                    set_mentorluk_sonrasi_surec_iliski_form(mentorluk_sonrasi_surec_iliski_form.map((item,index)=>{
                        if(data.post_mentoring_process.question_1.includes(item.key)){
                            return {
                                ...item,
                                checked: true
                            }
                        }else{
                            return {
                                ...item,
                                checked: false
                            }
                        }
                    }))
                }
                if(data.mentoring_process_detailed_information){
                    set_mentorluk_sureci_basvuru_turu_form(mentorluk_sureci_basvuru_turu_form.map(item=>{
                        if(item.key=="lisans-ve-lisansustu-tez-mentorlugu"){
                            return {
                                ...item,
                                checked: data.mentoring_process_general_information.question_2.includes(item.key)?true:false,
                                questions: item.questions.map(question_item=>{
                                    if(question_item.key=="question_1"){
                                        return {
                                            ...question_item,
                                            answer: data.mentoring_process_detailed_information.lisans_ve_lisansustu_tez_mentorlugu_question_1
                                        }
                                    }else if(question_item.key=="question_2"){
                                        return {
                                            ...question_item,
                                            answer: data.mentoring_process_detailed_information.lisans_ve_lisansustu_tez_mentorlugu_question_2
                                        }
                                    }else if(question_item.key=="question_3"){
                                        return {
                                            ...question_item,
                                            answer: data.mentoring_process_detailed_information.lisans_ve_lisansustu_tez_mentorlugu_question_3
                                        }
                                    }else{
                                        return question_item
                                    }
                                })
                            }
                        }else if(item.key=="proje-mentorlugu"){
                            return {
                                ...item,
                                checked: data.mentoring_process_general_information.question_2.includes(item.key)?true:false,
                                questions: item.questions.map(question_item=>{
                                    if(question_item.key=="question_1"){
                                        return {
                                            ...question_item,
                                            answer: data.mentoring_process_detailed_information.proje_mentorlugu_question_1
                                        }
                                    }else if(question_item.key=="question_2"){
                                        return {
                                            ...question_item,
                                            answer: data.mentoring_process_detailed_information.proje_mentorlugu_question_2
                                        }
                                    }else if(question_item.key=="question_3"){
                                        return {
                                            ...question_item,
                                            answer: data.mentoring_process_detailed_information.proje_mentorlugu_question_3
                                        }
                                    }else{
                                        return question_item
                                    }
                                })
                            }
                        }else if(item.key=="girisimcilik-mentorlugu"){
                            return {
                                ...item,
                                checked: data.mentoring_process_general_information.question_2.includes(item.key)?true:false,
                                questions: item.questions.map(question_item=>{
                                    if(question_item.key=="question_1"){
                                        return {
                                            ...question_item,
                                            answer: data.mentoring_process_detailed_information.girisimcilik_mentorlugu_question_1
                                        }
                                    }else if(question_item.key=="question_2"){
                                        return {
                                            ...question_item,
                                            answer: data.mentoring_process_detailed_information.girisimcilik_mentorlugu_question_2
                                        }
                                    }else if(question_item.key=="question_3"){
                                        return {
                                            ...question_item,
                                            answer: data.mentoring_process_detailed_information.girisimcilik_mentorlugu_question_3
                                        }
                                    }else{
                                        return question_item
                                    }
                                })
                            }
                        }else if(item.key=="akademik-ve-kariyer-mentorlugu"){
                            return {
                                ...item,
                                checked: data.mentoring_process_general_information.question_2.includes(item.key)?true:false,
                                questions: item.questions.map(question_item=>{
                                    if(question_item.key=="question_1"){
                                        return {
                                            ...question_item,
                                            answer: data.mentoring_process_detailed_information.akademik_ve_kariyer_mentorlugu_question_1
                                        }
                                    }else if(question_item.key=="question_2"){
                                        return {
                                            ...question_item,
                                            answer: data.mentoring_process_detailed_information.akademik_ve_kariyer_mentorlugu_question_2
                                        }
                                    }else{
                                        return question_item
                                    }
                                })
                            }
                        } else if(item.key=="akran-mentorlugu"){
                            return {
                                ...item,
                                checked: data.mentoring_process_general_information.question_2.includes(item.key)?true:false,
                                questions: item.questions.map(question_item=>{
                                    if(question_item.key=="question_1"){
                                        return {
                                            ...question_item,
                                            answer: data.mentoring_process_detailed_information.akran_mentorlugu_question_1
                                        }
                                    }else if(question_item.key=="question_2"){
                                        return {
                                            ...question_item,
                                            answer: data.mentoring_process_detailed_information.akran_mentorlugu_question_2
                                        }
                                    }else{
                                        return question_item
                                    }
                                })
                            }
                        } else{
                            return {
                                ...item,
                                checked: data.mentoring_process_general_information.question_2.includes(item.key)?true:false,
                            }
                        }
                    }))
                }
            }
        })
    }

    let fill_form_handle = () => {
        set_loader(true);
        FormService.fill_form(Cookies.get("ehs_user_token"),JSON.stringify({
            educations: egitim_forms,
            experience_informations: tecrube_forms,
            course_informations: kurs_forms,
            project_informations: proje_forms,
            languages: dil_forms,
            computer_skills: bilgisayar_becerisi_forms,
            publishes: yayin_forms,
            hobbies: hobi_forms
        })).then(res=>res.json())
        .then(data=>{
            console.log("FILL FORM : ",data);
            if(data.success){

                set_state(state+1);
                get_form_handle();
            }
        })
    }

    let mentorluk_sureci_genel_bilgiler_form_handle = () => {
        set_loader(true);
        let question_2_data = [];

        mentorluk_sureci_basvuru_turu_form.map(a=>{
            if(a.checked){
                question_2_data.push(a.key);
            }
        })

        FormService.mentoring_process_general_information_form(Cookies.get("ehs_user_token"),JSON.stringify({
            ...mentorluk_sureci_genel_bilgiler_form,
            question_2: question_2_data
        })).then(res=>res.json()).then(data=>{
            console.log("DATA: ",data);
            get_form_handle()
            set_state(state+1);
            setTimeout(()=>{
                set_loader(false);
            },200)
        })
    }

    let mentorluk_sonrasi_surec_form_handle = () => {
        set_loader(true);
        let question_1_data = [];

        mentorluk_sonrasi_surec_iliski_form.map(a=>{
            if(a.checked){
                question_1_data.push(a.key);
            }
        })

        FormService.post_mentoring_process(Cookies.get("ehs_user_token"),JSON.stringify({
            ...mentorluk_sonrasi_surec,
            question_1: question_1_data
        })).then(res=>res.json()).then(data=>{
            console.log("DATA: ",data);
            // get_form_handle()
            // set_state(state+1);
            setTimeout(()=>{
                set_loader(false);
            },200)
        })
    }

    let mentorluk_sureci_ayrinti_bilgiler_form_handle = () => {

        set_loader(true);
        let body = {};
        console.log(mentorluk_sureci_basvuru_turu_form);
        mentorluk_sureci_basvuru_turu_form.map(a=>{
            if(a.key=="lisans-ve-lisansustu-tez-mentorlugu"){
                body = {
                    ...body,
                    lisans_ve_lisansustu_tez_mentorlugu_question_1: a.questions.find(b=>{
                        if(b.key=="question_1"){
                            return b
                        }
                    }).answer,
                    lisans_ve_lisansustu_tez_mentorlugu_question_2: a.questions.find(b=>{
                        if(b.key=="question_2"){
                            return b
                        }
                    }).answer,
                    lisans_ve_lisansustu_tez_mentorlugu_question_3: a.questions.find(b=>{
                        if(b.key=="question_3"){
                            return b
                        }
                    }).answer
                }
            }else if(a.key=="proje-mentorlugu"){
                body = {
                    ...body,
                    proje_mentorlugu_question_1: a.questions.find(b=>{
                        if(b.key=="question_1"){
                            return b
                        }
                    }).answer,
                    proje_mentorlugu_question_2: a.questions.find(b=>{
                        if(b.key=="question_2"){
                            return b
                        }
                    }).answer,
                    proje_mentorlugu_question_3: a.questions.find(b=>{
                        if(b.key=="question_3"){
                            return b
                        }
                    }).answer
                }
            }else if(a.key=="girisimcilik-mentorlugu"){
                body = {
                    ...body,
                    girisimcilik_mentorlugu_question_1: a.questions.find(b=>{
                        if(b.key=="question_1"){
                            return b
                        }
                    }).answer,
                    girisimcilik_mentorlugu_question_2: a.questions.find(b=>{
                        if(b.key=="question_2"){
                            return b
                        }
                    }).answer,
                    girisimcilik_mentorlugu_question_3: a.questions.find(b=>{
                        if(b.key=="question_3"){
                            return b
                        }
                    }).answer
                }
            }else if(a.key=="akademik-ve-kariyer-mentorlugu"){
                body = {
                    ...body,
                    akademik_ve_kariyer_mentorlugu_question_1: a.questions.find(b=>{
                        if(b.key=="question_1"){
                            return b
                        }
                    }).answer,
                    akademik_ve_kariyer_mentorlugu_question_2: a.questions.find(b=>{
                        if(b.key=="question_2"){
                            return b
                        }
                    }).answer
                }
            }else if(a.key=="akran-mentorlugu"){
                body = {
                    ...body,
                    akran_mentorlugu_question_1: a.questions.find(b=>{
                        if(b.key=="question_1"){
                            return b
                        }
                    }).answer,
                    akran_mentorlugu_question_2: a.questions.find(b=>{
                        if(b.key=="question_2"){
                            return b
                        }
                    }).answer
                }
            }
        })

        FormService.mentoring_process_detailed_information_form(Cookies.get("ehs_user_token"),JSON.stringify(body)).then(res=>res.json()).then(data=>{
            console.log("DATA: ",data);

            get_form_handle()

            set_state(state+1);
            setTimeout(()=>{
                set_loader(false);
            },200)
        })
    }

    useEffect(()=>{
        console.log("egitim_forms : ",egitim_forms)
    },[egitim_forms])

    const [delete_form,set_delete_form] = useState({
        show: false,
        id: 0,
        key: ""
    });

    let delete_item = (e) => {
        e.stopPropagation();
        e.preventDefault();
        
        FormService.delete_item(Cookies.get("ehs_user_token"),JSON.stringify({
            key: delete_form.key,
            id: delete_form.id
        })).then(res=>res.json())
        .then(data=>{
            console.log("DATA: ",data);

            if(data.success){
                set_delete_form({
                    show: false,
                    id: 0,
                    key: ""
                });

                get_form_handle();
            }
        })
    }

    let delete_item_vars = (id,key) => {
        FormService.delete_item(Cookies.get("ehs_user_token"),JSON.stringify({
            key: key,
            id: id
        })).then(res=>res.json())
        .then(data=>{
            console.log("DATA: ",data);

            if(data.success){
                get_form_handle();
            }
        })
    }

    return (
        <>
        <Head>
            <title>
                Form || EHS
            </title>
        </Head>
        <div className={styles.main}>
            {
                delete_form.show?
                <div onClick={(e)=>{
                    set_delete_form({...delete_form,show:false})
                }} className={styles.delete_form}>
                    <div onClick={(e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                    }} className={styles.delete_box}>
                        <div className={styles.content}>
                            Bu İşlem Geri Alınamaz
                        </div>
                        <button onClick={delete_item} className={styles.button}>
                            <div className={styles.icon}>
                                <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </div>
                            <p>
                                Sil
                            </p>
                        </button>
                    </div>
                </div>
                :""
            }
            <div className={styles.form_wrapper}>
                <div className={styles.sidebar}>
                    <Link href="/" className={styles.logo_container}>
                        <Image width={200} height={200} src="/images/logo.png" alt="" className={styles.image} />
                    </Link>
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
                                    <div key={"step-1-"+index} 
                                    // onClick={()=>set_state(index)} 
                                    className={styles.item+" "+(index<=state?styles.active:"")+" "+(index==state?styles.focus:"")}>
                                        <div className={styles.icon}>
                                            {
                                                index>state?
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="M7 12A5 5 0 107 2a5 5 0 000 10c2.76 0 0 0 0 0zm0 2A7 7 0 107 0a7 7 0 000 14c3.87 0 0 0 0 0z" fill="#2E3A59" fillRule="evenodd"/></svg>
                                                :index<=state?
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="M7 10a3 3 0 110-6 3 3 0 010 6zm0 4A7 7 0 107 0a7 7 0 000 14c3.87 0 0 0 0 0zm0-2A5 5 0 107 2a5 5 0 000 10c2.76 0 0 0 0 0z" fill="#2E3A59" fillRule="evenodd"/></svg>:""
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
                    {
                        loader?
                        <div className={styles.loader}>
                            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2a1 1 0 011 1v3a1 1 0 11-2 0V3a1 1 0 011-1zM17 12a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1zM12 22a1 1 0 01-1-1v-3a1 1 0 112 0v3a1 1 0 01-1 1zM2 12a1 1 0 011-1h3a1 1 0 110 2H3a1 1 0 01-1-1zM4.93 4.93a1 1 0 011.41 0l2.12 2.12a1 1 0 01-1.41 1.41L4.93 6.34a1 1 0 010-1.41zM19.07 4.93a1 1 0 010 1.41l-2.12 2.12a1 1 0 11-1.41-1.41l2.12-2.12a1 1 0 011.41 0zM19.07 19.07a1 1 0 01-1.41 0l-2.12-2.12a1 1 0 011.41-1.41l2.12 2.12a1 1 0 010 1.41zM4.93 19.07a1 1 0 010-1.41l2.12-2.12a1 1 0 011.41 1.41l-2.12 2.12a1 1 0 01-1.41 0z"/></svg>
                        </div>:""
                    }
                    <div className={styles.section_slider} style={{minWidth: (steps.length*100)+"%",transform: "translateX(-"+(state*(100/steps.length))+"%)"}}>
                        {
                            steps.map((step,index)=>{
                                return (
                                    <div key={"step-2-"+index} className={styles.section}>
                                        <div className={styles.step_name}>
                                            {step.name}
                                        </div>
                                        <form className={styles.form_container} onSubmit={handle_submit}>
                                            <div className={styles.form}>
                                                {
                                                    index==0?
                                                    <>
                                                    <div className={styles.row}>
                                                        <div className={styles.item}>
                                                            <label for="name">
                                                                İsim
                                                            </label>
                                                            <input required={false} type="text" value={mentee_form.name} onInput={(e)=>set_mentee_form({...mentee_form,name:e.target.value})} name="name" placeholder="İsminiz..." />
                                                        </div>
                                                        <div className={styles.item}>
                                                            <label for="name">
                                                                Soyisim
                                                            </label>
                                                            <input required={false} type="text" value={mentee_form.surname} onInput={(e)=>set_mentee_form({...mentee_form,surname:e.target.value})} name="surname" placeholder="Soyisminiz..." />
                                                        </div>
                                                    </div>
                                                    <div className={styles.row}>
                                                        <div className={styles.item}>
                                                            <label for="email">
                                                                E-mail
                                                            </label>
                                                            <input readOnly required={false} type="email" value={mentee_form.email} onInput={(e)=>set_mentee_form({...mentee_form,email:e.target.value})} name="email" placeholder="Emailiniz..." />
                                                        </div>
                                                        <div className={styles.item}>
                                                            <label for="phone">
                                                                Telefon Numarası
                                                            </label>
                                                            <input value={mentee_form.phone} onInput={handle_phone_oninput} required={false} type="tel" name="phone" placeholder="Telefon Numaranız..." pattern="[0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}"  />
                                                        </div>
                                                    </div>
                                                    <div className={styles.item}>
                                                        <label for="linkedin">
                                                            Linkedin Profil Linki
                                                        </label>
                                                        <input type="url" value={mentee_form.linkedin} onInput={(e)=>set_mentee_form({...mentee_form,linkedin:e.target.value})} name="linkedin" placeholder="Linkedin..." />
                                                    </div>
                                                    </>:
                                                    index==1?
                                                    <>
                                                    <div className={styles.item}>
                                                        <div className={styles.form_name}>
                                                            Eğitim Bilgisi
                                                        </div>
                                                        {
                                                            egitim_forms.map((egitim_form,index)=>{
                                                                return (
                                                                    <div key={"egitim-1-"+index} className={styles.card}>
                                                                        {
                                                                            egitim_forms.length>1?
                                                                            <button onClick={(e)=>{
                                                                                e.stopPropagation();
                                                                                e.preventDefault();
                                                                                if(egitim_form.id>0){
                                                                                    set_delete_form({
                                                                                        key: "education",
                                                                                        id: egitim_form.id,
                                                                                        show:true
                                                                                    })
                                                                                }else{

                                                                                    set_egitim_forms(egitim_forms.filter((a,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return false
                                                                                        }return true
                                                                                    }))
                                                                                }
                                                                            }} className={styles.delete_icon}>
                                                                                <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                            </button>:""
                                                                        }
                                                                        <div className={styles.item}>
                                                                            <label for={"bölüm-"+index}>
                                                                                Bölüm
                                                                            </label>
                                                                            <input type="text" name={"bölüm-"+index} required={false} placeholder="Bölümünüz..."
                                                                                value={egitim_form.department} 
                                                                                onInput={(e)=>{
                                                                                    set_egitim_forms(egitim_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                department: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"okul-"+index}>
                                                                                Okul
                                                                            </label>
                                                                            <input type="text" name={"okul-"+index} required={false} placeholder="Okulunuz..."
                                                                                value={egitim_form.university} 
                                                                                onInput={(e)=>{
                                                                                    set_egitim_forms(egitim_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                university: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"derece-"+index}>
                                                                                Derece
                                                                            </label>
                                                                            <select defaultValue={"-"} value={egitim_form.rate}
                                                                                onChange={(e)=>{
                                                                                    set_egitim_forms(egitim_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                rate: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }} placeholder="Seçiniz...">
                                                                                <option disabled value="" selected>
                                                                                    Seçiniz...
                                                                                </option>
                                                                                <option value="lise">
                                                                                    Lise
                                                                                </option>
                                                                                <option value="ön-lisans">
                                                                                    Ön Lisans
                                                                                </option>
                                                                                <option value="yüksek-lisans">
                                                                                    Yüksek Lisans
                                                                                </option>
                                                                                <option value="doktora">
                                                                                    Doktora
                                                                                </option>
                                                                                <option value="doktora-sonrasi-arastirmaci">
                                                                                    Doktora Sonrası Araştırmacı
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                        <div className={styles.row}>
                                                                            <div className={styles.item}>
                                                                                <label for={"baslangic"+index}>
                                                                                    Başlangıç
                                                                                </label>
                                                                                <input type="date" placeholder="Başlangıç Tarihi"
                                                                                    value={egitim_form.start_date}
                                                                                    onChange={(e)=>{
                                                                                        set_egitim_forms(egitim_forms.map((form,map_index)=>{
                                                                                            if(index==map_index){
                                                                                                return {
                                                                                                    ...form,
                                                                                                    start_date: e.target.value
                                                                                                }
                                                                                            }return form
                                                                                        }))
                                                                                    }} 
                                                                                />
                                                                            </div>
                                                                            <div className={styles.item}>
                                                                                <label for={"bitis"+index}>
                                                                                    Bitiş
                                                                                </label>
                                                                                <input type="date" placeholder="Bitiş Tarihi"
                                                                                    value={egitim_form.finish_date}
                                                                                    onChange={(e)=>{
                                                                                        set_egitim_forms(egitim_forms.map((form,map_index)=>{
                                                                                            if(index==map_index){
                                                                                                return {
                                                                                                    ...form,
                                                                                                    finish_date: e.target.value
                                                                                                }
                                                                                            }return form
                                                                                        }))
                                                                                    }} 
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"ilgi-ders-"+index}>
                                                                                İlgini Çeken En Önemli 5 Ders
                                                                            </label>
                                                                            <textarea name={"ilgi-ders-"+index} placeholder="İlgini Çeken En Önemli 5 Ders" 
                                                                                value={egitim_form.interesting_lesson}

                                                                                onInput={(e)=>{
                                                                                    set_egitim_forms(egitim_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                interesting_lesson: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            >
                                                                            </textarea>
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"proje-arastirma-"+index}>
                                                                                Yapılan Projeler / Araştırma Konuları
                                                                            </label>
                                                                            <textarea name={"proje-arastirma-"+index} placeholder="Yapılan Projeler / Araştırma Konuları" 
                                                                                value={egitim_form.project_research_topics}

                                                                                onInput={(e)=>{
                                                                                    set_egitim_forms(egitim_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                project_research_topics: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            >
                                                                            </textarea>
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"kulüpler-"+index}>
                                                                                Aktif Kulüpler
                                                                            </label>
                                                                            <textarea name={"kulüpler-"+index} placeholder="Aktif Kulüpler" 
                                                                                value={egitim_form.active_clubs}

                                                                                onInput={(e)=>{
                                                                                    set_egitim_forms(egitim_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                active_clubs: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            >
                                                                            </textarea>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        <button onClick={(e)=>{
                                                            e.stopPropagation();
                                                            e.preventDefault();
                                                            set_egitim_forms([
                                                                ...egitim_forms,
                                                                egitim_form_structure
                                                            ])
                                                        }} className={styles.add_button}>
                                                            Eğitim Bilgisi Ekle
                                                        </button>
                                                    </div>

                                                    <div className={styles.item}>
                                                        <div className={styles.form_name}>
                                                            Tecrübe Bilgisi
                                                        </div>
                                                        {
                                                            tecrube_forms.map((tecrube_form,index)=>{
                                                                return (
                                                                    <div key={"tecrube-1-"+index} className={styles.card}>
                                                                        {
                                                                            tecrube_forms.length>1?
                                                                            <button onClick={(e)=>{
                                                                                e.stopPropagation();
                                                                                e.preventDefault();
                                                                                if(tecrube_form.id>0){
                                                                                    set_delete_form({
                                                                                        key: "experience",
                                                                                        id: tecrube_form.id,
                                                                                        show:true
                                                                                    })
                                                                                }else{

                                                                                    set_tecrube_forms(tecrube_forms.filter((a,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return false
                                                                                        }return true
                                                                                    }))
                                                                                }
                                                                            }} className={styles.delete_icon}>
                                                                                <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                            </button>:""
                                                                        }
                                                                        <div className={styles.item}>
                                                                            <label for={"pozisyon-"+index}>
                                                                                Pozisyon
                                                                            </label>
                                                                            <input type="text" name={"pozisyon-"+index} required={false} placeholder="Pozisyonunuz..."
                                                                                value={tecrube_form.position} 
                                                                                onInput={(e)=>{
                                                                                    set_tecrube_forms(tecrube_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                position: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"kurum-"+index}>
                                                                                Kurum
                                                                            </label>
                                                                            <input type="text" name={"kurum-"+index} required={false} placeholder="Kurumunuz..."
                                                                                value={tecrube_form.institution} 
                                                                                onInput={(e)=>{
                                                                                    set_tecrube_forms(tecrube_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                institution: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className={styles.row}>
                                                                            <div className={styles.item}>
                                                                                <label for={"baslangic"+index}>
                                                                                    Başlangıç
                                                                                </label>
                                                                                <input type="date" placeholder="Başlangıç Tarihi"
                                                                                    value={tecrube_form.start_date}
                                                                                    onChange={(e)=>{
                                                                                        set_tecrube_forms(tecrube_forms.map((form,map_index)=>{
                                                                                            if(index==map_index){
                                                                                                return {
                                                                                                    ...form,
                                                                                                    start_date: e.target.value
                                                                                                }
                                                                                            }return form
                                                                                        }))
                                                                                    }} 
                                                                                />
                                                                            </div>
                                                                            <div className={styles.item}>
                                                                                <label for={"bitis"+index}>
                                                                                    Bitiş
                                                                                </label>
                                                                                <input type="date" placeholder="Bitiş Tarihi"
                                                                                    value={tecrube_form.finish_date}
                                                                                    onChange={(e)=>{
                                                                                        set_tecrube_forms(tecrube_forms.map((form,map_index)=>{
                                                                                            if(index==map_index){
                                                                                                return {
                                                                                                    ...form,
                                                                                                    finish_date: e.target.value
                                                                                                }
                                                                                            }return form
                                                                                        }))
                                                                                    }} 
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label>
                                                                                Görevler
                                                                            </label>
                                                                            <input type="text" required={false} placeholder="Görev 1" 
                                                                                value={tecrube_form.task_1}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_tecrube_forms(tecrube_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                task_1: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                            <input type="text" required={false} placeholder="Görev 2" 
                                                                                value={tecrube_form.task_2}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_tecrube_forms(tecrube_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                task_2: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                            <input type="text" required={false} placeholder="Görev 3" 
                                                                                value={tecrube_form.task_3}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_tecrube_forms(tecrube_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                task_3: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"teknolojiler-"+index}>
                                                                                Kullanılan teknolojiler
                                                                            </label>
                                                                            <textarea required={false} name={"teknolojiler-"+index} placeholder="Kullanılan teknolojiler" 
                                                                                value={tecrube_form.technologies}

                                                                                onInput={(e)=>{
                                                                                    set_tecrube_forms(tecrube_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                technologies: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            >
                                                                            </textarea>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        <button onClick={(e)=>{
                                                            e.stopPropagation();
                                                            e.preventDefault();
                                                            set_tecrube_forms([
                                                                ...tecrube_forms,
                                                                tecrube_form_structure
                                                            ])
                                                        }} className={styles.add_button}>
                                                            Tecrübe Bilgisi Ekle
                                                        </button>
                                                    </div>

                                                    <div className={styles.item}>
                                                        <div className={styles.form_name}>
                                                            Kurs ve Sertifika
                                                        </div>
                                                        {
                                                            kurs_forms.map((kurs_form,index)=>{
                                                                return (
                                                                    <div key={"kurs-1-"+index} className={styles.card}>
                                                                        {
                                                                            kurs_forms.length>1?
                                                                            <button onClick={(e)=>{
                                                                                e.stopPropagation();
                                                                                e.preventDefault();
                                                                                if(kurs_form.id>0){
                                                                                    set_delete_form({
                                                                                        key: "course",
                                                                                        id: kurs_form.id,
                                                                                        show:true
                                                                                    })
                                                                                }else{

                                                                                    set_kurs_forms(kurs_forms.filter((a,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return false
                                                                                        }return true
                                                                                    }))
                                                                                }
                                                                            }} className={styles.delete_icon}>
                                                                                <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                            </button>:""
                                                                        }
                                                                        <div className={styles.item}>
                                                                            <label for={"kurs-name-"+index}>
                                                                                Kurs/Sertifika İsmi
                                                                            </label>
                                                                            <input type="text" name={"kurs-name-"+index} required={false} placeholder="İsim..."
                                                                                value={kurs_form.name} 
                                                                                onInput={(e)=>{
                                                                                    set_kurs_forms(kurs_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                name: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"kurum-"+index}>
                                                                                Kurum
                                                                            </label>
                                                                            <input type="text" name={"kurum-"+index} required={false} placeholder="Kurumunuz..."
                                                                                value={kurs_form.institution} 
                                                                                onInput={(e)=>{
                                                                                    set_kurs_forms(kurs_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                institution: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"tamamlama_tarihi"+index}>
                                                                                Tamamlama Tarihi
                                                                            </label>
                                                                            <input type="date" placeholder="Bitiş Tarihi"
                                                                                value={kurs_form.finish_date}
                                                                                onChange={(e)=>{
                                                                                    set_kurs_forms(kurs_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                finish_date: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }} 
                                                                            />
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label>
                                                                                Kazanılan Yetenekler
                                                                            </label>
                                                                            <input type="text" required={false} placeholder="Yetenek 1" 
                                                                                value={kurs_form.skill_1}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_kurs_forms(kurs_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                skill_1: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                            <input type="text" required={false} placeholder="Yetenek 2" 
                                                                                value={kurs_form.skill_2}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_kurs_forms(kurs_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                skill_2: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                            <input type="text" required={false} placeholder="Yetenek 3" 
                                                                                value={kurs_form.skill_3}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_kurs_forms(kurs_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                skill_3: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        <button onClick={(e)=>{
                                                            e.stopPropagation();
                                                            e.preventDefault();
                                                            set_kurs_forms([
                                                                ...kurs_forms,
                                                                kurs_form_structure
                                                            ])
                                                        }} className={styles.add_button}>
                                                            Kurs ve Sertifika Bilgisi Ekle
                                                        </button>
                                                    </div>

                                                    <div className={styles.item}>
                                                        <div className={styles.form_name}>
                                                            Projeler
                                                        </div>
                                                        {
                                                            proje_forms.map((proje_form,index)=>{
                                                                return (
                                                                    <div key={"proje-1-"+index} className={styles.card}>
                                                                        {
                                                                            proje_forms.length>1?
                                                                            <button onClick={(e)=>{
                                                                                e.stopPropagation();
                                                                                e.preventDefault();
                                                                                if(proje_form.id>0){
                                                                                    set_delete_form({
                                                                                        key: "project",
                                                                                        id: proje_form.id,
                                                                                        show:true
                                                                                    })
                                                                                }else{

                                                                                    set_proje_forms(proje_forms.filter((a,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return false
                                                                                        }return true
                                                                                    }))
                                                                                }
                                                                            }} className={styles.delete_icon}>
                                                                                <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                            </button>:""
                                                                        }
                                                                        <div className={styles.item}>
                                                                            <label for={"proje-name-"+index}>
                                                                                Proje İsmi
                                                                            </label>
                                                                            <input type="text" name={"proje-name-"+index} required={false} placeholder="İsim..."
                                                                                value={proje_form.project} 
                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                project: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"yer-"+index}>
                                                                                Yer
                                                                            </label>
                                                                            <input type="text" name={"yer-"+index} required={false} placeholder="Yer..."
                                                                                value={proje_form.city} 
                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                city: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"destekleyen-kurum-"+index}>
                                                                                Destekleyen Kurum
                                                                            </label>
                                                                            <input type="text" name={"destekleyen-kurum-"+index} required={false} placeholder="Destekleyen Kurum..."
                                                                                value={proje_form.supporting_institution} 
                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                supporting_institution: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"fonlayan-kurum-"+index}>
                                                                                Fonlayan Kurum
                                                                            </label>
                                                                            <input type="text" name={"fonlayan-kurum-"+index} required={false} placeholder="Fonlayan Kurum..."
                                                                                value={proje_form.funding_institution} 
                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                funding_institution: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"proje-butcesi-"+index}>
                                                                                Bütçe
                                                                            </label>
                                                                            <input type="number" min="0" name={"proje-butcesi-"+index} required={false} placeholder="Proje Bütçesi..."
                                                                                value={proje_form.budget} 
                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                budget: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label>
                                                                                Görevler
                                                                            </label>
                                                                            <input type="text" required={false} placeholder="Görev 1" 
                                                                                value={proje_form.task_1}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                task_1: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                            <input type="text" required={false} placeholder="Görev 2" 
                                                                                value={proje_form.task_2}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                task_2: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                            <input type="text" required={false} placeholder="Görev 3" 
                                                                                value={proje_form.task_3}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                task_3: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"teknolojiler-"+index}>
                                                                                Kullanılan teknolojiler
                                                                            </label>
                                                                            <textarea required={false} name={"teknolojiler-"+index} placeholder="Kullanılan teknolojiler" 
                                                                                value={proje_form.technologies}

                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                technologies: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            >
                                                                            </textarea>
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"oduller-"+index}>
                                                                                Ödüller
                                                                            </label>
                                                                            <textarea required={false} name={"oduller-"+index} placeholder="Ödüller..." 
                                                                                value={proje_form.awards}

                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                awards: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            >
                                                                            </textarea>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        <button onClick={(e)=>{
                                                            e.stopPropagation();
                                                            e.preventDefault();
                                                            set_proje_forms([
                                                                ...proje_forms,
                                                                proje_form_structure
                                                            ])
                                                        }} className={styles.add_button}>
                                                            Proje Ekle
                                                        </button>
                                                    </div>

                                                    <div className={styles.item}>
                                                        <div className={styles.form_name}>
                                                            Dil
                                                        </div>
                                                        <div className={styles.card}>
                                                            {
                                                                dil_forms.map((dil_form,index)=>{
                                                                    return (
                                                                        <div key={"dil-1-"+index} className={styles.input_with_stars}>
                                                                            <div className={styles.input_container}>
                                                                                {
                                                                                    dil_forms.length>1?
                                                                                    <button onClick={(e)=>{
                                                                                        e.stopPropagation();
                                                                                        e.preventDefault();
                                                                                        if(dil_form.id>0){
                                                                                            delete_item_vars(dil_form.id,"language");
                                                                                        }else{
                                                                                            set_dil_forms(dil_forms.filter((a,map_index)=>{
                                                                                                if(map_index!=index){
                                                                                                    return true
                                                                                                }return false
                                                                                            }))
                                                                                        }
                                                                                    }} className={styles.delete_input}>
                                                                                        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                                    </button>
                                                                                    :""
                                                                                }
                                                                                <input placeholder="Dil..." value={dil_form.language}
                                                                                onInput={(e)=>{
                                                                                    set_dil_forms(dil_forms.map((a,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...a,
                                                                                                language: e.target.value
                                                                                            }
                                                                                        }return a
                                                                                    }))
                                                                                }} />
                                                                            </div>
                                                                            <div className={styles.stars_container}>
                                                                                <div className={styles.stars_input}>
                                                                                    {
                                                                                        [1,2,3,4,5].map((star_index)=>{
                                                                                            return (
                                                                                                <div key={"star-"+star_index+"-"+index} onMouseOver={()=>{
                                                                                                    set_dil_forms(dil_forms.map((a,map_index)=>{
                                                                                                        if(index==map_index){
                                                                                                            return {
                                                                                                                ...a,
                                                                                                                star_show: star_index
                                                                                                            }
                                                                                                        }return a
                                                                                                    }))
                                                                                                }}
                                                                                                onMouseLeave={()=>{
                                                                                                    set_dil_forms(dil_forms.map((a,map_index)=>{
                                                                                                        if(index==map_index){
                                                                                                            return {
                                                                                                                ...a,
                                                                                                                star_show: a.point
                                                                                                            }
                                                                                                        }return a
                                                                                                    }))
                                                                                                }}
                                                                                                onClick={()=>{
                                                                                                    set_dil_forms(dil_forms.map((a,map_index)=>{
                                                                                                        if(index==map_index){
                                                                                                            return {
                                                                                                                ...a,
                                                                                                                point: star_index
                                                                                                            }
                                                                                                        }return a
                                                                                                    }))
                                                                                                }} className={styles.star+" "+(star_index<=dil_form.star_show?styles.active:"")}>
                                                                                                    <svg viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.964 1.19l2.316 4.66c.116.235.34.399.6.437l5.185.749c.21.028.4.138.528.306a.77.77 0 01-.085 1.032l-3.758 3.634a.762.762 0 00-.226.7l.9 5.129a.787.787 0 01-.652.892.868.868 0 01-.516-.08l-4.618-2.421a.776.776 0 00-.742 0l-4.652 2.434a.812.812 0 01-1.077-.33.796.796 0 01-.08-.5l.9-5.128a.788.788 0 00-.227-.7L.982 8.37A.786.786 0 01.98 7.259l.003-.004a.91.91 0 01.452-.222l5.186-.75a.812.812 0 00.6-.437L9.534 1.19a.787.787 0 01.458-.4.798.798 0 01.61.044.82.82 0 01.362.356z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                                                                                </div>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                            <button onClick={(e)=>{
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                set_dil_forms([
                                                                    ...dil_forms,
                                                                    dil_form_structure
                                                                ])
                                                            }} className={styles.add_button+" "+styles.in_card}>
                                                                Dil Ekle
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className={styles.item}>
                                                        <div className={styles.form_name}>
                                                            Bilgisayar Becerisi
                                                        </div>
                                                        <div className={styles.card}>
                                                            {
                                                                bilgisayar_becerisi_forms.map((bilgisayar_becerisi_form,index)=>{
                                                                    return (
                                                                        <div key={"star-2-"+index} className={styles.input_with_stars}>
                                                                            <div className={styles.input_container}>
                                                                                {
                                                                                    bilgisayar_becerisi_forms.length>1?
                                                                                    <button onClick={(e)=>{
                                                                                        e.stopPropagation();
                                                                                        e.preventDefault();
                                                                                        if(bilgisayar_becerisi_form.id>0){
                                                                                            delete_item_vars(bilgisayar_becerisi_form.id,"computer-skill");
                                                                                        }else{
                                                                                            set_bilgisayar_becerisi_forms(bilgisayar_becerisi_forms.filter((a,map_index)=>{
                                                                                                if(map_index!=index){
                                                                                                    return true
                                                                                                }return false
                                                                                            }))
                                                                                        }
                                                                                    }} className={styles.delete_input}>
                                                                                        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                                    </button>
                                                                                    :""
                                                                                }
                                                                                <input placeholder="Beceri..." value={bilgisayar_becerisi_form.skill}
                                                                                onInput={(e)=>{
                                                                                    set_bilgisayar_becerisi_forms(bilgisayar_becerisi_forms.map((a,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...a,
                                                                                                skill: e.target.value
                                                                                            }
                                                                                        }return a
                                                                                    }))
                                                                                }} />
                                                                            </div>
                                                                            <div className={styles.stars_container}>
                                                                                <div className={styles.stars_input}>
                                                                                    {
                                                                                        [1,2,3,4,5].map((star_index)=>{
                                                                                            return (
                                                                                                <div key={"star-3-"+index+star_index} onMouseOver={()=>{
                                                                                                    set_bilgisayar_becerisi_forms(bilgisayar_becerisi_forms.map((a,map_index)=>{
                                                                                                        if(index==map_index){
                                                                                                            return {
                                                                                                                ...a,
                                                                                                                star_show: star_index
                                                                                                            }
                                                                                                        }return a
                                                                                                    }))
                                                                                                }}
                                                                                                onMouseLeave={()=>{
                                                                                                    set_bilgisayar_becerisi_forms(bilgisayar_becerisi_forms.map((a,map_index)=>{
                                                                                                        if(index==map_index){
                                                                                                            return {
                                                                                                                ...a,
                                                                                                                star_show: a.point
                                                                                                            }
                                                                                                        }return a
                                                                                                    }))
                                                                                                }}
                                                                                                onClick={()=>{
                                                                                                    set_bilgisayar_becerisi_forms(bilgisayar_becerisi_forms.map((a,map_index)=>{
                                                                                                        if(index==map_index){
                                                                                                            return {
                                                                                                                ...a,
                                                                                                                point: star_index
                                                                                                            }
                                                                                                        }return a
                                                                                                    }))
                                                                                                }} className={styles.star+" "+(star_index<=bilgisayar_becerisi_form.star_show?styles.active:"")}>
                                                                                                    <svg viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.964 1.19l2.316 4.66c.116.235.34.399.6.437l5.185.749c.21.028.4.138.528.306a.77.77 0 01-.085 1.032l-3.758 3.634a.762.762 0 00-.226.7l.9 5.129a.787.787 0 01-.652.892.868.868 0 01-.516-.08l-4.618-2.421a.776.776 0 00-.742 0l-4.652 2.434a.812.812 0 01-1.077-.33.796.796 0 01-.08-.5l.9-5.128a.788.788 0 00-.227-.7L.982 8.37A.786.786 0 01.98 7.259l.003-.004a.91.91 0 01.452-.222l5.186-.75a.812.812 0 00.6-.437L9.534 1.19a.787.787 0 01.458-.4.798.798 0 01.61.044.82.82 0 01.362.356z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                                                                                </div>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                            <button onClick={(e)=>{
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                set_bilgisayar_becerisi_forms([
                                                                    ...bilgisayar_becerisi_forms,
                                                                    bilgisayar_becerisi_form_structure
                                                                ])
                                                            }} className={styles.add_button+" "+styles.in_card}>
                                                                Beceri Ekle
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className={styles.item}>
                                                        <div className={styles.form_name}>
                                                            Yayınlar
                                                        </div>
                                                        {
                                                            yayin_forms.map((yayin_form,index)=>{
                                                                return (
                                                                    <div key={"yayin-1-"+index} className={styles.card}>
                                                                        {
                                                                            yayin_forms.length>1?
                                                                            <button onClick={(e)=>{
                                                                                e.stopPropagation();
                                                                                e.preventDefault();
                                                                                if(yayin_form.id>0){
                                                                                    set_delete_form({
                                                                                        key: "publish",
                                                                                        id: yayin_form.id,
                                                                                        show:true
                                                                                    })
                                                                                }else{

                                                                                    set_yayin_forms(yayin_forms.filter((a,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return false
                                                                                        }return true
                                                                                    }))
                                                                                }
                                                                            }} className={styles.delete_icon}>
                                                                                <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                            </button>:""
                                                                        }
                                                                        <div className={styles.item}>
                                                                            <label for={"yayin-name-"+index}>
                                                                                İsim
                                                                            </label>
                                                                            <input type="text" name={"yayin-name-"+index} required={false} placeholder="İsim..."
                                                                                value={yayin_form.name} 
                                                                                onInput={(e)=>{
                                                                                    set_yayin_forms(yayin_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                name: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"yayinlayan-kurum-"+index}>
                                                                                Yayınlanan Kurum
                                                                            </label>
                                                                            <input type="text" name={"yayinlayan-kurum-"+index} required={false} placeholder="Yayınlanan Kurum..."
                                                                                value={yayin_form.publishing_institution} 
                                                                                onInput={(e)=>{
                                                                                    set_yayin_forms(yayin_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                publishing_institution: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"yayinlanma-tarihi-"+index}>
                                                                                Yayınlanma Tarihi
                                                                            </label>
                                                                            <input type="date" placeholder="Yayınlanma Tarihi"
                                                                                value={yayin_form.publish_date}
                                                                                onChange={(e)=>{
                                                                                    set_yayin_forms(yayin_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                publish_date: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }} 
                                                                            />
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"doı-"+index}>
                                                                                DOI
                                                                            </label>
                                                                            <textarea required={false} name={"doı-"+index} placeholder="DOI..." 
                                                                                value={yayin_form.DOI}

                                                                                onInput={(e)=>{
                                                                                    set_yayin_forms(yayin_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                DOI: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            >
                                                                            </textarea>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        <button onClick={(e)=>{
                                                            e.stopPropagation();
                                                            e.preventDefault();
                                                            set_yayin_forms([
                                                                ...yayin_forms,
                                                                yayin_form_structure
                                                            ])
                                                        }} className={styles.add_button}>
                                                            Yayın Ekle
                                                        </button>
                                                    </div>


                                                    <div className={styles.item}>
                                                        <div className={styles.form_name}>
                                                            Hobiler
                                                        </div>
                                                        {
                                                            hobi_forms.map((hobi_form,index)=>{
                                                                return (
                                                                    <div key={"hoib-1-"+index} className={styles.card}>
                                                                        {
                                                                            hobi_forms.length>1?
                                                                            <button onClick={(e)=>{
                                                                                e.stopPropagation();
                                                                                e.preventDefault();
                                                                                if(hobi_form.id>0){
                                                                                    set_delete_form({
                                                                                        key: "hobby",
                                                                                        id: hobi_form.id,
                                                                                        show:true
                                                                                    })
                                                                                }else{

                                                                                    set_hobi_forms(hobi_forms.filter((a,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return false
                                                                                        }return true
                                                                                    }))
                                                                                }
                                                                            }} className={styles.delete_icon}>
                                                                                <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                            </button>:""
                                                                        }
                                                                        <div className={styles.item}>
                                                                            <label for={"hobi-name-"+index}>
                                                                                Hobi Başlığı
                                                                            </label>
                                                                            <input type="text" name={"hobi-name-"+index} required={false} placeholder="İsim..."
                                                                                value={hobi_form.name} 
                                                                                onInput={(e)=>{
                                                                                    set_hobi_forms(hobi_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                name: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className={styles.options}>
                                                                            <div className={styles.option} onClick={()=>{
                                                                                set_hobi_forms(hobi_forms.map((a,map_index)=>{
                                                                                    if(index==map_index){
                                                                                        return {
                                                                                            ...a,
                                                                                            isProfiessional: !a.isProfiessional
                                                                                        }
                                                                                    }return a
                                                                                }))
                                                                            }}>
                                                                                <div className={styles.checkbox_item} name="lisans-ve-lisansüst-tez">
                                                                                    <input type="checkbox" checked={hobi_form.isProfiessional} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                </div>
                                                                                <label for="lisans-ve-lisansüst-tez">
                                                                                    Profesyonel
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.item}>
                                                                            <label for={"description-"+index}>
                                                                                Açıklama
                                                                            </label>
                                                                            <textarea required={false} name={"description-"+index} placeholder="Açıklama..." 
                                                                                value={hobi_form.description}

                                                                                onInput={(e)=>{
                                                                                    set_hobi_forms(hobi_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                description: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            >
                                                                            </textarea>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        <button onClick={(e)=>{
                                                            e.stopPropagation();
                                                            e.preventDefault();
                                                            set_hobi_forms([
                                                                ...hobi_forms,
                                                                hobi_form_structure
                                                            ])
                                                        }} className={styles.add_button}>
                                                            Hobi Ekle
                                                        </button>
                                                    </div>
                                                    
                                                    
                                                    </>:
                                                    index==2?
                                                    <>
                                                    <div className={styles.item}>
                                                        <div className={styles.question}>
                                                            1.  EHS ile nasıl tanıştınız?
                                                        </div>
                                                        <textarea placeholder="Cevabınız..." required={false} value={mentorluk_sureci_genel_bilgiler_form.question_1} onInput={(e)=>{
                                                            set_mentorluk_sureci_genel_bilgiler_form({
                                                                ...mentorluk_sureci_genel_bilgiler_form,
                                                                question_1: e.target.value
                                                            });
                                                        }} />
                                                    </div>
                                                    <div className={styles.item+" "+(
                                                        error.code=="mentorluk_basvuru_turu_min_1"?
                                                        styles.error
                                                        :""
                                                    )} ref={mentorluk_basvuru_turu_ref}>
                                                        <div className={styles.question}>
                                                            2.  Mentörlük Başvuru Türü:
                                                        </div>
                                                        <div className={styles.options}>
                                                            {
                                                                mentorluk_sureci_basvuru_turu_form.map((option,index)=>{
                                                                    return (
                                                                        <div key={"mentorluk-sureci-1-"+index} className={styles.option} onClick={()=>{
                                                                            set_error({
                                                                                code: "",
                                                                                message: ""
                                                                            })
                                                                            set_mentorluk_sureci_basvuru_turu_form(mentorluk_sureci_basvuru_turu_form.map((a,map_index)=>{
                                                                                if(index==map_index){
                                                                                    return {
                                                                                        ...a,
                                                                                        checked: !a.checked
                                                                                    }
                                                                                }return a
                                                                            }))
                                                                        }}>
                                                                            <div className={styles.checkbox_item} name="lisans-ve-lisansüst-tez">
                                                                                <input type="checkbox" checked={option.checked} />
                                                                                <span className={styles.checkmark}></span>
                                                                            </div>
                                                                            <label for="lisans-ve-lisansüst-tez">
                                                                                {option.name}
                                                                            </label>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className={styles.item}>
                                                        <div className={styles.question}>
                                                            3.  Bu mentörlükten beklentileriniz nelerdir?
                                                        </div>
                                                        <textarea placeholder="Cevabınız..." required={false}  value={mentorluk_sureci_genel_bilgiler_form.question_3} onInput={(e)=>{
                                                            set_mentorluk_sureci_genel_bilgiler_form({
                                                                ...mentorluk_sureci_genel_bilgiler_form,
                                                                question_3: e.target.value
                                                            });
                                                        }} />
                                                    </div>
                                                    <div className={styles.item}>
                                                        <div className={styles.question}>
                                                            4.  EHS&apos;den almayı umduğunuz mentörlüğün süresi hakkında bir tahmininiz var mı? (Örnek: 3 ay, 6 ay, 1 yıl vb.)
                                                        </div>
                                                        <textarea placeholder="Cevabınız..." required={false}  value={mentorluk_sureci_genel_bilgiler_form.question_4} onInput={(e)=>{
                                                            set_mentorluk_sureci_genel_bilgiler_form({
                                                                ...mentorluk_sureci_genel_bilgiler_form,
                                                                question_4: e.target.value
                                                            });
                                                        }} />
                                                    </div>
                                                    <div className={styles.item}>
                                                        <div className={styles.question}>
                                                            5.  Mentörlük sürecinde ne sıklıkla mentörünüzle buluşmayı planlıyorsunuz? (Örnek: haftada bir, ayda bir vb.)
                                                        </div>
                                                        <textarea placeholder="Cevabınız..." required={false} value={mentorluk_sureci_genel_bilgiler_form.question_5} onInput={(e)=>{
                                                            set_mentorluk_sureci_genel_bilgiler_form({
                                                                ...mentorluk_sureci_genel_bilgiler_form,
                                                                question_5: e.target.value
                                                            });
                                                        }} />
                                                    </div>
                                                    </>:
                                                    index==3?
                                                    <>
                                                    {
                                                        mentorluk_sureci_basvuru_turu_form.map((option,option_index)=>{
                                                            if(option.checked){
                                                                return (
                                                                    <>
                                                                    <div className={styles.form_name}>
                                                                        {option.name}
                                                                    </div>
                                                                    {
                                                                        option.questions.map((question,question_index)=>{
                                                                            return (
                                                                                <>
                                                                                <div className={styles.item}>
                                                                                    <label>
                                                                                        {question_index+1})  {question.question}
                                                                                    </label>
                                                                                    <textarea value={question.answer} onInput={(e)=>{
                                                                                        set_mentorluk_sureci_basvuru_turu_form(mentorluk_sureci_basvuru_turu_form.map((a,map_index)=>{
                                                                                            if(option_index==map_index){
                                                                                                return {
                                                                                                    ...a,
                                                                                                    questions: a.questions.map((b,b_index)=>{
                                                                                                        if(b_index==question_index){
                                                                                                            return {
                                                                                                                ...b,
                                                                                                                answer: e.target.value
                                                                                                            }
                                                                                                        }return b
                                                                                                    })
                                                                                                }
                                                                                            }return a
                                                                                        }))
                                                                                    }} required={false} placeholder="Cevabınız..." />
                                                                                </div>
                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                    </>
                                                                )
                                                            }
                                                        })
                                                    }
                                                    </>:
                                                    index==4?
                                                    <>
                                                        <div className={styles.item}>
                                                            <div className={styles.question}>
                                                                1. Mentörlük sürecinizi tamamladıktan sonra EHS topluluğuyla nasıl bir ilişki kurmayı planlıyorsunuz?
                                                            </div>
                                                            <div className={styles.options}>
                                                                {
                                                                    mentorluk_sonrasi_surec_iliski_form.map((option,index)=>{
                                                                        return (
                                                                            <div key={"mentorluk-sonrasi-1-"+index} className={styles.option} onClick={()=>{
                                                                                set_mentorluk_sonrasi_surec_iliski_form(mentorluk_sonrasi_surec_iliski_form.map((a,map_index)=>{
                                                                                    if(index==map_index){
                                                                                        return {
                                                                                            ...a,
                                                                                            checked: !a.checked
                                                                                        }
                                                                                    }return a
                                                                                }))
                                                                            }}>
                                                                                <div className={styles.checkbox_item} name="lisans-ve-lisansüst-tez">
                                                                                    <input type="checkbox" checked={option.checked} />
                                                                                    <span className={styles.checkmark}></span>
                                                                                </div>
                                                                                <label for="lisans-ve-lisansüst-tez">
                                                                                    {option.name}
                                                                                </label>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className={styles.item}>
                                                            <div className={styles.question}>
                                                                2. EHS topluluğuna mentör olarak katkıda bulunmayı düşünüyor musunuz? Eğer evet ise, hangi konularda mentörlük yapmayı tercih edersiniz?
                                                            </div>
                                                            <textarea placeholder="Cevabınız..." required={false} value={mentorluk_sonrasi_surec.question_2} onInput={(e)=>{
                                                                set_mentorluk_sonrasi_surec({
                                                                    ...mentorluk_sonrasi_surec,
                                                                    question_2: e.target.value
                                                                })
                                                            }} />
                                                        </div>
                                                        <div className={styles.item}>
                                                            <div className={styles.question}>
                                                                3. EHS etkinliklerinde hangi kapasitelerde görev almayı düşünüyorsunuz? (Örneğin: etkinlik organizasyonu, konuşmacı olarak katılmak, sponsorluk ilişkileri kurma vb. )
                                                            </div>
                                                            <textarea placeholder="Cevabınız..." required={false} value={mentorluk_sonrasi_surec.question_3} onInput={(e)=>{
                                                                set_mentorluk_sonrasi_surec({
                                                                    ...mentorluk_sonrasi_surec,
                                                                    question_3: e.target.value
                                                                })
                                                            }} />
                                                        </div>
                                                        <div className={styles.item}>
                                                            <div className={styles.question}>
                                                                4. EHS ile ilgili ek olarak paylaşmak istediğiniz düşünceleriniz veya beklentileriniz var mı?
                                                            </div>
                                                            <textarea placeholder="Cevabınız..." required={false} value={mentorluk_sonrasi_surec.question_4} onInput={(e)=>{
                                                                set_mentorluk_sonrasi_surec({
                                                                    ...mentorluk_sonrasi_surec,
                                                                    question_4: e.target.value
                                                                })
                                                            }} />
                                                        </div>
                                                    </>:""

                                                }
                                            </div>
                                            <div className={styles.buttons}>
                                                {
                                                    index!=0?
                                                    <button onClick={(e)=>{
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        if(state>0){
                                                            set_state(state-1);
                                                        }
                                                    }} className={styles.button+" "+styles.prev}>
                                                        <div className={styles.icon}>
                                                            <svg stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shape-rendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z" fill="var(--geist-fill)"/><path d="M13 8l-4 4 4 4" stroke="var(--geist-stroke)"/></svg>
                                                        </div>
                                                        <p>
                                                            Geri Git
                                                        </p>
                                                    </button>:""
                                                }
                                                {
                                                    index<steps.length-1?
                                                    <button className={styles.button+" "+styles.next}>
                                                        <p>
                                                            Kaydet ve Devam Et
                                                        </p>
                                                        <div className={styles.icon}>
                                                            <svg stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shape-rendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z" fill="var(--geist-fill)"/><path d="M11 16l4-4-4-4" stroke="var(--geist-stroke)"/></svg>
                                                        </div>
                                                    </button>:
                                                    <button className={styles.button+" "+styles.next}>
                                                        <p>
                                                            Kaydet
                                                        </p>
                                                    </button>
                                                }
                                            </div>
                                        </form>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}