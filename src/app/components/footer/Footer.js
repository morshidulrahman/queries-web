import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a>
                <img
                  className="w-auto h-7"
                  src="https://i.ibb.co/8gWMykG/rebit.png"
                  alt=""
                />
              </a>
              <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                Join 31,000+ other and never miss out on new products,
                technologies, and more.
              </p>
              <div className="flex mt-6 -mx-2"></div>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  About
                </h3>
                <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Company
                </a>
                <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  community
                </a>
                <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Careers
                </a>
              </div>
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Blog
                </h3>
                <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Tec
                </a>
                <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Products
                </a>
                <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Videos
                </a>
              </div>
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Products
                </h3>
                <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Laptop
                </a>
                <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Bike
                </a>
                <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Mobile
                </a>
              </div>
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Contact
                </h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  +1 526 654 8965
                </span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  rebbit@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
        <div>
          <p className="text-center text-gray-500 dark:text-gray-400">
            © Morshidul 2024 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
