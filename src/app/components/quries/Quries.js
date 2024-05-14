import React, { useEffect, useState } from "react";
import QuriesCard from "./QuriesCard";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../../utils/Loader";
const Quries = () => {
  const [data, setdata] = useState();
  const axiosSecure = useAxiosSecure();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await axiosSecure.get(`/queries`);
      setdata(res.data);
      setloading(false);
    };
    getData();
  }, []);

  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="font-bold text-center py-5 text-4xl dark:text-white">
        Recent Quries
      </h1>
      {loading && <Loader />}
      <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {data?.slice(0, 6).map((quris, ind) => (
          <QuriesCard quris={quris} key={ind} />
        ))}
      </div>
    </div>
  );
};

export default Quries;
