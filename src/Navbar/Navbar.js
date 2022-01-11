import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";
import Exit from "../images/icon-close.svg";
import "./Navbar.css";

const Navbar = () => {
  const toggleMenu = () => {
    document.querySelector(".nav-exit").classList.toggle("hidden");
    document.querySelector(".nav-hamburger").classList.toggle("hidden");

    const navlist = document.querySelector(".nav-list");
    navlist.style.display === "flex"
      ? (navlist.style.display = "none")
      : (navlist.style.display = "flex");
  };
  return (
    <header>
      <div className="nav-logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        <ul className="nav-list mobile-nav-list">
          <li className="nav-link-item mobile-nav-item">Pricing</li>
          <li className="nav-link-item mobile-nav-item">Product</li>
          <li className="nav-link-item mobile-nav-item">About Us</li>
          <li className="nav-link-item mobile-nav-item">Careers</li>
          <li className="nav-link-item mobile-nav-item">Community</li>
        </ul>
        <div className="mobile-nav">
          <img
            src={Hamburger}
            onClick={toggleMenu}
            className="nav-hamburger"
            alt="hamburger"
          />
          <img
            src={Exit}
            onClick={toggleMenu}
            className="nav-exit hidden"
            alt="exit"
          />
        </div>
      </nav>
      <div className="nav-cta-container">
        <button className="nav-cta">Get Started</button>
      </div>
    </header>
  );
};

export default Navbar;
