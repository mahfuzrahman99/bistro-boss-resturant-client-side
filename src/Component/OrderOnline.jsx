
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";
import SectionTitle from "./SectionTitle";

const OrderOnline = () => {
  return (
    <section className="my-12 font-cinzel font-normal">
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={6}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} className=""  alt="" />
          <h3 className="text-3xl uppercase p-16  text-center -mt-32 text-white">
            <span className="shadow-2xl z-10 font-bold">Salads</span>
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} className="" alt="" />
          <h3 className="text-3xl uppercase p-16  text-center -mt-32 text-white">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} className="" alt="" />
          <h3 className="text-3xl uppercase p-16  text-center -mt-32 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} className="" alt="" />
          <h3 className="text-3xl uppercase p-16  text-center -mt-32 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} className="" alt="" />
          <h3 className="text-3xl uppercase p-16  text-center -mt-32 text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default OrderOnline;
