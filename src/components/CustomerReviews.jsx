import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from "@mui/icons-material/Star";
import testimonialIcon1 from "../assets/testimonal/testimonial-1.webp";
import testimonialIcon2 from "../assets/testimonal/testimonial-2.webp";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const CustomerReviews = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute right-[45%] bottom-[-100px] max-lg:right-[40%] max-md:right-[40%] max-sm:right-[30%] transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white shadow rounded-full"
      >
        <ArrowForwardIos />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute left-[45%] bottom-[-100px] max-lg:left-[40%] max-md:left-[40%] max-sm:left-[30%] transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white shadow rounded-full"
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
        breakpoint: 1024, // Below 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Below 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Below 480px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="px-2 bg-purple-50 pt-20 pb-30">
      <div className="pb-15 text-center">
        <h1 className="text-4xl font-semibold mb-4 capitalize">
          Customers Review
        </h1>
        <p>Share information about your brand with your customers.</p>
      </div>
      <Slider {...settings}>
        <div className="px-3">
          <div className="p-6 flex flex-col gap-6 bg-white rounded-[10px] cursor-grab">
            <div>
              <h3>Delivery Services!</h3>
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} className="text-yellow-300" />
              ))}
            </div>
            <div className="text-[18px] leading-8">
              "I had a great experience shopping on this website. The interface
              is user- friendly, making it easy to find”
            </div>
            <div className="flex gap-3 items-center">
              <div>
                <img
                  src={testimonialIcon2}
                  alt="testimonial-icon"
                  className="w-[60px]"
                />
              </div>
              <div>
                <h4 className="font-semibold text-[20px]">Jenny</h4>
                <p>customer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3">
          <div className="p-6 flex flex-col gap-6 bg-white rounded-[10px] cursor-grab">
            <div>
              <h3>Delivery Services!</h3>
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} className="text-yellow-300" />
              ))}
            </div>
            <div className="text-[18px] leading-8">
              "I had a great experience shopping on this website. The interface
              is user- friendly, making it easy to find”
            </div>
            <div className="flex gap-3 items-center">
              <div>
                <img
                  src={testimonialIcon1}
                  alt="testimonial-icon"
                  className="w-[60px]"
                />
              </div>
              <div>
                <h4 className="font-semibold text-[20px]">Jenny</h4>
                <p>customer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3">
          <div className="p-6 flex flex-col gap-6 bg-white rounded-[10px] cursor-grab">
            <div>
              <h3>Delivery Services!</h3>
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} className="text-yellow-300" />
              ))}
            </div>
            <div className="text-[18px] leading-8">
              "I had a great experience shopping on this website. The interface
              is user- friendly, making it easy to find”
            </div>
            <div className="flex gap-3 items-center">
              <div>
                <img
                  src={testimonialIcon2}
                  alt="testimonial-icon"
                  className="w-[60px]"
                />
              </div>
              <div>
                <h4 className="font-semibold text-[20px]">Jenny</h4>
                <p>customer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3">
          <div className="p-6 flex flex-col gap-6 bg-white rounded-[10px] cursor-grab">
            <div>
              <h3>Delivery Services!</h3>
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} className="text-yellow-300" />
              ))}
            </div>
            <div className="text-[18px] leading-8">
              "I had a great experience shopping on this website. The interface
              is user- friendly, making it easy to find”
            </div>
            <div className="flex gap-3 items-center">
              <div>
                <img
                  src={testimonialIcon1}
                  alt="testimonial-icon"
                  className="w-[60px]"
                />
              </div>
              <div>
                <h4 className="font-semibold text-[20px]">Jenny</h4>
                <p>customer</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CustomerReviews;
