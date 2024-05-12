import axios from "axios";
import React, { useEffect, useState } from "react";
import QuriesCard from "../components/quries/QuriesCard";

const AllQueries = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/queries`);
      setdata(res.data);
    };
    getData();
  }, []);
  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="font-bold text-center py-5 text-4xl">All Quries</h1>
      <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {data?.map((quris, ind) => (
          <QuriesCard quris={quris} key={ind} reccombtn="recom" />
        ))}
      </div>
    </div>
  );
};

export default AllQueries;
