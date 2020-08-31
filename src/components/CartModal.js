import React from "react";
import { DataContext } from "./productsContext";
import Modal from "react-bootstrap/Modal";

const CartModal = (props) => {
  const { cart, subtotal, total } = React.useContext(DataContext);

  return (
    <React.Fragment>
      <Modal {...props} className="modal fade" dialogClassName="vh-100 my-0 mr-0">
        <Modal.Header className="text-center" closeButton>
          <h4>Cart ({cart.length})</h4>
        </Modal.Header>
        <Modal.Body>
          <div className="scrollbar-inner">
            {cart.length > 0 ? (
              cart.map((product) => (
                <div className="list-group list-group-flush" key={product._id}>
                  <a href="action" className="list-group-item list-group-item-action">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="avatar-parent-child">
                          <img alt="..." src="..." className="img-fluid" />
                        </div>
                      </div>
                      <div className="flex-fill ml-3">
                        <h6 className="text-sm mb-0">Product Name {product._id}</h6>
                        <p className="text-sm mb-0">Quantity {product._id}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <p>Empty Cart</p>
            )}
            <p>{subtotal}</p>
            <p>{total}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default CartModal;
