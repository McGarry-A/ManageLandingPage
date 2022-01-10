import "./TestimonialsSection.css"
import Testimonial from  "../Testimonial/Testimonial"

const TestimonialsSection = () => {
    return (
    <div className="testimonials-section">
        <h1 className="testimonialsSection-title">What they've said</h1>
        <div>
            <Testimonial />
        </div>
        <button>Get Started</button>
    </div>
    )
}

export default TestimonialsSection