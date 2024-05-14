import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  return (
    <div className="bg-[#017b6e] text-white">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="w-full h-[450px] lg:h-[85vh] container mx-auto px-5 lg:flex gap-5 items-center  bg-[#017b6e]">
            <div className="lg:py-24 md:24  lg:w-[40%] w-[90%]">
              <h2 className="capitalize text-2xl  md:text-5xl font-extrabold lg:leading-[60px] leading-1">
                Explore Diverse Topics
              </h2>
              <p className="w-[90%] py-5 text-gray-200 leading-7">
                Embark on a journey of discovery with our latest posts, offering
                insights, stories, and expertise across a multitude of topics.
                Satiate your curiosity and delve into a world of knowledge.
              </p>

              <Link to="/queries">
                <button className="bg-black text-white px-5 py-3 rounded-lg hover:bg-[#000000dd] hover:text-white duration-300 transition-all border border-black tracking-wider">
                  Queries
                </button>
              </Link>
            </div>
            <div className="lg:flex hidden w-[60%] p-24">
              <img
                src="./b1.png"
                alt="banner"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[450px] lg:h-[85vh] container mx-auto px-5 lg:flex gap-5 items-center  bg-[#017b6e]">
            <div className="lg:py-24 md:24  lg:w-[40%] w-[90%]">
              <h2 className="capitalize text-2xl  md:text-5xl font-extrabold lg:leading-[60px] leading-1">
                Explore Diverse Topics
              </h2>
              <p className="w-[90%] py-5 text-gray-200 leading-7">
                Embark on a journey of discovery with our latest posts, offering
                insights, stories, and expertise across a multitude of topics.
                Satiate your curiosity and delve into a world of knowledge.
              </p>

              <Link to="/queries">
                <button className="bg-black text-white px-5 py-3 rounded-lg hover:bg-[#000000dd] hover:text-white duration-300 transition-all border border-black tracking-wider">
                  Queries
                </button>
              </Link>
            </div>
            <div className="lg:flex hidden w-[60%] p-24">
              <img
                src="./b2.png"
                alt="banner"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[450px] lg:h-[85vh] container mx-auto px-5 lg:flex gap-5 items-center  bg-[#017b6e]">
            <div className="lg:py-24 md:24  lg:w-[40%] w-[90%]">
              <h2 className="capitalize text-2xl  md:text-5xl font-extrabold lg:leading-[60px] leading-1">
                Explore Diverse Topics
              </h2>
              <p className="w-[90%] py-5 text-gray-200 leading-7">
                Embark on a journey of discovery with our latest posts, offering
                insights, stories, and expertise across a multitude of topics.
                Satiate your curiosity and delve into a world of knowledge.
              </p>

              <Link to="/queries">
                <button className="bg-black text-white px-5 py-3 rounded-lg hover:bg-[#000000dd] hover:text-white duration-300 transition-all border border-black tracking-wider">
                  Queries
                </button>
              </Link>
            </div>
            <div className="lg:flex hidden w-[60%] p-24">
              <img
                src="./b3.png"
                alt="banner"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
