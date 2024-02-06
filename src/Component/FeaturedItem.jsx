import SectionTitle from "./SectionTitle";
import featured from "../assets/home/featured.jpg";

const FeaturedItem = () => {
  return (
    <div
      className="bg-cover bg-center bg-fixed my-8 py-12 px-10 relative"
      style={{ backgroundImage: `url(${featured})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className=" pb-12 pt-2 px-24 relative">
        <div className="text-white ">
          <SectionTitle subHeading="Check it out" heading="Featured Item" />
        </div>
        <div className="md:flex gap-7 justify-center items-center">
          <div>
            <img src={featured} alt="" />
          </div>
          <div>
            <div className="text-white font-normal font-inter">
              <p>March 20, 2023</p>
              <p>WHERE CAN I GET SOME?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
            </div>
            <button className="btn btn-outline border-0 border-b-4 text-white border-white hover:bg-transparent hover:border-white mt-4">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
