import React from "react";

// ** third party components
import { ShoppingCart } from "react-feather";

// ** image
import mealsImage from "../assests/images/meals.jpg";

// ** styles
import "../assests/css/header.css";
import { Badge } from "reactstrap";

const Header = () => {
    return (
        <React.Fragment>
            <header className="header">
                <Badge className="cart-badge" pill color="secondary">
                    <ShoppingCart className="shopping-cart-icon" width={20} />{" "}
                    <spa className="cart-badge-text">Your Cart</spa>
                    <Badge className="item-number-badge" pill color="danger">
                        1
                    </Badge>
                </Badge>
            </header>
            <div className="header-image-container">
                <img className="header-image" src={mealsImage} alt="imaj" />
            </div>
        </React.Fragment>
    );
};

export default Header;
