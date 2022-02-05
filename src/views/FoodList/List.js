import React from "react";

// ** Components
import ListItem from "./ListItem";

// ** 3rd party components
import { Card } from "reactstrap";

// ** Stlye
import "../../assests/css/foodlist.css";

const List = () => {
    const DUMMY_FOODS = [
        {
            id: "f0",
            name: "Lentil Soup",
            description: "Homemade soup to warm you up",
            price: "15TL"
        },
        {
            id: "f1",
            name: "Etli Ekmek",
            description: "Turkish pizza with ground meat",
            price: "25TL"
        },
        {
            id: "f2",
            name: "Meat Pie",
            description: "Turkish style pastry",
            price: "20TL"
        },
        {
            id: "f3",
            name: "Baklava",
            description: "Turkish traditional dessert, nectared",
            price: "30TL"
        }
    ];

    return (
        <Card className="food-list-card">
            {DUMMY_FOODS.map((food) => (
                <ListItem key={food.id} food={food} />
            ))}
        </Card>
    );
};

export default List;
