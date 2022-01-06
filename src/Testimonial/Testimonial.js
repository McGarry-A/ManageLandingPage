import "./Testimonial.css";
import { TestimonialsArr } from "../Data";
import Carousel from "react-multi-carousel";

const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };

  return (
    <div className="slider-container">
      <Carousel
        responsive={responsive}
        centerMode={true}
        itemClass="testimonial-item"
      >
        <div className="testimonials-container">
          {TestimonialsArr.map((el, index) => {
            return (
              <div draggable={false} key={index} className="testimonial">
                <img
                  draggable={false}
                  src={el.image}
                  alt="avatar"
                  className="testimonial-avatar"
                />
                <cite className="testimonial-author">{el.author}</cite>
                <blockquote className="testimonial-quote">
                  "{el.quote}"
                </blockquote>
              </div>
            );
          })}
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonial;
