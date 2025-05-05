import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button";
import productFirst from "../assets/trending-products/product-1.webp";
import productFirstHover from "../assets/trending-products/product-hover-1.webp";
import productSecond from "../assets/trending-products/product-2.webp";
import productSecondHover from "../assets/trending-products/product-hover-2.webp";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const TrendingProducts = ({ products }) => {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute right-[20px] top-[50%] transform -translate-y-1/2 z-100 cursor-pointer p-2 bg-white shadow rounded-full"
      >
        <ArrowForwardIos />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute left-[20px] top-[50%] transform -translate-y-1/2 z-100 cursor-pointer p-2 bg-white shadow rounded-full"
      >
        <ArrowBackIos />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden xl:max-w-[1400px] m-auto py-32">
      <div className="pb-15 text-center">
        <h1 className="text-4xl font-semibold mb-4">Trending product</h1>
        <p>
          Follow the most popular trends and get exclusive items from Foesta
          shop.
        </p>
      </div>
      <Slider {...settings}>
        {products.map((product) => (
          <div className="px-3 group">
            <div className="relative rounded-[20px] overflow-hidden cursor-pointer">
              <img
                src={productFirstHover}
                alt="product"
                className="w-full h-full object-cover group-hover:opacity-0 opacity-100 transition-opacity duration-500"
              />
              <img
                src={product.subImages[0].url}
                alt="product"
                className="w-full h-full object-cover absolute top-0 productFristHover opacity-0 group-hover:opacity-100 ransition-opacity duration-500"
              />
              <div className="absolute top-[15px] w-full pl-4 opacity-100 ">
                <p className=" max-w-max px-3 rounded-[10px] bg-red-700 text-white">
                  20% sale
                </p>
              </div>
              <div className="absolute top-[15px] w-full text-end pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex flex-col gap-y-2">
                <div>
                  <VisibilityOutlinedIcon
                    sx={{
                      backgroundColor: "#fff",
                      width: "35px",
                      height: "35px",
                      color: "black",
                      borderRadius: "50px",
                      padding: "5px",
                    }}
                  />
                </div>
                <div>
                  <ChangeCircleOutlinedIcon
                    sx={{
                      backgroundColor: "#fff",
                      width: "35px",
                      height: "35px",
                      color: "black",
                      borderRadius: "50px",
                      padding: "5px",
                    }}
                  />
                </div>
                <div>
                  <FavoriteBorderOutlinedIcon
                    sx={{
                      backgroundColor: "#fff",
                      width: "35px",
                      height: "35px",
                      color: "#000",
                      borderRadius: "50px",
                      padding: "5px",
                    }}
                  />
                </div>
              </div>
              <div className="absolute bottom-[-50px] w-full group-hover:bottom-[20px] transition-all duration-500 ease-in-out text-center">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    width: "max-content",
                    ":hover": {
                      backgroundColor: "black",
                      color: "white",
                    },
                    transition: "0.3s ease",
                    color: "black",
                    padding: "10px 30px",
                    borderRadius: "50px",
                    textTransform: "capitalize",
                  }}
                >
                  + add to cart
                </Button>
              </div>
            </div>
            <div className="pt-3">
              <p className="hover:text-gray-700 cursor-pointer">
                {product.name}
              </p>
              <p>
                <del className="pr-6 text-gray-500">
                  $ {100 + product.price}
                </del>
                $ {product.price}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingProducts;
