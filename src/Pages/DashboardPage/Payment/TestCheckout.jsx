// Second component
import { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import useCart from "../../../Hooks/useCart";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TestCheckout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(" ");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const options = { timeZone: "Asia/Dhaka" };
  const bdTime = new Date().toLocaleString("en-US", options);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment Error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError(" ");
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("Payment Intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: bdTime,
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for the taka paisa",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/paymentHistory");
        }
      }
    }
  };

  return (
    <div>
      <form onSubmit={handlePayment}>
        {/* stripeForm */}
        <div className="my-6 p-4 bg-gray-200 rounded-md">
          <CardElement />
        </div>
        {/* localForm */}
        <div className="border border-gray-300 rounded-md p-4 my-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="cardNumber"
          >
            Card Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cardNumber"
            type="text"
            placeholder="**** **** **** ****"
          />
        </div>
        <div className="flex justify-between">
          <div className="border border-gray-300 rounded-md p-4 my-4 w-1/2 mr-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="expiryDate"
            >
              Expiry Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expiryDate"
              type="text"
              placeholder="MM/YY"
            />
          </div>
          <div className="border border-gray-300 rounded-md p-4 my-4 w-1/2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cvv">
              CVV
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cvv"
              type="text"
              placeholder="***"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="btn border-none hover:text-2xl hover:font-bold bg-[#D1A054]  btn-primary w-1/3 rounded-md my-4"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
        <p className="text-red-600 font-medium">{error}</p>
        {transactionId && (
          <p className="text-green-600 font-medium">
            Your transaction id: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default TestCheckout;
