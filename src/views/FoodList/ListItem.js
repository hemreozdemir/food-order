// ** React imports
import React from "react";

// ** Components
import AddChart from "./AddChart";

const ListItem = ({ food }) => {
    return (
        <div className="food-list-item">
            <div className="food-info">
                <h3 className="food-name">{food.name}</h3>
                <p className="food-desc">{food.description}</p>
                <h5 className="food-price">{food.price}TL</h5>
            </div>
            <AddChart foodId={food.id} />
        </div>
    );
};

export default ListItem;
