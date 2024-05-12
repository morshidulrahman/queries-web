import React from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AddQueries = () => {
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // to change the date format
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    const from = e.target;
    const productName = from.Product_name.value;
    const brandName = from.Product_brand.value;
    const productImage = from.imageUrl.value;
    const queryTitle = from.query_title.value;
    const alternationReason = from.boycoting_reason.value;

    const userInfo = {
      name: user?.displayName,
      email: user?.email,
      thumbnailImage: user?.photoURL,
      datePosted: formattedDate,
      recommendationCount: 0,
    };

    const productInfo = {
      productName,
      brandName,
      productImage,
      queryTitle,
      alternationReason,
      userInfo,
    };

    try {
      const { data } = await axios.post(
        ` ${import.meta.env.VITE_API_URL}/addqueries`,
        productInfo
      );
      if (data.insertedId) {
        toast.success("Querie inserted successfully");
      }
      from.reset();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <div className="container mx-auto px-5">
        <section className="max-w-2xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-10 border">
          <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white text-center">
            Add a queries
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="username"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="Product_name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Product Brand
                </label>
                <input
                  type="text"
                  name="Product_brand"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Image Url
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Query Title
                </label>
                <input
                  type="text"
                  name="query_title"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-gray-700 dark:text-gray-200">
                Boycotting Reasone
              </label>
              <input
                type="text"
                name="boycoting_reason"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#017b6e] rounded-md hover:bg-[#017b6fe7] focus:outline-none ">
                Add Query
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddQueries;
