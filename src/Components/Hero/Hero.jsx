import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
    <section className="Hero_section d-flex flex-column">
     <div className="Over_lay_bg">
     <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className=" Hero_Content px-3 mb-5 text-white">
              <p>WelCome to Vacation Rental</p>
              <h1 className="display-1 fw-bolder text-white ">
                Rent an  appartment for your vacation
              </h1>
            </div>
            <div className="Hero_Button px-3">
              <button className="pink_button">Learn More</button>
              <button className="white_button">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
     </div>
    </section>
   
    </>
  );
};

export default Hero;
