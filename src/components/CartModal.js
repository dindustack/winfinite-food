import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./productsContext";
import Modal from "react-bootstrap/Modal";


const CartModal = (props) => {
  const { cart, subtotal, total } = React.useContext(DataContext);

  console.log(subtotal);
  console.log(cart);
  console.log(total);

  // useEffect(() => {
  //   subtotal
  //   console.log("ada");
  // }, []);

  return (
    <React.Fragment>
      <Modal {...props} className="modal fade" dialogClassName="vh-100 my-0 mr-0">
        <Modal.Header className="text-center" closeButton>
          <h4>Cart ({cart.length})</h4>
        </Modal.Header>
        <Modal.Body>
          <div className="scrollbar-inner">
            <ul class="list-group list-group-lg list-group-flush-y list-group-flush-x mb-5">
              {cart.length > 0 ? (
                cart.map((product) => (
                  <li class="list-group-item" key={product._id}>
                    <div class="row align-items-center">
                      <div class="col-4">
                        {/* -- Product Image -- */}
                        <Link to="/:id">
                          <img src={product.src} alt={product.title} className="img-fluid" />
                        </Link>
                      </div>
                      <div class="col">
                        {/* -- Product description -- */}
                        <p class="mb-4 small font-weight-bold">
                          <Link to="/:id" class="heading text-decoration-none h5 text-blue">
                            {product.title}
                            <span className="ml-2 text-sm heading">({product.weight})</span>
                          </Link>{" "}
                          <br />
                          <span class="text-orange">&#8358;{product.price}</span>
                        </p>

                        {/* -- Text -- */}
                        <div class="font-size-sm text-muted">Quantity: {product.count}</div>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <p>Empty Cart</p>
              )}
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-inline-flex justify-content-between">
          <div>
            <span className="font-weight-bold">Subtotal:</span>{" "}
            <span className="ml-auto small">&#8358;{subtotal}</span>
          </div>
          <div className="justify-content-center">
            <Link to="/cart" className="text-decoration-none">
              <button type="submit" className="btn btn-block btn-success mb-2">
                Proceed to Checkout{" "}
                <svg viewBox="0 0 20 20" fill="#fff" width="16px" className="ml-2">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
          {/* <button onClick={props.onHide}>Close</button> */}
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default CartModal;
