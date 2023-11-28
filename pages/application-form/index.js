
import Head from "next/head";
import styles from "../../styles/ApplicationForm.module.css";
import Link from "next/link"

// LANGUAGE
import { useRouter } from 'next/router';
import lang from "../../lang.json"
import { useEffect, useState } from "react";
// LANGUAGE

export default function Form(){

    // LANGUAGE
    const router = useRouter();
    const {locale} = router;
    const t = lang[locale];
    // LANGUAGE

    const [page,set_page] = useState(1);

    const [max_page,set_max_page] = useState(0);

    const [takim_bilgileri,set_takim_bilgileri] = useState({
        team_name: "",
        leader_name: "",
        leader_surname: "",
        leader_email: "",
        member_number: 4
    });

    const [members,set_members] = useState([]);

    useEffect(()=>{
        set_max_page(takim_bilgileri.member_number+4);

        let new_member_form = {
            name:"",
            surname:"",
            university_department: "",
            email: "",
            linkedin: ""
        }

        let new_member_forms = [];

        for(let i = 1;i<=takim_bilgileri.member_number;i++){
            if(i>members.length){
                new_member_forms.push(new_member_form);
            }
        }

        set_members([
            ...members.filter((a,i)=>{
                if(i+1<=takim_bilgileri.member_number){
                    return true
                }return false
            }),
            ...new_member_forms
        ])

    },[takim_bilgileri.member_number]);

    const [feedback,set_feedback] = useState({
        channel: "",
        feedback: ""
    });

    const [kriters,set_kriters] = useState([
        {
            title: "Kriter 1",
            selected: false
        },{
            title: "Kriter 2",
            selected: false
        }
    ])

    return (
        <div className={styles.main}>
            <Head>
                <title>
                    {t?.ehs}
                </title>
            </Head>
            <div className={styles.container}>
                <div className={styles.slider}>
                    <div className={styles.window} style={{transform: "translateX("+(1-page)*100+"%)"}}>
                        <div className={styles.body+" "+styles.landing}>
                            <div className={styles.image}>
                                <img src="/images/logo.png" />
                            </div>
                            <div className={styles.info}>
                                <h1>
                                    Başvuru Formu
                                </h1>
                                <p>
                                    Merhaba, Energy Hack Space Hackaton Başvuru Formuna Hoşgeldin!
                                </p>
                                <div className={styles.checkbox_input}>
                                    {
                                        kriters.map((kriter,index)=>{
                                            return (

                                                <div onClick={()=>set_kriters(kriters.map((a,i)=>{
                                                    if(i==index){
                                                        return {
                                                            ...a,
                                                            selected: !a.selected
                                                        }
                                                    }return a
                                                }))} className={styles.checkbox+" "+(kriter.selected?styles.active:"")}>
                                                    <div className={styles.checkmark}>
            
                                                    </div>
                                                    <div className={styles.label}>
                                                        {kriter.title}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.window} style={{transform: "translateX("+(2-page)*100+"%)"}}>
                        <div className={styles.body+" "+styles.form_body}>
                            <h2>
                                Takım Bilgileri
                            </h2>
                            <div className={styles.form}>
                                <div className={styles.item}>
                                    <label>
                                        1. Takımınızın adını giriniz. <span>*</span> <br/>&nbsp;
                                    </label>
                                    <div className={styles.inputs}>
                                        <input value={takim_bilgileri.team_name} onInput={(e)=>set_takim_bilgileri({...takim_bilgileri,team_name: e.target.value})} type="text" placeholder="Takımınızın Adı" />
                                    </div>
                                    <div className={styles.info}>
                                        Sonradan değiştirebilirsiniz
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <label>
                                        2. Takımın ana irtibat kişisinin Adını ve Soyadını giriniz. <span>*</span>
                                    </label>

                                    <div className={styles.inputs}>
                                        <input value={takim_bilgileri.leader_name} onInput={(e)=>set_takim_bilgileri({...takim_bilgileri,leader_name: e.target.value})}  type="text" placeholder="Ad" />
                                        <input value={takim_bilgileri.leader_surname} onInput={(e)=>set_takim_bilgileri({...takim_bilgileri,leader_surname: e.target.value})}  type="text" placeholder="Soyad" />
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <label>
                                        3. Takımın ana irtibat kişisinin Mailini giriniz. <span>*</span>
                                    </label>
                                    <div className={styles.inputs}>
                                        <input value={takim_bilgileri.leader_email} onInput={(e)=>set_takim_bilgileri({...takim_bilgileri,leader_email: e.target.value})}  type="text" placeholder="Mail" />
                                    </div>
                                    <div className={styles.info}>
                                        E-postanızı ve Discordu düzenli takip etmeniz gerekmektedir.
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <label>
                                        4. Takımınız kaç kişiden oluşuyor? <span>*</span>
                                    </label>
                                    <div className={styles.inputs}>
                                        <div className={styles.radio_input}>
                                            <div onClick={()=>set_takim_bilgileri({...takim_bilgileri,member_number: 4})} className={styles.radio+" "+(takim_bilgileri.member_number==4?styles.active:"")}>
                                                <div className={styles.checkmark}>

                                                </div>
                                                <div className={styles.label}>
                                                    4
                                                </div>
                                            </div>
                                            <div onClick={()=>set_takim_bilgileri({...takim_bilgileri,member_number: 5})}  className={styles.radio+" "+(takim_bilgileri.member_number==5?styles.active:"")}>
                                                <div className={styles.checkmark}>

                                                </div>
                                                <div className={styles.label}>
                                                    5
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        members.map((member,index)=>{
                            return (
                                <div className={styles.window} style={{transform: "translateX("+(3+index-page)*100+"%)"}}>
                                    <div className={styles.body+" "+styles.form_body}>
                                        <h2>
                                            {index+1}. Üye Bilgileri
                                        </h2>
                                        <div className={styles.form}>
                                            <div className={styles.item}>
                                                <label>
                                                    1. İsim Soyisim <span>*</span><br/>&nbsp;
                                                </label>

                                                <div className={styles.inputs}>
                                                    <input value={member.name} onInput={(e)=>set_members(members.map((a,i)=>{
                                                        if(i==index){
                                                            return {
                                                                ...a,
                                                                name: e.target.value
                                                            }
                                                        }return a
                                                    }))}  type="text" placeholder="İsim" />
                                                    <input value={member.surname}  onInput={(e)=>set_members(members.map((a,i)=>{
                                                        if(i==index){
                                                            return {
                                                                ...a,
                                                                surname: e.target.value
                                                            }
                                                        }return a
                                                    }))} type="text" placeholder="Soyad" />
                                                </div>
                                            </div>
                                            <div className={styles.item}>
                                                <label>
                                                    2. Devam eden/mezun olunan üniversite ve bölüm <span>*</span>
                                                </label>
                                                <div className={styles.inputs}>
                                                    <input value={member.university_department} onInput={(e)=>set_members(members.map((a,i)=>{
                                                        if(i==index){
                                                            return {
                                                                ...a,
                                                                university_department: e.target.value
                                                            }
                                                        }return a
                                                    }))} type="text" />
                                                </div>
                                                <div className={styles.info}>
                                                    Örnek: Yıldız Teknik Üniversitesi - Elektrik Elektronik Mühendisliği (öğrenci/mezun)
                                                </div>
                                            </div>
                                            <div className={styles.item}>
                                                <label>
                                                    3. E-posta adresi <span>*</span>
                                                </label>
                                                <div className={styles.inputs}>
                                                    <input value={member.email} onInput={(e)=>set_members(members.map((a,i)=>{
                                                        if(i==index){
                                                            return {
                                                                ...a,
                                                                email: e.target.value
                                                            }
                                                        }return a
                                                    }))} type="text" />
                                                </div>
                                            </div>
                                            <div className={styles.item}>
                                                <label>
                                                    4. Linkedin Profili
                                                </label>
                                                <div className={styles.inputs}>
                                                    <input value={member.linkedin} onInput={(e)=>set_members(members.map((a,i)=>{
                                                        if(i==index){
                                                            return {
                                                                ...a,
                                                                linkedin: e.target.value
                                                            }
                                                        }return a
                                                    }))} type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className={styles.window} style={{transform: "translateX("+(3+takim_bilgileri.member_number-page)*100+"%)"}}>
                        <div className={styles.body+" "+styles.form_body}>
                            <h2>
                                Takımların Oluşturulması
                            </h2>
                            <p>
                                Sosyal medya üzerinden paylaşım yapabilmemiz için aşağıdaki linkte bulunan örnekleri kullanarak takım sunumunuzu hazırlamanızı istiyoruz.
                            </p>

                            <Link href="https://www.energyhack.space/tarih%C3%A7e">
                                https://www.energyhack.space/tarih%C3%A7e
                            </Link>

                            <p>
                                Takım oluştururken, takım üyelerinin rollerini belirleyiniz <br/>
                                Örnek Roller: Teknik Personel, Hikaye Anlatıcısı, Yaratıcı Kişi, Veri Aşığı...
                            </p>

                            <p>
                                Takım sunumunuzda yer alan <strong>Motivasyonumuz</strong> kısmını yazarken lütfen aşağıdaki sorulara yanıt verin.
                            </p>

                            <div className={styles.list}>
                                <div className={styles.list_item}>
                                    Elektrik hayatta kalmak için temel bir ihtiyaç mı?
                                </div>
                                <div className={styles.list_item}>
                                    Kısa bir kıyamet günü senaryosu: Elektrik sisteminizi çalışır durumda tutmak için nasıl hazırlanabilirsiniz?
                                </div>
                                <div className={styles.list_item}>
                                    Hackaton'dan ne bekliyoruz?
                                </div>
                                <div className={styles.list_item}>
                                    Bu beklentileri karşılayacağımıza neden inanıyoruz?
                                </div>
                            </div>
                            <div className={styles.file_label}>
                                Takım Sunumu <span>*</span>
                            </div>
                            <div className={styles.file_input}>
                                <input type="file" />
                                <div className={styles.drop_zone}>
                                    <div className={styles.icon}>
                                        <svg stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shape-rendering="geometricPrecision" viewBox="0 0 24 24"><path d="M16 16l-4-4-4 4M12 12v9"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/><path d="M16 16l-4-4-4 4"/></svg>
                                    </div>
                                    <div className={styles.text}>
                                        Dosyalarınızı buraya yükleyin
                                    </div>
                                    <div className={styles.info}>
                                        Drag and Drop files here
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.window} style={{transform: "translateX("+(4+takim_bilgileri.member_number-page)*100+"%)"}}>
                        <div className={styles.body+" "+styles.form_body}>
                            <h2>
                                Bizi Haberdar Et
                            </h2>
                            <div className={styles.form} style={{gridTemplateColumns:"1fr"}}>
                                <div className={styles.item}>
                                    <label>
                                        Etkinliğimizi hangi kanal aracılığı ile duydunuz?
                                    </label>
                                    <div className={styles.inputs}>
                                        <div className={styles.radio_input}>
                                            <div onClick={()=>set_feedback({...feedback,channel: "IEEE E-posta"})} className={styles.radio+" "+(feedback.channel=="IEEE E-posta"?styles.active:"")}>
                                                <div className={styles.checkmark}>

                                                </div>
                                                <div className={styles.label}>
                                                    IEEE E-posta
                                                </div>
                                            </div>
                                            <div onClick={()=>set_feedback({...feedback,channel: "IEEE Pes Sosyal Medya"})} className={styles.radio+" "+(feedback.channel=="IEEE Pes Sosyal Medya"?styles.active:"")}>
                                                <div className={styles.checkmark}>

                                                </div>
                                                <div className={styles.label}>
                                                    IEEE Pes Sosyal Medya
                                                </div>
                                            </div>
                                            <div onClick={()=>set_feedback({...feedback,channel: "Solar Vizyon"})} className={styles.radio+" "+(feedback.channel=="Solar Vizyon"?styles.active:"")}>
                                                <div className={styles.checkmark}>

                                                </div>
                                                <div className={styles.label}>
                                                    Solar Vizyon
                                                </div>
                                            </div>
                                            <div onClick={()=>set_feedback({...feedback,channel: "Linkedin"})} className={styles.radio+" "+(feedback.channel=="Linkedin"?styles.active:"")}>
                                                <div className={styles.checkmark}>

                                                </div>
                                                <div className={styles.label}>
                                                    Linkedin
                                                </div>
                                            </div>
                                            <div onClick={()=>set_feedback({...feedback,channel: "Diğer"})} className={styles.radio+" "+(feedback.channel=="Diğer"?styles.active:"")}>
                                                <div className={styles.checkmark}>

                                                </div>
                                                <div className={styles.label}>
                                                    Diğer
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <label>
                                        Paylaşmak istediğiniz bir şeyler var mı?
                                    </label>
                                    <div className={styles.inputs}>
                                        <textarea onInput={(e)=>set_feedback({...feedback,feedback: e.target.value})} >
                                            {feedback.feedback}
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.controller}>
                        {
                            page>1?
                            <button onClick={()=>{
                                set_page(page-1);
                            }}className={styles.prev}>
                                Geri
                            </button>
                            :<div></div>
                        }
                        {
                            page<max_page?
                            kriters.filter((a)=>{
                                if(!a.selected){
                                    return true
                                }return false
                            }).length==0?
                            <button onClick={()=>{
                                set_page(page+1);
                            }} className={styles.next}>
                                İleri
                            </button>
                            :"":""
                        }
                        {
                            page==max_page?
                            <button onClick={()=>{
                                set_page(page);
                            }} className={styles.next}>
                                Gönder
                            </button>
                            :""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}