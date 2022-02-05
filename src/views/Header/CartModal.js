import React from "react";

// ** Components
import List from "./CartList/List";

// ** 3rd party
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// ** Styles
import "../../assests/css/cart-modal.css";

const CartModal = ({ isOpen, toggleModal }) => {
    return (
        <Modal isOpen={true} toggle={toggleModal} className="cart-modal">
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
                    <Button color="success">Order</Button>{" "}
                    <Button color="danger" outline onClick={toggleModal}>
                        Cancel
                    </Button>
                </div>
            </ModalFooter>
        </Modal>
    );
};

export default CartModal;
