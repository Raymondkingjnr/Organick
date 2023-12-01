import React from "react";
import {
  About1,
  Eco,
  Extra,
  Gallary,
  Hero,
  Offers,
  Testimonials,
} from "../components";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Extra />
      <About1 />
      <Testimonials />
      <Offers />
      <Eco />
      <Gallary />
      <Landing />
    </div>
  );
};

export default Landing;
