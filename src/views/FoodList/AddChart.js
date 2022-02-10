// ** React imports
import React, { useContext, useState } from "react";

// ** 3rd party components
import { Input, Button } from "reactstrap";

// ** store imports
import { MainContext } from "../../store/Store";

const AddChart = ({ foodId }) => {
    const { state, dispatch } = useContext(MainContext);

    const [amount, setAmount] = useState(1);

    const onAddCart = () => {
        if (state.cartItems[foodId]) {
            dispatch({
                cartItems: {
                    ...state.cartItems,
                    [foodId]: state.cartItems[foodId] + amount
                }
            });
        } else {
            dispatch({ cartItems: { ...state.cartItems, [foodId]: amount } });
        }
    };

    return (
        <div className="food-add-part">
            <div className="amount-info d-flex">
                <h5 className="amount-text">Amount</h5>
                <Input
                    className="amount-input"
                    value={amount}
                    onChange={(e) => setAmount(parseInt(e.target.value))}
                />
            </div>
            <Button className="add-button" outline onClick={onAddCart}>
                + Add
            </Button>
        </div>
    );
};

export default AddChart;
