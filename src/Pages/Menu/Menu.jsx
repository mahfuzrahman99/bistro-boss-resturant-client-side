import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Component/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  
  const [Menu] = useMenu();

  const offered = Menu.filter((item) => item.category === "offered");
  const desserts = Menu.filter((item) => item.category === "dessert");
  const pizza = Menu.filter((item) => item.category === "pizza");
  const salad = Menu.filter((item) => item.category === "salad");
  const soup = Menu.filter((item) => item.category === "soup");
  const drinks = Menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        four="four"
        five="five"
        title={"OUR MENU"}
        subTitle={"Would you like to try a dish?"}
      />
      <div className="max-w-6xl mx-auto">
        {/*  */}
        <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />
        <MenuCategory items={offered} />
        <MenuCategory
          items={desserts}
          titles="dessert"
          title={"DESSERTS"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          coverImg={dessertImg}
        />
        <MenuCategory
          items={pizza}
          titles="pizza"
          title={"PIZZA"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          coverImg={pizzaImg}
        />
        <MenuCategory
          items={salad}
          titles="salad"
          title={"SALADS"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          coverImg={saladImg}
        />
        <MenuCategory
          items={soup}
          titles="soup"
          title={"SOUPS"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          coverImg={soupImg}
        />
        <MenuCategory
          items={drinks}
          titles="drinks"
          title={"DRINKS"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          coverImg={soupImg}
        />
      </div>
    </div>
  );
};

export default Menu;
