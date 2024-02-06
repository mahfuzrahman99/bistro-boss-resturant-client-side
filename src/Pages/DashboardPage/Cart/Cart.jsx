/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import SectionTitle from "../../../Component/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import CartRow from "../../../Component/CartRow";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  console.log(cart);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * 1, 0);

  const handleDelete = async (id, crt) => {
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmed.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/carts/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: `Your ${crt?.name} has been deleted.`,
            icon: "success",
          });
          refetch();
        }
      } catch (error) {
        console.error("Error deleting cart item:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while deleting the item.",
          icon: "error",
        });
      }
    }
  };

  const handleUpdate = (updatePrice, counts, id) => {
    const price = updatePrice.toFixed(2);
    const quantity = counts;
    const updatedDoc = {
      price,
      quantity,
    };
    console.log(updatedDoc);
    axiosSecure
      .patch(`/carts/${id}`, updatedDoc)
      .then((res) => {
        refetch();
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="max-w-4xl mx-auto ">
      <div>
        <SectionTitle subHeading={"My Cart"} heading={"WANNA ADD MORE?"} />
      </div>
      <div className="bg-white p-4 ">
        <div className="flex justify-between items-center p-3 ">
          <h1 className="text-xl md:text-3xl font-bold">
            Total Orders: {cart.length}
          </h1>
          <h1 className="text-xl md:text-3xl font-bold">
            Total Price: ${totalPrice}
          </h1>
          {cart.length ? (
            <Link to={`/dashboard/payment`}>
              <button className="btn btn-sm btn-outline bg-[#D1A054] text-white border-none ">
                Pay
              </button>
            </Link>
          ) : (
            <button
              disabled
              className="btn btn-sm btn-outline bg-[#D1A054] text-white border-none "
            >
              Pay
            </button>
          )}
        </div>
        <div>
          <table className="min-w-full bg-white rounded-t-xl">
            <thead className="rounded-t-xl  ">
              <tr className="rounded-t-xl bg-[#D1A054]">
                <th className="py-2 px-4 border-b">No</th>
                <th className="py-2 px-4 border-b">Item Image</th>
                <th className="py-2 px-4 border-b">Item Name</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Update</th>
                <th className="py-2 px-4 border-b">Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((crt, i) => (
                <CartRow
                  key={crt._id}
                  i={i}
                  crt={crt}
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
