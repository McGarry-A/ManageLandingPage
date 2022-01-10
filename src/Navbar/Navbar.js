import Logo from "../images/logo.svg"
import Hamburger from "../images/icon-hamburger.svg"
import "./Navbar.css"

const Navbar = () => {
    return (
    <header>
        <div className="nav-logo">
            <img src={Logo} alt="logo"/>
        </div>
        <nav>
            <ul className="nav-list">
                <li className="nav-link-item">Pricing</li>
                <li className="nav-link-item">Product</li>
                <li className="nav-link-item">About Us</li>
                <li className="nav-link-item">Careers</li>
                <li className="nav-link-item">Community</li>
                <img src={Hamburger} className="nav-hamburger" alt="hamburger"/>
            </ul>
        </nav>
        <div className="nav-cta-container">
            <button className="nav-cta">Get Started</button>
        </div>
    </header>
    )
}

export default Navbar