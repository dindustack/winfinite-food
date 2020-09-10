import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { DataContext } from "./productsContext";
import EmptyCart from "./EmptyCart";
import "../bootstrap.min.css";
import "../index.css";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export class ShoppingCartPage extends Component {
  static contextType = DataContext;

  componentDidMount() {
    this.context.closeModal();
    window.scrollTo(0, 0);
  }

  render() {
    const { cart, increase, reduction, removeProduct, subtotal, total, clearCart} = this.context;
    if (cart.length > 0) {
      return (
        <React.Fragment>
          <Helmet>
            <title>Shopping Cart &mdash; Shop at Winfinite Foods</title>
          </Helmet>
          {/* ----------- Bread Crumb ------- */}
          <nav aria-label="breadcrumb" className="pt-5 mt-md-5 bg-white">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* BreadCrumb */}
                  <ol className="breadcrumb mb-0 small text-muted bg-white">
                    <li className="breadcrumb-item">
                      <Link to="/" className="text-muted text-decoration-none">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Shopping Cart</li>
                  </ol>
                </div>
              </div>
            </div>
          </nav>

          {/* ----- Shipping Cart Content ------ */}
          <section className="pt-5 pb-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* -- Heading -- */}
                  <h3 className="mb-5 text-center display-4 heading">Shopping Cart</h3>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-7">
                  {/* -- List group -- */}
                  <ul className="list-group list-group-lg list-group-flush-y mb-5">
                    {cart.map((item) => (
                      <li className="list-group-item" key={item._id}>
                        <div className="row align-items-center">
                          <div className="col-3">
                            {/* -- Image --- */}
                            <Link to={`/${item._id}`}>
                              <img src={item.src} alt="product-avatar" className="img-fluid" />
                            </Link>
                          </div>

                          <div className="col mt-md-3 mb-3 mb-md-3">
                            {/* -- Title -- */}
                            <div className="d-flex mb-2 font-weight-bold">
                              <Link
                                to={`/${item._id}`}
                                className="heading text-decoration-none h5 text-blue text-uppercase font-weight-bold">
                                {item.title}
                              </Link>{" "}
                              <span className="ml-auto text-orange font-weight-bold">
                                &#8358;{item.price * item.count}
                              </span>
                            </div>

                            {/* --- Text --- */}
                            <p className="mb-md-5  small text-muted">
                              {item.weight} <br />
                            </p>

                            {/* --- Footer --- */}
                            <div className="d-flex align-items-center">
                              {/* -- Select -- */}
                              <InputGroup className="input-group-sm  w-auto">
                                <InputGroup.Prepend>
                                  <Button
                                    className="btn text-orange large font-weight-bolder"
                                    variant="outline-secondary"
                                    onClick={() => reduction(item._id)}>
                                    {" "}
                                    -{" "}
                                  </Button>
                                </InputGroup.Prepend>

                                <span className="border px-3 pt-2 justify-content-center text-orange font-weight-bolder">
                                  {item.count}
                                </span>
                                <InputGroup.Append>
                                  <Button
                                    className="btn text-orange large font-weight-bolder"
                                    variant="outline-secondary"
                                    onClick={() => increase(item._id)}>
                                    {" "}
                                    +{" "}
                                  </Button>
                                </InputGroup.Append>
                              </InputGroup>

                              {/* -- Remove -- */}
                              <a
                                className="small text-muted text-decoration-none ml-auto"
                                href="#action"
                                onClick={() => removeProduct(item._id)}>
                                <svg viewBox="0 0 20 20" fill="#dc3545" width="26px">
                                  <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-dark" onClick={() => clearCart()}>
                    Remove Cart
                  </button>
                </div>

                <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
                  {/* -- Total -- */}
                  <div className="card mb-5 bg-light">
                    <div className="card-body p-0">
                      <ul className="list-group list-group-md list-group-flush-x">
                        <li className="list-group-item d-flex">
                          <span>Subtotal</span>{" "}
                          <span className="ml-auto small">&#8358;{subtotal}</span>
                        </li>
                        <li className="list-group-item d-flex">
                          <span>Delivery</span> <span className="ml-auto small">&#8358;0</span>
                        </li>
                        <li className="list-group-item d-flex large font-weight-bold">
                          <span>Total</span>{" "}
                          <span className="ml-auto font-size-sm">&#8358;{total + subtotal}</span>
                        </li>
                        <li className="list-group-item small text-center text-muted">
                          Delivery cost calculated at Checkout *
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* -- Button -- */}
                  <Link to="/checkout" className="btn btn-block btn-dark mb-2">
                    Proceed to Checkout
                  </Link>

                  {/* -- Link -- */}
                  <Link to="/" className="btn btn-link btn-sm px-0 text-body text-decoration-none">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="16px" className="mr-2">
                      <path
                        fillRule="evenodd"
                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      );
    } else {
      return <EmptyCart />;
    }
  }
}

export default ShoppingCartPage;
