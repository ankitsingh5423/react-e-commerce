import React from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const Footer = () => {
  return (
    <div className="px-5 bg-gray-100 pt-20 pb-5">
      <div className="overflow-hidden xl:max-w-[1400px] m-auto grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 ">
        <div>
          <h2 className="text-2xl mb-8 capitalize">contact info</h2>
          <ul className="flex flex-col gap-y-6">
            <li className="text-[18px] text-gray-500">
              Find a location nearest you.
            </li>
            <li>
              <p className="text-[16px] font-semibold pb-1">Hotline:</p>
              <span className="text-[20px] text-gray-500">
                (+00) 123 - 4568
              </span>
            </li>
            <li>
              <p className="text-[16px] font-semibold pb-1">Address:</p>
              <span className="text-[20px] text-gray-500">
                512 Howard Street #19 San Francisco.USA.
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl mb-8 capitalize">Quick Links</h2>
          <ul className="flex flex-col gap-y-4 text-gray-600">
            <li>My Account</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Product Compare</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl mb-8 capitalize">Information</h2>
          <ul className="flex flex-col gap-y-4 text-gray-600">
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Shipping & Return</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl mb-8 capitalize">Let's Get In Touch</h2>
          <p>Subscribe to our newsletter to receive news on update.</p>
          <div className="relative w-max">
            <input
              type="text"
              className="border border-gray-300 focus:shadow-md focus-visible:outline-none bg-white px-2 py-3 pr-10 mt-8 relative rounded-[5px]"
              placeholder="Enter your email"
            />
            <EastOutlinedIcon
              sx={{
                position: "absolute",
                top: "45px",
                right: "10px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 text-center pt-5">
        <div>
          <p>
            Copyright © 2025 All Rights Reserved by <span className="text-red-500 font-serif font-semibold">Ankit Singh</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
