import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { categories } from "../services/categories";
import Button from "@mui/material/Button";

const Categories = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
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
    <div className="overflow-hidden xl:max-w-[1400px] m-auto pt-32">
      <Slider {...settings}>
        {categories.map((category) => (
          <div className="px-3" key={category.id}>
            <div className=" relative rounded-[20px] overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-[30%] max-md:top-[50%] w-full items-center flex flex-col gap-y-3">
                <h2 className="capitalize text-2xl font-semibold text-white">
                  {category.name}
                </h2>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    width: "120px",
                    border: "1px solid gray",
                    color: "black",
                    padding: "10px",
                    borderRadius: "50px",
                  }}
                >
                  shop now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
