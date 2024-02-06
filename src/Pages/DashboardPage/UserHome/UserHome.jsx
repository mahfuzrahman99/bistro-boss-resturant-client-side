import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import StatDiv from "../AdminHome/StatDiv";
import { IoWalletSharp } from "react-icons/io5";
import { BsShopWindow } from "react-icons/bs";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import axios from "axios";
import { FaCalendarAlt, FaRegStar } from "react-icons/fa";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orderMenus");
      return res.data;
    },
  });
  const { data: review = [] } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });
  const { data: payment = [] } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const res = await axios.get(
        "https://bistro-boss-resturant-server-side-wcku.vercel.app/payments"
      );
      return res.data;
    },
  });
  console.log(payment);

  return (
    <div className="max-w-3xl mx-auto font-cinzel">
      <h1 className="text-3xl font-bold my-12 bg-clip-text text-transparent bg-gradient-to-r  from-[#FE4880] via-[#BB34F5] to-[#D3A256]">
        Hi, {user.displayName} Welcome Back!
      </h1>
      <div className="flex justify-center items-center gap-5">
        <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] px-16 py-5 rounded-xl">
          <Link to={`/ourMenu`}>
            <StatDiv
              icon={<IoWalletSharp />}
              value={`${payment?.length}`}
              name={"Total"}
            />
          </Link>
        </div>
        <div className="bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] px-16 py-5 rounded-xl">
          <Link to={`/ourShop/salad`}>
            <StatDiv
              icon={<BsShopWindow />}
              value={`${stats?.length}`}
              name={"Shop"}
            />
          </Link>
        </div>
        <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] px-16 py-5 rounded-xl">
          <Link to={`/contactUs`}>
            <StatDiv
              icon={<LiaPhoneVolumeSolid />}
              value={"012"}
              name={"Contact"}
            />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-between my-5">
        <div className="flex justify-center items-center border-[#D1A054] border-r-2 bg-[#FFEDD5] py-8">
          <div>
            <div className="flex justify-center items-center">
              <img
                className="rounded-full border-2 border-[#D1A054] h-[100px] w-[100px]"
                src={user.photoURL}
                alt=""
              />
            </div>
            <p className="text-4xl font-bold mb-2 p-3 text-center">
              {user.displayName}
            </p>
          </div>
        </div>
        <div className=" bg-[#FEF9C3] px-16 py-12 space-y-1">
          <p className="text-3xl font-bold ">Your Activities</p>
          <p className="text-xl text-[#0088FE] font-semibold  flex  items-center">
            <span>
              <FaCartShopping />
            </span>
            <span>Orders: {stats.length}</span>
          </p>
          <p className="text-xl text-[#00C4A1] font-semibold flex  items-center ">
            <span>
              <FaRegStar />
            </span>
            <span>Reviews: {review.length}</span>
          </p>
          <p className="text-xl text-[#FFBB28] font-semibold  flex  items-center">
            <span>
              <FaCalendarAlt />
            </span>
            <span>Bookings: {}</span>
          </p>
          <p className="text-xl text-[#FF8042] font-semibold flex  items-center">
            <span>
              <IoWalletSharp />
            </span>
            <span>Payment: {payment.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
