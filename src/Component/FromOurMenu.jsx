// import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../Hooks/useMenu";

const FromOurMenu = () => {
  const [Menu] = useMenu();
  const popularItems = Menu.filter((item) => item.category === "popular");

  return (
    <div className="my-12">
      <SectionTitle heading="FROM OUR MENU" subHeading="Check it out" />
      <div className="grid grid-cols-2 gap-6">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FromOurMenu;
