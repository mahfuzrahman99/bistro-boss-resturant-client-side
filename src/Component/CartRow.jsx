/* eslint-disable react/prop-types */

import { useState } from "react";
import { MdSecurityUpdateGood } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const CartRow = ({ crt, i, handleDelete, handleUpdate }) => {
  const { name, image, price, _id, quantity, singlePrice } = crt;
  const [count, setCount] = useState(quantity);

  return (
    <>
      <tr className="" key={_id}>
        <td className="py-2 px-4 border-b">{i + 1}</td>
        <td className="py-2 px-4 border-b">
          <img src={image} alt="Item Image" className="w-8 h-8 object-cover" />
        </td>
        <td className="py-2 px-4 border-b text-xs md:text-base">{name}</td>
        <td className="py-2 px-4 border-b">${price}</td>
        <td className="py-2 px-4 border-b">
          <div className="text-3xl font-bold">
            <span className="text-[#BB8506] hover:text-[#BB8506] bg-[#E8E8E8] hover:border-[#BB8506]">
              <button
                className="px-2"
                onClick={() => setCount((prevCount) => Math.max(prevCount - 1, 1))}
              >
                -
              </button>
              <span className="w-44 bg-transparent">{count}</span>
              <button
                className="px-2"
                onClick={() => setCount((prevCount) => prevCount + 1)}
              >
                +
              </button>
            </span>
          </div>
        </td>
        <td className="py-2 px-4 border-b">
          <button
            onClick={() => handleUpdate(singlePrice * count, count, _id)}
            className="bg-[#d1a054] text-white px-2 py-1 w-full flex justify-center p-1 text-xl rounded"
          >
            <MdSecurityUpdateGood />
          </button>
        </td>
        <td className="py-2 px-4 border-b">
          <button
            onClick={() => handleDelete(crt._id, crt)}
            className="bg-[#d1a054] text-white px-2 py-1 w-full flex justify-center p-1 text-xl rounded"
          >
            <RiDeleteBinLine />
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartRow;
