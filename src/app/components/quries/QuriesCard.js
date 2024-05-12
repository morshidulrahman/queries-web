import React from "react";
import { Link } from "react-router-dom";

const QuriesCard = ({ quris, reccombtn }) => {
  const {
    brandName,
    productName,
    queryTitle,
    alternationReason,
    productImage,
    userInfo,
    _id,
  } = quris;

  return (
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
            {reccombtn && (
              <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400 block pr-6">
                recommendationCount : {userInfo.recommendationCount}
              </span>
            )}
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
                src={userInfo.thumbnailImage}
                alt={userInfo.name}
              />
              <div className="">
                <a
                  href="#"
                  className=" font-semibold text-gray-700 dark:text-gray-200"
                  tabIndex={0}
                  role="link"
                >
                  {userInfo.name}
                </a>
                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300 block">
                  {userInfo.datePosted}
                </span>
              </div>
            </div>
            <Link to={`/queiresdetails/${_id}`}>
              <button className="bg-[#017b6e] text-white rounded-md px-3 py-2">
                recommend
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuriesCard;
