import React from "react";
import image from "../constant/image";
import { BgComponent, Video } from "../components";
import Grow from "../components/Grow";

const Service = () => {
  return (
    <div>
      <BgComponent text="Service" background={image.bg3} />
      <Grow />
      <Video />
    </div>
  );
};

export default Service;
