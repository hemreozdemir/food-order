import React, { useEffect } from "react";

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
        amount: 1
    },
    {
        id: "f2",
        name: "Meat Pie",
        description: "Turkish style pastry",
        price: "20TL",
        amount: 1
    }
];

const List = () => {
    useEffect(() => {}, []);

    const changeAmountHandler = (id, operator) => {
        const itemIndex = DUMMY_CART_ITEMS.map((item) => item.id).indexOf(id);
        console.log("itemIndex", itemIndex);
        if (operator) {
            if (operator === "+") {
                DUMMY_CART_ITEMS[itemIndex].amount++;
            } else {
                DUMMY_CART_ITEMS[itemIndex].amount--;
            }
        } else {
            DUMMY_CART_ITEMS[itemIndex].amount = 0;
        }
    };

    return DUMMY_CART_ITEMS.map((item) => (
        <ListItem
            key={item.id}
            item={item}
            changeAmount={changeAmountHandler}
        />
    ));
};

export default List;
