import React, { useEffect, useState } from "react";
import testImage from "../assets/trending-products/product-1.webp";
import BreadCrumb from "../components/basicComp/BreadCrumb";
import QuantitySelector from "../components/basicComp/QuantitySelector";
import Button from "@mui/material/Button";
import TrendingProducts from "../components/TrendingProducts";
import { fetchProductsApi } from "../admin-panel/services/authService";
import { useAuth } from "../context/AuthContext";

const ProductDetail = () => {
  const { accessToken } = useAuth();
  const [products, setproducts] = useState([]);
  const page = 1;
  const currentPage = 1;

  useEffect((e) => {
    //---- fecthing-products
    const fecthProducts = async () => {
      try {
        const data = await fetchProductsApi(accessToken, currentPage);
        console.log(data);
        setproducts(data.data.products);
      } catch (error) {
        console.log(error.message);
      }
    };

    fecthProducts();
  }, []);
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
        {/* product-image  */}
        <div>
          <img
            src={testImage}
            alt=""
            className="w-full h-[600px] object-cover object-top rounded-[10px]"
          />
          {/* sub-product-images */}
          <div className="grid grid-cols-3 gap-5 mt-5">
            <div>
              <img src={testImage} alt="" className="w-full rounded-[10px]" />
            </div>
            <div>
              <img src={testImage} alt="" className="w-full rounded-[10px]" />
            </div>
            <div>
              <img src={testImage} alt="" className="w-full rounded-[10px]" />
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

          {/* options-btn */}
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

          {/* accordion-btn */}
          <div>
            <div className="collapse collapse-arrow bg-white border-b border-b-black rounded-none">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title font-bold capitalize text-[18px]">
                Description
              </div>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white border-b border-b-black rounded-none">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-bold capitalize text-[18px]">
                I forgot my password. What should I do?
              </div>
              <div className="collapse-content text-sm">
                Click on "Forgot Password" on the login page and follow the
                instructions sent to your email.
              </div>
            </div>
          </div>

          {/* social-btn */}
          <div className="grid grid-cols-3 py-5 w-max gap-x-3">
            <div>
              <button className="btn bg-black text-white border-black">
                <svg
                  aria-label="Facebook logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="white"
                    d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
                  ></path>
                </svg>
                Facebook
              </button>
            </div>
            <div>
              <button className="btn bg-black text-white border-black">
                <svg
                  aria-label="X logo"
                  width="16"
                  height="12"
                  viewBox="0 0 300 271"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
                  />
                </svg>
                Twitter
              </button>
            </div>
            <div>
              <button className="btn bg-black text-white border-black">
                <svg
                  aria-label="Amazon logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <g fill="white">
                    <path d="M14.463 13.831c-1.753 1.294-4.291 1.981-6.478 1.981-3.066 0-5.825-1.131-7.912-3.019-.163-.147-.019-.35.178-.234 2.253 1.313 5.041 2.1 7.919 2.1 1.941 0 4.075-.403 6.041-1.238.294-.125.544.197.253.409z"></path>
                    <path d="M15.191 13c-.225-.287-1.481-.137-2.047-.069-.172.019-.197-.128-.044-.238 1.003-.703 2.647-.5 2.838-.266.194.238-.05 1.884-.991 2.672-.144.122-.281.056-.219-.103.216-.528.688-1.709.463-1.997zM11.053 11.838l.003.003c.387-.341 1.084-.95 1.478-1.278.156-.125.128-.334.006-.509-.353-.488-.728-.884-.728-1.784v-3c0-1.272.088-2.438-.847-3.313-.738-.706-1.963-.956-2.9-.956-1.831 0-3.875.684-4.303 2.947-.047.241.131.369.287.403l1.866.203c.175-.009.3-.181.334-.356.159-.778.813-1.156 1.547-1.156.397 0 .847.144 1.081.5.269.397.234.938.234 1.397v.25c-1.116.125-2.575.206-3.619.666-1.206.522-2.053 1.584-2.053 3.147 0 2 1.259 3 2.881 3 1.369 0 2.116-.322 3.172-1.403.35.506.463.753 1.103 1.284a.395.395 0 0 0 .456-.044zm-1.94-4.694c0 .75.019 1.375-.359 2.041-.306.544-.791.875-1.331.875-.737 0-1.169-.563-1.169-1.394 0-1.641 1.472-1.938 2.863-1.938v.416z"></path>
                  </g>
                </svg>
                Amazon
              </button>
            </div>
          </div>
        </div>
      </div>
      <TrendingProducts products={products} />
    </div>
  );
};

export default ProductDetail;
