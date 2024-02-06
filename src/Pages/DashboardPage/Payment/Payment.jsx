import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Component/SectionTitle";
import TestCheckout from "./TestCheckout";

const stripePromise = loadStripe('pk_test_51OEJdgBEfNYZbQL6lIkmQbH9H5Nn4kzVxOhAdi4FKuqiQ2R3aYzSD4NmSVbEEv0mzWzLfmxCyVxXAU4MdQoqZnMv00G9MBCa0t')
const Payment = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <div>
                <SectionTitle heading={"PAYMENT"} subHeading={""}/>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    {/* <Checkout/> */}
                    <TestCheckout/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;