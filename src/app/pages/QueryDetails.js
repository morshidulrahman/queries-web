import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const QueryDetails = () => {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    const getData = async () => {
      try {
        const { data } = await axios(
          `${import.meta.env.VITE_API_URL}/queries/${id}`
        );
        setdata(data);
        setloading(false);
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
    userInfo,
  } = data || {};

  if (loading) {
    return <h1>loading.........</h1>;
  }

  console.log(productName);
  return (
    <div className="container mx-auto px-5 ">
      <h1 className="py-10 font-bold text-center text-2xl">Queries Details</h1>
      <div className="flex gap-5 flex-col lg:flex-row">
        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <img
            className="object-cover w-full h-64"
            src={productImage}
            alt={queryTitle}
          />
          <div className="p-6">
            <div className="">
              <div className="flex justify-between py-1">
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400 block">
                  {brandName}
                </span>

                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400 block pr-6">
                  recommendationCount : {userInfo?.recommendationCount}
                </span>
              </div>
              <a
                href="#"
                className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                tabIndex={0}
                role="link"
              >
                {productName}
              </a>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {queryTitle}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="text-black font-semibold capitalize">
                  reason :{" "}
                </span>{" "}
                {alternationReason}
              </p>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between pr-5">
                <div className="flex items-center gap-2">
                  <img
                    className="object-cover h-10 rounded-full"
                    src={userInfo?.thumbnailImage}
                    alt={userInfo?.name}
                  />
                  <div className="">
                    <a
                      href="#"
                      className=" font-semibold text-gray-700 dark:text-gray-200"
                      tabIndex={0}
                      role="link"
                    >
                      {userInfo?.name}
                    </a>
                    <span className="mx-1 text-xs text-gray-600 dark:text-gray-300 block">
                      {userInfo?.datePosted}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border rounded-lg p-5 ">
          <h2 className="py-3 font-semibold text-center">
            Add a Recommendations
          </h2>
          <form onSubmit={""}>
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
            <div className="flex  mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#017b6e] rounded-md hover:bg-[#017b6fe7] focus:outline-none w-full">
                Recommendation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;
