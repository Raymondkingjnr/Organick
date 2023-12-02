import React from "react";
import {
  About1,
  Eco,
  Extra,
  Gallary,
  Hero,
  HomeNews,
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
      <HomeNews />
    </div>
  );
};

export default Landing;
