import React, { useEffect, useState } from "react";
import QuriesCard from "./QuriesCard";

const Quries = () => {
  const [data, setdata] = useState();

  useEffect(() => {
    fetch("./app.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdata(data.recentPosts);
      });
  }, []);

  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="font-bold text-center py-5 text-4xl">Recent Quries</h1>
      <div className="mt-6 grid grid-cols-3 gap-6">
        {data?.map((quris, ind) => (
          <QuriesCard quris={quris} key={ind} />
        ))}
      </div>
    </div>
  );
};

export default Quries;
