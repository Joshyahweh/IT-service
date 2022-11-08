import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoCloudUpload } from "react-icons/io5";
import { FcPhoneAndroid } from "react-icons/fc";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full mt-5 px-48 py-24 h-full">
      <main className="grid grid-cols-4 gap-8 text-white">
        <div>
          <IoCloudUpload size={35} className='text-[#A4C8C9]' />
          <p className="pt-5">
            IT Service Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dolores, maxime.
          </p>
        </div>
        <div>
          <h4 className="font-bold uppercase text-[#A4C8C9]">Heaquarter</h4>
          <p className="pt-5">
            No. 2, Road 1, Ifeayo Street, Olukunle, Olodo, Ibadan
          </p>
          <div className="flex items-center gap-3 pt-5">
            <FcPhoneAndroid />
            <a href="tel:+2348100899563">+2348100899563</a>
          </div>
          <div className="flex items-center gap-3">
            <HiOutlineMail />
            <a href="mailto:joshdwebguru@gmail.com" className="hover:text-[#A4C8C9]">joshdwebguru@gmails</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold uppercase text-[#A4C8C9]">Pages</h4>
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase text-[#A4C8C9]">Help</h4>
          <p className="pt-5">
            Visit{" "}
            <a href="http" className="hover:text-[#A5C9CA]">
              Help Center
            </a>
          </p>
          <h4 className="pt-9 uppercase font-bold text-[#A4C8C9]">Follow us</h4>
          <div className="flex items-center gap-4 pt-4">
            <BsFacebook />
            <BsTwitter />
            <BsYoutube />
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
