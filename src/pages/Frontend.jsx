import React, { useEffect, useState } from "react";
import BannerCarousel from "../components/BannerCarousel";
import Service from "../components/Service";
import Categories from "../components/Categories";
import TrendingProducts from "../components/TrendingProducts";
import OfferMarquee from "../components/OfferMarquee";
import OfferBoxes from "../components/OfferBoxes";
import CustomerReviews from "../components/CustomerReviews";
import FeaturedCollection from "../components/FeaturedCollection";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import {
  fetchCategoriesApi,
  fetchProductsApi,
} from "../admin-panel/services/authService";
import { useAuth } from "../context/AuthContext";

const Frontend = () => {
  const { accessToken } = useAuth();
  const [categories, setCategories] = useState([]);
  const [products, setproducts] = useState([]);
  const page = 1;
  const currentPage = 1;

  useEffect((e) => {
    //---- fecthing categories
    const fecthCategories = async () => {
      try {
        const data = await fetchCategoriesApi(accessToken, page);
        setCategories(data.data.categories);
      } catch (error) {
        console.log(error.message);
      }
    };

    //---- fecthing-products
    const fecthProducts = async () => {
      try {
        const data = await fetchProductsApi(accessToken, currentPage);
        console.log(data);
        setproducts(data.data.products);
      } catch (error) {
        console.log(error.message);
      }
    };

    fecthCategories();
    fecthProducts();
  }, []);

  return (
    <div>
      <BannerCarousel />
      <Service />
      <Categories categories={categories} />
      <TrendingProducts products={products} />
      <OfferMarquee />
      <OfferBoxes />
      <CustomerReviews />
      <FeaturedCollection products={products} />
      <Blogs />
    </div>
  );
};

export default Frontend;
