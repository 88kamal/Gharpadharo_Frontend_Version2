import React from "react";
import TestimonialCard from "./TestimonialCard";
import "../css/Testimonial.css";
import logo from "..//assets/student.jpg";
import logo2 from "..//assets/adtiya.jpg";
import logo3 from "..//assets/nitin_agarwal.jpg";
import logo4 from "..//assets/Sarayu_raj_Kolli.jpg";

// Sample data for testimonials
const testimonials = [
  {
    name: "Adtiya ",
    role: "Student",
    review: "Finding a PG was so easy with GharPadhro. The reviews and detailed listings helped me make an informed decision.",
    image: logo2 // Replace with real image
  },
  {
    name: "Nitin Agarwal",
    role: "PG Owner ",
    review: "Thanks to GharPadhro, I quickly found tenants for my PG. The platform is seamless and effective.",
    image: logo3 // Replace with real image
  },
  {
    name: "Sarayu raj kolli",
    role: "Student",
    review: "The user interface is very intuitive. Booking a PG and contacting owners was a hassle-free experience.",
    image: logo4 // Replace with real image
  },
  {
    name: "Sunita Singh",
    role: "PG Owner",
    review: "I love the fact that I can showcase my PG features and get genuine reviews from tenants.",
    image: logo // Replace with real image
  },
];

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <h1 className="testimonial-heading">Why People Love GharPadharo!</h1>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            review={testimonial.review}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
