import "./FooterBanner.css"
import {ReactComponent as BackgroundImage} from "../images/bg-simplify-section-desktop.svg"

const FooterBanner = () => {
    return (
    <div className="footer-banner">
        <div className="footer-banner-left">
            <h2 className="footer-banner-text">Simplify how your team works today.</h2>
        </div>
        <div className="footer-banner-right">
            <button>Get Started</button>
        </div>
        <div>
            <BackgroundImage fill="#f25f3a" className="background-one"/>
        </div>
    </div>
    )
}

export default FooterBanner