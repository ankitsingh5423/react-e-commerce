import React from "react";
import testImage from "../assets/trending-products/product-1.webp";
import BreadCrumb from "../components/basicComp/BreadCrumb";
import QuantitySelector from "../components/basicComp/QuantitySelector";
import Button from "@mui/material/Button";

const ProductDetail = () => {
  return (
    <div className="px-4 overflow-hidden xl:max-w-[1400px] m-auto py-5">
      <div className="py-20 text-center">
        <h1 className="text-4xl font-semibold mb-4">Trending product</h1>
        <p>
          Follow the most popular trends and get exclusive items from Foesta
          shop.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
        <div>
          <img src={testImage} alt="" className="w-full" />
          <div className="grid grid-cols-3 gap-5 mt-5">
            <div>
              <img src={testImage} alt="" className="w-full" />
            </div>
            <div>
              <img src={testImage} alt="" className="w-full" />
            </div>
            <div>
              <img src={testImage} alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="px-5">
          <BreadCrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Trending Product", href: "/trending-products" },
            ]}
          />
          <h2 className=" lg:text-4xl sm:text-[20px] md:text-2xl my-5">
            Trendy Denim Jacket with Patches
          </h2>
          <p className="text-[18px]">Tk 70.00 BDT</p>
          <p className="my-4">
            <strong>Seller</strong>: name of seller
          </p>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-5 items-center w-[300px] max-w-full">
            <p className="absolute top-0">Quantity</p>
            <div className="w-max">
              <QuantitySelector min={1} max={10} />
            </div>
            <div className="w-max">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  width: "max-content",
                  border: "1px solid black",
                  height: "50px",
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
          <div className="w-max py-5">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                width: "300px",
                border: "1px solid black",
                height: "50px",
                transition: "0.3s ease",
                color: "white",
                padding: "10px 30px",
                borderRadius: "50px",
                textTransform: "capitalize",
              }}
            >
              + add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
