import React from "react";
import "./Testimonial.css";
import { MdOutlineFormatQuote } from "react-icons/md";

const Names = [
  {
    name: "John Doe",
    job: "BussinessWomen",
    comment:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "Ken Bosh",
    job: "BussinessWomen",
    comment:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "Henry Dee",
    job: "BussinessWomen",
    comment:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
].map((item) => {
  return (
    <div className="col-md-4">
      <div className="Testimonial_card">
        <img
          src="https://preview.colorlib.com/theme/vacationrental/images/person_4.jpg.webp"
          alt=""
          className=" img-fluid testi_image"
        />
        <div className="Testimonial_card_body">
          <p className="Testi_comment">
            {item.comment}
          </p>
          <h5 className="Testi_title">{item.name}</h5>
          <p className="Testi_job">{item.job}</p>
        </div>
        <MdOutlineFormatQuote className="Quotes" />
      </div>
    </div>
  );
});

const Testimonial = () => {
  return (
    <section className="Testimonial_Section container">
      <h1 className=" text-center display-3 my-5 pb-5 Testimonial_title">
        Happy Clients & Feedbacks
      </h1>
      <div className="row">
        {Names}
      </div>
      <div className="row justify-content-center mt-5 ">
        <button className="pink_button w-50">View All Testimonials</button>
      </div>
    </section>
  );
};

export default Testimonial;
