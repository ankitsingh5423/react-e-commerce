import React from "react";
import blog1 from "../assets/blog/blog-1.webp";
import blog2 from "../assets/blog/blog-2.webp";
import blog3 from "../assets/blog/blog-3.webp";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Button from "@mui/material/Button";

const Blogs = () => {
  return (
    <div className="overflow-hidden xl:max-w-[1400px] m-auto pb-32 px-5">
      <div className="pb-15 text-center">
        <h1 className="text-4xl font-semibold mb-4">Our Latest Blog</h1>
        <p>
          Follow the most popular trends and get exclusive items from Foesta
          shop.
        </p>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8">
        <div className=" flex flex-col bg-gray-100 rounded-[10px] hover:shadow-xl shadow-gray-500/20">
          <div>
            <img
              src={blog1}
              alt="blog-image"
              className="w-full rounded-[10px] cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-y-4 p-10">
            <p className="text-gray-700">
              <span className="pr-3">
                <CalendarMonthOutlinedIcon
                  sx={{
                    color: "gray",
                  }}
                />
              </span>
              Mar 30, 2024
            </p>
            <h2 className="text-2xl font-semibold cursor-pointer">
              A Guide to Cultivating Inner Peace or Inner Harmony.
            </h2>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                width: "max-content",
                border: "1px solid gray",
                color: "black",
                padding: "8px 20px",
                borderRadius: "10px",
                textTransform: "capitalize",
                fontWeight: "500",
              }}
            >
              Read more
            </Button>
          </div>
        </div>

        <div className=" flex flex-col bg-gray-100 rounded-[10px] hover:shadow-xl shadow-gray-500/20">
          <div>
            <img
              src={blog2}
              alt="blog-image"
              className="w-full rounded-[10px] cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-y-4 p-10">
            <p className="text-gray-700">
              <span className="pr-3">
                <CalendarMonthOutlinedIcon
                  sx={{
                    color: "gray",
                  }}
                />
              </span>
              Mar 30, 2024
            </p>
            <h2 className="text-2xl font-semibold cursor-pointer">
              Maximizing Efficiency without Sacrificing Creativity.
            </h2>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                width: "max-content",
                border: "1px solid gray",
                color: "black",
                padding: "8px 20px",
                borderRadius: "10px",
                textTransform: "capitalize",
                fontWeight: "500",
              }}
            >
              Read more
            </Button>
          </div>
        </div>

        <div className=" flex flex-col bg-gray-100 rounded-[10px] hover:shadow-xl shadow-gray-500/20">
          <div>
            <img
              src={blog3}
              alt="blog-image"
              className="w-full rounded-[10px] cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-y-4 p-10">
            <p className="text-gray-700">
              <span className="pr-3">
                <CalendarMonthOutlinedIcon
                  sx={{
                    color: "gray",
                  }}
                />
              </span>
              Mar 30, 2024
            </p>
            <h2 className="text-2xl font-semibold cursor-pointer">
              Thriving in the Age of Freelance Work and Capacity.
            </h2>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                width: "max-content",
                border: "1px solid gray",
                color: "black",
                padding: "8px 20px",
                borderRadius: "10px",
                textTransform: "capitalize",
                fontWeight: "500",
              }}
            >
              Read more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
