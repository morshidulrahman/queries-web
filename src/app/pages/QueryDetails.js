import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const QueryDetails = () => {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const [recommend, setrecommend] = useState([]);
  const [loading, setloading] = useState(false);
  const { user } = useAuth();

  const getComment = async () => {
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/recommendations/${id}`
      );
      setrecommend(data);
      console.log("recomenddata", data);
    } catch (e) {
      toast.error(e.message);
    }
  };

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

  useEffect(() => {
    setloading(true);

    getData();
    getComment();
  }, []);

  const {
    productName,
    _id,
    brandName,
    productImage,
    queryTitle,
    alternationReason,
    userInfo,
  } = data || {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    const from = e.target;
    const recommendation_name = from.Product_name.value;
    const recommendation_title = from.Product_title.value;
    const recommendation_reasone = from.recommend_reason.value;
    const recommendation_Image = from.imageUrl.value;

    const recommend_info = {
      recommendation_name,
      recommendation_title,
      recommendation_reasone,
      recommendation_Image,
      queryId: _id,
      recommenderEmail: user?.email,
      recommenderName: user?.displayName,
      currentDate: formattedDate,
      UserName: userInfo?.name,
      UserEmail: userInfo?.email,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/recommendations`,
        recommend_info
      );
      toast.success("comment successfully");
      getComment();
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/myrecqueries/${_id}`
      );
      getData();

      from.reset();
    } catch (e) {
      toast.error(e.message);
    }
  };

  if (loading) {
    return <h1>loading.........</h1>;
  }

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
                <span className="text font-medium text-blue-600 uppercase dark:text-blue-400 block">
                  {brandName}
                </span>

                <span className="text font-medium text-blue-600 uppercase dark:text-blue-400 block pr-6">
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
            <div className="mt-12">
              <h2 className="font-semibold pb-4 text-lg">
                All Recommendations
              </h2>
              <div className=" flex flex-col gap-4">
                {recommend?.map((a, i) => (
                  <div
                    key={i}
                    className="flex gap-5 bg-gray-100 px-4 py-3 rounded-lg items-center border border-gray-300"
                  >
                    <div
                      alt="laptop"
                      className={`w-64 md:w-32 h-24 rounded-md bg-cover`}
                      style={{
                        backgroundImage: `url(${a.recommendation_Image})`,
                      }}
                    />
                    <div>
                      <h1 className="font-semibold">
                        {a.recommendation_title}
                      </h1>
                      <p className="py-1">
                        Looking for a budget-friendly phone with excellent
                        camera performance
                      </p>
                      <p className="text-sm text-gray-600">2024-05-05</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border rounded-lg p-5 lg:w-1/2 max-w-2xl">
          <h2 className="py-3 font-semibold text-center">
            Add a Recommendations
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-6">
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
                  Product Title
                </label>
                <input
                  type="text"
                  name="Product_title"
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
                  Recommendation Reason
                </label>
                <input
                  type="text"
                  name="recommend_reason"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex  mt-8">
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
