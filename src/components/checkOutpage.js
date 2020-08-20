import React, { Component, useEffect, useRef } from 'react';
import {  Link } from "react-router-dom";
import { DataContext } from './productsContext';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as yup from "yup";
import '../bootstrap.min.css';
import '../index.css';
import card from '../assets/brand/cards.svg';
import paystack from '../assets/brand/paystack.svg';



const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  address: yup.string().required(),
  phoneNumber: yup.string().required(),
});

const Checkout = () => {
  const isLoaded = useRef(false);

        const payNow = (email,amount) => {
            let options = {
              key: "pk_test_2ef9377963e79603b90ca45d7565d50f51d7fb47",
              email: email,
              amount: amount,
              currency: "NGN",
              ref: " " + Math.floor(Math.random() * 1000000000 + 1),
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
                alert('success. transaction ref is ' + response.reference);
            },
            onClose: function () {
                alert('window closed');
            }
              
            };
            const handler = window.PaystackPop.setup(options);
            handler.openIframe();
          };

        useEffect(() => {
            let script = document.createElement("script");
            script.src = `https://js.paystack.co/v1/inline.js`;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = () => {
              isLoaded.current = true;
            };
            script.onerror = () => {
              isLoaded.current = false;
            };
            
          }, []);
}


export class CheckOutPage extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getSubTotal();
    }

    render() {
        const {cart,subtotal} = this.context;
           
      return(
          <React.Fragment>
              {/* ----------- Bread Crumb ------- */}
              <nav aria-label="breadcrumb" className="pt-5 mt-md-5 bg-white">
                <div className="container"> 
                    <div className="row">
                      <div className="col-12">

                        {/* BreadCrumb */}
                          <ol className="breadcrumb mb-0 small text-muted bg-white">
                            <li className="breadcrumb-item">
                                <Link to="/" className="text-muted text-decoration-none">Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                            <Link to="/cart" className="text-muted text-decoration-none">Shopping Cart</Link>
                            </li>
                            <li className="breadcrumb-item active">
                                Checkout
                            </li>
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

                    {/* =========== Form =========== */}
                    <div className="row">
                        <div className="col-12 col-md-7">

                          <Formik
                          validationSchema={schema}
                          onSubmit={console.log}
                          >
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
                                        placeholder="Enter your first name"
                                        onChange={handleChange}
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
                                        placeholder="Enter your last name"
                                        onChange={handleChange}
                                        isValid={touched.lastName && !errors.lastName}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                  </Form.Group>
                                  </div>

                                  {/* --  Email -- */}
                                  <div className="col-12 col-md-6">
                                    <Form.Group className="mb-3" id="email">
                                    <Form.Label>Email *</Form.Label>
                                    <Form.Control
                                    type="email"
                                    placeholder="you@example.com"
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
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
                                        type="text"
                                        placeholder="Enter your phone number"
                                        onChange={handleChange}
                                        isInvalid={!!errors.phoneNumber}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.phoneNumber}
                                    </Form.Control.Feedback>
                                  </Form.Group>

                                  </div>

                                  {/* -------- Address ------ */}
                                  <div className="col-12">
                                  <Form.Group className="mb-3" >
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control as="textarea"
                                        type="text"
                                        rows="3"
                                        placeholder="Enter your address..."
                                        onChange={handleChange}
                                        isInvalid={!!errors.address}
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

                            {/* -- Card showing total amount -- */}
                            <div className="card mb-5 bg-light">
                              <div className="card-body">
                                  <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                                  
                                    <li className="list-group-item d-flex font-size-lg font-weight-bold">
                                        <span>Total</span> <span id="amount" className="ml-auto">&#8358;{subtotal}</span>
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
                                    <label className="custom-control-label font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentCard">
                                    Credit Card <img className="ml-2" src={card} alt="card-avatar" /> <img className="ml-2" src={paystack} alt="card-avatar" width="16px" /> 
                                    </label>

                                </div>
                            </div>

                            {/* -- Button -- */}
                            <button className="btn btn-block btn-dark mb-5"
                            onClick={() => {
                                if (isLoaded.current) {
                                  payNow();
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