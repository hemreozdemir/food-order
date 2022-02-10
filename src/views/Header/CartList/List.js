import React, { useContext, useEffect } from "react";

// ** Components
import ListItem from "./ListItem";

// ** Domain
import { DUMMY_FOODS } from "../../../domain/MealsList";

// ** Store
import { MainContext } from "../../../store/Store";

// ** Utility
import { isObjectEmpty } from "../../../utility/collectionsUtil";

const List = () => {
    const { state, dispatch } = useContext(MainContext);

    const changeAmountHandler = (id, operator) => {
        if (operator) {
            dispatch({
                cartItems: {
                    ...state.cartItems,
                    [id]: state.cartItems[id] + (operator === "+" ? 1 : -1)
                }
            });
        } else {
            dispatch({ id: id, operation: "delete" });
        }
    };

    return isObjectEmpty(state.cartItems) ? (
        <p className="no-meals-message"> There is no meals in cart </p>
    ) : (
        DUMMY_FOODS.map(
            (item) =>
                Object.keys(state.cartItems).includes(item.id) && (
                    <ListItem
                        key={item.id}
                        item={item}
                        amount={state.cartItems[item.id]}
                        changeAmount={changeAmountHandler}
                    />
                )
        )
    );
};

export default List;
