/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import StatDiv from "./StatDiv";
import { IoWalletSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import BarChartAdmin from "./BarChartAdmin";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
// import PieChartAdmin from "./PieChartAdmin";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "pink"];

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["admin_stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("admin_stats");
      return res.data;
    },
  });

  const { data: OStats = [] } = useQuery({
    queryKey: ["OStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("order_stats");
      return res.data;
    },
  });

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = OStats.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold my-12 bg-clip-text text-transparent bg-gradient-to-l from-[#BB34F5] via-[#FE4880] to-[#D3A256]">
        Hi, {user.displayName} Welcome Back!
      </h1>
      <div className="flex justify-center items-center gap-2">
        <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] px-8 py-5 rounded-xl">
          <StatDiv
            icon={<IoWalletSharp />}
            value={`$${stats?.revenue}`}
            name={"Revenue"}
          />
        </div>
        <div className="bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] px-8 py-5 rounded-xl">
          <StatDiv icon={<FaUsers />} value={stats?.users} name={"Customers"} />
        </div>
        <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] px-8 py-5 rounded-xl">
          <StatDiv
            icon={<MdOutlineProductionQuantityLimits />}
            value={stats?.menus}
            name={"Products"}
          />
        </div>
        <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] px-8 py-5 rounded-xl">
          <StatDiv
            icon={<TbTruckDelivery />}
            value={stats?.carts}
            name={"Orders"}
          />
        </div>
      </div>
      <div className="md:grid grid-cols-2 justify-between">
        <div className="col-span-1 ">
          <BarChartAdmin OStats={OStats} />
        </div>
        <div>
          {/* <PieChartAdmin OStats={OStats} /> */}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={700} height={700}>
              <Legend/>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
