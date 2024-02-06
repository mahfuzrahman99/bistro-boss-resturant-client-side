/* eslint-disable react/prop-types */


const PHRow = ({i, payment}) => {
    const {email, price, transactionId, date, status} = payment || {};
    return (
        <>
            <tr className="bg-gray-100">
                <td className="py-2 px-4 border-b-4">{i + 1}</td>
                <td className="py-2 px-4 border-b-4">{email}</td>
                <td className="py-2 px-4 border-b-4">${price}</td>
                <td className="py-2 px-4 border-b-4">{transactionId}</td>
                <td className={`py-2 px-4 border-b-4`}>{status}</td>
                <td className="py-2 px-4 border-b-4">{date}</td>
            </tr>
        </>
    );
};

export default PHRow;