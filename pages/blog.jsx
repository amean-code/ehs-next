import Header from "../components/Header";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Sponsors from "../components/Sponsors";
import styles from "../styles/App.module.css"
import Head from "next/head";
export default function Home() {
  return (
    
    <div className={styles.main_body}>
      <Head>
        <title>
          Energy Hack Space | Blogs
        </title>
      </Head>
      <Header />
      <Blog />
      <Footer />
    </div>
  );
}
