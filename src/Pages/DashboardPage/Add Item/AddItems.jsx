import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Component/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//
//
const image_hosting_api = `https://api.imgbb.com/1/upload?key=ba197f9abcf793fc3ed5f7425f357785`;

const AddItems = () => {
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();

  const { data: menu = [] } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orderMenus");
      return res.data;
    },
  });

  const handleAddItems = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const recipe = form.recipe.value;
    const image = form.photoURL.files[0];
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    const formData = new FormData();
    formData.append("image", image);
    form.reset();
    axios
      .post(image_hosting_api, formData,)
      .then((res) => {
        const menuItems = {
          name,
          recipe,
          price,
          image: res.data.data.display_url,
          category,
        };
        axiosSecure.post("/orderMenus", menuItems).then((responses) => {
          if (responses.data.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `Item added to your menu's list`,
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard/manageItems");
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Failed to add items to the menu's list. Please try again.",
            });
          }
        });
      })
      .catch((error) => {
        console.error("Error uploading image to ImgBB:", error);
      });
  };

  return (
    <div>
      <div>
        <SectionTitle subHeading={"What's new?"} heading={"ADD AN ITEM"} />
      </div>
      <div className="md:w-2/3 mx-auto h-auto mt-10 rounded-lg font-inter bg-[#F3F3F3] p-7 md:p-16">
        <form onSubmit={handleAddItems}>
          <div>
            <label>
              <h1 className="text-xs font-semibold">Recipe Name*</h1>
            </label>
            <input
              type="text"
              className="w-full mb-2 p-3 rounded-md"
              name="name"
              placeholder="Enter Item Name"
              id=""
            />
          </div>
          <div className="md:grid grid-cols-2 justify-between items-center gap-3">
            <div className="w-full">
              <label>
                <h1 className="text-xs font-semibold">Category*</h1>
              </label>
              <select
                className="w-full mb-2 p-3 rounded-md"
                name="category"
                id="category"
              >
                {[...new Set(menu.map((item) => item.category))].map(
                  (category) => (
                    <option key={category}>{category}</option>
                  )
                )}
              </select>
            </div>
            <div>
              <label>
                <h1 className="text-xs font-semibold">Price*</h1>
              </label>
              <input
                type="number"
                name="price"
                className="w-full mb-2 p-3 rounded-md"
                placeholder="Enter Item price"
                id=""
              />
            </div>
          </div>
          <div>
            <label>
              <h1 className="text-xs font-semibold">Recipe*</h1>
            </label>
            <textarea
              type="text"
              className="w-full mb-2 p-3 rounded-md"
              name="recipe"
              placeholder="Enter Recipe"
              id=""
            />
          </div>
          <div>
            <label>
              <h1 className="text-xs font-semibold">Image*</h1>
            </label>
            <input
              type="file"
              name="photoURL"
              className=" mb-2 p-4 rounded bg-[#E8E8E8]"
              placeholder="Choose a photo"
              id=""
            />
          </div>
          <br />
          <div className="flex ">
            <div className="flex justify-center items-center gap-1 bg-gradient-to-r from-[#835D23] to-[#B58130] text-lg btn px-4 py-1 my-2">
              <input
                type="submit"
                name="submit"
                value="Add Item"
                className=" text-white font-semibold text-center bg-transparent hover:bg-transparent border-none rounded-md "
              />
              <span className="text-white">
                <FaUtensils />
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
