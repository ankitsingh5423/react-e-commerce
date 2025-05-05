import React from "react";
import Button from "@mui/material/Button";
import productFirst from "../assets/trending-products/product-1.webp";
import productFirstHover from "../assets/trending-products/product-hover-1.webp";
import productSecond from "../assets/trending-products/product-2.webp";
import productSecondHover from "../assets/trending-products/product-hover-2.webp";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const FeaturedCollection = ({ products }) => {
  return (
    <div className="overflow-hidden xl:max-w-[1400px] m-auto py-32">
      <div className="pb-15 text-center">
        <h1 className="text-4xl font-semibold mb-4">Featured collection</h1>
        <p>
          Follow the most popular trends and get exclusive items from Foesta
          shop.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-y-7">
        {products.map((product) => (
          <div className="px-3 group">
            <div className="relative rounded-[20px] overflow-hidden cursor-pointer">
              <img
                src={productFirst}
                alt="product"
                className="w-full h-full object-cover group-hover:opacity-0 opacity-100 transition-opacity duration-500"
              />
              <img
                src={product.mainImage.url}
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
                    backgroundColor: "black",
                    width: "max-content",
                    ":hover": {
                      backgroundColor: "white",
                      color: "black",
                    },
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
            <div className="pt-3">
              <p className="hover:text-gray-700 cursor-pointer">
                {product.name}
              </p>
              <p>
                <del className="pr-6 text-gray-500">
                  $ {200 + product.price}
                </del>
                $ {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            ":hover": {
              backgroundColor: "black",
              color: "white",
            },
            transition: "0.3s ease",
            width: "max-content",
            color: "black",
            fontSize: "18px",
            padding: "10px 40px",
            borderRadius: "50px",
            textTransform: "capitalize",
          }}
        >
          show all
        </Button>
      </div>
    </div>
  );
};

export default FeaturedCollection;
