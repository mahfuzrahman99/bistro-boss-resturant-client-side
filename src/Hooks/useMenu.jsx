import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
    const axiosSecure = useAxiosSecure()
    const { data: menu = [], refetch } = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
          const res = await axiosSecure.get("/orderMenus");
          return res.data;
        },
      });
      return [menu, refetch ];
};

export default useMenu;