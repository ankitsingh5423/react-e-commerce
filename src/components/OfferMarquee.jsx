import React from "react";

const OfferMarquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap offer py-9 bg-gray-200">
      <div className="animate-marquee">
        <div className="flex gap-x-28 justify-center">
          <div>
            <h2 className="text-3xl font-semibold">Spring Collections!</h2>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-red-500">Limited Offer Sales!</h2>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Hot Deal Products!</h2>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-red-500">Best Selling Items!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferMarquee;
