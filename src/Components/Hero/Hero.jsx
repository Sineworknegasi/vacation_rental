import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="Hero_section">
     <div className="Over_lay_bg">
     <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className=" Hero_Content px-3 mb-5">
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
          <div className="col-md-4 Hero_book_section">
            <h3>Book Your apartment</h3>
            <form>
              <div className="row ">
                <div className="col-md-12 py-2">
                  <input
                    type="text"
                    name=""
                    id="FullName"
                    placeholder=" Full Name"
                    className="form-control py-3 "
                  />
                </div>
                <div className="col-md-6  py-2">
                  Check-in :{" "}
                  <input
                    type="date"
                    name=""
                    id="Email"
                    placeholder="fsEmail"
                    className="form-control py-3 "
                  />
                </div>
                <div className="col-md-6  py-2">
                  Check-out :{" "}
                  <input
                    type="date"
                    name=""
                    id="Email"
                    className="form-control py-3"
                    placeholder="Check Out"
                  />
                </div>
                <div className="col-md-12  py-2">
                  <div className="row">
                    <div className="col-md-6">
                      <select name="" id="" className="form-control py-3 ">
                        <option value="Adult">Adults</option>
                        <option value="Adult">1</option>
                        <option value="Adult">2</option>
                        <option value="Adult">3</option>
                        <option value="Adult">4</option>
                        <option value="Adult">5</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select name="" id="" className="form-control py-3">
                        <option value="Adult">Children</option>
                        <option value="Adult">1</option>
                        <option value="Adult">2</option>
                        <option value="Adult">3</option>
                        <option value="Adult">4</option>
                        <option value="Adult">5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-12  my-2">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        className="form-control py-3 "
                        type="number"
                        placeholder="Phone number"
                        
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control py-3 appointment_time ui-timepicker-input"
                        type="time"
                        placeholder="Time"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
                <div className=" col-md-12">
                    <button className=" pink_button my-2 py-3 px-5 w-100">Book Appartment now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
};

export default Hero;
