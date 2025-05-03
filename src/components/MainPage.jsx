import React from "react";
import BannerCarousel from "./BannerCarousel";
import Service from "./Service";
import Categories from "./Categories";
import TrendingProducts from "./TrendingProducts";
import OfferMarquee from "./OfferMarquee";
import OfferBoxes from "./OfferBoxes";
import CustomerReviews from "./CustomerReviews";
import FeaturedCollection from "./FeaturedCollection";
import Blogs from "./Blogs";

const MainPage = () => {
  return (
    <div>
      <BannerCarousel />
      <Service />
      <Categories />
      <TrendingProducts />
      <OfferMarquee />
      <OfferBoxes />
      <CustomerReviews />
      <FeaturedCollection />
      <Blogs />
    </div>
  );
};

export default MainPage;
