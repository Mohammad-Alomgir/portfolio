import { useState } from "react";
import { useEffect } from "react";
import Testimonial from "../components/Testimonial";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      })
      .catch((err) => console.log(err.message, "there is an error"));
  });
  return (
    <div className="testimonials">
      <div className="container">
        <div className="section-heading">
          <h1 className="element">Testimonials</h1>
        </div>
        <div className="testimonial-box">
          {testimonials.map((testimonial, index) => {
            return (
              <Testimonial
                key={index}
                name={testimonial.name}
                avatar={testimonial.avatar}
                testimonial={testimonial.testimonial}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
