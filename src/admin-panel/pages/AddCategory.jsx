import React, { useState } from "react";
import { toast } from "react-toastify";
import { saveCategoryApi } from "../services/authService";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const AddCategory = () => {
  const { accessToken } = useAuth();

  const [categoryName, setCategoryName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await saveCategoryApi({ name: categoryName }, accessToken);

      navigate("/categories");

      toast.success(data?.message ?? "Category added successfully.");
    } catch (error) {
      toast.error(error?.message ?? "Something went wrong!!");
    }
  };

  return (
    <div className="bg-black h-lvh pt-3">
      <div className="border bg-gray-800 w-[400px] m-auto p-4 rounded-[10px]">
        <h1 className="text-3xl mb-5 capitalize text-white">Add Category</h1>
        <form action="" onSubmit={handleSubmit}>
          <p className="text-[18px] text-white mb-2 capitalize">
            category name
          </p>
          <input
            type="text"
            placeholder="name"
            className="border-1 border-gray-400 py-1 pl-1 rounded-[5px] w-full text-white"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <div className="flex justify-center w-full grid-cols-1 sm:col-span-2 bg-blue-600 hover:bg-blue-700 rounded-[8px] mt-4">
            <button
              type="submit"
              className="py-2.5 px-4 text-white font-bold cursor-pointer w-100 capitalize"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
