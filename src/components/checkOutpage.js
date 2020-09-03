import React, { Component, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import card from "../assets/brand/cards.svg";
import paystack from "../assets/brand/paystack.svg";
import { DataContext } from "./productsContext";
import CheckOutForm from "./CheckOutForm";

function removeKobo(amt) {
  let newAmt = amt.toString();
  return newAmt.slice(0, -2);
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
    window.scrollTo(0, 0);
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

            <div className="row">
              <div className="col-12 col-md-7">
                <CheckOutForm />
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
                            <img src={item.src} alt={item.title} class="img-fluid" />
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
