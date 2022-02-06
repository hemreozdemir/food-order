import React, { useState } from "react";

// ** 3rd party components
import { Button } from "reactstrap";

const ListItem = ({ item, changeAmount }) => {
    const [amount, setAmount] = useState(1);

    const onClickAmountChange = (e) => {
        if (e.target.innerText === "+") {
            changeAmount(item.id, "+");
        } else {
            if (item.amount === 0) {
                changeAmount(item.id);
            } else {
                changeAmount(item.id, "-");
            }
        }
    };
    return (
        <div className="cart-item d-sm-flex justify-content-between">
            <div className="food-info-cart d-flex">
                <div className="food-properties">
                    <h3 className="food-name-cart">{item.name}</h3>
                    <h6 className="food-price-cart">{item.price}</h6>
                </div>
                <h6 className="food-amount-cart">x {item.amount}</h6>
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
    );
};

export default ListItem;
