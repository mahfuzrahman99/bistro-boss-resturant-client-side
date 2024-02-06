/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuItem from "../../Component/MenuItem";
import Cover from "../Shared/Cover/Cover";

const MenuCategory = ({ items, titles, title, subTitle, coverImg }) => {
  return (
    <div className="my-8 p-4">
      <div className=" ">
        {titles && <Cover img={coverImg} title={title} subTitle={subTitle} />}
      </div>
      <div className="grid grid-cols-2 gap-6 my-5">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="card-actions  justify-center">
        <Link to={`/ourShop/${titles}`}>
          <button className="btn btn-outline border-0 border-b-4 hover:border-b-0 text-[#111827] border-[#111827] hover:text-white bg-[#E8E8E8] hover:border-[#111827] mt-4 ">
          ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
