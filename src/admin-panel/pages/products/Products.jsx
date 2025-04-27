import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { useAuth } from "../../../context/AuthContext";
import { fetchProductsApi, deleteProductApi } from "../../services/authService";
import { OrbitProgress } from "react-loading-indicators";
import { toast } from "react-toastify";

const Products = () => {
  const { accessToken } = useAuth();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [loading, setLoading] = useState(false);

  const handleDelete = async (productId) => {
    try {
      const data = await deleteProductApi(accessToken, productId);
      console.log(data);

      if (data.success === true) {
        toast.success("product delete sucessful");
        const data = await fetchProductsApi(accessToken, currentPage);
        console.log(data);
        setProducts(data.data.products);
        setTotalPages(data.data.totalPages);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProductsApi(accessToken, currentPage);
        setProducts(data.data.products);
        setTotalPages(data.data.totalPages);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [currentPage]);

  const pageEl = [];

  for (let i = 1; i <= totalPages; i++) {
    pageEl.push(
      <div
        className={`border px-2 cursor-pointer py-1 ${
          i === currentPage ? "bg-amber-400" : ""
        }`}
        key={i}
        onClick={(e) => {
          setCurrentPage(i);
        }}
      >
        {i}
      </div>
    );
  }

  const nextPage = async () => {
    if (totalPages !== currentPage) {
      setCurrentPage(currentPage + 1);
    }
    await fetchProductsApi(accessToken, currentPage);
  };

  const prevPage = async () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
    await fetchProductsApi(accessToken, currentPage);
  };

  return (
    <div className="overflow-x-auto bg-gray-900 text-white">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="text-white text-lg font-bold">
            <OrbitProgress
              variant="spokes"
              color="#fff"
              size="medium"
              text=""
              textColor="#fff"
            />
          </div>
        </div>
      )}
      <div className="flex justify-between flex-wrap px-5 py-4">
        <div>
          <span>show</span>
          <select
            name=""
            id=""
            className="border-gray-400 border-1 py-1 px-3 rounded-[8px] mx-3"
          >
            <option value="" className="text-black">
              10
            </option>
            <option value="" className="text-black">
              8
            </option>
            <option value="" className="text-black">
              5
            </option>
          </select>
          <span>entries</span>
        </div>
        <div className="relative max-[1000px]:ml-9  max-[500px]:hidden">
          <input
            type="text"
            placeholder="search"
            className="border-1 border-gray-400 py-2 pl-12 rounded-[5px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search-icon lucide-search absolute top-[10px] left-[10px]"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>
      <div className="flex justify-end py-3 px-4">
        <NavLink
          to="/add-product"
          className="bg-green-600 py-1 px-4 rounded-[5px] text-white cursor-pointer"
        >
          Add
        </NavLink>
      </div>
      <table className="table-auto w-full text-center">
        <thead>
          <tr className=" bg-gray-800 text-gray-300 capitalize font-normal">
            <th className="py-2 px-4" scope="col">
              Products
            </th>
            <th className="py-2 px-4" scope="col">
              Price
            </th>
            <th className="py-2 px-4" scope="col">
              Stock
            </th>
            <th className="py-2 px-4" scope="col">
              created On
            </th>
            <th className="py-2 px-4" scope="col">
              updated At
            </th>
            <th className="py-2 px-4" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              className=" border-b-gray-400 border-b-1 bg-gray-700 hover:bg-gray-600 text-gray-300"
              key={product._id}
            >
              <td className="py-3 px-4 flex items-center gap-5">
                <span>
                  <img
                    src={product.mainImage.url}
                    alt="product-image"
                    className="w-[50px] object-cover"
                  />
                </span>
                <span>{product.name}</span>
              </td>
              <td className="py-3 px-4">${product.price}</td>
              <td className="py-3 px-4">{product.stock}</td>
              <td className="py-3 px-4">{product.createdAt}</td>
              <td className="py-3 px-4">{product.updatedAt}</td>
              <td className="py-3 px-4 flex justify-center gap-3">
                <NavLink to={`/edit-product/${product._id}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-pencil-icon lucide-pencil border w-[45px] h-[35px] p-2 border-gray-400 rounded-[8px] cursor-pointer text-green-600 bg-gray-700"
                  >
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                    <path d="m15 5 4 4" />
                  </svg>
                </NavLink>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trash-icon lucide-trash border w-[45px] h-[35px] p-2 border-gray-400 rounded-[8px] cursor-pointer text-orange-500 bg-gray-700"
                  onClick={() => handleDelete(product._id)}
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end bg-gray-800 pr-5 gap-x-0 py-3">
        <span
          className="border px-2 cursor-pointer rounded-tl-[5px] rounded-bl-[5px] py-1"
          onClick={prevPage}
        >
          previous
        </span>

        {pageEl}

        <span
          className="border px-2 cursor-pointer rounded-tr-[5px] rounded-br-[5px] py-1"
          onClick={nextPage}
        >
          Next
        </span>
      </div>
    </div>
  );
};

export default Products;
