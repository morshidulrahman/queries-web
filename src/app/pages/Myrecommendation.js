import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

import RecommendTable from "../components/Recommen/RecommendTable";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "../utils/Loader";

const Myrecommendation = () => {
  const { user } = useAuth();
  const [recomendation, setrecommendation] = useState();
  const [loading, setloading] = useState(true);
  const axiosSecure = useAxiosSecure();

  const getData = async () => {
    const res = await axiosSecure.get(`/myrecommendations/${user?.email}`);
    setrecommendation(res.data);
    setloading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="container mx-auto px-5 py-10">
      <h1
        className="text-center font-bold text-2xl capitalize dark:text-white
      "
      >
        My recomendation
      </h1>
      <div className="py-10">
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
                  Action
                </th>
              </tr>
            </thead>
            {recomendation?.map((recom) => (
              <RecommendTable recom={recom} key={recom._id} getData={getData} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Myrecommendation;
