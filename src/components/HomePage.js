import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { DataContext } from "./productsContext";
import CartModal from "./CartModal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../placeholder.css";
import "../bootstrap.min.css";
import "../index.css";

function removeKobo(amt) {
  let newAmt = amt.toString();
  return newAmt.slice(0, -2);
}

export class HomePage extends Component {
  static contextType = DataContext;

  openModal = () => {
    this.setState({ modalShow: true });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { products } = this.context;

    return (
      <React.Fragment>
        {/* ------------Welcome Image ------------ */}
        <section className="py-5 welcome-image img-fluid bg-accent">
          <div className="container py-5 no-opacity">
            <div className="row pt-md-5 pb-lg-5 justify-content-center">
              <div className="col-xl-7 col-lg-8 col-md-10 text-center py-xl-3 w-100 py-auto">
                <h1 className="pb-sm-3 heading display-3 font-weight-bolder text-light">
                  Welcome to the
                  <br />
                  Home of Superfoods in Nigeria.
                </h1>
                <span className="d-inline-block h5 text-light font-weight-bold mx-2">Healthy.</span>
                <span className="d-inline-block h3 text-light font-weight-bold mx-2">
                  Affordable.
                </span>
                <span className="d-inline-block h4 text-light font-weight-bold mx-2">Fresh</span>
                <span className="d-inline-block h3 text-light font-weight-bold mx-2">
                  Farm-sourced
                </span>
                <span className="d-inline-block h6 text-light font-weight-bold mx-2">
                  Packaged with love.
                </span>
                <span className="d-inline-block h3 text-light font-weight-bold mx-2">
                  Delicious
                </span>
                <span className="d-inline-block h5 text-light font-weight-bold mx-2">Fitfam.</span>
                <span className="d-inline-block h4 text-light font-weight-bold mx-2">Vegan</span>
                <span className="d-inline-block text-light font-weight-bold mx-2">World-wide</span>
              </div>
            </div>
          </div>
        </section>
        {/* ----------------- Products -------------- */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                {/* ------ Heading --------- */}
                <h1 className="heading mb-5 text-center display-4">Products</h1>
              </div>
            </div>
            <div className="row">
              {products.map((product) => (
                <div className="col-12 col-md-4" key={product._id}>
                  <div className="card mb-5 shadow p-2">
                    <Link to={`/${product._id}`}>
                      <LazyLoadImage
                        src={product.src}
                        className="card-img"
                        alt={product.title}
                        effect="blur"
                        placeholderSrc={product.src}
                      />
                    </Link>

                    <div className="card-body px-0">
                      <div className="mb-3">
                        <Link to={`/${product._id}`} className="text-body text-decoration-none">
                          <h4 className="heading">{product.title}</h4>
                        </Link>
                      </div>

                      <div className="d-flex justify-content-between">
                        <h6 className="text-orange font-weight-bold">
                          &#8358;{removeKobo(product.price)}
                        </h6>
                        <div>
                          <button
                            type="submit"
                            className="btn btn-sm btn-orange text-white mb-2"
                            onClick={() => this.context.addCart(product._id, this.openModal)}>
                            Add to Cart&nbsp;
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="#fff"
                              width="16px"
                              className="ml-2">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CartModal show={this.setState.modalShow} onHide={() => this.setState({ modalShow: false })} />
      </React.Fragment>
    );
  }
}

export default HomePage;
