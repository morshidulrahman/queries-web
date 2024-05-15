import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-10">
      <div className="container px-6 py-8 mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Our Team
        </h2>
        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center grid-cols-1">
          <TeamCard
            name="Ahmed Omer"
            title="CEO"
            image="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
          />

          <TeamCard
            name="Jane Doe"
            title=" Co-founder"
            image="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />

          <TeamCard
            name="Steve Ben"
            title="  UI/UX"
            image="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
          />

          <TeamCard
            name=" Patterson Johnson"
            title=" Software Engineer"
            image="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
