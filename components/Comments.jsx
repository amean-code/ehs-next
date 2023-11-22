import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/comments.module.css";
import Link from "next/link";

function Comments() {
  const [activeNav, setActiveNav] = useState("");

  return (
    <section className={styles.section}>
        <div className={styles.title}>
            <h1 className={styles.h1}>
                Successful Stories
            </h1>
        </div>
        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.card_body}>
                    <div className={styles.card_top}>
                        <div className={styles.photo}>
                            <img className={styles.card_image} src="/images/photo3.jpeg" alt="" />
                        </div>
                        <div className={styles.username}>
                            Emin Kartcı
                        </div>
                        
                    </div>
                    <div className={styles.card_bottom}>
                        <div className={styles.comment}>
                            <p className={styles.p}>
                                Morbi et nisl Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. Sapien urna, sagittis a magna in, malesuada.a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. Sapien urna, sagittis a magna in, malesuada.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.card_body}>
                    <div className={styles.card_top}>
                        <div className={styles.photo}>
                            <img className={styles.card_image} src="/images/photo3.jpeg" alt="" />
                        </div>
                        <div className={styles.username}>
                            Emin Kartcı
                        </div>
                        
                    </div>
                    <div className={styles.card_bottom}>
                        <div className={styles.comment}>
                            <p className={styles.p}>
                                Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. Sapien urna, sagittis a magna in, malesuada.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.card_body}>
                    <div className={styles.card_top}>
                        <div className={styles.photo}>
                            <img className={styles.card_image} src="/images/photo3.jpeg" alt="" />
                        </div>
                        <div className={styles.username}>
                            Emin Kartcı
                        </div>
                        
                    </div>
                    <div className={styles.card_bottom}>
                        <div className={styles.comment}>
                            <p className={styles.p}>
                                Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. Sapien urna, sagittis a magna in, malesuada.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.column}>

                <div className={styles.card_body}>
                    <div className={styles.card_top}>
                        <div className={styles.photo}>
                            <img className={styles.card_image} src="/images/photo3.jpeg" alt="" />
                        </div>
                        <div className={styles.username}>
                            Emin Kartcı
                        </div>
                        
                    </div>
                    <div className={styles.card_bottom}>
                        <div className={styles.comment}>
                            <p className={styles.p}>
                                Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. Sapien urna, sagittis a magna in, malesuada.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.card_body}>
                    <div className={styles.card_top}>
                        <div className={styles.photo}>
                            <img className={styles.card_image} src="/images/photo3.jpeg" alt="" />
                        </div>
                        <div className={styles.username}>
                            Emin Kartcı
                        </div>
                        
                    </div>
                    <div className={styles.card_bottom}>
                        <div className={styles.comment}>
                            <p className={styles.p}>
                                Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. Sapien urna, sagittis a magna in, malesuada.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.card_body}>
                    <div className={styles.card_top}>
                        <div className={styles.photo}>
                            <img className={styles.card_image} src="/images/photo3.jpeg" alt="" />
                        </div>
                        <div className={styles.username}>
                            Emin Kartcı
                        </div>
                        
                    </div>
                    <div className={styles.card_bottom}>
                        <div className={styles.comment}>
                            <p className={styles.p}>
                                Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. Sapien urna, sagittis a magna in, malesuada.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.column}>

                <div className={styles.card_body}>
                    <div className={styles.card_top}>
                        <div className={styles.photo}>
                            <img className={styles.card_image} src="/images/photo3.jpeg" alt="" />
                        </div>
                        <div className={styles.username}>
                            Emin Kartcı
                        </div>
                        
                    </div>
                    <div className={styles.card_bottom}>
                        <div className={styles.comment}>
                            <p className={styles.p}>
                                Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. Sapien urna, sagittis a magna in, malesuada.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.card_body}>
                    <div className={styles.card_top}>
                        <div className={styles.photo}>
                            <img className={styles.card_image} src="/images/photo3.jpeg" alt="" />
                        </div>
                        <div className={styles.username}>
                            Emin Kartcı
                        </div>
                        
                    </div>
                    <div className={styles.card_bottom}>
                        <div className={styles.comment}>
                            <p className={styles.p}>
                                Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. Sapien urna, sagittis a magna in, malesuada.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.card_body}>
                    <div className={styles.card_top}>
                        <div className={styles.photo}>
                            <img className={styles.card_image} src="/images/photo3.jpeg" alt="" />
                        </div>
                        <div className={styles.username}>
                            Emin Kartcı
                        </div>
                        
                    </div>
                    <div className={styles.card_bottom}>
                        <div className={styles.comment}>
                            <p className={styles.p}>
                                Morbi et nisl a sapien Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. Sapien urna, sagittis a magna in, malesuada.Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.column}>

                <div className={styles.card_body}>
                    <div className={styles.card_top}>
                        <div className={styles.photo}>
                            <img className={styles.card_image} src="/images/photo3.jpeg" alt="" />
                        </div>
                        <div className={styles.username}>
                            Emin Kartcı
                        </div>
                        
                    </div>
                    <div className={styles.card_bottom}>
                        <div className={styles.comment}>
                            <p className={styles.p}>
                                Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. Sapien urna, sagittis a magna in, malesuada.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.card_body}>
                    <div className={styles.card_top}>
                        <div className={styles.photo}>
                            <img className={styles.card_image} src="/images/photo3.jpeg" alt="" />
                        </div>
                        <div className={styles.username}>
                            Emin Kartcı
                        </div>
                        
                    </div>
                    <div className={styles.card_bottom}>
                        <div className={styles.comment}>
                            <p className={styles.p}>
                                Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. Sapien urna, sagittis a magna in, malesuada.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.card_body}>
                    <div className={styles.card_top}>
                        <div className={styles.photo}>
                            <img className={styles.card_image} src="/images/photo3.jpeg" alt="" />
                        </div>
                        <div className={styles.username}>
                            Emin Kartcı
                        </div>
                        
                    </div>
                    <div className={styles.card_bottom}>
                        <div className={styles.comment}>
                            <p className={styles.p}>
                                Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. Sapien urna, sagittis a magna in, malesuada.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Comments;
