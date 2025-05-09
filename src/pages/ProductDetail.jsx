import React from "react";
import testImage from "../assets/trending-products/product-1.webp";

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
      <div className="grid grid-cols-2">
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
      </div>
    </div>
  );
};

export default ProductDetail;
