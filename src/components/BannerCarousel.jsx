import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button";
import bannerFirst from "../assets/banner/banner-1.jpg";
import bannerSecond from "../assets/banner/banner-2.jpg";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";


const BannerCarousel = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
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
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        <div>
          <img src={bannerFirst} alt="" className="w-full select-none" />
          <div className="banner-text absolute top-0 flex flex-col justify-center h-full max-md:hidden">
            <h1 className="xl:text-8xl font-bold lg:text-6xl md:text-5xl">
              Summer Style <br />
              Sensations.
            </h1>
            <p className="mt-5 font-semibold">
              Having plain clothing makes you look ordinary. We can assist you
              <br />
              in choosing the right dresses with Foesta.
            </p>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                width: "200px",
                border: "1px solid gray",
                color: "black",
                padding: "15px",
                borderRadius: "50px",
                marginTop: "3rem",
              }}
            >
              Shop Now
            </Button>
          </div>
        </div>
        <div className="relative">
          <img src={bannerSecond} alt="" className="w-full select-none" />
          <div className="banner-text absolute top-0 flex flex-col justify-center h-full max-md:hidden">
            <h1 className="xl:text-8xl font-bold lg:text-6xl md:text-5xl">
              Winter Style <br />
              Delights.
            </h1>
            <p className="mt-5 font-semibold">
              Having plain clothing makes you look ordinary. We can assist you
              <br />
              in choosing the right dresses with Foesta.
            </p>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                width: "200px",
                border: "1px solid gray",
                color: "black",
                padding: "15px",
                borderRadius: "50px",
                marginTop: "3rem",
              }}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BannerCarousel;
