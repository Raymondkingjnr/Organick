import React from "react";
import { About2, BgComponent, ChooseUs, Specials, Teams } from "../components";
import image from "../constant/image";

const About = () => {
  return (
    <div>
      <BgComponent text="About Us" background={image.bg1} />
      <About2 />
      <ChooseUs />
      <Teams />
      <Specials />
    </div>
  );
};

export default About;
