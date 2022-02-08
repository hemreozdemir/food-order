import React, { useContext, useEffect } from "react";

// ** Components
import ListItem from "./ListItem";

// ** Domain
import { DUMMY_FOODS } from "../../../Domain/MealsList";

// ** Store
import { MainContext } from "../../../Store/Store";

const List = () => {
    const { state, dispatch } = useContext(MainContext);

    useEffect(() => {
        console.log(
            DUMMY_FOODS.filter((item) =>
                Object.keys(state.cartItems).includes(item.id)
            )
        );
    });

    const changeAmountHandler = (id, operator) => {
        const itemIndex = DUMMY_FOODS.map((item) => item.id).indexOf(id);
        console.log("itemIndex", itemIndex);
        if (operator) {
            dispatch({
                cartItems: {
                    ...state.cartItems,
                    [id]: state.cartItems[id] + (operator === "+" ? 1 : -1)
                }
            });
        } else {
            DUMMY_FOODS[itemIndex].amount = 0;
        }
    };

    return DUMMY_FOODS.map(
        (item) =>
            Object.keys(state.cartItems).includes(item.id) && (
                <ListItem
                    key={item.id}
                    item={item}
                    amount={state.cartItems[item.id]}
                    changeAmount={changeAmountHandler}
                />
            )
    );
};

export default List;
