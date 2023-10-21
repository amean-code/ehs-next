import { useState } from "react";
import styles from "../../styles/Form.module.css"
import Image from "next/image";
import Head from "next/head";

export default function Form(){

    const [state,set_state] = useState(1);
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

    let handle_submit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if(state<steps.length-1){
            set_state(state+1);
        }
    };

    const [mentee_form,set_mentee_form] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        linkedin: ""
    })

    const egitim_form_structure = {
        bölüm:"",
        okul:"",
        derece:"",
        baslangic:"",
        bitis:"",
        ilgini_ceken_ders:"",
        proje_arastirma_konulari:"",
        aktif_klupler:""
    }

    const [egitim_forms,set_egitim_forms] = useState([
        egitim_form_structure
    ]);



    const tecrube_form_structure = {
        pozisyon:"",
        kurum:"",
        baslangic:"",
        bitis:"",
        gorev_1:"",
        gorev_2:"",
        gorev_3:"",
        teknolojiler:""
    }

    const [tecrube_forms,set_tecrube_forms] = useState([
        tecrube_form_structure
    ]);


    const kurs_form_structure = {
        name:"",
        kurum:"",
        tamamlama_tarihi:"",
        yetenek_1:"",
        yetenek_2:"",
        yetenek_3:""
    }

    const [kurs_forms,set_kurs_forms] = useState([
        kurs_form_structure
    ]);

    const proje_form_structure = {
        name:"",
        yer:"",
        destekleyen_kurum:"",
        fonlayan_kurum:"",
        proje_butcesi:"",
        gorev_1:"",
        gorev_2:"",
        gorev_3:"",
        teknolojiler:"",
        oduller:""
    }

    const [proje_forms,set_proje_forms] = useState([
        proje_form_structure
    ]);

    const yayin_form_structure = {
        name:"",
        kurum:"",
        yayin_tarihi:"",
        DOI:""
    }

    const [yayin_forms,set_yayin_forms] = useState([
        yayin_form_structure
    ]);

    const hobi_form_structure = {
        name:"",
        aciklama:"",
        professional:false
    }

    const [hobi_forms,set_hobi_forms] = useState([
        hobi_form_structure
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

    const [mentorluk_sureci_form,set_mentorluk_sureci_form] = useState([
        {
            name: "Lisans ve Lisansüstü Tez Mentörlüğü",
            checked: false,
            questions:[
                {
                    question: "Tez konunuz hakkında kısa bir açıklama yapar mısınız?",
                    answer: ""
                },
                {
                    question: "Hangi aşamadasınız? (Konu belirleme, literatür tarama, veri toplama vb.)",
                    answer: ""
                },
                {
                    question: "Hangi konularda yardım arıyorsunuz?",
                    answer: ""
                }
            ]
        },
        {
            name: "Proje Mentörlüğü",
            checked: false,
            questions:[
                {
                    question: "Projenizin kısa bir özeti nedir?",
                    answer: ""
                },
                {
                    question: "Projenizin şuanki aşaması nedir?",
                    answer: ""
                },
                {
                    question: "Hangi konularda danışmanlık arıyorsunuz?",
                    answer: ""
                }
            ]
        },
        {
            name: "Akademik ve Kariyer Mentörlüğü",
            checked: false,
            questions:[
                {
                    question: "Şuanki kariyer hedefiniz nedir?",
                    answer: ""
                },
                {
                    question: "Hangi alanlarda rehberlik arıyorsunuz? (Örneğin: iş başvurusu, CV hazırlığı vb.)",
                    answer: ""
                }
            ]
        },
        {
            name: "Girişimcilik Mentörlüğü",
            checked: false,
            questions:[
                {
                    question: "Girişim fikriniz nedir?",
                    answer: ""
                },
                {
                    question: "Şuanda hangi aşamadasınız?",
                    answer: ""
                },
                {
                    question: "Hangi konularda rehberlik arıyorsunuz?",
                    answer: ""
                }
            ]
        },
        {
            name: "Akran Mentörlüğü",
            checked: false,
            questions:[
                {
                    question: "Hangi deneyimleri veya bilgileri paylaşmak istersiniz?",
                    answer: ""
                },
                {
                    question: "Hangi konularda akran rehberliği arıyorsunuz?",
                    answer: ""
                }
            ]
        },
    ])

    const [mentorluk_sonrasi_surec,set_mentorluk_sonrasi_surec] = useState([
        {
            name: "Lisans ve Lisansüstü Tez Mentörlüğü",
            checked: false
        },
        {
            name: "Proje Mentörlüğü",
            checked: false
        },
        {
            name: "Akademik ve Kariyer Mentörlüğü",
            checked: false
        },
        {
            name: "Girişimcilik Mentörlüğü",
            checked: false
        },
        {
            name: "Akran Mentörlüğü",
            checked: false
        },
    ])

    return (
        <>
        <Head>
            <title>
                Form || EHS
            </title>
        </Head>
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
                                    <div onClick={()=>set_state(index)} className={styles.item+" "+(index<=state?styles.active:"")+" "+(index==state?styles.focus:"")}>
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
                    <div className={styles.section_slider} style={{minWidth: (steps.length*100)+"%",transform: "translateX(-"+(state*(100/steps.length))+"%)"}}>
                        {
                            steps.map((step,index)=>{
                                return (
                                    <div className={styles.section}>
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
                                                            <input required type="text" value={mentee_form.name} onInput={(e)=>set_mentee_form({...mentee_form,name:e.target.value})} name="name" placeholder="İsminiz..." />
                                                        </div>
                                                        <div className={styles.item}>
                                                            <label for="name">
                                                                Soyisim
                                                            </label>
                                                            <input required type="text" value={mentee_form.surname} onInput={(e)=>set_mentee_form({...mentee_form,surname:e.target.value})} name="surname" placeholder="Soyisminiz..." />
                                                        </div>
                                                    </div>
                                                    <div className={styles.row}>
                                                        <div className={styles.item}>
                                                            <label for="email">
                                                                E-mail
                                                            </label>
                                                            <input required type="email" value={mentee_form.email} onInput={(e)=>set_mentee_form({...mentee_form,email:e.target.value})} name="email" placeholder="Emailiniz..." />
                                                        </div>
                                                        <div className={styles.item}>
                                                            <label for="phone">
                                                                Telefon Numarası
                                                            </label>
                                                            <input value={mentee_form.phone} onInput={handle_phone_oninput} required type="tel" name="phone" placeholder="Telefon Numaranız..." pattern="[0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}"  />
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
                                                                    <div className={styles.card}>
                                                                        {
                                                                            egitim_forms.length>1?
                                                                            <button onClick={(e)=>{
                                                                                e.stopPropagation();
                                                                                e.preventDefault();
                                                                                set_egitim_forms(egitim_forms.filter((a,map_index)=>{
                                                                                    if(index==map_index){
                                                                                        return false
                                                                                    }return true
                                                                                }))
                                                                            }} className={styles.delete_icon}>
                                                                                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                            </button>:""
                                                                        }
                                                                        <div className={styles.item}>
                                                                            <label for={"bölüm-"+index}>
                                                                                Bölüm
                                                                            </label>
                                                                            <input type="text" name={"bölüm-"+index} required placeholder="Bölümünüz..."
                                                                                value={egitim_form.bölüm} 
                                                                                onInput={(e)=>{
                                                                                    set_egitim_forms(egitim_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                bölüm: e.target.value
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
                                                                            <input type="text" name={"okul-"+index} required placeholder="Okulunuz..."
                                                                                value={egitim_form.okul} 
                                                                                onInput={(e)=>{
                                                                                    set_egitim_forms(egitim_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                okul: e.target.value
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
                                                                            <select defaultValue={"-"} value={egitim_form.derece}
                                                                                onChange={(e)=>{
                                                                                    set_egitim_forms(egitim_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                derece: e.target.value
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
                                                                                    value={egitim_form.baslangic}
                                                                                    onChange={(e)=>{
                                                                                        set_egitim_forms(egitim_forms.map((form,map_index)=>{
                                                                                            if(index==map_index){
                                                                                                return {
                                                                                                    ...form,
                                                                                                    baslangic: e.target.value
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
                                                                                    value={egitim_form.bitis}
                                                                                    onChange={(e)=>{
                                                                                        set_egitim_forms(egitim_forms.map((form,map_index)=>{
                                                                                            if(index==map_index){
                                                                                                return {
                                                                                                    ...form,
                                                                                                    bitis: e.target.value
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
                                                                                value={egitim_form.ilgini_ceken_ders}

                                                                                onInput={(e)=>{
                                                                                    set_egitim_forms(egitim_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                ilgini_ceken_ders: e.target.value
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
                                                                                value={egitim_form.proje_arastirma_konulari}

                                                                                onInput={(e)=>{
                                                                                    set_egitim_forms(egitim_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                proje_arastirma_konulari: e.target.value
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
                                                                                value={egitim_form.aktif_klupler}

                                                                                onInput={(e)=>{
                                                                                    set_egitim_forms(egitim_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                aktif_klupler: e.target.value
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
                                                                    <div className={styles.card}>
                                                                        {
                                                                            tecrube_forms.length>1?
                                                                            <button onClick={(e)=>{
                                                                                e.stopPropagation();
                                                                                e.preventDefault();
                                                                                set_tecrube_forms(tecrube_forms.filter((a,map_index)=>{
                                                                                    if(index==map_index){
                                                                                        return false
                                                                                    }return true
                                                                                }))
                                                                            }} className={styles.delete_icon}>
                                                                                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                            </button>:""
                                                                        }
                                                                        <div className={styles.item}>
                                                                            <label for={"pozisyon-"+index}>
                                                                                Pozisyon
                                                                            </label>
                                                                            <input type="text" name={"pozisyon-"+index} required placeholder="Pozisyonunuz..."
                                                                                value={tecrube_form.pozisyon} 
                                                                                onInput={(e)=>{
                                                                                    set_tecrube_forms(tecrube_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                pozisyon: e.target.value
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
                                                                            <input type="text" name={"kurum-"+index} required placeholder="Kurumunuz..."
                                                                                value={tecrube_form.kurum} 
                                                                                onInput={(e)=>{
                                                                                    set_tecrube_forms(tecrube_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                kurum: e.target.value
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
                                                                                    value={tecrube_form.baslangic}
                                                                                    onChange={(e)=>{
                                                                                        set_tecrube_forms(tecrube_forms.map((form,map_index)=>{
                                                                                            if(index==map_index){
                                                                                                return {
                                                                                                    ...form,
                                                                                                    baslangic: e.target.value
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
                                                                                    value={tecrube_form.bitis}
                                                                                    onChange={(e)=>{
                                                                                        set_tecrube_forms(tecrube_forms.map((form,map_index)=>{
                                                                                            if(index==map_index){
                                                                                                return {
                                                                                                    ...form,
                                                                                                    bitis: e.target.value
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
                                                                            <input type="text" required placeholder="Görev 1" 
                                                                                value={tecrube_form.gorev_1}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_tecrube_forms(tecrube_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                gorev_1: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                            <input type="text" required placeholder="Görev 2" 
                                                                                value={tecrube_form.gorev_2}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_tecrube_forms(tecrube_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                gorev_2: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                            <input type="text" required placeholder="Görev 3" 
                                                                                value={tecrube_form.gorev_3}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_tecrube_forms(tecrube_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                gorev_3: e.target.value
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
                                                                            <textarea required name={"teknolojiler-"+index} placeholder="Kullanılan teknolojiler" 
                                                                                value={tecrube_form.teknolojiler}

                                                                                onInput={(e)=>{
                                                                                    set_tecrube_forms(tecrube_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                teknolojiler: e.target.value
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
                                                                    <div className={styles.card}>
                                                                        {
                                                                            kurs_forms.length>1?
                                                                            <button onClick={(e)=>{
                                                                                e.stopPropagation();
                                                                                e.preventDefault();
                                                                                set_kurs_forms(kurs_forms.filter((a,map_index)=>{
                                                                                    if(index==map_index){
                                                                                        return false
                                                                                    }return true
                                                                                }))
                                                                            }} className={styles.delete_icon}>
                                                                                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                            </button>:""
                                                                        }
                                                                        <div className={styles.item}>
                                                                            <label for={"kurs-name-"+index}>
                                                                                Kurs/Sertifika İsmi
                                                                            </label>
                                                                            <input type="text" name={"kurs-name-"+index} required placeholder="İsim..."
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
                                                                            <input type="text" name={"kurum-"+index} required placeholder="Kurumunuz..."
                                                                                value={kurs_form.kurum} 
                                                                                onInput={(e)=>{
                                                                                    set_kurs_forms(kurs_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                kurum: e.target.value
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
                                                                                value={kurs_form.tamamlama_tarihi}
                                                                                onChange={(e)=>{
                                                                                    set_kurs_forms(kurs_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                tamamlama_tarihi: e.target.value
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
                                                                            <input type="text" required placeholder="Yetenek 1" 
                                                                                value={kurs_form.yetenek_1}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_kurs_forms(kurs_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                yetenek_1: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                            <input type="text" required placeholder="Yetenek 2" 
                                                                                value={kurs_form.yetenek_2}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_kurs_forms(kurs_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                yetenek_2: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                            <input type="text" required placeholder="Yetenek 3" 
                                                                                value={kurs_form.yetenek_3}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_kurs_forms(kurs_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                yetenek_3: e.target.value
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
                                                                    <div className={styles.card}>
                                                                        {
                                                                            proje_forms.length>1?
                                                                            <button onClick={(e)=>{
                                                                                e.stopPropagation();
                                                                                e.preventDefault();
                                                                                set_proje_forms(proje_forms.filter((a,map_index)=>{
                                                                                    if(index==map_index){
                                                                                        return false
                                                                                    }return true
                                                                                }))
                                                                            }} className={styles.delete_icon}>
                                                                                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                            </button>:""
                                                                        }
                                                                        <div className={styles.item}>
                                                                            <label for={"proje-name-"+index}>
                                                                                Proje İsmi
                                                                            </label>
                                                                            <input type="text" name={"proje-name-"+index} required placeholder="İsim..."
                                                                                value={proje_form.name} 
                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
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
                                                                            <label for={"yer-"+index}>
                                                                                Yer
                                                                            </label>
                                                                            <input type="text" name={"yer-"+index} required placeholder="Yer..."
                                                                                value={proje_form.yer} 
                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                yer: e.target.value
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
                                                                            <input type="text" name={"destekleyen-kurum-"+index} required placeholder="Destekleyen Kurum..."
                                                                                value={proje_form.destekleyen_kurum} 
                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                destekleyen_kurum: e.target.value
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
                                                                            <input type="text" name={"fonlayan-kurum-"+index} required placeholder="Fonlayan Kurum..."
                                                                                value={proje_form.fonlayan_kurum} 
                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                fonlayan_kurum: e.target.value
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
                                                                            <input type="text" required placeholder="Görev 1" 
                                                                                value={proje_form.gorev_1}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                gorev_1: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                            <input type="text" required placeholder="Görev 2" 
                                                                                value={proje_form.gorev_2}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                gorev_2: e.target.value
                                                                                            }
                                                                                        }return form
                                                                                    }))
                                                                                }}
                                                                            />
                                                                            <input type="text" required placeholder="Görev 3" 
                                                                                value={proje_form.gorev_3}
                                                                                
                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                gorev_3: e.target.value
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
                                                                            <textarea required name={"teknolojiler-"+index} placeholder="Kullanılan teknolojiler" 
                                                                                value={proje_form.teknolojiler}

                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                teknolojiler: e.target.value
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
                                                                            <textarea required name={"oduller-"+index} placeholder="Ödüller..." 
                                                                                value={proje_form.oduller}

                                                                                onInput={(e)=>{
                                                                                    set_proje_forms(proje_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                oduller: e.target.value
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
                                                            Yayınlar
                                                        </div>
                                                        {
                                                            yayin_forms.map((yayin_form,index)=>{
                                                                return (
                                                                    <div className={styles.card}>
                                                                        {
                                                                            yayin_forms.length>1?
                                                                            <button onClick={(e)=>{
                                                                                e.stopPropagation();
                                                                                e.preventDefault();
                                                                                set_yayin_forms(yayin_forms.filter((a,map_index)=>{
                                                                                    if(index==map_index){
                                                                                        return false
                                                                                    }return true
                                                                                }))
                                                                            }} className={styles.delete_icon}>
                                                                                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                            </button>:""
                                                                        }
                                                                        <div className={styles.item}>
                                                                            <label for={"proje-name-"+index}>
                                                                                Proje İsmi
                                                                            </label>
                                                                            <input type="text" name={"proje-name-"+index} required placeholder="İsim..."
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
                                                                            <input type="text" name={"yayinlayan-kurum-"+index} required placeholder="Yayınlanan Kurum..."
                                                                                value={yayin_form.kurum} 
                                                                                onInput={(e)=>{
                                                                                    set_yayin_forms(yayin_forms.map((form,map_index)=>{
                                                                                        if(index==map_index){
                                                                                            return {
                                                                                                ...form,
                                                                                                kurum: e.target.value
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
                                                                            <textarea required name={"doı-"+index} placeholder="DOI..." 
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
                                                                    <div className={styles.card}>
                                                                        {
                                                                            hobi_forms.length>1?
                                                                            <button onClick={(e)=>{
                                                                                e.stopPropagation();
                                                                                e.preventDefault();
                                                                                set_hobi_forms(hobi_forms.filter((a,map_index)=>{
                                                                                    if(index==map_index){
                                                                                        return false
                                                                                    }return true
                                                                                }))
                                                                            }} className={styles.delete_icon}>
                                                                                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                            </button>:""
                                                                        }
                                                                        <div className={styles.item}>
                                                                            <label for={"hobi-name-"+index}>
                                                                                Hobi Başlığı
                                                                            </label>
                                                                            <input type="text" name={"hobi-name-"+index} required placeholder="İsim..."
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
                                                                                            professional: !a.professional
                                                                                        }
                                                                                    }return a
                                                                                }))
                                                                            }}>
                                                                                <div className={styles.checkbox_item} name="lisans-ve-lisansüst-tez">
                                                                                    <input type="checkbox" checked={hobi_form.professional} />
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
                                                                            <textarea required name={"description-"+index} placeholder="Açıklama..." 
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
                                                        <textarea placeholder="Cevabınız..." required />
                                                    </div>
                                                    <div className={styles.item}>
                                                        <div className={styles.question}>
                                                            2.  Mentörlük Başvuru Türü:
                                                        </div>
                                                        <div className={styles.options}>
                                                            {
                                                                mentorluk_sureci_form.map((option,index)=>{
                                                                    return (
                                                                        <div className={styles.option} onClick={()=>{
                                                                            set_mentorluk_sureci_form(mentorluk_sureci_form.map((a,map_index)=>{
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
                                                        <textarea placeholder="Cevabınız..." required />
                                                    </div>
                                                    <div className={styles.item}>
                                                        <div className={styles.question}>
                                                            4.  EHS'den almayı umduğunuz mentörlüğün süresi hakkında bir tahmininiz var mı? (Örnek: 3 ay, 6 ay, 1 yıl vb.)
                                                        </div>
                                                        <textarea placeholder="Cevabınız..." required />
                                                    </div>
                                                    <div className={styles.item}>
                                                        <div className={styles.question}>
                                                            5.  Mentörlük sürecinde ne sıklıkla mentörünüzle buluşmayı planlıyorsunuz? (Örnek: haftada bir, ayda bir vb.)
                                                        </div>
                                                        <textarea placeholder="Cevabınız..." required />
                                                    </div>
                                                    </>:
                                                    index==3?
                                                    <>
                                                    {
                                                        mentorluk_sureci_form.map((option,option_index)=>{
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
                                                                                        set_mentorluk_sureci_form(mentorluk_sureci_form.map((a,map_index)=>{
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
                                                                                    }} required placeholder="Cevabınız..." />
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
                                                                    mentorluk_sonrasi_surec.map((option,index)=>{
                                                                        return (
                                                                            <div className={styles.option} onClick={()=>{
                                                                                set_mentorluk_sonrasi_surec(mentorluk_sonrasi_surec.map((a,map_index)=>{
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
                                                            <textarea placeholder="Cevabınız..." required />
                                                        </div>
                                                        <div className={styles.item}>
                                                            <div className={styles.question}>
                                                                3. EHS etkinliklerinde hangi kapasitelerde görev almayı düşünüyorsunuz? (Örneğin: etkinlik organizasyonu, konuşmacı olarak katılmak, sponsorluk ilişkileri kurma vb. )
                                                            </div>
                                                            <textarea placeholder="Cevabınız..." required />
                                                        </div>
                                                        <div className={styles.item}>
                                                            <div className={styles.question}>
                                                                4. EHS ile ilgili ek olarak paylaşmak istediğiniz düşünceleriniz veya beklentileriniz var mı?
                                                            </div>
                                                            <textarea placeholder="Cevabınız..." required />
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
                                                            <svg stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z" fill="var(--geist-fill)"/><path d="M13 8l-4 4 4 4" stroke="var(--geist-stroke)"/></svg>
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
                                                            <svg stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" viewBox="0 0 24 24"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z" fill="var(--geist-fill)"/><path d="M11 16l4-4-4-4" stroke="var(--geist-stroke)"/></svg>
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