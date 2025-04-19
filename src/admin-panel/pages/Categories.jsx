import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { fetchCategoriesApi, deletecategoryApi } from "../services/authService";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Categories = () => {
  const { accessToken } = useAuth();

  const [categories, setCategories] = useState([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handelDelete = async (categoryId) => {
    try {
      await deletecategoryApi(accessToken, categoryId);
      toast.success("category delete successfully");
      const data = await fetchCategoriesApi(accessToken, currentPage);
      setCategories(data.data.categories);
      setPages(data.data.totalPages);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    // Fetch Categories
    const fetchCategories = async () => {
      const data = await fetchCategoriesApi(accessToken, currentPage);

      setCategories(data.data.categories);
      setPages(data.data.totalPages);
    };

    fetchCategories();
  }, [currentPage]);

  const pagesEl = [];
  for (let i = 1; i <= pages; i++) {
    if (i === 3) {
      pagesEl.push(
        <div
          key={i}
          className={`border px-2 cursor-pointer py-1 ${
            i === currentPage ? "bg-amber-400" : ""
          }`}
        >
          ....
        </div>
      );
      continue;
    }

    pagesEl.push(
      <div
        key={i}
        className={`border px-2 cursor-pointer py-1 ${
          i === currentPage ? "bg-amber-400" : ""
        }`}
        onClick={(e) => {
          setCurrentPage(i);
        }}
      >
        {i}
      </div>
    );
  }
  const nextpage = (e) => {
    if (pages !== currentPage) {
      let i = currentPage;
      let test = i + 1;
      setCurrentPage(test);
    }
  };
  const prevPage = (e) => {
    if (currentPage !== 1) {
      let i = currentPage;
      let test = i - 1;
      setCurrentPage(test);
    }
  };
  console.log("current page ....", currentPage);
  console.log(" page ....", pages);

  return (
    <div className="overflow-x-auto bg-gray-900 text-white">
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
          to="/add-category"
          className="bg-green-600 py-1 px-4 rounded-[5px] text-white cursor-pointer"
        >
          Add
        </NavLink>
      </div>
      <table className="table-auto w-full text-center">
        <thead>
          <tr className=" bg-gray-800 text-gray-300 uppercase font-normal">
            <th className="py-2 px-4" scope="col">
              Categories
            </th>
            <th className="py-2 px-4" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr
              className=" border-b-gray-400 border-b-1 bg-gray-700 hover:bg-gray-600 text-gray-300"
              key={category._id}
            >
              <td className="py-3 px-4">{category?.name ?? "--"}</td>
              <td className="py-3 px-4 flex justify-center gap-3">
                <NavLink to={`/editCategory/${category._id}`}>
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
                    className="lucide lucide-pencil-icon lucide-pencil border w-[45px] h-[35px] p-2 border-gray-400 rounded-[8px] cursor-pointer"
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
                  className="lucide lucide-trash-icon lucide-trash border w-[45px] h-[35px] p-2 border-gray-400 rounded-[8px] cursor-pointer"
                  onClick={() => handelDelete(category._id)}
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
        {pagesEl}
        <span
          className="border px-2 cursor-pointer rounded-tr-[5px] rounded-br-[5px] py-1"
          onClick={nextpage}
        >
          Next
        </span>
      </div>
    </div>
  );
};

export default Categories;
