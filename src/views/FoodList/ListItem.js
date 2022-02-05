import React from "react";

// ** Components
import AddChart from "./AddChart";

const ListItem = ({ food }) => {
    return (
        <div className="food-list-item">
            <div className="food-info">
                <h3 className="food-name">{food.name}</h3>
                <p className="food-desc">{food.description}</p>
                <h5 className="food-price">{food.price}</h5>
            </div>
            <AddChart />
        </div>
    );
};

export default ListItem;
