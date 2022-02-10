import React, { useState, useContext } from "react";

// ** 3rd party components
import { Button } from "reactstrap";

// ** Store
import { MainContext } from "../../../store/Store";

const ListItem = ({ item, amount, changeAmount }) => {
    // const [amount, setAmount] = useState(1);
    const { state, dispatch } = useContext(MainContext);

    const onClickAmountChange = (e) => {
        if (e.target.innerText === "+") {
            changeAmount(item.id, "+");
        } else {
            if (state.cartItems[item.id] === 1) {
                changeAmount(item.id);
            } else {
                changeAmount(item.id, "-");
            }
        }
    };
    return (
        amount > 0 && (
            <div className="cart-item d-sm-flex justify-content-between">
                <div className="food-info-cart d-flex">
                    <div className="food-properties">
                        <h3 className="food-name-cart">{item.name}</h3>
                        <h6 className="food-price-cart">{item.price}TL</h6>
                    </div>
                    <h6 className="food-amount-cart">x {amount}</h6>
                </div>
                <div className="amount-arrangement d-flex align-items-center">
                    <Button
                        className="btn-minus"
                        outline
                        color="danger"
                        onClick={onClickAmountChange}
                    >
                        -
                    </Button>
                    <Button
                        className="btn-plus"
                        outline
                        color="primary"
                        onClick={onClickAmountChange}
                    >
                        +
                    </Button>
                </div>
            </div>
        )
    );
};

export default ListItem;
