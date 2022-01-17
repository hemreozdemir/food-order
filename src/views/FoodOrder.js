import React from "react";

// ** components
import Header from "../components/Header";
import MealsSummary from "./MealsSummary";

const FoodOrder = () => {
    return (
        <React.Fragment>
            <Header />
            <MealsSummary />
        </React.Fragment>
    );
};

export default FoodOrder;
