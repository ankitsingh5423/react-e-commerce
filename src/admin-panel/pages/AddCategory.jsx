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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddCategory;
