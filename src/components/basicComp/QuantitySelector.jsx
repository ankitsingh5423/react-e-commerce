import React, { useState } from "react";

const QuantitySelector = ({ min = 1, max = 99, onChange }) => {
  const [quantity, setQuantity] = useState(min);

  const updateQuantity = (newQty) => {
    if (newQty >= min && newQty <= max) {
      setQuantity(newQty);
      onChange && onChange(newQty);
    }
  };

  return (
    <div className="flex items-center space-x-2 border-2 overflow-hidden w-max rounded-[44px] h-[50px]">
      <button
        onClick={() => updateQuantity(quantity - 1)}
        className="px-3 py-1 text-gray-700 rounded cursor-pointer"
        disabled={quantity === min}
      >
        −
      </button>
      <span className="px-4 py-1 text-lg">{quantity}</span>
      <button
        onClick={() => updateQuantity(quantity + 1)}
        className="px-3 py-1 text-gray-700 rounded cursor-pointer"
        disabled={quantity === max}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
