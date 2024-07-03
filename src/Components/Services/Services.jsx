import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="Services_section container-fluid">
      <section className=" d-flex flex-column align-items-end">
        <div className="col-md-4 Hero_book_section ">
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
                <button className=" pink_button my-2 py-3 px-5 w-100">
                  Book Appartment now
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <div className="container">
      <div className="row Services_card_container">
        <div className="col-md-4">
          <div className="services_card">
            <img
              src="https://preview.colorlib.com/theme/vacationrental/images/services-1.jpg.webp"
              alt=""
              className=" img-fluid"
            />
            <h1 className="text-center  Service_title">Map Direction</h1>
            <p className="text-center service_subtitle">
              Even the all-powerful Pointing has no <br /> control about the
              blind texts it is an almost unorthographic.
            </p>
            <button className="pink_button mx-auto">Learn More</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="services_card">
            <img
              src="https://preview.colorlib.com/theme/vacationrental/images/services-2.jpg.webp"
              alt=""
              className=" img-fluid"
            />
            <h1 className="text-center  Service_title">Accomodation Services</h1>
            <p className="text-center service_subtitle">
              Even the all-powerful Pointing has no <br /> control about the
              blind texts it is an almost unorthographic.
            </p>
            <button className="pink_button  mx-auto">Learn More</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="services_card">
            <img
              src="https://preview.colorlib.com/theme/vacationrental/images/services-3.jpg.webp"
              alt=""
              className=" img-fluid"
            />
            <h1 className="text-center Service_title">Great Experience</h1>
            <p className="text-center service_subtitle">
              Even the all-powerful Pointing has no <br /> control about the
              blind texts it is an almost unorthographic.
            </p>
            <button className="pink_button  mx-auto">Learn More</button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
