import React, { useState } from "react";

// ** Components
import CartModal from "./CartModal";

// ** third party components
import { ShoppingCart } from "react-feather";

// ** image
import mealsImage from "../../assests/images/meals.jpg";

// ** styles
import "../../assests/css/header.css";
import { Badge } from "reactstrap";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <React.Fragment>
            <CartModal isOpen={isModalOpen} toggleModal={toggleModal} />
            <header className="header">
                <Badge
                    className="cart-badge"
                    pill
                    color="secondary"
                    onClick={() => toggleModal()}
                >
                    <ShoppingCart className="shopping-cart-icon" width={20} />{" "}
                    <span className="cart-badge-text">Your Cart</span>
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
