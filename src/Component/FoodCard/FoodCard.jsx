/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const handleAddToCart = () => {
    if (user) {
      
      const cartItems ={
        menuId: _id,
        email: user.email,
        name,
        image,
        singlePrice: price,
        price : price * count,
        quantity:count, 
      };
      
      axiosSecure.post("/carts", cartItems)
      .then((responses) => {
        
        if (responses.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${count} ${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          setCount(1);
          refetch();
        } else {
          
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to add items to the cart. Please try again.",
          });
        }
      });
    } else {
      Swal.fire({
        title: "Please login to add to cart",
        text: "You won't to be logged in!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then(() => {
        navigate("/login", { state: { from: location } });
      });
    }
  };

  return (
    <div className="relative bg-[#F3F3F3] h-[530px] grid grid-flow-row justify-between">
      <figure>
        <img src={image} className="w-full h-[250px]" alt="Featured" />
      </figure>
      <p className="absolute right-2 top-2 text-white bg-black bg-opacity-60 p-1 rounded-md">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="font-normal">{recipe}</p>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-4 hover:border-[#BB8506] text-[#BB8506] border-[#BB8506] hover:text-[#BB8506] bg-[#E8E8E8] "
          >
            Add To Cart
          </button>
          <div className="text-3xl font-bold">
            <span className=" border-b-4  text-[#BB8506] hover:bg-[#1f2937] border-[#BB8506] hover:text-[#BB8506] bg-[#E8E8E8] hover:border-[#BB8506] rounded-lg pt-1">
              <button
                className="px-2"
                onClick={() =>
                  setCount((prevQuantity) => Math.max(prevQuantity - 1, 1))
                }
              >
                -
              </button>
              <span className="w-44 bg-transparent">{count}</span>
              <button
                className="px-2"
                onClick={() => setCount((prevQuantity) => prevQuantity + 1)}
              >
                +
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
