import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Slider from "../components/Slider";
import SliderBottom from "../components/SliderBottom";
import Team from "../components/Team";
import TimeLine from "../components/TimeLine";
import NotFoundPage from "./404";
import Vision from "../components/Vision";
import News from "../components/News";
import Mentoring from "../components/Mentoring";
export default function Home() {
  return (
    
    <div>
      <Header />
      <Slider />
      <SliderBottom />
      <Vision/>
      <News/>
      <Mentoring/>
      <Team />
      <TimeLine />
      <Contact />
      <Footer />
    </div>
  );
}
