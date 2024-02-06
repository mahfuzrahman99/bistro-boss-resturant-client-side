/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";

const ManageMenuRow = ({ menu, i, handleItemDelete }) => {
    console.log(menu);
  return (
    <>
      <tr className="bg-gray-100">
        <td className="py-2 px-4 border-b-4">{i + 1}</td>
        <td className="py-2 px-4 border-b-4">
          <img className="h-6" src={menu.image} alt={menu.name} />
        </td>
        <td className="py-2 px-4 border-b-4">{menu.name}</td>
        <td className="py-2 px-4 border-b-4">{menu.price}</td>
        <td className="py-2 px-4 border-b-4 p-1 text-xl w-4">
          <Link  to={`/dashboard/updateItems/${menu._id}`}>
            <span className="flex justify-center m-1 p-1  rounded bg-[#D1A054]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </td>
        <td className="py-2 px-4 border-b-4">
          {
            <button
              onClick={() => handleItemDelete(menu)}
              className="bg-[#B91C1C] text-white px-4 text-2xl py-1 rounded ml-2"
            >
              <RiDeleteBin6Line />
            </button>
          }
        </td>
      </tr>
    </>
  );
};

export default ManageMenuRow;
