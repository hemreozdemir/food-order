import React, { useContext, useEffect } from "react";

// ** Components
import ListItem from "./ListItem";

// ** Domain
import { DUMMY_FOODS } from "../../../domain/MealsList";

// ** Store
import { MainContext } from "../../../store/Store";

const List = () => {
    const { state, dispatch } = useContext(MainContext);

    const changeAmountHandler = (id, operator) => {
        const itemIndex = DUMMY_FOODS.map((item) => item.id).indexOf(id);
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
