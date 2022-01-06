import {ReactComponent as Logo} from "../images/logo.svg"
import Facebook from "../images/icon-facebook.svg"
import Youtube from "../images/icon-youtube.svg"
import Twitter from "../images/icon-twitter.svg"
import Pinterest from "../images/icon-pinterest.svg"
import Instagram from "../images/icon-instagram.svg"
import "./Footer.css"
const Footer = () => {
    return (
    <div className="footer">
        <div className="footer-col-1">
            <div className="footer-logo">
                <Logo fill="white"/>
            </div>
            <div className="footer-socials">
                <ul className="footer-social-list">
                    <li className="footer-social-link"><img  src={Facebook} alt="socials"/></li>
                    <li className="footer-social-link"><img src={Youtube} alt="socials" /></li>
                    <li className="footer-social-link"><img src={Twitter} alt="socials" /></li>
                    <li className="footer-social-link"><img src={Pinterest} alt="socials" /></li>
                    <li className="footer-social-link"><img src={Instagram} alt="socials" /></li>
                </ul>
            </div>
        </div>
        <div className="footer-col-2">
            <ul className="footer-nav-list">
                <li className="footer-link">Home</li>
                <li className="footer-link">Pricing</li>
                <li className="footer-link">Products</li>
                <li className="footer-link">About Us</li>
            </ul>
        </div>
        <div className="footer-col-2">
            <ul className="footer-nav-list">
                <li className="footer-link">Careers</li>
                <li className="footer-link">Community</li>
                <li className="footer-link">Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-col-4">
            <div className="footer-email-req">
                <input placeholder="Updates in your inbox..."/>
                <button>Go!</button>
            </div>
            <div className="footer-copyright">
                copyright 2020 all rights reservedd
            </div>
        </div>
    </div>
    )
}

export default Footer