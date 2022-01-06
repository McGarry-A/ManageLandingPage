import "./TestimonialsSection.css"
import Testimonial from  "../Testimonial/Testimonial"
const TestimonialsSection = () => {
    return (
    <div>
        <h1 className="testimonialsSection-title">What They've Said</h1>
        <div>
            <Testimonial />
        </div>
        <button>Get Started</button>
    </div>
    )
}

export default TestimonialsSection