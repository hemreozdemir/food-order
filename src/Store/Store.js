// ** React imports
import React, { createContext, useReducer } from "react";

let defaultCart = {
    cartItems: {},
    cartItemsCount: 0
};

const totalItemCount = (cartItems) => {
    let totalCount = 0;
    for (const item in cartItems) {
        totalCount += cartItems[item];
    }
    return totalCount;
};

export const cartReducer = (state, action) => {
    if (action.operation === "delete") {
        let tempState = { ...state };
        delete tempState.cartItems[action.id];
        tempState.cartItemsCount = totalItemCount(state.cartItems);
        return { ...tempState };
    }
    action.cartItemsCount = totalItemCount(action.cartItems);
    return { ...state, ...action };
};

export const MainContext = createContext(defaultCart);

const Store = ({ initialCart, children }) => {
    defaultCart = {
        ...defaultCart,
        ...initialCart
    };

    const [state, dispatch] = useReducer(cartReducer, defaultCart);
    const value = { state, dispatch };
    return (
        <MainContext.Provider value={value}>{children}</MainContext.Provider>
    );
};

Store.defaultProps = { children: null };

export default Store;
