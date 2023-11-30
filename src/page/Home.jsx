import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
