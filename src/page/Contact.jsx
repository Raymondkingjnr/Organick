import React from "react";
import image from "../constant/image";
import { BgComponent, ContactLayout } from "../components";

const Contact = () => {
  return (
    <div>
      {" "}
      <BgComponent text="Contact Us" background={image.bg5} />
      <ContactLayout />
    </div>
  );
};

export default Contact;
