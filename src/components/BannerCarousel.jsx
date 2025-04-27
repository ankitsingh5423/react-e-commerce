import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerFirst from "../assets/banner/banner-1.jpg"
import bannerSecond from "../assets/banner/banner-2.jpg"

const BannerCarousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          <img
            src={bannerFirst}
            alt=""
            className="w-full"
          />
        </div>
        <div>
          <img
            src={bannerSecond}
            alt=""
            className="w-full"
          />
        </div>
      </Slider>
    </div>
  );
};

export default BannerCarousel;
