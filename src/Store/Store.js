import React, { createContext, useReducer } from "react";

let defaultCart = {
    cartItems: {}
};

export const cartReducer = (state, action) => {
    if (action.operation === "delete") {
        let tempState = { ...state };
        delete tempState.cartItems[action.id];
        return { ...tempState };
    }
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
