import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Slider from "../components/Slider";
import SliderBottom from "../components/SliderBottom";
import Team from "../components/Team";
import TimeLine from "../components/TimeLine";
export default function Home() {
  return (
    
    <div>
      <Header />
      <Slider />
      <SliderBottom />
      <Team />
      <TimeLine />
      <Contact />
      <Footer />

    </div>
  );
}
