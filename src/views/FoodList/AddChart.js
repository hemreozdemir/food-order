import React from "react";

// ** 3rd party components
import { Input, Button } from "reactstrap";

const AddChart = () => {
    const onChangeAmount = (e) => {
        console.log(e.target.value);
    };

    const onAddCart = () => {
        console.log("meal added to cart");
    };

    return (
        <div className="food-add-part">
            <div className="amount-info d-flex">
                <h5 className="amount-text">Amount</h5>
                <Input
                    className="amount-input"
                    defaultValue={1}
                    onChange={onChangeAmount}
                />
            </div>
            <Button className="add-button" outline onClick={onAddCart}>
                {" "}
                + Add{" "}
            </Button>
        </div>
    );
};

export default AddChart;
