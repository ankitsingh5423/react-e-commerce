import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getCategoryIdApi, updateCategoryApi } from "../services/authService";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const EditCategory = () => {
  const [category, setCategory] = useState("");
  const { categoryId } = useParams();
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCategoryApi(accessToken, categoryId, {
        name: category,
      });
      toast.success("category update successfully");
      navigate("/categories");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getCategoryName = async () => {
      const data = await getCategoryIdApi(categoryId, accessToken);
      console.log("category...", data);
      const categoryName = data.data.name;

      setCategory(categoryName);
    };
    getCategoryName();
  }, []);

  return (
    <div className="bg-black h-lvh pt-3">
      <div className="border bg-gray-800 w-[400px] m-auto p-4 rounded-[10px]">
        <h1 className="text-3xl mb-5 capitalize text-white">update Category</h1>
        <form action="" onSubmit={handleSubmit}>
          <p className="text-[18px] text-white mb-2 capitalize">category Name</p>
          <input
            type="text"
            className="border-1 border-gray-400 py-1 pl-1 rounded-[5px] w-full text-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <div className="flex justify-center w-full grid-cols-1 sm:col-span-2 bg-blue-600 hover:bg-blue-700 rounded-[8px] mt-4">
            <button
              type="submit"
              className="py-2.5 px-4 text-white font-bold cursor-pointer w-100 capitalize"
            >
              update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
