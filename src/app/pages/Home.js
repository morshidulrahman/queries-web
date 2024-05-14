import React from "react";
import Hero from "../components/Hero/Hero";
import Quries from "../components/quries/Quries";
import Team from "../components/Team/Team";
import Blogs from "../components/Blogs/Blogs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Quries />
      <Blogs />
      <Team />
    </div>
  );
};

export default Home;
