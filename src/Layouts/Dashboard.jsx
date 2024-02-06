import {
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { FaBook, FaCalendar, FaList, FaShop } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import { VscPreview } from "react-icons/vsc";
import useCart from "../Hooks/useCart";
import { MdEmail, MdHomeFilled, MdMenu } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  // const isAdmin = true;
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="flex justify-between">
            <div className="w-60 min-h-screen hidden md:block bg-[#D1A054]">
              <ul className="menu p-4 fixed">
                {isAdmin ? (
                  <>
                    <Link className="my-5">
                      <p className="md:text-xl font-bold  text-center font-inter">
                        BISTRO BOSS
                      </p>
                      <p className=" text-sm font-semibold text-center uppercase tracking-[4px] font-cinzel">
                        Restaurant
                      </p>
                    </Link>
                    <li>
                      <NavLink to="/dashboard/adminHome">
                        <MdHomeFilled />
                        ADMIN HOME
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/addItems">
                        <FaUtensils />
                        ADD ITEMS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/manageItems">
                        <FaList />
                        MANAGE ITEMS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/ManageBookings">
                        <FaBook />
                        MANAGE BOOKINGS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/allUsers">
                        <FaUsers />
                        ALL USERS
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <Link className="my-5">
                      <p className="md:text-xl font-bold text-center font-inter">
                        BISTRO BOSS
                      </p>
                      <p className=" text-sm font-semibold text-center uppercase tracking-[4px] font-cinzel">
                        RESTAURANT
                      </p>
                    </Link>
                    <li>
                      <NavLink to="/dashboard/userHome">
                        <FaHome />
                        USER HOME
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/reservation">
                        <FaCalendar />
                        RESERVATION
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/paymentHistory">
                        <FaWallet />
                        PAYMENT HISTORY
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/cart">
                        <FaShoppingCart />
                        MY CART ({cart.length})
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/review">
                        <VscPreview />
                        ADD A REVIEW
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/bookings">
                        <FaList />
                        MY BOOKINGS
                      </NavLink>
                    </li>
                  </>
                )}

                {/* for all users */}
                <div className="divider"></div>
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome>
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ourMenu">
                    <MdMenu />
                    MENU
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ourShop/salad">
                    <FaShop />
                    SHOP
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contactUs">
                    <MdEmail />
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex-1   bg-[#F6F6F6]">
              <Outlet />
            </div>
          </div>
          <label
            htmlFor="my-drawer"
            className="btn md:hidden btn-primary drawer-button"
          >
            OPEN DRAWER
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="">
            {/* Sidebar content here */}
            <div className="w-50 min-h-screen md:hidden bg-[#D1A054]">
              <ul className="menu p-4">
                {isAdmin ? (
                  <>
                    <Link className="my-5">
                      <p className="text-xl font-bold  text-center font-inter">
                        BISTRO BOSS
                      </p>
                      <p className=" font-semibold text-center uppercase tracking-[4px] font-cinzel">
                        Restaurant
                      </p>
                    </Link>
                    <li>
                      <NavLink to="/dashboard/adminHome">
                        <MdHomeFilled />
                        ADMIN HOME
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/addItems">
                        <FaUtensils />
                        ADD ITEMS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/manageItems">
                        <FaList />
                        MANAGE ITEMS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/ManageBookings">
                        <FaBook />
                        MANAGE BOOKINGS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/allUsers">
                        <FaUsers />
                        ALL USERS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/cart">
                        <FaShoppingCart />
                        My Cart ({cart.length})
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <Link className="my-5">
                      <p className="text-xl font-bold  text-center font-inter">
                        BISTRO BOSS
                      </p>
                      <p className=" font-semibold text-center uppercase tracking-[4px] font-cinzel">
                        RESTAURANT
                      </p>
                    </Link>
                    <li>
                      <NavLink to="/dashboard/userHome">
                        <FaHome />
                        USER HOME
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/reservation">
                        <FaCalendar />
                        RESERVATION
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/paymentHistory">
                        <FaWallet />
                        PAYMENT HISTORY
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/cart">
                        <FaShoppingCart />
                        MY CART ({cart.length})
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/review">
                        <VscPreview />
                        ADD A REVIEW
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/bookings">
                        <FaList />
                        MY BOOKINGS
                      </NavLink>
                    </li>
                  </>
                )}

                {/* for all users */}
                <div className="divider"></div>
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome>
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ourMenu">
                    <MdMenu />
                    MENU
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ourShop/salad">
                    <FaShop />
                    SHOP
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contactUs">
                    <MdEmail />
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
