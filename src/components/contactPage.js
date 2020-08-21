import React from "react";
import { Link } from "react-router-dom";
import "../bootstrap.min.css";
import "../index.css";

function ContactPage() {
  return (
    <React.Fragment>
      {/* ----------- Bread Crumb ------- */}
      <nav aria-label="breadcrumb" className="pt-5 mt-2 mt-md-5 mt-5 bg-white">
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
                <li className="breadcrumb-item active">Contact</li>
              </ol>
            </div>
          </div>
        </div>
      </nav>

      {/* -- Contact Content -- */}
      <section className="pt-5 pt-md-0 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* -- Heading -- */}
              <h3 className="mb-5 text-center display-4 heading">Contact Us</h3>
            </div>
          </div>
          <div className="row justify-content-between">
            {/* -------- Address ------------ */}
            <div className="col-12 col-md-6 mb-5">
              <div className="card shadow">
                <div className="card-body text-center">
                  <svg viewBox="0 0 20 20" fill="#ff6f61" width="30px" className="mb-2">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="mb-2 heading font-weight-bold">Business Address</h3>
                  <p className="small text-muted font-weight-bold">
                    29 Mambilla street off Aso Drive Abuja, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* ------- Working hours ------------- */}
            <div className="col-12 col-md-6 mb-5">
              <div className="card shadow">
                <div className="card-body text-center">
                  <svg viewBox="0 0 20 20" fill="#ff6f61" width="30px" className="mb-2">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="mb-2 heading font-weight-bold">Working hours</h3>
                  <h6 className="small text-muted font-weight-bold">Mon - Sun: 8AM - 5PM</h6>
                </div>
              </div>
            </div>

            {/* ------- Contact -------- */}
            <div className="col-12 col-md-6 mb-5">
              <div className="card shadow">
                <div className="card-body text-center">
                  <svg viewBox="0 0 20 20" fill="#ff6f61" width="30px" className="mb-2">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <h3 className="mb-2 heading font-weight-bold">Call us today</h3>
                  <h6 className="small font-weight-bold">
                    <a className="text-decoration-none text-muted" href="tel:+234-813-680-8501">
                      +2348136808501
                    </a>
                  </h6>
                </div>
              </div>
            </div>

            {/* ------- Email -------- */}
            <div className="col-12 col-md-6 mb-5">
              <div className="card shadow">
                <div className="card-body text-center">
                  <svg viewBox="0 0 20 20" fill="#ff6f61" width="30px" className="mb-2">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <h3 className="mb-2 heading font-weight-bold">Send us a message</h3>
                  <h6 className="small font-weight-bold">
                    <a
                      className="text-decoration-none text-muted"
                      href="mailto:info@winfinitefoods.com">
                      info@winfinitefoods.com
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default ContactPage;
