import "./Hero.css";
import BackgroundImage from "../images/bg-tablet-pattern.svg"
import HeroImage from "../images/illustration-intro.svg"
const Hero = () => {
  return (
  <div className="hero">
    <div className="hero-left">
        <h1 className="hero-title">Bring Everyone Together To Build Better Products.</h1>
        <h3 className="hero-subtitle">Manage makes it simple for software teams to plan day to day tasks while keeping the larger team goals in view.</h3>
        <button className="hero-cta">Get Started</button>
    </div>
    <div className="hero-right">
        <div className="background-image-container">
            <img className="background-image" src={BackgroundImage}/>
        </div>
        <div className="background-hero-image">
            <img className="hero-image" src={HeroImage}/>
        </div>
    </div>
  </div>
  )
};

export default Hero;
