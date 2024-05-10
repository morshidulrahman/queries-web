import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  return (
    <div className="">
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
          <div className="w-full h-[450px] lg:h-[500px] container mx-auto px-5 lg:flex gap-5 items-center  ">
            <div className="lg:py-24 md:24 p-10 lg:w-[50%] w-[90%]">
              <h2 className="capitalize text-2xl  md:text-5xl font-bold lg:leading-[60px] leading-1">
                Explore Diverse Topics
              </h2>
              <p className="w-[90%] py-5">
                Embark on a journey of discovery with our latest posts, offering
                insights, stories, and expertise across a multitude of topics.
                Satiate your curiosity and delve into a world of knowledge.
              </p>
              <button className="bg-[#017b6e] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#017b6e] duration-300 transition-all border border-[#017b6e] tracking-wider">
                Explore
              </button>
            </div>
            <div className="lg:flex hidden w-[50%] p-24">
              <img
                src="./banner1.jpg"
                alt="banner"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[450px] lg:h-[500px] container mx-auto px-5 lg:flex gap-5 items-center  ">
            <div className="lg:py-24 md:24 p-10 lg:w-[50%] w-[90%]">
              <h2 className="capitalize text-2xl  md:text-5xl font-bold lg:leading-[60px] leading-1">
                Explore Diverse Topics
              </h2>
              <p className="w-[90%] py-5">
                Embark on a journey of discovery with our latest posts, offering
                insights, stories, and expertise across a multitude of topics.
                Satiate your curiosity and delve into a world of knowledge.
              </p>
              <button className="bg-[#017b6e] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#017b6e] duration-300 transition-all border border-[#017b6e] tracking-wider">
                Explore
              </button>
            </div>
            <div className="lg:flex hidden w-[50%] p-24">
              <img
                src="./banner2.jpg"
                alt="banner"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[450px] lg:h-[500px] container mx-auto px-5 lg:flex gap-5 items-center  ">
            <div className="lg:py-24 md:24 p-10 lg:w-[50%] w-[90%]">
              <h2 className="capitalize text-2xl  md:text-5xl font-bold lg:leading-[60px] leading-1">
                Explore Diverse Topics
              </h2>
              <p className="w-[90%] py-5">
                Embark on a journey of discovery with our latest posts, offering
                insights, stories, and expertise across a multitude of topics.
                Satiate your curiosity and delve into a world of knowledge.
              </p>
              <button className="bg-[#017b6e] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#017b6e] duration-300 transition-all border border-[#017b6e] tracking-wider">
                Explore
              </button>
            </div>
            <div className="lg:flex hidden w-[50%] p-24">
              <img
                src="./banner3.jpg"
                alt="banner"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
