import React from "react";

const Blogs = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              Blogs
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-14 lg:grid-cols-2">
            <div>
              <img
                className="relative z-10 object-cover w-full rounded-md h-96"
                src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  All the features you want to know
                </a>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  A feature is a unique quality or characteristic that something
                  has. Real-life examples: Elaborately colored tail feathers are
                  peacocks' most well-known feature. Earth has many features,
                  such as a particular atmosphere, abundance of water,
                </p>
                <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
              </div>
            </div>
            <div>
              <img
                className="relative z-10 object-cover w-full rounded-md h-96"
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  How to use sticky note for problem solving
                </a>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Use a sticky note pad as a tiny to-do-list, with one task per
                  note which can be removed as and when it's done. Stick them on
                  your desk to remind you of appointments and help you keep
                  track of the working day.
                </p>
                <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
