import React from "react";

const ServiceCard = ({ heading, image, subHeading }) => {
  return (
    <div className="border-r border-gray-400 flex gap-x-5 items-center justify-center py-7 max-lg:last:border-r-0">
      <div className="border-1 border-gray-400 rounded-[50%] p-2.5">
        <img src={image} alt="service-image" className="w-[50px]" />
      </div>
      <div>
        <h2 className="text-[20px] font-semibold">{heading}</h2>
        <p className="text-gray-600">{subHeading}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
