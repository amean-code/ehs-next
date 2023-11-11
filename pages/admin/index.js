import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "../../styles/App.module.css"
import Head from "next/head";

export default function Home() {
  return (
    
    <div className={styles.main_body}>
      <Head>
        <title>
          Energy Hack Space || Admin
        </title>
      </Head>
      <Header />
      {/* <Footer /> */}
    </div>
  );
}
