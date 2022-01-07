import "./Features.css"
import { FeaturesArr } from "../Data"
import Feature from "../Feature/Feature"
import {ReactComponent as BackgroundImage} from "../images/bg-tablet-pattern.svg"
const Features = () => {
    return (
        <div className="features">
            <div className="features-left">
                <h2 className="features-title">What's different about Manage?</h2>
                <p className="features-subtitle">Manage provides all the functionality that your team needs, without the complexity. Our software is tailor made for modern digital product teams.</p>
                <BackgroundImage fill="#FFF0EC" className="features-background-image"/>
            </div>
            <div className="features-right">
                {FeaturesArr.map((el, index) => {
                    return <Feature number={el.number} title={el.title} description={el.description} key={index} />
                })}
            </div>
        </div>
    )
}

export default Features