import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Slider from "../components/Slider";
import SliderBottom from "../components/SliderBottom";
import Team from "../components/Team";
import TimeLine from "../components/TimeLine";
import NotFoundPage from "./404";
import Vision from "../components/Vision";
import Events from "../components/Events";
import News from "../components/News";
import Blog from "../components/Blog";
import Mentoring from "../components/Mentoring";
import styles from "../styles/App.module.css"
import Head from "next/head";
import MentoringComments from "../components/MentoringComments";
import Comments from "../components/Comments";

// LANGUAGE
import { useRouter } from 'next/router';
import lang from "../lang.json"
// LANGUAGE

export default function Home() {

  // LANGUAGE
  const router = useRouter();
  const {locale} = router;
  const t = lang[locale];
  // LANGUAGE

  return (
    
    <div className={styles.main_body}>
      <Head>
        <title>
          {t?.ehs}
        </title>
      </Head>
      <Header />
      <Slider />
      <SliderBottom />
      <TimeLine />
      <News/>
      <Events />
      <Mentoring/>
      <MentoringComments />
      <Comments />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
