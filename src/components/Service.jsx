import React from "react";
import { services } from "../services/serviceCard";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="px-2">
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-1 gap-x-3 border-b border-b-gray-400">
        {services.map((services) => (
          <ServiceCard
            key={services.id}
            heading={services.heading}
            image={services.image}
            subHeading={services.subHeading}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
