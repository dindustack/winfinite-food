import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { DataContext } from "./productsContext";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabContent from "react-bootstrap/TabContent";
import "../bootstrap.min.css";
import "../index.css";


export class Details extends Component {
  static contextType = DataContext;
  state = {
    product: [],
  };

  getProduct = () => {
    if (this.props.match.params.id) {
      const res = this.context.products;
      const data = res.filter((item) => {
        return item._id === this.props.match.params.id;
      });
      this.setState({ product: data });
    }
  };

  componentDidMount() {
    this.getProduct();
    window.scrollTo(0, 0);
  }

  render() {
    const { product } = this.state;
    const { addCart } = this.context;
    return (
      <React.Fragment>
        <Helmet>
        {product.map((item) => (
          <title className="text-capitalize" key={item._id}>{item.title}  &mdash; Shop at Winfinite Foods</title>
          ))}
        </Helmet>
        {product.map((item) => (
          <div>
            <nav aria-label="breadcrumb" className="py-5 my-md-5 bg-white" key={item._id}>
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
                      <li className="breadcrumb-item active">{item.title}</li>
                    </ol>
                  </div>
                </div>
              </div>
            </nav>

            <section>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        {/* -- Card -- */}
                        <div className="card">
                          {/* <!-- Badge --> */}
                          <div>
                            <span className="badge bg-orange text-uppercase">Available</span>
                          </div>

                          {/* Image Slider */}
                          <div className="mb-4">
                            <Carousel>
                              <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={item.src}
                                  alt="product-avatar"
                                />
                              </Carousel.Item>
                            </Carousel>
                          </div>
                        </div>
                      </div>

                      {/* ------- Product details ------ */}
                      <div className="col-12 col-md-6 pl-lg-5 mb-md-5">
                        <p className="text-muted font-weight-bolder">{item.brand}</p>

                        {/* - Heading -- */}
                        <h3 className="heading display-4 font-weight-bold mt-md-3 mb-2">
                          {item.heading}
                          <span className="display-none ml-2 h6">({item.weight})</span>
                        </h3>

                        {/* -- Price -- */}
                        <div className="mb-5">
                          <span className="ml-1 h5 font-weight-bolder text-orange">
                            &#8358;{item.price}
                          </span>
                        </div>

                        {/* -------- Add to Cart and WishList ------- */}
                        <Form className="mt-5 mt-md-5">
                          <div className="row">
                            <div className="col-12 col-lg-auto">
                              <Link to="/cart" className="btn btn-block btn-success mb-2" onClick={() => addCart(item._id)}>
                                  Add to Cart  <svg fill="none" viewBox="0 0 24 24" stroke="#fff" width="16px" className="ml-2">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                              </svg>

                              </Link>
                            </div> 
                            {/* --- Proceed to checkout ---*/}

                            {/* <div className="col-12 col-lg-auto">
                              <Link to="/checkout" className="text-decoration-none text-white">
                                <button type="submit" className="btn btn-block btn-success mb-2">
                                  Proceed to Checkout{" "}
                                  <svg
                                    viewBox="0 0 20 20"
                                    fill="#fff"
                                    width="16px"
                                    className="ml-2">
                                    <path
                                      fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>
                              </Link>
                            </div> */}
                          </div>
                        </Form>

                        <div className="row pt-5">
                          <div className="col-12">
                            <nav>
                              <Tabs
                                id="uncontrolled-tab"
                                defaultActiveKey="description"
                                className="nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom">
                                <Tab eventKey="description" title="Product">
                                  <TabContent className="tab-pane fade show active">
                                    <div className="row justify-content-center py-5">
                                      <div className="col-12 col-lg-12 col-xl-12">
                                        <div className="row">
                                          <div className="col-12">
                                            {/* <!-- Text --> */}
                                            <p className="text-muted">
                                              {item.content.description.make}
                                            </p>

                                            <hr />
                                            <p className="text-muted">
                                              {item.content.description.use}
                                            </p>

                                            <hr />
                                            <p className="text-muted">
                                              Store in a cool dry place. Oil separation occurs
                                              naturally. Upside down jar for easy stirring. Stir
                                              well with a butter knife and store lid-side up. Once
                                              opened, eat within three months (easy!).
                                            </p>
                                          </div>
                                          
                                        </div>
                                      </div>
                                    </div>
                                  </TabContent>
                                </Tab>

                                {/* -- Ingredients -- */}
                                <Tab eventKey="ingredients" title="Ingredients">
                                  <TabContent className="tab-pane fade show active">
                                    <div className="row justify-content-center py-5">
                                      <div className="col-12 col-lg-12 col-xl-12">
                                        <div className="row">
                                          <div className="col-12">
                                            {/* <!-- Text --> */}

                                            <p className="text-muted">
                                              {item.content.ingredients.condiments}
                                            </p>

                                            <hr />
                                            <p className="text-muted">
                                              Vegan friendly, no sugar added, kosher, plant-based
                                              protein, high in fibre. Keto, natural ingredients,
                                              gluten free, non gmo, dairy free
                                            </p>

                                            <hr />
                                            <p className="text-muted">
                                              You can reuse the empty jar for containment.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </TabContent>
                                </Tab>
                              </Tabs>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default withRouter (Details);
