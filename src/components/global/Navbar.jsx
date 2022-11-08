import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { IoCloudUpload } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="w-full mt-5 px-48">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-8">
          <IoCloudUpload size={40} />
          <NavLink to="/">Home</NavLink>
          <NavLink to="/service">Services</NavLink>
          <NavLink to="/process">Process</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">
            About
            <select name="fff" id=""></select>
          </NavLink>
        </div>
        <div className="flex items-center gap-5">
          <a href="tel:+2348100899563" className="text-[#395B64]">
            <div className="flex items-center gap-3">
              <HiOutlineMail size={20} />
              +2348100899563
            </div>
          </a>
          <a href="mailto:joshdwebguru@gmail.com" className="text-[#395B64]">
            <div className="flex items-center gap-3">
              <FiPhoneCall size={20} />
              Send Message
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
