/* eslint-disable react/prop-types */

import FoodCard from "../../Component/FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div>
            <div className="md:grid grid-cols-3 justify-center gap-3 mb-10">
                {
                    items.map(item => <FoodCard key={item._id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default OrderTab;