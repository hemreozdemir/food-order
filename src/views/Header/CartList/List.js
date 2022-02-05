import React from "react";

// ** Components
import ListItem from "./ListItem";

const DUMMY_CART_ITEMS = [
    {
        id: "f0",
        name: "Lentil Soup",
        price: "15TL",
        amount: 1
    },
    {
        id: "f1",
        name: "Etli Ekmek",
        description: "Turkish pizza with ground meat",
        price: "25TL",
        amount: 2
    },
    {
        id: "f2",
        name: "Meat Pie",
        description: "Turkish style pastry",
        price: "20TL",
        amount: 3
    }
];

const List = () => {
    return <ListItem />;
};

export default List;
