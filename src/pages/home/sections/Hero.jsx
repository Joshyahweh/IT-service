import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight, BsChat } from "react-icons/bs";

const Hero = () => {
  return (
    <div className=" w-full px-48 py-36 h-screen home text-white">
      <div className="grid grid-cols-1">
        <h4 className="text-xl text-[#A5C9CA]">Integrated</h4>
        <h1 className="text-5xl pt-5">
          IT solutions for your <br />
          business.
        </h1>
        <p className="pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Numquam culpa labore laborum velit, repellat facere animi{" "}
          <br />
          eius eveniet vero saepe.
        </p>
      </div>
      <div className="flex items-center gap-5 uppercase pt-10">
        <Link className="flex items-center gap-2 bg-[#395B64] px-8 py-4 hover:text-[#395B64] hover:bg-[#A5C9CA]">
          <p>Our Services</p>
          <BsArrowRight />
        </Link>
        <Link className="flex items-center gap-2 hover:text-[#A5C9CA">
          <BsChat />
          Chat to us
        </Link>
      </div>
    </div>
  );
};

export default Hero;
