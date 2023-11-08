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
export default function Home() {
  return (
    
    <div className={styles.main_body}>
      <Head>
        <title>
          Energy Hack Space
        </title>
      </Head>
      <Header />
      <Slider />
      <SliderBottom />
      <Vision/>
      <Events/>
      <News/>
      <Mentoring/>
      <Team />
      <TimeLine />
      <Contact />
      <Footer />
    </div>
  );
}
