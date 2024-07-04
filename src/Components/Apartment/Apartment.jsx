import React from "react";
import "./Apartment.css";
import { FaStar } from "react-icons/fa";

const apartmentdata = [
  {
    id: 1,
    title: "Suite Room",
    max: "3 persons",
    size: "45 m2",
    view: "sea View",
    Bed: "1",
    img:"https://preview.colorlib.com/theme/vacationrental/images/room-1.jpg.webp"
  },
  {
    id: 2,
    title: "Standard Room",
    max: "3 persons",
    size: "45 m2",
    view: "sea View",
    Bed: "1",
    img:"https://preview.colorlib.com/theme/vacationrental/images/room-2.jpg.webp"
  },
  {
    id: 3,
    title: "Family Room",
    max: "3 persons",
    size: "45 m2",
    view: "sea View",
    Bed: "1",
    img:"https://preview.colorlib.com/theme/vacationrental/images/room-3.jpg.webp"
  },
  {
    id: 4,
    title: "Deluxe Room",
    max: "3 persons",
    size: "45 m2",
    view: "sea View",
    Bed: "1",
    img:"https://preview.colorlib.com/theme/vacationrental/images/room-4.jpg.webp"
  },
].map((item) => {
    return (
        <div className="Apartment_card_container col-sm-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center p-0">
            <a
                href="#"
                className="Apartment_img "
                style={{ backgroundImage: `url(${item.img})` }}
            ></a>
            <div className="apartment_card">
              <div className="star_rate">
                <FaStar color="pink" />
                <FaStar color="pink" />
                <FaStar color="pink" />
                <FaStar color="pink" />
                <FaStar color="pink" />
              </div>
              <h2 className="Apartment_title">{item.title}</h2>
              <p>
                Max: <span>{item.max}</span>
              </p>
              <p>
                Size: <span>{item.size}</span>
              </p>
              <p>
                View: <span>{item.view}</span>
              </p>
              <p>
                Bed: <span>{item.Bed}</span>
              </p>
              <div className="book_button">
                <button className="Apartment_button">View Room Details</button>
              </div>
              <div className="left_array">
                
            </div>
            </div>
            
          </div>
    )
})
const Apartment = () => {
  return (
    <section className="Apartment_section section_Area">
      <div className="Apartment_container">
            <h1 className="text-center display-4  Apartment_room" >Apartment Room</h1>
        <div className="row gap-0 m-0">
            {apartmentdata}
        </div>
      </div>
    </section>
  );
};

export default Apartment;
