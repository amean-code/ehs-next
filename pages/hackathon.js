import Header from "../components/Header";
import Footer from "../components/Footer";
import Hackathon from "../components/Hackathon";
import styles from "../styles/App.module.css"
import Head from "next/head";
export default function HackathonPage() {
  return (
    
    <div className={styles.main_body}>
      <Head>
        <title>
          Energy Hack Space | Hackaton
        </title>
      </Head>
      <Header />
      <Hackathon />
      <Footer />
    </div>
  );
}
