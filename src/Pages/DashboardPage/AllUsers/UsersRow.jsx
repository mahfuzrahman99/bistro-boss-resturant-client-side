/* eslint-disable react/prop-types */
import { FaUsers } from "react-icons/fa";
// import { MdSecurityUpdateGood } from "react-icons/md";
import { IoPersonRemoveOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin";

const UsersRow = ({ user, i, handleRemove, handleMakeAdmin }) => {
  const { user: user1 } = useContext(AuthContext);
  const [isAdmin] = useAdmin();



  return (
    <>
      <tr className="bg-gray-100">
        <td className="py-2 px-4 border-b-4">{i + 1}</td>
        <td className="py-2 px-4 border-b-4">
          <img
            className="h-6"
            src={user.photoURL || user1.photoURL}
            alt={user.name}
          />
        </td>
        <td className="py-2 px-4 border-b-4">{user.name}</td>
        <td className="py-2 px-4 border-b-4">{user.email}</td>
        <td className="py-2 px-4 border-b-4 p-1 text-xl w-4">
          {user.role === "admin" ? (
            <p className="text-xl font-semibold text-[#D1A054]">Admin</p>
          ) : (
            <span
              onClick={() => handleMakeAdmin(user._id, user)}
              className="flex justify-center m-1 p-1  rounded bg-[#D1A054]"
            >
              <FaUsers />
            </span>
          )}
        </td>
        {/* <td className="py-2 px-4 border-b-4">
          {user.role === "admin" ? (
            <p className="text-xl font-semibold text-[#D1A054]">Admin</p>
          ) : (
            <button
              onClick={() => handleMakeAdmin(user._id, user)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              <MdSecurityUpdateGood />
            </button>
          )}
        </td> */}
        <td className="py-2 px-4 border-b-4">
          { <button
            onClick={() => handleRemove(user._id, user)}
            className={`${isAdmin ? "bg-red-500 text-white px-2 py-1 rounded ml-2 disabled" : "bg-red-500 text-white px-2 py-1 rounded ml-2"}`}
          >
            <IoPersonRemoveOutline />
          </button>}
        </td>
      </tr>
    </>
  );
};

export default UsersRow;
