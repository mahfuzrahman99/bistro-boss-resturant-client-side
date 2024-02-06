import { useContext } from "react";
import SectionTitle from "../../../Component/SectionTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import PHRow from "./PHRow";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  console.log(payments);

  return (
    <div  className="max-w-4xl mx-auto ">
      <div>
        <SectionTitle subHeading={"At a Glance!"} heading={"PAYMENT HISTORY"} />
      </div>
      <div>
        <div className="bg-white p-4 ">
          <h1 className="text-xl md:text-3xl font-bold">
            Total Payments: {payments.length}
          </h1>
          <div className=" overflow-x-auto overflow-hidden">
            <table className="min-w-full bg-white table table-md">
              <thead className="rounded-t-xl bg-[#D1A054]">
                <tr className="rounded-t-xl text-white bg-[#D1A054]">
                  <th className="py-2 px-4 border-b">NO</th>
                  <th className="py-2 px-4 border-b">EMAIL</th>
                  <th className="py-2 px-4 border-b">AMOUNT</th>
                  <th className="py-2 px-4 border-b">TRANSACTION ID</th>
                  <th className="py-2 px-4 border-b">STATUS</th>
                  <th className="py-2 px-4 border-b">DATE</th>
                </tr>
              </thead>
              <tbody>
                {
                    payments.map((payment,i) => <PHRow key={payment._id} i={i} payment={payment}/>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
