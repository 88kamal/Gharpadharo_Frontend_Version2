import React from "react";
import "../css/Testimonial.css";

const TestimonialCard = ({ name, role, review, image }) => {
  return (
    <div className="testimonial-card">
      <img src={image} alt={`${name}'s avatar`} className="testimonial-image" />
      <h3 className="testimonial-name">{name}</h3>
      <p className="testimonial-role">{role}</p>
      <p className="testimonial-review">{review}</p>
    </div>
  );
};

export default TestimonialCard;
