import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";
import styles from "../styles/blog.module.css";

function Blog() {
    const [activeNav, setActiveNav] = useState("");

    return (
        <section className={styles.section}>
            <div className={styles.left}>
                <div className={styles.top}>
                    <div className={styles.blog_image}>
                        <img src="https://html.merku.love/collab/assets/images/blog/blog_details_image_1.jpg" alt="" />
                    </div>
                    <div className={styles.blog_info}>
                        <div className={styles.info}>
                            <img src="/images/pin.png" alt="" />
                            <p>Sticky Post</p>
                        </div>
                        <div className={styles.info}>
                            <img src="/images/user.png" alt="" />
                            <p>by Durrad</p>
                        </div>
                        <div className={styles.info}>
                            <img src="/images/calendar.png" alt="" />
                            <p>Feb 12, 2023</p>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.des_top}>
                            <p>
                                Mauris rhoncus aenean vel elit scelerisque mauris.
                                Ultrices vitae auctor eu augue ut. Curabitur gravida arcu ac
                                tortor dignissim convallis aenean et tortor. Proin fermentum
                                leo vel orci porta non pulvinar neque. At tellus at urna
                                condimentum mattis pellentesque.
                            </p>
                        </div>
                        <div className={styles.des_mid}>
                            <img src="https://html.merku.love/collab/assets/images/icon/icon_quote.svg" alt="" />
                            <div className={styles.p}>
                                Nec feugiat nisl pretium fusce id velit ut.
                                Lobortis mattis aliquam faucibus purus in.
                                Ultricies integer quis auctor elit sed.
                                Lobortis scelerisque fermentum dui faucibus in ornare quam
                            </div>
                        </div>
                        <div className={styles.des_bot}>
                            <p>
                                Senectus et netus et malesuada.
                                Massa tincidunt dui ut ornare lectus sit.
                                Sed enim ut sem viverra.
                                Fermentum odio eu feugiat pretium.
                                Interdum varius sit amet mattis vulputate enim.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.mid}>
                    <div className={styles.part}>
                        <p className={styles.title}>Hard skills for a business analyst resume</p>
                        <p className={styles.text}>
                            Amet cursus sit amet dictum sit amet justo.
                            Morbi tincidunt ornare massa eget. In nulla
                            posuere sollicitudin aliquam ultrices sagittis
                            orci a. Diam donec adipiscing tristique risus
                            nec feugiat in fermentum posuere. In mollis
                            nunc sed id semper risus in hendrerit gravida.
                            Pretium viverra suspendisse potenti nullam ac
                            tortor vitae purus faucibus. Aliquet lectus proin
                            nibh nisl condimentum id venenatis.
                        </p>
                        <div className={styles.images}>
                            <img src="/images/blog_img1.jpeg" alt="" />
                            <img src="/images/blog_img2.jpeg" alt="" />
                        </div>
                    </div>
                    <div className={styles.part}>
                        <p className={styles.title}>Conduct research into the company you are applying to</p>
                        <p className={styles.text}>
                            Non diam phasellus vestibulum lorem sed.
                            Leo in vitae turpis massa sed. Urna cursus
                            eget nunc scelerisque. Elementum tempus egestas
                            sed sed risus. Aliquam sem et tortor consequat
                            id porta nibh venenatis. Egestas congue quisque
                            egestas diam in arcu cursus euismod.
                        </p>
                        <div className={styles.images}>

                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <div className={styles.list_item}>
                                <img src="/images/square.png" alt="" />
                                <p>Felis bibendum ut tristique et egestas quis ipsum</p>
                            </div>
                            <div className={styles.list_item}>
                                <img src="/images/square.png" alt="" />
                                <p>Aliquam faucibus purus in massa tempor</p>
                            </div>
                            <div className={styles.list_item}>
                                <img src="/images/square.png" alt="" />
                                <p>Interdum posuere lorem ipsum dolor consectetur</p>
                            </div>
                            <div className={styles.list_item}>
                                <img src="/images/square.png" alt="" />
                                <p>Aliquam malesuada bibendum vitae elementum</p>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.list_item}>
                                <p>1. Gravida in fermentum et sollicitudin ac orci.</p>
                            </div>
                            <div className={styles.list_item}>
                                <p>2. Mauris vitae ultricies leo integer malesuada</p>
                            </div>
                            <div className={styles.list_item}>
                                <p>3. Lacus sed viverra tellus habitasse</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <p>
                            Libero enim sed faucibus turpis in. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Sit amet nisl purus in mollis nunc sed id. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Felis donec et odio pellentesque diam volutpat commodo sed.
                        </p>
                    </div>
                </div>
                <div className={styles.comments}>

                    <h1>COMMENTS</h1>
                        <div className={styles.card}>
                            <div className={styles.card_top}>
                                <div className={styles.card_left}>
                                    <div className={styles.photo}>
                                        <img src="/images/image1.jpeg" alt="" />
                                    </div>
                                    <div className={styles.author_info}>
                                        <div className={styles.user}>
                                            <p>Carolyn Wallace</p>
                                        </div>
                                        <div className={styles.date}>
                                            <p>January 27, 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.card_right}>
                                    <img src="/images/back.png" alt="" />
                                    <p>Reply</p>
                                </div>
                            </div>
                            <div className={styles.card_bottom}>
                                <p>
                                    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Vitae ultricies leo integer malesuada nunc vel. Nibh cras pulvinar mattis nunc sed. Convallis a cras semper auctor neque vitae tempus. Mattis molestie a iaculis at erat pellentesque adipiscing.
                                </p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.card_top}>
                                <div className={styles.card_left}>
                                    <div className={styles.photo}>
                                        <img src="/images/image2.jpeg" alt="" />
                                    </div>
                                    <div className={styles.author_info}>
                                        <div className={styles.user}>
                                            <p>Reyn Chirsty</p>
                                        </div>
                                        <div className={styles.date}>
                                            <p>Jun 11, 2022</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.card_right}>
                                    <img src="/images/back.png" alt="" />
                                    <p>Reply</p>
                                </div>
                            </div>
                            <div className={styles.card_bottom}>
                                <p>
                                    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Vitae ultricies leo integer malesuada nunc vel. Nibh cras pulvinar mattis nunc sed. Convallis a cras semper auctor neque vitae tempus. Mattis molestie a iaculis at erat pellentesque adipiscing.
                                </p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.card_top}>
                                <div className={styles.card_left}>
                                    <div className={styles.photo}>
                                        <img src="/images/photo3.jpeg" alt="" />
                                    </div>
                                    <div className={styles.author_info}>
                                        <div className={styles.user}>
                                            <p>Emin Kartcı CEO</p>
                                        </div>
                                        <div className={styles.date}>
                                            <p>February 28, 2020</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.card_right}>
                                    <img src="/images/back.png" alt="" />
                                    <p>Reply</p>
                                </div>
                            </div>
                            <div className={styles.card_bottom}>
                                <p>
                                    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Vitae ultricies leo integer malesuada nunc vel. Nibh cras pulvinar mattis nunc sed. Convallis a cras semper auctor neque vitae tempus. Mattis molestie a iaculis at erat pellentesque adipiscing.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.categories}>
                    <div className={styles.category_title}>
                        <p>Categories</p>
                        <div className={styles.img}>
                            <img src="/images/up.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.check_box}>
                            <img src="/images/checkbox.png" alt="" />
                        </div>
                        <div className={styles.category_text}>
                            <p>Desing</p>
                            <p>(18)</p>
                        </div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.check_box}>
                            <img src="/images/checkbox.png" alt="" />
                        </div>
                        <div className={styles.category_text}>
                            <p>IT & Software</p>
                            <p>(11)</p>
                        </div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.check_box}>
                            <img src="/images/checkbox.png" alt="" />
                        </div>
                        <div className={styles.category_text}>
                            <p>Development</p>
                            <p>(10)</p>
                        </div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.check_box}>
                            <img src="/images/checkbox.png" alt="" />
                        </div>
                        <div className={styles.category_text}>
                            <p>Marketing</p>
                            <p>(4)</p>
                        </div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.check_box}>
                            <img src="/images/checkbox.png" alt="" />
                        </div>
                        <div className={styles.category_text}>
                            <p>Business</p>
                            <p>(8)</p>
                        </div>
                    </div>
                </div>
                <div className={styles.other_blogs}>
                    <p className={styles.other_blogs_title}>Other Blogs</p>
                    <div className={styles.blog_card}>
                        <div className={styles.blog_card_left}>
                            <img src="/images/image1.jpeg" alt="" />
                        </div>
                        <div className={styles.blog_card_right}>
                            <div className={styles.name}>
                                <img src="/images/user.png" alt="" />
                                <p>by Durrad</p>
                            </div>
                            <div className={styles.blog_title}>
                                <p>Create An Epic Resume For Your Dream Job</p>
                            </div>
                            <div className={styles.blog_date}>
                                <p>Feb 23, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.blog_card}>
                        <div className={styles.blog_card_left}>
                            <img src="/images/image2.jpeg" alt="" />
                        </div>
                        <div className={styles.blog_card_right}>
                            <div className={styles.name}>
                                <img src="/images/user.png" alt="" />
                                <p>by Durrad</p>
                            </div>
                            <div className={styles.blog_title}>
                                <p>Create An Epic Resume For Your Dream Job</p>
                            </div>
                            <div className={styles.blog_date}>
                                <p>Feb 23, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.blog_card}>
                        <div className={styles.blog_card_left}>
                            <img src="/images/image5.jpeg" alt="" />
                        </div>
                        <div className={styles.blog_card_right}>
                            <div className={styles.name}>
                                <img src="/images/user.png" alt="" />
                                <p>by Durrad</p>
                            </div>
                            <div className={styles.blog_title}>
                                <p>Create An Epic Resume For Your Dream Job</p>
                            </div>
                            <div className={styles.blog_date}>
                                <p>Feb 23, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
