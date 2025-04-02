import React from "react";

const Categories = () => {
  return (
    <div className="overflow-x-auto bg-gray-900 text-white">
      <div className="flex justify-between flex-wrap mx-5 py-4">
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
        <div className="relative max-[1000px]:ml-9 ">
          <input
            type="text"
            placeholder="search"
            className="border-1 border-gray-400 py-2 pl-12 rounded-[5px] w-[400px]"
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
      <table class="table-auto w-full text-center">
        <thead>
          <tr className=" bg-gray-900 text-gray-300 uppercase font-normal">
            <th className="py-2 px-4" scope="col">
              User
            </th>
            <th className="py-2 px-4" scope="col">
              Name
            </th>
            <th className="py-2 px-4" scope="col">
              Role
            </th>
            <th className="py-2 px-4" scope="col">
              Email
            </th>
            <th className="py-2 px-4" scope="col">
              Password
            </th>
            <th className="py-2 px-4" scope="col">
              Edit
            </th>
            <th className="py-2 px-4" scope="col">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className=" border-b-gray-400 border-b-1 bg-gray-700 hover:bg-gray-600 text-gray-300">
            <td className="py-3 px-4">1</td>
            <td className="py-3 px-4">Ankit</td>
            <td className="py-3 px-4">Admin</td>
            <td className="py-3 px-4">ankit723@gmail.com</td>
            <td className="py-3 px-4">ankit8368</td>
            <td className="py-3 px-4">
              <button className=" bg-green-400 py-1 px-4 rounded-[5px] text-white">
                Edit
              </button>
            </td>
            <td className="py-3 px-4">
              <button className="bg-red-600 py-1 px-4 rounded-[5px] text-white">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
