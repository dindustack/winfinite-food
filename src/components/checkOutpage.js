import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import card from "../assets/brand/cards.svg";
import paystack from "../assets/brand/paystack.svg";
import { DataContext } from "./productsContext";
import Form from "react-bootstrap/Form";
// import CheckOutForm from "./CheckOutForm";

export class CheckOutPage extends Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    // this.isLoaded = false;

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      address: "",
    };

    this.isLoaded = false;
  }

  handleFirstnameChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };

  handleLastnameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handlePhonenumberChange = (event) => {
    this.setState({
      phonenumber: event.target.value,
    });
  };
  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/api/sendemail.php",
      headers: { "content-type": "application/json", "Access-Control-Allow-Origin": "*" },
      // credentials: "include",
      data: this.state,
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    // try {
    //   e.preventDefault();

    //   console.log(this.state);
    //   const data = await axios({
    //     method: "POST",
    //     url: "https://cors-anywhere.herokuapp.com/http://winfinitefoods.com/api/sendemail.php",
    //     headers: { "content-type": "application/json" },
    //     data: this.state,
    //   });

    //   console.log(data);

    //   // console.log(this.state.firstname);
    //   // console.log(this.state.lastname);
    //   // console.log(this.state.email);
    //   // console.log(this.state.phonenumber);
    //   // console.log(this.state.address);
    // } catch (err) {
    //   // console.log(err);
    //   throw err;
    // }
  };

  componentDidMount() {
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
        alert("success. transaction ref is " + response.reference);
      },
      // onClose: function () {
      //   alert("window closed");
      // },
    };
    const handler = window.PaystackPop.setup(options);
    handler.openIframe();
  }

  render() {
    const { cart, subtotal } = this.context;
    const { firstname, lastname, email, phonenumber, address } = this.state;

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
                <Form onSubmit={this.handleSubmit}>
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
                          onChange={this.handleFirstnameChange}
                          required
                          // ref={register({ required: true, maxLength: 80 })}
                        />
                        {/* {errors.firstname && (
                          <p style={{ color: "red" }}>{errors.firstname.message}</p>
                        )} */}
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
                          onChange={this.handleLastnameChange}
                          required
                          // ref={register({ required: true, maxLength: 100 })}
                        />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
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
                          onChange={this.handleEmailChange}
                          required
                          // ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                        />
                        {/* <Form.Control.Feedback type="invalid">
                          Please provide a valid email.
                        </Form.Control.Feedback> */}
                      </Form.Group>
                    </div>

                    {/* -- Phone Number--- */}
                    <div className="col-12 col-md-6">
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number *</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phonenumber"
                          value={phonenumber}
                          placeholder="Enter your phone number"
                          onChange={this.handlePhonenumberChange}
                          required
                          // ref={register({ required: true, minLength: 6, maxLength: 12 })}
                        />

                        {/* <Form.Control.Feedback type="invalid">
                          Please provide a valid phone number.
                        </Form.Control.Feedback> */}
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
                          onChange={this.handleAddressChange}
                          // required
                          // ref={register({ required: true })}
                        />
                        {/* <Form.Control.Feedback type="invalid">
                          Please provide a valid address.
                        </Form.Control.Feedback> */}
                      </Form.Group>
                    </div>
                  </div>

                  <button>Click me</button>
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
                        <span>VAT (7.5%)</span>{" "}
                        <span className="ml-auto">&#8358;{0.075 * subtotal}</span>
                      </li>
                      <li className="list-group-item d-flex font-size-lg font-weight-bold">
                        <span>Total</span>{" "}
                        <span id="amount" className="ml-auto">
                          &#8358;{subtotal + 0.075 * subtotal}
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
                {firstname === "" ||
                lastname === "" ||
                email === "" ||
                phonenumber === "" ||
                address === "" ? (
                  <button className="btn btn-block btn-dark mb-5" disabled>
                    Please fill out the form
                  </button>
                ) : (
                  <button
                    className="btn btn-block btn-dark mb-5"
                    onClick={() => {
                      if (this.isLoaded) {
                        this.payNow(email, subtotal);
                      } else {
                        alert(
                          "Unable to pay now. Make sure you're connected to the internet and don't have ADBlock turned on for this website."
                        );
                      }
                    }}>
                    Place Order
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default CheckOutPage;
