import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../bootstrap.min.css";
import "../index.css";

function StockistPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
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
                <li className="breadcrumb-item active">Stockists</li>
              </ol>
            </div>
          </div>
        </div>
      </nav>

      {/* -- Stockist Content -- */}
      <section className="pt-5 pt-md-0 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* -- Heading -- */}
              <h3 className="mb-5 text-center display-4 heading">Stockists</h3>
            </div>
          </div>
          <div className="row">
            {/* -------- Store1 ------------ */}
            <div className="col-12 col-md-4 mb-5">
              <div className="card shadow-sm border">
                <div className="card-body">
                  <h5 className="font-weight-bold mb-3">Hale and Hearty Pharmacy Abuja</h5>

                  <ul className="list-unstyled">
                    {/* ------ Location ----------- */}
                    <li className="d-flex">
                      <svg viewBox="0 0 20 20" fill="#ff6f61" width="16px" className="mt-0">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="pl-3">
                        <p className="mb-0 small text-muted">Locate us at</p>
                        <span className="small text-muted font-weight-bold">
                          29 Mambilla street off Aso Drive Abuja
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* -------- Store2 ------------ */}
            <div className="col-12 col-md-4 mb-5">
              <div className="card shadow-sm border">
                <div className="card-body">
                  <h5 className="font-weight-bold mb-3">
                    HMEDIX Pharmacy and Supermarket nationwide
                  </h5>

                  <ul className="list-unstyled">
                    {/* ------ Location ----------- */}
                    <li className="d-flex">
                      <svg viewBox="0 0 20 20" fill="#ff6f61" width="16px" className="mt-0">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="pl-3">
                        <p className="mb-0 small text-muted">Locate us at</p>
                        <span className="small text-muted font-weight-bold">
                          29 Mambilla street off Aso Drive Abuja
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* -------- Store3 ------------ */}
            <div className="col-12 col-md-4 mb-5">
              <div className="card shadow-sm border">
                <div className="card-body">
                  <h5 className="font-weight-bold mb-3">Cheeries Hypermarket</h5>

                  <ul className="list-unstyled">
                    {/* ------ Location ----------- */}
                    <li className="d-flex">
                      <svg viewBox="0 0 20 20" fill="#ff6f61" width="16px" className="mt-0">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="pl-3">
                        <p className="mb-0 small text-muted">Locate us at</p>
                        <span className="small text-muted font-weight-bold">
                          29 Mambilla street off Aso Drive Abuja
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* -------- Store4 ------------ */}
            <div className="col-12 col-md-4 mb-5">
              <div className="card shadow-sm border">
                <div className="card-body">
                  <h5 className="font-weight-bold mb-3">Shopotel Superstore</h5>

                  <ul className="list-unstyled">
                    {/* ------ Location ----------- */}
                    <li className="d-flex">
                      <svg viewBox="0 0 20 20" fill="#ff6f61" width="16px" className="mt-0">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="pl-3">
                        <p className="mb-0 small text-muted">Locate us at</p>
                        <span className="small text-muted font-weight-bold">
                          29 Mambilla street off Aso Drive Abuja
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* -------- Store5 ------------ */}
            <div className="col-12 col-md-4 mb-5">
              <div className="card shadow-sm border">
                <div className="card-body">
                  <h5 className="font-weight-bold mb-3">Naderm Supermarket</h5>

                  <ul className="list-unstyled">
                    {/* ------ Location ----------- */}
                    <li className="d-flex">
                      <svg viewBox="0 0 20 20" fill="#ff6f61" width="16px" className="mt-0">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="pl-3">
                        <p className="mb-0 small text-muted">Locate us at</p>
                        <span className="small text-muted font-weight-bold">
                          29 Mambilla street off Aso Drive Abuja
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* -------- Store6 ------------ */}
            <div className="col-12 col-md-4 mb-5">
              <div className="card shadow-sm border">
                <div className="card-body">
                  <h5 className="font-weight-bold mb-3">2K Supermarket</h5>

                  <ul className="list-unstyled">
                    {/* ------ Location ----------- */}
                    <li className="d-flex">
                      <svg viewBox="0 0 20 20" fill="#ff6f61" width="16px" className="mt-0">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="pl-3">
                        <p className="mb-0 small text-muted">Locate us at</p>
                        <span className="small text-muted font-weight-bold">
                          29 Mambilla street off Aso Drive Abuja
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* -------- Store7 ------------ */}
            <div className="col-12 col-md-4 mb-5">
              <div className="card shadow-sm border">
                <div className="card-body">
                  <h5 className="font-weight-bold mb-3">Gonny Pharmacy and Store</h5>

                  <ul className="list-unstyled">
                    {/* ------ Location ----------- */}
                    <li className="d-flex">
                      <svg viewBox="0 0 20 20" fill="#ff6f61" width="16px" className="mt-0">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="pl-3">
                        <p className="mb-0 small text-muted">Locate us at</p>
                        <span className="small text-muted font-weight-bold">
                          29 Mambilla street off Aso Drive Abuja
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* -------- Store8 ------------ */}
            <div className="col-12 col-md-4 mb-5">
              <div className="card shadow-sm border">
                <div className="card-body">
                  <h5 className="font-weight-bold mb-3">Roots n Brew</h5>

                  <ul className="list-unstyled">
                    {/* ------ Location ----------- */}
                    <li className="d-flex">
                      <svg viewBox="0 0 20 20" fill="#ff6f61" width="16px" className="mt-0">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="pl-3">
                        <p className="mb-0 small text-muted">Locate us at</p>
                        <span className="small text-muted font-weight-bold">
                          29 Mambilla street off Aso Drive Abuja
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* -------- Store9 ------------ */}
            <div className="col-12 col-md-4 mb-5">
              <div className="card shadow-sm border">
                <div className="card-body">
                  <h5 className="font-weight-bold mb-3">Himart Supermarket</h5>

                  <ul className="list-unstyled">
                    {/* ------ Location ----------- */}
                    <li className="d-flex">
                      <svg viewBox="0 0 20 20" fill="#ff6f61" width="16px" className="mt-0">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="pl-3">
                        <p className="mb-0 small text-muted">Locate us at</p>
                        <span className="small text-muted font-weight-bold">
                          29 Mambilla street off Aso Drive Abuja
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* -------- Store10 ------------ */}
            <div className="col-12 col-md-4 mb-5">
              <div className="card shadow-sm border">
                <div className="card-body">
                  <h5 className="font-weight-bold mb-3">Ice Mart Supermarket</h5>

                  <ul className="list-unstyled">
                    {/* ------ Location ----------- */}
                    <li className="d-flex">
                      <svg viewBox="0 0 20 20" fill="#ff6f61" width="16px" className="mt-0">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="pl-3">
                        <p className="mb-0 small text-muted">Locate us at</p>
                        <span className="small text-muted font-weight-bold">
                          29 Mambilla street off Aso Drive Abuja
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* -------- Store11 ------------ */}
            <div className="col-12 col-md-4 mb-5">
              <div className="card shadow-sm border">
                <div className="card-body">
                  <h5 className="font-weight-bold mb-3">Health n Healthy</h5>

                  <ul className="list-unstyled">
                    {/* ------ Location ----------- */}
                    <li className="d-flex">
                      <svg viewBox="0 0 20 20" fill="#ff6f61" width="16px" className="mt-0">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="pl-3">
                        <p className="mb-0 small text-muted">Locate us at</p>
                        <span className="small text-muted font-weight-bold">
                          29 Mambilla street off Aso Drive Abuja
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* -------- Store12 ------------ */}
            <div className="col-12 col-md-4 mb-5">
              <div className="card shadow-sm border">
                <div className="card-body">
                  <h5 className="font-weight-bold mb-3">Spring Care Pharmacy</h5>

                  <ul className="list-unstyled">
                    {/* ------ Location ----------- */}
                    <li className="d-flex">
                      <svg viewBox="0 0 20 20" fill="#ff6f61" width="16px" className="mt-0">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="pl-3">
                        <p className="mb-0 small text-muted">Locate us at</p>
                        <span className="small text-muted font-weight-bold">
                          29 Mambilla street off Aso Drive Abuja
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default StockistPage;
