import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Recommendation = () => {
  const { user } = useAuth();
  const [recomendation, setrecommendation] = useState([]);
  const [loading, setloading] = useState(false);

  const getData = async () => {
    try {
      setloading(true);
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/recommendationme/${user?.email}`,
        {
          withCredentials: true,
        }
      );
      const filerdata = data.filter((e) => e.recommenderEmail !== user?.email);
      setrecommendation(filerdata);
    } catch (e) {
      toast.error(e.message);
    }
  };

  useEffect(() => {
    getData();
    setloading(false);
  }, [user]);

  if (loading || recomendation.length == 0) return <h1>loading.........</h1>;

  return (
    <div className="container mx-auto px-5">
      <h1 className="text-center py-10 text-2xl font-bold">
        Recommendation For Me
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Recommend Image
              </th>
              <th scope="col" className="px-6 py-3">
                product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Recommendation Title
              </th>

              <th scope="col" className="px-6 py-3">
                Time
              </th>
            </tr>
          </thead>
          {recomendation?.map((recom) => (
            <tbody key={recom._id}>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900   dark:text-white">
                  <img
                    src={recom.recommendation_Image}
                    alt=""
                    className="size-16 rounded-lg bg-gray-600"
                  />
                </td>
                <td className="px-6 py-4 w-1/4">{recom.recommenderEmail}</td>
                <td className="px-6 py-4 w-1/4">
                  {recom.recommendation_title}
                </td>

                <td className="px-6 py-4">{recom.currentDate}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Recommendation;
