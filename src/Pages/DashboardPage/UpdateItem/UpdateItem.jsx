import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Component/SectionTitle";
import { useLoaderData, useNavigate } from "react-router-dom";
import useMenu from "../../../Hooks/useMenu";

const UpdateItem = () => {
  const axiosSecure = useAxiosSecure();
  const [menu] = useMenu();
  const {name, recipe, image, price, category , _id} = useLoaderData()
  
  const navigate = useNavigate()

  const handleUpdateItems = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const recipe = form.recipe.value;
    const image = form.photoURL.value;
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    form.reset();
    const menuItems = { name, recipe, price, image, category };

    axiosSecure.patch(`/orderMenus/${_id}`, menuItems).then((responses) => {
      if (responses.data.modifiedCount) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: `The item is modified`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/manageItems")
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to update the item. Please try again.",
        });
      }
    });
  };

  return (
    <div>
      <div>
        <SectionTitle subHeading={"What's new?"} heading={"UPDATE ITEM"} />
      </div>
      <div className="md:w-2/3 mx-auto h-auto mt-10 rounded-lg font-inter bg-[#F3F3F3] p-7 md:p-16">
        <form onSubmit={handleUpdateItems}>
          <div>
            <label>
              <h1 className="text-xs font-semibold">Recipe Name*</h1>
            </label>
            <input
              type="text"
              className="w-full mb-2 p-3 rounded-md"
              name="name"
              defaultValue={name}
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
                defaultValue={category}
                id="category"
              >
                {[...new Set(menu.map((item) => item.category))].map(
                  (category) => (
                    <option key={category} >{category}</option>
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
                defaultValue={price}
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
              defaultValue={recipe}
              placeholder="Enter Recipe"
              id=""
            />
          </div>
          <div>
            <label>
              <h1 className="text-xs font-semibold">Image*</h1>
            </label>
            <input
              type="text"
              name="photoURL"
              defaultValue={image}
              className="w-full mb-2 p-3 rounded-md"
              placeholder="Enter Item photoURL"
              id=""
            />
          </div>
          <br />
          <div className="flex justify-center ">
            <input
              type="submit"
              name="submit"
              value="Update Recipe Details"
              className=" text-white font-semibold text-center bg-transparent hover:bg-transparent border-none rounded-md bg-gradient-to-r from-[#835D23] to-[#B58130] text-lg btn px-4 py-1 my-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
