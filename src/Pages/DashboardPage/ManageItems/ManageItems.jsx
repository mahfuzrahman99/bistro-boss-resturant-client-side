import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Component/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import ManageMenuRow from "./ManageMenuRow";
import Swal from "sweetalert2";

const ManageItems = () => {
  const axiosSecure = useAxiosSecure();

  const { data: menu = [], refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orderMenus");
      return res.data;
    },
  });

  const handleItemDelete = (item) => {
    Swal.fire({
        title: "Are you sure?",
        text: `You won't be able to delete ${item.name}!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
        if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/orderMenus/${item._id}`);
            console.log(res.data);
            if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `${item.name} has been deleted`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }


        }
    });
}
  

  return (
    <div className="max-w-4xl mx-auto bg-[#F6F6F6]">
      <div>
        <SectionTitle subHeading={"Hurry Up!"} heading={"MANAGE ALL ITEMS"} />
      </div>
      <div className="bg-white p-4 ">
        <h1 className="text-xl md:text-3xl font-bold">
          Total Items: {menu.length}
        </h1>
        <div>
          <table className="min-w-full bg-white">
            <thead className="rounded-t-xl bg-[#D1A054]">
              <tr className="rounded-t-xl bg-[#D1A054]">
                <th className="py-2 px-4 border-b">NO</th>
                <th className="py-2 px-4 border-b">IMAGE</th>
                <th className="py-2 px-4 border-b">NAME</th>
                <th className="py-2 px-4 border-b">price</th>
                <th className="py-2 px-4 border-b">UPDATE</th>
                <th className="py-2 px-4 border-b">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((menu, i) => (
                <ManageMenuRow
                  key={menu._id}
                  handleItemDelete={handleItemDelete}
                  menu={menu}
                  i={i}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
