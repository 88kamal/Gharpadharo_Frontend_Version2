import React from "react";
import "./PricingPage.css";
import Navbars from "../../components/navbar/Navbar";

const PricingPage = () => {
  return (
    <>
    <Navbars/>
    <div className="pricing-page">
      <h1 className="pricing-title">Our Pricing Plans</h1>
      <p className="pricing-subtitle">Choose a plan that fits your needs</p>
      <div className="pricing-container">
        {/* Card for Students */}
        <div className="pricing-card">
          <h2 className="plan-title">Student</h2>
          <p className="plan-price">₹100/room</p>
          <ul className="plan-features">
            <li>Book Rooms Easily</li>
            <li>Email Assistance</li>
            <li>24/7 Support</li>
          </ul>
          <button className="btn-select">Choose Plan</button>
        </div>

        {/* Card for PG Owners */}
        <div className="pricing-card">
          <h2 className="plan-title">PG Owners</h2>
          <p className="plan-price">Free</p>
          <ul className="plan-features">
            <li>List PG Properties</li>
            <li>Email Assistance</li>
            <li>24/7 Support</li>
          </ul>
          <button className="btn-select">Choose Plan</button>
        </div>

        {/* Card for Domestic Home Rent Owners */}
        <div className="pricing-card">
          <h2 className="plan-title">Property Owners</h2>
          <p className="plan-price">Free</p>
          <ul className="plan-features">
            <li>List Domestic Rentals</li>
            <li>Email Assistance</li>
            <li>24/7 Support</li>
          </ul>
          <button className="btn-select">Choose Plan</button>
        </div>

        {/* Existing Basic Plan */}
        {/* <div className="pricing-card">
          <h2 className="plan-title">Basic</h2>
          <p className="plan-price">₹499/month</p>
          <ul className="plan-features">
            <li>1 Property Listing</li>
            <li>Basic Support</li>
            <li>Email Assistance</li>
          </ul>
          <button className="btn-select">Choose Plan</button>
        </div>

        {/* Existing Premium Plan */}
        {/* <div className="pricing-card featured">
          <h2 className="plan-title">Premium</h2>
          <p className="plan-price">₹999/month</p>
          <ul className="plan-features">
            <li>5 Property Listings</li>
            <li>Priority Support</li>
            <li>Email & Phone Assistance</li>
            <li>Featured Listing</li>
          </ul>
          <button className="btn-select">Choose Plan</button>
        </div>

        {/* Existing Enterprise Plan */}
        {/* <div className="pricing-card">
          <h2 className="plan-title">Enterprise</h2>
          <p className="plan-price">₹1999/month</p>
          <ul className="plan-features">
            <li>Unlimited Property Listings</li>
            <li>Dedicated Account Manager</li>
            <li>Priority Support</li>
            <li>Custom Branding</li>
          </ul>
          <button className="btn-select">Choose Plan</button>
        </div> */}  
      </div>
    </div>
    </>
  );
};

export default PricingPage;

