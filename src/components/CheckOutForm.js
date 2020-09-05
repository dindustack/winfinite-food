import React, { useState } from "react";
import emailjs from 'emailjs-com';
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";


const API_KEY = process.env.REACT_APP_EMAIL_JS_API_KEY
const TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID

const sendEmail = e => {
    e.preventDefault()

    emailjs
    .sendForm('gmail', API_KEY.TEMPLATE_ID, e.target, API_KEY.USER_ID)
    .then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
    )
}

function  CheckOutForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
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
                ref={register({required: true, maxLength: 80})}
              />
              {errors.firstname && (
          <p style={{ color: "red" }}>{errors.firstname.message}</p>
        )}
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
                ref={register({required: true, maxLength: 100})} 
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
                id="email"
                name="email"
                placeholder="you@example.com"
                ref={register({required: true, pattern: /^\S+@\S+$/i})}
              />
              <Form.Control.Feedback type="invalid">
              Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          {/* -- Phone Number--- */}
          <div className="col-12 col-md-6">
            <Form.Group className="mb-3">
              <Form.Label>Phone Number *</Form.Label>
              <Form.Control
                type="tel"
                name="phonenumber"
                placeholder="Enter your phone number"
                ref={register({required: true, minLength: 6, maxLength: 12})}
              />

              <Form.Control.Feedback type="invalid">
              Please provide a valid phone number.
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
                ref={register({ required: true })}
              />
              <Form.Control.Feedback type="invalid">
              Please provide a valid address.
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>
      </Form>
    );
  }
  
  export default CheckOutForm;