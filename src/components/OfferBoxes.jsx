import React from "react";
import offerFirst from "../assets/offer-boxes/offer-1.webp";
import offerSecond from "../assets/offer-boxes/offer-2.webp";
import Button from "@mui/material/Button";

const OfferBoxes = () => {
  return (
    <div className="px-2 pb-30">
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 xl:max-w-[1400px] m-auto mt-34">
        <div className="relative rounded-[20px] overflow-hidden">
          <img src={offerFirst} alt="offer-image" className="w-full" />
          <div className="absolute top-[30%] flex flex-col w-full text-center text-white capitalize">
            <p className="text-[20px] pb-5 max-sm:pb-1 max-sm:text-[16px]">
              Free Shipping Over Order $150
            </p>
            <h2 className="text-5xl font-semibold max-sm:text-3xl">
              Spring Collection
            </h2>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                width: "auto",
                border: "1px solid gray",
                color: "black",
                padding: "10px 30px",
                borderRadius: "50px",
                margin: "30px auto",
              }}
            >
              Explore now
            </Button>
          </div>
        </div>

        <div className="relative rounded-[20px] overflow-hidden">
          <img src={offerSecond} alt="offer-image" className="w-full" />
          <div className="absolute top-[30%] flex flex-col w-full text-center text-white capitalize">
            <p className="text-[20px] pb-5 max-sm:pb-1 max-sm:text-[16px]">
              new weekend sales offer
            </p>
            <h2 className="text-5xl font-semibold max-sm:text-3xl">
              -25% off items
            </h2>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                width: "auto",
                border: "1px solid gray",
                color: "black",
                padding: "10px 30px",
                borderRadius: "50px",
                margin: "30px auto",
              }}
            >
              Explore now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBoxes;
