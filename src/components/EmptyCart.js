import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const EmptyCart = () => {
  return (
    <React.Fragment>
      <Helmet>
          <title>Empty Cart &mdash; Shop at Winfinite Foods</title>
        </Helmet>
      <section className="mt-5 mb-5">
        <div className="container ">
          <div className="row">
            <div className="col-12">
              {/* -- Heading -- */}
              <h3 className="mt-5 mb-5 text-center display-4 heading">Shopping Cart</h3>
            </div>
          </div>
          {/* ---------- Content ----------- */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
              {/* --- Icon ---- */}
              <div className="mb-5 h1"><span role="img">❤️</span></div>

              {/* --- Heading ---- */}
              <h2 className="mb-5 font-weight-bolder">Your Cart is Empty!</h2>

              {/* -- Link -- */}
              <Link to="/" className="btn btn-link btn-orange btn-sm px-2 font-weight-bold  text-white text-decoration-none mb-5">
                <svg viewBox="0 0 20 20" fill="#fff" width="16px" className="mr-2">
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
};

export default EmptyCart;
