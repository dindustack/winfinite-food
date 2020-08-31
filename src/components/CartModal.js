import React, { Component } from "react";
import { DataContext } from "./productsContext";
import Modal from "react-bootstrap/Modal";

const CartModal = (props) => {
  const { cart, increase, reduction, removeProduct, subtotal, total } = React.useContext;

  return (
    <React.Fragment>
      <Modal
        {...props}
        dialogClassName="my-0 mr-0 vh-100"
        contentClassName="h-100"
        show
        scrollable={true}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default CartModal;
