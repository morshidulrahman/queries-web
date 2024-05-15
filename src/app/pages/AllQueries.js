import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiSolidGrid } from "react-icons/bi";
import QuriesCard from "../components/quries/QuriesCard";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "../utils/Loader";

const AllQueries = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setloading] = useState(true);
  const [layout, setloayout] = useState("lg:grid-cols-3");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const getData = async () => {
      const res = await axiosSecure.get(`/queries`);

      const sortedData = res.data.sort((a, b) => {
        return parseInt(b._id) - parseInt(a._id);
      });
      setData(sortedData);
    };

    getData();
    setloading(false);
  }, []);

  const handlerSearch = (e) => {
    setSearch(e.target.value);
  };

  const SearchFilter = data.filter((e) =>
    e.productName.toLowerCase().includes(search.toLowerCase())
  );

  if (loading || data.length == 0) return <Loader />;

  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="font-bold text-center py-5 text-4xl dark:text-white">
        All Queries
      </h1>
      <div className="flex gap-5 justify-between items-center py-8">
        <div className="lg:w-[80%] w-full">
          <input
            type="text"
            className="border border-gray-300 rounded px-4 py-2 w-full"
            placeholder="Search by product name..."
            value={search}
            onChange={handlerSearch}
          />
        </div>
        <div className="lg:flex gap-2 pr-2 hidden">
          <button
            onClick={() => setloayout("lg:grid-cols-1")}
            className="bg-[#017b6e] text-white font-bold p-1 rounded hover:bg-[#017b6ff0] duration-300 transition-all
          "
          >
            <CiGrid2H size={30} />
          </button>
          <button
            onClick={() => setloayout("lg:grid-cols-2")}
            className="bg-[#017b6e] text-white font-bold p-1 rounded hover:bg-[#017b6ff0] duration-300 transition-all"
          >
            <CiGrid41 size={30} />
          </button>
          <button
            onClick={() => setloayout("lg:grid-cols-3")}
            className="bg-[#017b6e] text-white font-bold p-1 rounded hover:bg-[#017b6ff0] duration-300 transition-all"
          >
            <BiSolidGrid size={30} />
          </button>
        </div>
      </div>
      <div className={`grid ${layout} grid  md:grid-cols-2 grid-cols-1 gap-6`}>
        {SearchFilter?.map((query) => (
          <QuriesCard quris={query} key={query._id} reccombtn="recom" />
        ))}
      </div>
    </div>
  );
};

export default AllQueries;
