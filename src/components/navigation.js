import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "./productsContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CartModal from "./CartModal";
import logo from "../assets/img/winfinite-logo.png";

export class Navigation extends Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
  }

  render() {
    const { cart, modalShow } = this.context;

    return (
      <Navbar collapseOnSelect expand="lg" bg="white" fixed="top" className="py-md-2 mb-5">
        <div className="container">
          {/* ========= Brand ========== */}
          <Link to="/" className="navbar-brand text-dark">
            <img src={logo} alt="winfinite-logo" width="50" height="50" className="img-fluid" />
          </Link>
          {/* ========= Brand End========== */}

          <button
            type="submit"
            className="nav-link btn btn-white border-0 d-md-none"
            onClick={() => this.context.openModal()}>
            <svg viewBox="0 0 20 20" fill="#3e4095" width="26px">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span className="badge bg-orange rounded-circle lift small">{cart.length}</span>
          </button>

          {/* ========================= Toggler ============================== */}

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/*  ======================== End Toggler ============================== */}

          {/* ========================= Collapse ============================== */}

          <Navbar.Collapse id="responsive-navbar-nav">
            {/* ========================= Navigation ============================== */}
            <Nav className="ml-auto justify-content-center" defaultActiveKey="/">
              <ul className="navbar-nav mr-auto">
                {/* -------------------Home --------------- */}
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/"
                    className="nav-link font-weight-bold "
                    aria-current="page"
                    activeClassName="active">
                    Shop
                  </NavLink>
                </li>

                {/* -a------------------About --------------- */}
                <li className="nav-item ">
                  <NavLink
                    to="/about"
                    className="nav-link font-weight-bold ml-md-5"
                    activeClassName="active">
                    About
                  </NavLink>
                </li>
                {/* -------------------Recipe --------------- */}
                <li className="nav-item ">
                  <NavLink
                    to="/recipes"
                    className="nav-link font-weight-bold ml-md-5"
                    activeClassName="active">
                    Recipes
                  </NavLink>
                </li>
                {/* -------------------About --------------- */}
                <li className="nav-item ">
                  <NavLink
                    to="/stockist"
                    className="nav-link font-weight-bold ml-md-5"
                    activeClassName="active">
                    Stockist
                  </NavLink>
                </li>

                {/* -------------------Contact --------------- */}
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link font-weight-bold ml-md-5">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </Nav>

            {/* --------- Shopping Cart */}
            <Nav className="ml-auto d-flex">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <button
                    type="submit"
                    className="nav-link btn btn-white border-0"
                    onClick={() => this.context.openModal()}>
                    <svg viewBox="0 0 20 20" fill="#3e4095" width="26px">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span className="badge bg-orange rounded-circle lift small">{cart.length}</span>
                  </button>
                </li>

                {/* ---- Call ----- */}
                <li className="nav-item">
                  <a
                    className="text-decoration-none text-body nav-link"
                    href="tel:+234-813-680-8501">
                    <span>
                      <svg viewBox="0 0 20 20" fill="#3e4095" width="26px" className="ml-md-3 ">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </span>
                  </a>
                </li>

                {/* ---- Email ----- */}
                <li className="nav-item">
                  <a
                    className="text-decoration-none text-body nav-link"
                    href="mailto:info@winfinitefoods.com">
                    <span>
                      <svg viewBox="0 0 20 20" fill="#3e4095" width="26px" className="mr-3">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </Nav>

            {/* ========================= End Navigation ============================== */}
          </Navbar.Collapse>
        </div>
        <CartModal show={modalShow} onHide={() => this.context.closeModal()} />
      </Navbar>
    );
  }
}

export default Navigation;
