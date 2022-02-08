import React, { useContext } from "react";

// ** Components
import List from "./CartList/List";

// ** 3rd party
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// ** Styles
import "../../assests/css/cart-modal.css";

// ** Store
import { MainContext } from "../../Store/Store";

// ** Domain
import { DUMMY_FOODS } from "../../Domain/MealsList";

const CartModal = ({ isOpen, toggleModal, onOrder }) => {
    const { state } = useContext(MainContext);

    const calculateTotalPrice = () => {
        let itemsIds = Object.keys(state.cartItems);
        let totalPrice = 0;
        DUMMY_FOODS.forEach((element) => {
            if (itemsIds.includes(element.id)) {
                console.log(element.price);
                console.log(state.cartItems[element.id]);
                totalPrice += element.price * state.cartItems[element.id];
            }
        });
        console.log(totalPrice);
    };

    return (
        <Modal isOpen={isOpen} toggle={toggleModal} className="cart-modal">
            {/* <ModalHeader toggle={toggleModal}>Modal title</ModalHeader> */}
            <ModalBody>
                <List />
            </ModalBody>
            <ModalFooter className="d-block">
                <div className="cart-summary d-flex justify-content-between">
                    <h3>Total Amount</h3>
                    <h3>80TL</h3>
                </div>
                <div className="modal-action-buttons">
                    <Button color="success" onClick={onOrder}>
                        Order
                    </Button>{" "}
                    <Button color="danger" outline onClick={toggleModal}>
                        Cancel
                    </Button>
                    <button
                        onClick={() => {
                            calculateTotalPrice();
                        }}
                    >
                        asdsa
                    </button>
                </div>
            </ModalFooter>
        </Modal>
    );
};

export default CartModal;
