import React from "react";
import { BgComponent } from "../components";
import { images } from "../constant";
import Newscard from "../components/Newscard";

const News = () => {
  return (
    <div>
      <BgComponent text="News" background={images.news_bg} />
      <Newscard />
    </div>
  );
};

export default News;
