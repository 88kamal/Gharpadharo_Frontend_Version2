import React from "react";
import "./Features.css";
import Navbars from "../components/navbar/Navbar";

const Features = () => {
  const featuresList = [
    {
      title: "Affordable Pricing",
      description:
        "We offer competitive pricing plans tailored to students, PG owners, and property owners.",
      icon: "💰",
    },
    {
      title: "Easy Property Listings",
      description:
        "List your properties hassle-free and reach potential tenants with ease.",
      icon: "🏠",
    },
    {
      title: "24/7 Support",
      description:
        "Our team is available round-the-clock to assist with any issues or inquiries.",
      icon: "📞",
    },
    {
      title: "Custom Plans",
      description:
        "Choose a plan that suits your needs, whether you're a student or a property owner.",
      icon: "📋",
    },
  ];

  return (
    <>
    <Navbars/>
    <div className="features">
      <h1 className="features-title">Why Choose GharPadharo?</h1>
      <div className="features-container">
        {featuresList.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Features;
