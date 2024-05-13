import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const RecommendTable = ({ getData, recom }) => {
  const {
    recommendation_Image,
    recommendation_name,
    recommendation_title,
    _id,
    queryId,
  } = recom;

  const handeDelete = () => {
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
            `${import.meta.env.VITE_API_URL}/recommendations/${_id}`
          );
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const res = await axios.patch(
              `${import.meta.env.VITE_API_URL}/queiresdec/${queryId}`
            );

            getData();
          }
        }
      });
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <tbody>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td className="px-6 py-4 font-medium text-gray-900   dark:text-white">
          <img
            src={recommendation_Image}
            alt=""
            className="size-16 rounded-lg bg-gray-600"
          />
        </td>
        <td className="px-6 py-4 w-1/4">{recommendation_name}</td>
        <td className="px-6 py-4 w-1/4">{recommendation_title}</td>

        <td className="px-6 py-4">
          <button
            className="font-medium 0 hover:underline pl-2"
            onClick={handeDelete}
          >
            <MdDelete size={30} className="text-red-600" />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default RecommendTable;
