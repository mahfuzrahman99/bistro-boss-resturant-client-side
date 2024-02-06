import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/DashboardPage/Cart/Cart";
import PrivetRout from "./PrivetRout";
import AllUsers from "../Pages/DashboardPage/AllUsers/AllUsers";
import AdminRoute from "./AdminRout";
import AddItems from "../Pages/DashboardPage/Add Item/AddItems";
import UpdateItem from "../Pages/DashboardPage/UpdateItem/UpdateItem";
import ManageItems from "../Pages/DashboardPage/ManageItems/ManageItems";
import Payment from "../Pages/DashboardPage/Payment/Payment";
import AdminHome from "../Pages/DashboardPage/AdminHome/AdminHome";
import PaymentHistory from "../Pages/DashboardPage/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/DashboardPage/UserHome/UserHome";
import AddReview from "../Pages/DashboardPage/Add Review/AddReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ourMenu",
        element: <Menu />,
      },
      {
        path: "/ourShop/:category",
        element: <Order />,
      },
      {
        path: "/ourShop",
        element: <Order />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
    ],
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: (
      <PrivetRout>
        <Dashboard />
      </PrivetRout>
    ),
    children: [
      // user routes
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "review",
        element: <AddReview />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },

      // admin only routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: <AddItems />,
      },
      {
        path: "updateItems/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:2000/orderMenus/${params.id}`),
      },
      {
        path: "manageItems",
        element: <ManageItems />,
      },
      {},
      {},
      {},
      {},
    ],
  },
]);

export default router;
