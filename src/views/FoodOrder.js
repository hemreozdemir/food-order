// ** React imports
import React from "react";

// ** components
import Header from "./Header/Header";
import MealsSummary from "./MealsSummary";
import List from "./FoodList/List";

const FoodOrder = () => {
    return (
        <React.Fragment>
            <Header />
            <MealsSummary />
            <List />
        </React.Fragment>
    );
};

export default FoodOrder;
