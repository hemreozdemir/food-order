import React, { useContext } from "react";

// ** Components
import List from "./CartList/List";

// ** 3rd party
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// ** Styles
import "../../assests/css/cart-modal.css";

// ** Store
import { MainContext } from "../../store/Store";

// ** Domain
import { DUMMY_FOODS } from "../../domain/MealsList";

// ** utility imports
import { toastError, toastSuccess } from "../../utility/toastUtil";
import { isObjectEmpty } from "../../utility/collectionsUtil";

const CartModal = ({ isOpen, toggleModal }) => {
    const { state, dispatch } = useContext(MainContext);

    const calculateTotalPrice = () => {
        let itemsIds = Object.keys(state.cartItems);
        let totalPrice = 0;
        DUMMY_FOODS.forEach((element) => {
            if (itemsIds.includes(element.id)) {
                totalPrice += element.price * state.cartItems[element.id];
            }
        });
        return totalPrice;
    };

    const clearCart = () => {
        dispatch({ cartItems: {} });
    };

    const onOrder = () => {
        if (!isObjectEmpty(state.cartItems)) {
            toastSuccess("Order completed successfully");
            clearCart();
        } else {
            toastError("No meals in cart");
        }
        toggleModal();
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
                    <h3>{calculateTotalPrice()}TL</h3>
                </div>
                <div className="modal-action-buttons">
                    <Button color="success" onClick={onOrder}>
                        Order
                    </Button>{" "}
                    <Button color="danger" outline onClick={toggleModal}>
                        Cancel
                    </Button>
                </div>
            </ModalFooter>
        </Modal>
    );
};

export default CartModal;
