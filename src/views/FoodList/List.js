import React from "react";

// ** Components
import ListItem from "./ListItem";

// ** 3rd party components
import { Card } from "reactstrap";

// ** Stlye
import "../../assests/css/foodlist.css";

// ** Domain
import { DUMMY_FOODS } from "../../domain/MealsList";

const List = () => {
    return (
        <Card className="food-list-card">
            {DUMMY_FOODS.map((food) => (
                <ListItem key={food.id} food={food} />
            ))}
        </Card>
    );
};

export default List;
