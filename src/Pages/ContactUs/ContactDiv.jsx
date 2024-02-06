/* eslint-disable react/prop-types */


const ContactDiv = ({icon, heading, desc1, desc2}) => {
    return (
        <div>
            <div className="flex flex-col justify-center border-2 border-gray-200 h-[180px] ">
                <div className="text-white bg-[#D1A054]  p-3"><span className=" flex justify-center h-4">{icon}</span></div>
                <div className="flex-1 text-center font-inter bg-[#F3F3F3] space-y-2 p-3 mx-3 mb-3">
                    <p className=" text-xl font-medium">{heading}</p>
                    <p className="font-normal">{desc1}</p>
                    <p className="font-normal">{desc2}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactDiv;