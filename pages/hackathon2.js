import Header from "../components/Header";
import Footer from "../components/Footer";
import Hackathon2 from "../components/Hackathon2";
import styles from "../styles/App.module.css"
import Head from "next/head";
export default function Hackathon2Page() {
  return (
    
    <div className={styles.main_body}>
      <Head>
        <title>
          Energy Hack Space | Blogs
        </title>
      </Head>
      <Header />
      <Hackathon2 />
      <Footer />
    </div>
  );
}
