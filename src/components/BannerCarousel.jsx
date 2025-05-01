import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerFirst from "../assets/banner/banner-1.jpg";
import bannerSecond from "../assets/banner/banner-2.jpg";

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
          <img src={bannerFirst} alt="" className="w-full" />
          <div className="banner-text absolute top-0">
            <h1 className="xl:text-8xl font-bold lg:text-6xl md:text-5xl">
              Summer Style <br />
              Sensations.
            </h1>
            <p className="mt-5 font-semibold">
              Having plain clothing makes you look ordinary. We can assist you
              <br />
              in choosing the right dresses with Foesta.
            </p>
          </div>
        </div>
        <div className="relative">
          <img src={bannerSecond} alt="" className="w-full" />
          <div className="banner-text absolute top-0">
            <h1 className="xl:text-8xl font-bold lg:text-6xl md:text-5xl sm:text-3xl">
              Winter Style <br />
              Delights.
            </h1>
            <p className="mt-5 font-semibold">
              Having plain clothing makes you look ordinary. We can assist you
              <br />
              in choosing the right dresses with Foesta.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BannerCarousel;
