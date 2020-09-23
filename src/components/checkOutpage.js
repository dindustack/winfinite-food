import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import card from "../assets/brand/cards.svg";
import paystack from "../assets/brand/paystack.svg";
import { DataContext } from "./productsContext";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import logo from "../assets/img/winfinite-logo.png";
import axios from "axios";

const CheckOutpage = () => {
  const dataC = useContext(DataContext);

  const [profile, setProfile] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loadingStates, setLoadingStates] = useState({
    isLoaded: false,
    paymentComplete: false,
    show: false,
    loading: false,
  });

  useEffect(() => {
    let script = document.createElement("script");
    script.src = `https://js.paystack.co/v1/inline.js`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      setLoadingStates({ ...loadingStates, isLoaded: true });
    };
    script.onerror = () => {
      setLoadingStates({ ...loadingStates, isLoaded: false });
    };
    window.scrollTo(0, 0);
  }, []);

  const handleReset = () => {
    setProfile({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  const payNow = (email, amount) => {
    let formData = new FormData();
    formData.append("firstname", profile.firstname);
    formData.append("lastname", profile.lastname);
    formData.append("email", profile.email);
    formData.append("phone", profile.phone);
    formData.append("address", profile.address);

    let options = {
      key: "pk_test_2ef9377963e79603b90ca45d7565d50f51d7fb47",
      email: email,
      amount: amount * 100,
      currency: "NGN",
      ref: "WNF" + Math.floor(Math.random() * 1000000000 + 1),
      metadata: {
        custom_fields: [
          {
            display_name: "Payment Type",
            variable_name: "payment_type",
            value: "COMPLETION",
          },
        ],
      },
      callback: function (response) {
        setLoadingStates({ ...loadingStates, loading: true, show: true });

        //  * Unfortunately ATM, the server is having CORS issues but the emails do get sent.
        //  */
        axios
          .post("/sendemail.php", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((data) => {
            setLoadingStates({ ...loadingStates, loading: false, paymentComplete: true });
            // Available responses: data => data.data.success| data.data.error
            console.log(data);
            return;
          })
          .catch((err) => {
            return;
          });
      },
    };
    const handler = window.PaystackPop.setup(options);
    handler.openIframe();
  };

  const handleClose = () => setLoadingStates({ ...loadingStates, show: false });
  const handleShow = () => setLoadingStates({ ...loadingStates, show: true });

  const { cart, subtotal, clearCart } = dataC;
  const { firstname, lastname, email, phone, address } = profile;

  return (
    <React.Fragment>
      <Helmet>
        <title>Checkout &mdash; Shop at Winfinite Foods</title>
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
                <li className="breadcrumb-item">
                  <Link to="/cart" className="text-muted text-decoration-none">
                    Shopping Cart
                  </Link>
                </li>
                <li className="breadcrumb-item active">Checkout</li>
              </ol>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Checkout content */}
      <section className="pt-5 pb-5 pb-md-0">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* ---- Heading ---- */}
              <h3 className=" font-weight-bold display-4 heading mb-4 mb-md-0">Checkout</h3>
            </div>
          </div>

          {!loadingStates.paymentComplete && (
            <div className="row">
              <div className="col-12 col-md-7">
                <Form id="checkout-form">
                  {/* -- Heading -- */}
                  <h4 className="mb-5 font-weight-bold heading">Payment Details</h4>

                  {/* ---- Payment Details  */}
                  <div className="row mb-5">
                    <div className="col-12 col-md-6">
                      {/* -- First Name */}
                      <Form.Group className="mb-3">
                        <Form.Label>First Name *</Form.Label>
                        <Form.Control
                          type="text"
                          value={firstname}
                          name="firstname"
                          placeholder="Enter your first name"
                          onChange={(e) => setProfile({ ...profile, firstname: e.target.value })}
                        />
                      </Form.Group>
                    </div>

                    {/* -- Last Name */}
                    <div className="col-12 col-md-6">
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastname"
                          value={lastname}
                          placeholder="Enter your last name"
                          onChange={(e) => setProfile({ ...profile, lastname: e.target.value })}
                        />
                      </Form.Group>
                    </div>

                    {/* --  Email -- */}
                    <div className="col-12 col-md-6">
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          placeholder="you@example.com"
                          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        />
                      </Form.Group>
                    </div>

                    {/* -- Phone Number--- */}
                    <div className="col-12 col-md-6">
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number *</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={phone}
                          placeholder="Enter your phone number"
                          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        />
                      </Form.Group>
                    </div>

                    {/* -------- Address ------ */}
                    <div className="col-12">
                      <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          type="text"
                          name="address"
                          value={address}
                          rows="3"
                          placeholder="Enter your address..."
                          onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                          required
                        />
                      </Form.Group>
                    </div>
                  </div>
                </Form>
              </div>

              <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
                {/* -- Heading -- */}
                <h6 className="mb-5">Ordered Items ({cart.length})</h6>

                {/* !-- Divider -- */}
                <hr className="my-5" />
                {/* ------- Checkout items --------- */}
                <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x mb-5">
                  {cart.map((item) => (
                    <li className="list-group-item" key={item._id}>
                      <div className="row align-items-center">
                        <div className="col-4">
                          {/* -- Product Image -- */}
                          <Link to={`/${item._id}`}>
                            <img src={item.src} alt={item.title} className="img-fluid" />
                          </Link>
                        </div>
                        <div className="col">
                          {/* -- Product description -- */}
                          <p className="mb-4 small font-weight-bold">
                            <Link
                              to={`/${item._id}`}
                              className="heading text-decoration-none h5 text-blue">
                              {item.title}
                            </Link>{" "}
                            <br />
                            <span className="text-muted">{item.price * item.count}</span>
                          </p>

                          {/* -- Text -- */}
                          <div className="font-size-sm text-muted">Quantity: {item.count}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* -- Card -- */}
                <div className="card mb-5 bg-light">
                  <div className="card-body">
                    <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                      <li className="list-group-item d-flex font-size-lg font-weight-bold">
                        <span>Total</span> <span className="ml-auto">&#8358;{subtotal}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* -- Heading -- */}
                <h4 className="heading font-weight-bold">Payment</h4>

                {/* -- Payment Options -- */}
                <div className="col-12 col-md-9 list-group list-group-sm mb-2">
                  <div className="list-group-item">
                    {/* <!-- Label --> */}
                    <label
                      className="custom-control-label font-size-sm text-body text-nowrap"
                      htmlFor="checkoutPaymentCard">
                      Credit Card <img className="ml-2" src={card} alt="card-avatar" />{" "}
                      <img className="ml-2" src={paystack} alt="card-avatar" width="16px" />
                    </label>
                  </div>
                </div>

                {/* -- Button -- */}
                {firstname === "" ||
                lastname === "" ||
                email === "" ||
                phone === "" ||
                address === "" ? (
                  <button className="btn btn-block btn-dark mb-5" disabled>
                    Please fill out the form
                  </button>
                ) : (
                  <button
                    className="btn btn-block btn-dark mb-5"
                    onClick={() => {
                      if (loadingStates.isLoaded) {
                        payNow(email, subtotal);
                      } else {
                        return (
                          <Toast>
                            <Toast.Body>
                              Unable to pay now. Make sure you're connected to the internet and
                              don't have ADBlock turned on for this website.
                            </Toast.Body>
                          </Toast>
                        );
                      }
                    }}>
                    Place Order
                  </button>
                )}
              </div>
            </div>
          )}

          {loadingStates.paymentComplete && <p>Payment Complete</p>}
        </div>
      </section>

      <Modal
        show={loadingStates.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal fade"
        dialogClassName="vh-100 my-0 mr-0">
        <Modal.Body>
          <div className="text-center py-2 mb-3 ml-2">
            {loadingStates.loading ? (
              <div className="container">
                <div className="mb-3">
                  <Link to="/" className="navbar-brand text-dark">
                    <img
                      src={logo}
                      alt="winfinite-logo"
                      width="50"
                      height="50"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="text-center">
                  <h4 className="font-weight-bolder">Receipt</h4>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="table-responsive">
                      <table className="table mt-4">
                        <thead>
                          <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price (&#8358;)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((product) => (
                            <tr key={product._id}>
                              <td>{product.title}</td>
                              <td>{product.count}</td>
                              <td>{product.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              "Order complete"
            )}
          </div>
        </Modal.Body>

        <Modal.Footer className="d-inline-flex justify-content-between modal-footer border-0">
          <div>
            <span className="font-weight-bold">Total:</span>{" "}
            <span className="ml-auto font-weight-bold">&#8358;{subtotal}</span>
          </div>
          <div className="justify-content-center">
            <Link to="/" className="text-decoration-none">
              <button
                type="submit"
                className="btn btn-block btn-success mb-2"
                onClick={() => {
                  clearCart();
                  handleReset();
                }}>
                <svg viewBox="0 0 20 20" fill="#ffffff" width="16px" className="mr-2">
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Continue Shopping{" "}
              </button>
            </Link>
          </div>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default CheckOutpage;
