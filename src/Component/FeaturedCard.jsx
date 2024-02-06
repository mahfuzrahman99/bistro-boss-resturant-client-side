import featured from "../assets/menu/Rectangle 5.png";
import SectionTitle from "./SectionTitle";

const FeaturedCard = () => {
  return (
    <div className="my-8">
      <SectionTitle subHeading={"Should Try"} heading={"CHEF RECOMMENDS"} />
      <div className="flex justify-center gap-3 font-inter">
      <div className=" bg-[#F3F3F3] ">
        <figure>
          <img src={featured} alt="Featured" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-xl font-semibold">Caeser Salad</h2>
          <p className="font-normal">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-0 border-b-4 hover:border-b-0 text-[#BB8506] border-[#BB8506] hover:text-[#BB8506] bg-[#E8E8E8] hover:border-[#BB8506] mt-4">
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-[#F3F3F3] ">
        <figure>
          <img src={featured} alt="Featured" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-xl font-semibold">Caeser Salad</h2>
          <p className="font-normal">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-0 border-b-4 hover:border-b-0 text-[#BB8506] border-[#BB8506] hover:text-[#BB8506] bg-[#E8E8E8] hover:border-[#BB8506] mt-4">
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-[#F3F3F3] ">
        <figure>
          <img src={featured} alt="Featured" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-xl font-semibold">Caeser Salad</h2>
          <p className="font-normal">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-0 border-b-4 hover:border-b-0 text-[#BB8506] border-[#BB8506] hover:text-[#BB8506] bg-[#E8E8E8] hover:border-[#BB8506] mt-4">
              add to cart
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
