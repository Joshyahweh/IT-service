import React from "react";
import Hero from "./sections/Hero";
import SecureSec from "./sections/SecureSec";
import ServicesSec from "./sections/ServicesSec";
import secure from "../../homeImages/secure.jpg";
import secureTech from "../../homeImages/secureTech.jpg";

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesSec />
      <SecureSec
        smallSubTitle="Secure"
        title="Intelligence Technology"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.s"
        subTitle="Engaging high tech environment"
        imgOne={secure}
        imgTwo={secureTech}
      />
    </div>
  );
};

export default Home;
