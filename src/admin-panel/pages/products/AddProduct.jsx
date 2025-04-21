import React, { useState } from "react";
import { addProductApi } from "../../services/authService";
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await addProductApi(accessToken, { name: productName });
      console.log(data);
      if (data.data.statusCode == 200) {
        navigate("/products");
        toast.success("product add successfully");
      }
    } catch (error) {
      toast.error(error.message ?? "somthing went wrong");
      console.log(error);
    }
  };
  return (
    <div className="bg-black h-lvh pt-3">
      <div className="border bg-gray-800 lg:w-[400px] m-3 lg:m-auto p-4 rounded-[10px]">
        <h1 className="text-3xl mb-5 capitalize text-white">Add Product</h1>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="" className=" text-white mb-2 capitalize">
            Name <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            placeholder="name"
            className="border-1 border-gray-400 py-1 pl-1 rounded-[5px] w-full text-white"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
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

export default AddProduct;
