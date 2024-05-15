import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UpdateQueries = () => {
  const { id } = useParams();
  const [data, setdata] = useState();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosSecure.get(`/queries/${id}`);
        setdata(data);
      } catch (e) {
        toast.error(e.message);
      }
    };
    getData();
  }, []);

  const {
    productName,
    brandName,
    productImage,
    queryTitle,
    alternationReason,
  } = data || {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const from = e.target;
    const productName = from.Product_name.value;
    const brandName = from.Product_brand.value;
    const productImage = from.imageUrl.value;
    const queryTitle = from.query_title.value;
    const alternationReason = from.boycoting_reason.value;

    const productInfo = {
      productName,
      brandName,
      productImage,
      queryTitle,
      alternationReason,
    };

    try {
      const { data } = await axiosSecure.put(`/queries/${id}`, productInfo);
      if (data.modifiedCount > 0) {
        toast.success("Queries updated successfully");
        navigate("/myqueries");
      }
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div>
      <div className="container mx-auto px-5 py-10">
        <section className="max-w-2xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800  border">
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
                  defaultValue={productName}
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
                  defaultValue={brandName}
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
                  defaultValue={productImage}
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
                  defaultValue={queryTitle}
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
                defaultValue={alternationReason}
                type="text"
                name="boycoting_reason"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#017b6e] rounded-md hover:bg-[#017b6fe7] focus:outline-none ">
                Update Query
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UpdateQueries;
