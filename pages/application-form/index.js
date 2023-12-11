
import Head from "next/head";
import styles from "../../styles/ApplicationForm.module.css";
import Link from "next/link"
import ApplicationFormService from "../../services/ApplicationForm";
// LANGUAGE
import { useRouter } from 'next/router';
import lang from "../../lang.json"
import { useEffect, useRef, useState } from "react";
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
        id: 0,
        name: "",
        leader_id: 0,
        member_count: 4
    });

    const [members,set_members] = useState([]);

    const file_ref = useRef(null);

    const [file_input,set_file_input] = useState({
        file: null,
        state: "chill"
    });

    let capture_file = (ev) => {

        let new_file = null;
        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            [...ev.dataTransfer.items].forEach((item, i) => {
                // If dropped items aren't files, reject them
                if (item.kind === "file") {
                const file = item.getAsFile();
                new_file = file;
                console.log(`… file[${i}].name = ${file.name}`);
                }
            });
        } else {
            // Use DataTransfer interface to access the file(s)
            [...ev.dataTransfer.files].forEach((file, i) => {
                console.log(`… file[${i}].name = ${file.name}`);

                new_file = file;
            });
        }
        if(file_ref.current){
            file_ref.current.value = "";
            console.log("denem",file_ref.current?.files);
        }
        set_file_input({...file_input,file: new_file,state:"chill"});
    }

    let changeHandle = (event) => {
        event.preventDefault();

        set_file_input({...file_input,file: event.target.files[0]});
    }

    let clickHandle = (event) => {
        set_file_input({...file_input,state:"chill"});

        if(file_ref.current){
            file_ref.current.click();
        }
    }

    let dropHandle = (event) => {
        event.preventDefault();
        capture_file(event);
    }

    let dragLeaveHandle = (event) => {
        event.preventDefault();

        set_file_input({...file_input,state:"chill"});
    }

    let dragOverHandle = (event) => {
        event.preventDefault();

        set_file_input({...file_input,state:"drag"});
    }

    useEffect(()=>{
        set_max_page(takim_bilgileri.member_count+4);

        let new_member_form = {
            name:"",
            surname:"",
            university_department: "",
            email: "",
            linkedin: ""
        }

        let new_member_forms = [];

        for(let i = 1;i<=takim_bilgileri.member_count;i++){
            if(i>members.length){
                new_member_forms.push(new_member_form);
            }
        }

        set_members([
            ...members.filter((a,i)=>{
                if(i+1<=takim_bilgileri.member_count){
                    return true
                }return false
            }),
            ...new_member_forms
        ])

    },[takim_bilgileri.member_count]);

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
    ]);

    // {
    //     key: "",
    //     active: false,
    //     message: ""
    // }

    const [error_modal,set_error_modal] = useState([]);

    let submit_form = () => {
        ApplicationFormService.create_form({
            ...takim_bilgileri
        }).then(res=>res.json())
        .then(team_data=>{
            console.log("TEAM DATA: ",team_data);

            if(!team_data.error){

                ApplicationFormService.add_presentaion(team_data.data.id,file_input.file).then(res=>res.json())
                .then(presentation_data=>{
                    console.log("PRESENTATION DATA: ",presentation_data);
                });


                members.forEach((member,index)=>{
                    ApplicationFormService.create_member({
                        ...member,
                        team_id: team_data.data.id
                    }).then(res=>res.json())
                    .then(member_data=>{
                        console.log("MEMBER "+index+" :",member_data);
                        if(!member_data.error){
                            if(index==0){
                                set_takim_bilgileri({...takim_bilgileri,id:team_data.data.id,leader_id: member_data?.data?.id})
                            }
                        }
                    })
                });

                ApplicationFormService.create_team_feedback({
                    ...feedback,
                    team_id: team_data.data.id
                }).then(res=>res.json())
                .then(feedback_data=>{
                    console.log("FEEDBACK DATA: ",feedback_data);
                })

                
            }

        })
    }

    useEffect(()=>{
        if(takim_bilgileri.leader_id!=0){
            ApplicationFormService.update_form(takim_bilgileri.id,{
                leader_id: takim_bilgileri.leader_id
            }).then(res=>res.json())
            .then(data=>{
                console.log("LEADER ID DATA: ",data)
            })
        }
    },[takim_bilgileri.leader_id])

    let handle_submit = () => {

        let error_modals = [];

        if(page==2){
            
            let success = true;

            if(takim_bilgileri.name.length==0){
                error_modals.push({
                    key: "takim_bilgileri_name_required",
                    active: true,
                    message: "Takım İsmi Boş Bırakılamaz"
                });
            }

            if(members[0].surname.length==0||members[0].name.length==0){
                success=false;
                error_modals.push({
                    key: "leader_name_required",
                    active: true,
                    message: "İsim Boş Bırakılamaz"
                });
            }

            if(members[0].email.length==0){
                success=false;
                error_modals.push({
                    key: "leader_email_required",
                    active: true,
                    message: "Email Boş Bırakılamaz"
                });
            }

            if(!members[0].email.includes("@")){
                success=false;
                error_modals.push({
                    key: "leader_email_denied",
                    active: true,
                    message: "Email Formatı Yanlış"
                });
            }

            if(success){
                set_page(page+1);
            }

        }else if(page>1&&page<=1+members.length){
            members.forEach((member,index)=>{
                if(page==index+3){
                    let success = true;

                    if(member.surname.length==0||member.name.length==0){
                        success=false;
                        error_modals.push({
                            key: "member_"+index+"_name_required",
                            active: true,
                            message: "İsim Boş Bırakılamaz"
                        });
                    }

                    if(member.university_department.length==0){
                        success=false;
                        error_modals.push({
                            key: "member_"+index+"_university_department_required",
                            active: true,
                            message: "Üniversite/Bölüm Boş Bırakılamaz"
                        });
                    }

                    if(member.email.length==0){
                        success=false;
                        error_modals.push({
                            key: "member_"+index+"_email_required",
                            active: true,
                            message: "Email Boş Bırakılamaz"
                        });
                    }

                    if(!member.email.includes("@")){
                        success=false;
                        error_modals.push({
                            key: "member_"+index+"_email_denied",
                            active: true,
                            message: "Email Formatı Yanlış"
                        });
                    }

                    if(success){
                        set_page(page+1);
                    }
                }
            })
        }else if(page==3+members.length){

            let success = true;

            if(!file_input.file){
                success=false;
                error_modals.push({
                    key: "presentation_required",
                    active: true,
                    message: "Sunum Boş Bırakılamaz"
                });

                console.log("FİLE REQUİRED");
            }

            if(success){
                set_page(page+1);
            }

        }else{
            set_page(page+1);
        }

        set_error_modal(error_modals);

    }

    useEffect(()=>{
        console.log("error_modal",error_modal);
    },[error_modal])

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
                                <div className={styles.item+" "+(
                                    error_modal.find(a=>{
                                        if(a.key=="takim_bilgileri_name_required"&&a.active){
                                            return a
                                        }return false
                                    })?styles.error:""
                                )}>
                                    <label>
                                        1. Takımınızın adını giriniz.
                                    </label>
                                    {
                                        error_modal.find(a=>{
                                            if(a.key=="takim_bilgileri_name_required"&&a.active){
                                                return a
                                            }return false
                                        })?
                                        <div className={styles.error}>
                                            {
                                                error_modal.find(a=>{
                                                    if(a.key=="takim_bilgileri_name_required"&&a.active){
                                                        return a
                                                    }return false
                                                }).message
                                            }
                                        </div>:""
                                    }
                                    <div className={styles.inputs}>
                                        <input value={takim_bilgileri.name} onInput={(e)=>set_takim_bilgileri({...takim_bilgileri,name: e.target.value})} type="text" placeholder="Takımınızın Adı" />
                                    </div>
                                    <div className={styles.info}>
                                        Sonradan değiştirebilirsiniz
                                    </div>
                                </div>
                                <div className={styles.item+" "+(
                                    error_modal.find(a=>{
                                        if(a.key=="leader_name_required"&&a.active){
                                            return a
                                        }return false
                                    })?styles.error:""
                                )}>
                                    <label>
                                        2. Takımın ana irtibat kişisinin Adını ve Soyadını giriniz. <span>*</span>
                                    </label>
                                    {
                                        error_modal.find(a=>{
                                            if(a.key=="leader_name_required"&&a.active){
                                                return a
                                            }return false
                                        })?
                                        <div className={styles.error}>
                                            {
                                                error_modal.find(a=>{
                                                    if(a.key=="leader_name_required"&&a.active){
                                                        return a
                                                    }return false
                                                }).message
                                            }
                                        </div>:""
                                    }
                                    <div className={styles.inputs}>
                                        <input value={members[0]?.name} onInput={(e)=>set_members(members.map((a,i)=>{
                                                        if(i==0){
                                                            return {
                                                                ...a,
                                                                name: e.target.value
                                                            }
                                                        }return a
                                                    }))}   type="text" placeholder="Ad" />
                                        <input value={members[0]?.surname} onInput={(e)=>set_members(members.map((a,i)=>{
                                                        if(i==0){
                                                            return {
                                                                ...a,
                                                                surname: e.target.value
                                                            }
                                                        }return a
                                                    }))}  type="text" placeholder="Soyad" />
                                    </div>
                                </div>
                                <div className={styles.item+" "+(
                                    error_modal.find(a=>{
                                        if((a.key=="leader_email_required"||a.key=="leader_email_denied")&&a.active){
                                            return a
                                        }return false
                                    })?styles.error:""
                                )}>
                                    <label>
                                        3. Takımın ana irtibat kişisinin Mailini giriniz. <span>*</span>
                                    </label>
                                    {
                                        error_modal.find(a=>{
                                            if((a.key=="leader_email_required")&&a.active){
                                                return a
                                            }return false
                                        })?
                                        <div className={styles.error}>
                                            {
                                                error_modal.find(a=>{
                                                    if(a.key=="leader_email_required"&&a.active){
                                                        return a
                                                    }return false
                                                }).message
                                            }
                                        </div>:error_modal.find(a=>{
                                            if((a.key=="leader_email_denied")&&a.active){
                                                return a
                                            }return false
                                        })?
                                        <div className={styles.error}>
                                            {
                                                error_modal.find(a=>{
                                                    if(a.key=="leader_email_denied"&&a.active){
                                                        return a
                                                    }return false
                                                }).message
                                            }
                                        </div>:""
                                    }
                                    <div className={styles.inputs}>
                                        <input value={members[0]?.email} onInput={(e)=>set_members(members.map((a,i)=>{
                                                        if(i==0){
                                                            return {
                                                                ...a,
                                                                email: e.target.value
                                                            }
                                                        }return a
                                                    }))}   type="text" placeholder="Mail" />
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
                                            <div onClick={()=>set_takim_bilgileri({...takim_bilgileri,member_count: 4})} className={styles.radio+" "+(takim_bilgileri.member_count==4?styles.active:"")}>
                                                <div className={styles.checkmark}>

                                                </div>
                                                <div className={styles.label}>
                                                    4
                                                </div>
                                            </div>
                                            <div onClick={()=>set_takim_bilgileri({...takim_bilgileri,member_count: 5})}  className={styles.radio+" "+(takim_bilgileri.member_count==5?styles.active:"")}>
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
                                            <div className={styles.item+" "+(
                                                error_modal.find(a=>{
                                                    if((a.key=="member_"+index+"_name_required")&&a.active){
                                                        return a
                                                    }return false
                                                })?styles.error:""
                                            )}>
                                                <label>
                                                    1. İsim Soyisim
                                                </label>
                                                {
                                                    error_modal.find(a=>{
                                                        if(a.key=="member_"+index+"_name_required"&&a.active){
                                                            return a
                                                        }return false
                                                    })?
                                                    <div className={styles.error}>
                                                        {
                                                            error_modal.find(a=>{
                                                                if(a.key=="member_"+index+"_name_required"&&a.active){
                                                                    return a
                                                                }return false
                                                            }).message
                                                        }
                                                    </div>:""
                                                }
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
                                            <div className={styles.item+" "+(
                                                error_modal.find(a=>{
                                                    if((a.key=="member_"+index+"_university_department_required")&&a.active){
                                                        return a
                                                    }return false
                                                })?styles.error:""
                                            )}>
                                                <label>
                                                    2. Devam eden/mezun olunan üniversite ve bölüm <span>*</span>
                                                </label>
                                                {
                                                    error_modal.find(a=>{
                                                        if(a.key=="member_"+index+"_university_department_required"&&a.active){
                                                            return a
                                                        }return false
                                                    })?
                                                    <div className={styles.error}>
                                                        {
                                                            error_modal.find(a=>{
                                                                if(a.key=="member_"+index+"_university_department_required"&&a.active){
                                                                    return a
                                                                }return false
                                                            }).message
                                                        }
                                                    </div>:""
                                                }
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
                                            <div className={styles.item+" "+(
                                                error_modal.find(a=>{
                                                    if((a.key=="member_"+index+"_email_required"||a.key=="member_"+index+"_email_denied")&&a.active){
                                                        return a
                                                    }return false
                                                })?styles.error:""
                                            )}>
                                                <label>
                                                    3. E-posta adresi <span>*</span>
                                                </label>
                                                {
                                                    error_modal.find(a=>{
                                                        if((a.key=="member_"+index+"_email_required")&&a.active){
                                                            return a
                                                        }return false
                                                    })?
                                                    <div className={styles.error}>
                                                        {
                                                            error_modal.find(a=>{
                                                                if(a.key=="member_"+index+"_email_required"&&a.active){
                                                                    return a
                                                                }return false
                                                            }).message
                                                        }
                                                    </div>:error_modal.find(a=>{
                                                        if((a.key=="member_"+index+"_email_denied")&&a.active){
                                                            return a
                                                        }return false
                                                    })?
                                                    <div className={styles.error}>
                                                        {
                                                            error_modal.find(a=>{
                                                                if(a.key=="member_"+index+"_email_denied"&&a.active){
                                                                    return a
                                                                }return false
                                                            }).message
                                                        }
                                                    </div>:""
                                                }
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
                    <div className={styles.window} style={{transform: "translateX("+(3+takim_bilgileri.member_count-page)*100+"%)"}}>
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
                            {
                                error_modal.find(a=>{
                                    if(a.key=="presentation_required"&&a.active){
                                        return a
                                    }return false
                                })?
                                <div className={styles.error_label}>
                                    {
                                        error_modal.find(a=>{
                                            if(a.key=="presentation_required"&&a.active){
                                                return a
                                            }return false
                                        }).message
                                    }
                                </div>:""
                            }
                            <div className={styles.file_input+" "+(file_input.state=="drag"?styles.active:"")+" "+(error_modal.find(a=>{
                                    if(a.key=="presentation_required"&&a.active){
                                        return a
                                    }return false
                                })?styles.error:"")} onDragOver={dragOverHandle} onDragLeave={dragLeaveHandle} onDrop={dropHandle} onClick={clickHandle}>
                                <input onChange={changeHandle} ref={file_ref} type="file" />
                                <div className={styles.drop_zone}>
                                    {
                                        file_input.file?
                                        <div className={styles.file}>
                                            <div className={styles.icon}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path  d="M3 5a4 4 0 014-4h8.343a4 4 0 012.829 1.172l1.656 1.656A4 4 0 0121 6.657V19a4 4 0 01-4 4H7a4 4 0 01-4-4V5zm16 3v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h7v2a3 3 0 003 3h2zm-.11-2a2 2 0 00-.476-.757l-1.657-1.657A2 2 0 0016 3.11V5a1 1 0 001 1h1.89z"/><path id="opac" d="M9 12a1 1 0 100 2h6a1 1 0 100-2H9zM9 16a1 1 0 100 2h3a1 1 0 100-2H9z" fill="white"/></svg>
                                            </div>
                                            <div className={styles.name}>
                                                {file_input.file?.name}
                                            </div>
                                            <div className={styles.delete} onClick={(event)=>{
                                                event.preventDefault();
                                                event.stopPropagation();

                                                set_file_input({...file_input,file:null})
                                                if(file_ref.current){
                                                    file_ref.current.value = "";
                                                }
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20"><path d="M6 0a2 2 0 00-2 2v1H0v2h2v13c0 1.1.9 2 2 2h10a2 2 0 002-2V5h2V3h-4V2a2 2 0 00-2-2H6zm6 2v1H6V2h6zM4 18V5h10v13H4zM8 7v9H6V7h2zm4 0v9h-2V7h2z" fillRule="evenodd"/></svg>
                                            </div>
                                        </div>
                                        :file_input.state=="chill"?
                                        <>
                                            <div className={styles.icon}>
                                                <svg stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M16 16l-4-4-4 4M12 12v9"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/><path d="M16 16l-4-4-4 4"/></svg>
                                            </div>
                                            <div className={styles.text}>
                                                Sunumunuzu buraya yükleyin
                                            </div>
                                            <div className={styles.info}>
                                                Drag and Drop files here
                                            </div>
                                        </>
                                        :file_input.state=="drag"?
                                        <>
                                            <div className={styles.icon}>
                                                <svg stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M8 17l4 4 4-4M12 12v9"/><path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"/></svg>
                                            </div>
                                            <div className={styles.text}>
                                                Sunumunuzu buraya bırakın
                                            </div>
                                            <div className={styles.info}>
                                                Drop presentaion here
                                            </div>
                                        </>
                                        :""
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.window} style={{transform: "translateX("+(4+takim_bilgileri.member_count-page)*100+"%)"}}>
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
                            <button onClick={()=>{
                                handle_submit();
                            }} className={styles.next+" "+(
                                kriters.filter((a)=>{
                                    if(!a.selected){
                                        return true
                                    }return false
                                }).length>0?styles.disabled:"")} disabled={
                                    kriters.filter((a)=>{
                                        if(!a.selected){
                                            return true
                                        }return false
                                    }).length>0}>
                                İleri
                            </button>
                            :""
                        }
                        {
                            page==max_page?
                            <button onClick={()=>{
                                submit_form()
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