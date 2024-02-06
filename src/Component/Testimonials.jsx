import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import icons from '../assets/icon/quote-left 1.svg'
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const Testimonials = () => {
  const axiosPublic = useAxiosPublic()

  const {data: review = []} = useQuery({
    queryKey:["review"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    }
  })
  return (
    <div className="my-8">
        <SectionTitle
          subHeading={"What Our Clients Say"}
          heading={"TESTIMONIALS"}
        />
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {review.map(review => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center  my-16 w-1/2 mx-auto">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <img className="" src={icons} alt="" />
                <p className="py-8">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default Testimonials;
