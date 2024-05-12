import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyQuariesCard = ({ queries, getData }) => {
  const { _id, productName, queryTitle, datePosted, productImage, userInfo } =
    queries;

  const handleDelete = async () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this query",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axios.delete(
            `${import.meta.env.VITE_API_URL}/queries/${_id}`
          );
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            getData();
          }
        }
      });
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <img
        className="object-cover w-full h-64"
        src={productImage}
        alt={queryTitle}
      />
      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            {userInfo.datePosted}
          </span>
          <p
            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
            tabIndex={0}
            role="link"
          >
            {productName}
          </p>
          <p className="mt-2 text text-gray-600 dark:text-gray-400">
            {queryTitle}
          </p>
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-4">
            <Link to={`/queiresdetails/${_id}`}>
              <button className="bg-green-600 text-white  px-4 py-2 rounded-md hover:bg-green-500 duration-300 transition-all">
                view
              </button>
            </Link>
            <Link to={`/editqueries/${_id}`}>
              <button className="bg-orange-600 text-white hover:bg-orange-500  px-3 py-2 rounded-md duration-300 transition-all">
                Update
              </button>
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white hover:bg-red-500   px-3 py-2 rounded-md duration-300 transition-all"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQuariesCard;
