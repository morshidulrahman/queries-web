import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

import MyQuariesCard from "../components/myQuries/MyQuariesCard";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "../utils/Loader";
import { useQuery } from "@tanstack/react-query";

const MyQueries = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data, error, isLoading, isError, refetch } = useQuery({
    queryFn: () => getData(),
    queryKey: ["myqueries"],
  });

  const getData = async () => {
    const res = await axiosSecure.get(`/myqueries/${user?.email}`);

    const sortedData = res.data.sort((a, b) => {
      return new Date(b.userInfo.datePosted) - new Date(a.userInfo.datePosted);
    });
    return sortedData;
  };

  if (isError || error) return console.log(isError, error);

  if (isLoading) return <Loader />;

  return (
    <div>
      <div className="bg-[#017b6e] text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-semibold">
            Explore and Manage Your Customer Inquiries
          </h1>
          <Link to="/addqueries">
            <button className="bg-black hover:bg-[#000000f2] text-white font-semibold py-2 px-6 mt-5 rounded ">
              Add Queries
            </button>
          </Link>
        </div>
      </div>
      {data.length == 0 ? (
        <div className="py-20 flex items-center justify-center flex-col gap-5">
          <img
            src="https://i.ibb.co/F7SsVnK/empty-cart.gif"
            alt="emptycart"
            className=""
          />
          <p className="font-bold py-2 text-xl dark:text-white">
            Your Quries is Empty
          </p>
          <Link to="/addqueries">
            <button className="bg-black hover:bg-[#000000f2] text-white font-semibold py-2 px-6 mt-5 rounded ">
              Add Queries
            </button>
          </Link>
        </div>
      ) : (
        <div className="py-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-5 container mx-auto px-5">
          {data?.map((queries) => (
            <MyQuariesCard
              key={queries._id}
              queries={queries}
              refetch={refetch}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyQueries;
