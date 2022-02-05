import React, { useState } from "react";

// ** 3rd party components
import { Button } from "reactstrap";

const ListItem = () => {
    const [amount, setAmount] = useState(1);

    const onClickAmountChange = (e) => {
        if (e.target.innerText === "+") {
            setAmount(amount + 1);
        } else {
            if (amount === 0) {
                setAmount(0);
            } else {
                setAmount(amount - 1);
            }
        }
    };
    return (
        <div className="d-flex justify-content-between">
            <div className="food-info-cart d-flex">
                <div className="food-properties">
                    <h3 className="food-name-cart">Etli Ekmek</h3>
                    <h6 className="food-price-cart">25TL</h6>
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
    );
};

export default ListItem;
