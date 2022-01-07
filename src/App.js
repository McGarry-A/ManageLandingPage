import './App.css';
import "./Navbar/Navbar.js"
import Navbar from './Navbar/Navbar.js';
import Hero from "./Hero/Hero.js"
import Features from './Features/Features';
import TestimonialsSection from './TestimonialsSection/TestimonialsSection';
import FooterBanner from './FooterBanner/FooterBanner';
import Footer from './Footer/Footer';
import SwiperComponent from './Swiper/Swiper';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <TestimonialsSection />
      <FooterBanner />
      <Footer />
      <SwiperComponent />
    </div>
  );
}

export default App;
