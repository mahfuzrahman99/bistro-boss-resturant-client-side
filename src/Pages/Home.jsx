import Banner from "../Pages/Shared/Banner";
import OrderOnline from "../Component/OrderOnline";
import BistroBoss from "../Component/BistroBoss";
import FromOurMenu from "../Component/FromOurMenu";
import FeaturedItem from "../Component/FeaturedItem";
import Testimonials from "../Component/Testimonials";
import FeaturedCard from "../Component/FeaturedCard";
import CallUs from "../Component/CallUs";
import { Helmet } from "react-helmet-async";
// import NavbarPreline from "./Shared/NavbarPreline";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      {/* <NavbarPreline/> */}
      <Banner />
      <div className="max-w-6xl mx-auto">
        <OrderOnline />
        <BistroBoss />
        <FromOurMenu />
        <CallUs />
        <FeaturedCard />
        <FeaturedItem />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
