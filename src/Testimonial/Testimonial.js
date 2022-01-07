import "./Testimonial.css";
import { TestimonialsArr } from "../Data";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonial = () => {
  return (
    <div className="testimonials-container">
      <Swiper spaceBetween={50} slidesPerView={3} style={{overflow: "visible"}}>
        {TestimonialsArr.map((el, index) => {
          return (
            <SwiperSlide key={index} >
              <div draggable={false} className="testimonial">
                <img
                  draggable={false}
                  src={el.image}
                  alt="avatar"
                  className="testimonial-avatar"
                />
                <cite className="testimonial-author">{el.author}</cite>
                <blockquote className="testimonial-quote">"{el.quote}"</blockquote>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
