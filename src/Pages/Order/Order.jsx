import Cover from "../Shared/Cover/Cover";
import shopImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert","drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [Menu] = useMenu();

  const salad = Menu.filter((item) => item.category === "salad");
  const pizza = Menu.filter((item) => item.category === "pizza");
  const soup = Menu.filter((item) => item.category === "soup");
  const desserts = Menu.filter((item) => item.category === "dessert");
  const drinks = Menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <div>
        <Cover
          img={shopImg}
          four="four"
          five="five"
          title={"OUR SHOP"}
          subTitle={"Would you like to try a dish?"}
        />
      </div>
      <div className="max-w-6xl mx-auto">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className={` flex justify-center gap-5 uppercase font-bold my-5`}>
            {["Salad", "Pizza", "Soups", "Desserts", "Drinks"].map((tab, index) => (
              <Tab
                key={index}
                className={`cursor-pointer ${tabIndex === index ? 'border-b-2 border-orange-500 text-orange-500' : ''}`}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanel><OrderTab items={salad}/></TabPanel>
          <TabPanel><OrderTab items={pizza}/></TabPanel>
          <TabPanel><OrderTab items={soup}/></TabPanel>
          <TabPanel><OrderTab items={desserts}/></TabPanel>
          <TabPanel><OrderTab items={drinks}/></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
