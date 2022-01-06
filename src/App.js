import './App.css';
import "./Navbar/Navbar.js"
import Navbar from './Navbar/Navbar.js';
import Hero from "./Hero/Hero.js"
import Features from './Features/Features';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
