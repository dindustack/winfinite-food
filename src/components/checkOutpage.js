import { Formik } from "formik";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import card from "../assets/brand/cards.svg";
import paystack from "../assets/brand/paystack.svg";
import "../bootstrap.min.css";
import "../index.css";
import { DataContext } from "./productsContext";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  address: yup.string().required(),
  phoneNumber: yup.string().required(),
});

function removeKobo(amt) {
  let newAmt = amt.toString();
  return newAmt.slice(0, -1);
}

export class CheckOutPage extends Component {
  static contextType = DataContext;
  super(props) {
    this.isLoaded = false;
  }

  componentDidMount() {
    this.context.getSubTotal();
    let script = document.createElement("script");
    script.src = `https://js.paystack.co/v1/inline.js`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      this.isLoaded = true;
    };
    script.onerror = () => {
      this.isLoaded = false;
    };
  }

  payNow(email, amount) {
    let options = {
      key: "pk_test_2ef9377963e79603b90ca45d7565d50f51d7fb47",
      email: email,
      amount: amount,
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
        alert("success. transaction ref is " + response.reference);
      },
      onClose: function () {
        alert("window closed");
      },
    };
    const handler = window.PaystackPop.setup(options);
    handler.openIframe();
  }

  render() {
    const { cart, subtotal } = this.context;

    return (
      <React.Fragment>
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

            <div className="row">
              <div className="col-12 col-md-7">
                <Formik validationSchema={schema} onSubmit={console.log}>
                  {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
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
                              name="firstname"
                              placeholder="Enter your first name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              // value={values.name}
                              isValid={touched.firstName && !errors.firstName}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        {/* -- Last Name */}
                        <div className="col-12 col-md-6">
                          <Form.Group className="mb-3">
                            <Form.Label>Last Name *</Form.Label>
                            <Form.Control
                              type="text"
                              name="lastname"
                              placeholder="Enter your last name"
                              onChange={handleChange}
                              isValid={touched.lastName && !errors.lastName}
                              onBlur={handleBlur}
                              // value={values.name}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        {/* --  Email -- */}
                        <div className="col-12 col-md-6">
                          <Form.Group className="mb-3">
                            <Form.Label>Email *</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="you@example.com"
                              onChange={handleChange}
                              isInvalid={!!errors.email}
                              onBlur={handleBlur}
                              // value={values.email}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.email}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        {/* -- Phone Number--- */}
                        <div className="col-12 col-md-6">
                          <Form.Group className="mb-3">
                            <Form.Label>Phone Number *</Form.Label>
                            <Form.Control
                              type="number"
                              name="phone"
                              placeholder="Enter your phone number"
                              onChange={handleChange}
                              isInvalid={!!errors.phoneNumber}
                              onBlur={handleBlur}
                              // value={values.phone}
                            />

                            <Form.Control.Feedback type="invalid">
                              {errors.phoneNumber}
                            </Form.Control.Feedback>
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
                              rows="3"
                              placeholder="Enter your address..."
                              onChange={handleChange}
                              isInvalid={!!errors.address}
                              onBlur={handleBlur}
                              // value={values.address}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.address}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>

              <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
                {/* -- Heading -- */}
                <h6 className="mb-5">Ordered Items ({cart.length})</h6>

                {/* !-- Divider -- */}
                <hr className="my-5" />
                {/* ------- Checkout items --------- */}
                <ul class="list-group list-group-lg list-group-flush-y list-group-flush-x mb-5">
                  {cart.map((item) => (
                    <li class="list-group-item" key={item._id}>
                      <div class="row align-items-center">
                        <div class="col-4">
                          {/* -- Product Image -- */}
                          <Link to="/:id">
                            <img src={item.src} alt="..." class="img-fluid" />
                          </Link>
                        </div>
                        <div class="col">
                          {/* -- Product description -- */}
                          <p class="mb-4 small font-weight-bold">
                            <Link to="/:id" class="heading text-decoration-none h5 text-blue">
                              {item.title}
                            </Link>{" "}
                            <br />
                            <span class="text-muted">{item.price * item.count}</span>
                          </p>

                          {/* -- Text -- */}
                          <div class="font-size-sm text-muted">Quantity: {item.count}</div>
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
                        <span>Total</span>{" "}
                        <span id="amount" className="ml-auto">
                          &#8358;{removeKobo(subtotal)}
                        </span>
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
                <button
                  className="btn btn-block btn-dark mb-5"
                  onClick={() => {
                    if (this.isLoaded) {
                      this.payNow("silvia@mds.com", subtotal);
                    } else {
                      alert(
                        "Unable to pay now. Make sure you're connected to the internet and don't have ADBlock turned on for this website."
                      );
                    }
                  }}>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default CheckOutPage;
