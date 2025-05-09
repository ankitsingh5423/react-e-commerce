import React from "react";
import { Link } from "react-router-dom"; // optional if using React Router
import { ChevronRight } from "lucide-react"; // or use an SVG directly

const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1 md:space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center text-[18px]">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
              )}
              {isLast ? (
                <span className="font-medium text-gray-800">{item.label}</span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:underline text-blue-600 hover:text-blue-800"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
