import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAuth } from "../../../context/AuthContext";
import {
  getProductDetailsApi,
  UpdateProductApi,
} from "../../services/authService";
import { toast } from "react-toastify";

const EditProduct = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [mainImage, setMainImage] = useState(undefined);
  const [subImages, setSubimages] = useState(undefined);
  const { accessToken } = useAuth();
  const navigate = useNavigate();
  const { productId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();

      formdata.append("name", productName.trim());
      formdata.append("description", description.trim());
      formdata.append("price", price);
      formdata.append("stock", stock);
      formdata.append("category", productCategory.trim());
      if (mainImage) {
        formdata.append("mainImage", mainImage);
      }
      if (subImages) {
        Object.values(subImages).forEach((subImage) => {
          formdata.append("subImages", subImage);
        });
      }

      const data = await UpdateProductApi(accessToken, formdata, productId);
      console.log(data);
      if (data.statusCode == 200) {
        navigate("/products");
        toast.success(data?.message ?? "product update successfully");
      }
    } catch (error) {
      toast.error(error.message ?? "somthing went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    const productDetails = async () => {
      const data = await getProductDetailsApi(accessToken, productId);
      console.log(data);
      setProductName(data.data.name);
      setProductCategory(data.data.category);
      setPrice(data.data.price);
      setStock(data.data.stock);
      setDescription(data.data.description);
    };
    productDetails();
  }, []);

  return (
    <div className="bg-black h-lvh pt-3">
      <div className="border bg-gray-800 lg:w-[600px] m-3 lg:m-auto p-4 rounded-[10px]">
        <h1 className="text-3xl mb-5 capitalize text-white">Add Product</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="grid-cols-1 sm:col-span-1 text-white">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1.5"
              >
                Product Name
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Product Name"
                className="border-1 border-gray-400 mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 py-2.5 px-4 rounded-[5px] w-full"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>

            <div className="grid-cols-1 sm:col-span-1 text-white">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1.5"
              >
                Category
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter category"
                className="border-1 border-gray-400 mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 py-2.5 px-4 rounded-[5px] w-full"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              />
            </div>

            <div className="grid-cols-1 sm:col-span-1 text-white">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1.5"
              >
                Price
                <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter Price"
                className="border-1 border-gray-400 mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 py-2.5 px-4 rounded-[5px] w-full"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="grid-cols-1 sm:col-span-1 text-white">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1.5"
              >
                Stock
                <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter stock"
                className="border-1 border-gray-400 mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 py-2.5 px-4 rounded-[5px] w-full"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <div className="grid-cols-1 sm:col-span-2 text-white">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1.5"
              >
                Description
                <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                placeholder="Enter Description"
                className="border-1 border-gray-400 mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 py-2.5 px-4 rounded-[5px] w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="grid-cols-1 sm:col-span-2 text-white">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1.5"
              >
                Main Image
                <span className="text-red-600">*</span>
              </label>
              <input
                type="file"
                className="border-1 border-gray-400 mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 py-2.5 px-4 rounded-[5px] w-full"
                onChange={(e) => setMainImage(e.target.files[0])}
              />
            </div>

            <div className="grid-cols-1 sm:col-span-2 text-white">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1.5"
              >
                Sub Image
                <span className="text-red-600">*</span>
              </label>
              <input
                type="file"
                className="border-1 border-gray-400 mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 py-2.5 px-4 rounded-[5px] w-full"
                multiple={true}
                onChange={(e) => setSubimages(e.target.files)}
              />
            </div>
          </div>
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

export default EditProduct;
