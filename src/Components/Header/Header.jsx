import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import './Header.css'

const Header = () => {
    const [Toggle, ShowMenu] = useState(true);

  return (
    <section className='Header_section'>
        <div className="header px-4">
            <div className='Left_section_header'>
                Phone no: <a href="" className='text-white'>+00 1234 568</a> or email us: <a href="" className='text-white'>emailsample@email.com</a>
            </div>
            <div className='Right_section_header'>
                <a href="" className='text-white'><FaFacebookF/></a>
                <a href="" className='text-white'> <FaTwitter/> </a>
                <a href="" className='text-white'> <FaInstagram/> </a>
                <a href="" className='text-white'> <FaTiktok/> </a>
            </div>
        </div>
        <div className='nav_section'>
        <nav className=" px- nav px-4 d-flex justify-content-between px-2">
        <a href="#Home" className="nav__logo text-decoration-none">
            vacation<span className=''>Rental</span>
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list list-unstyled m-0">
            <li className="nav__item ">
              <a
                href="#Home"
                className="nav__link active-link text-decoration-none"
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link text-decoration-none">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link text-decoration-none">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link text-decoration-none">
                Apartment Room
              </a>
            </li>
            <li className="nav__item">
              <a href="#Portfolio" className="nav__link text-decoration-none">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#Contact" className="nav__link text-decoration-none">
                Contact
              </a>
            </li>
          </ul>
          <IoClose
            className="fa-solid fa-xmark nav_close nav__icon"
            onClick={() => ShowMenu(!Toggle)}
          />
        </div>

        <div className="nav__toggle" onClick={() => ShowMenu(!Toggle)}>
          <FaBars className=" fa-solid fa-bars fs-1 text-black" />
        </div>
      </nav>
        </div>
    </section>
  )
}

export default Header
