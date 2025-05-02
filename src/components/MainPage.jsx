import React from "react";
import BannerCarousel from "./BannerCarousel";
import Service from "./Service";
import Categories from "./Categories";

const MainPage = () => {
  return (
    <div>
      <BannerCarousel />
      <Service />
      <Categories />
    </div>
  );
};

export default MainPage;
