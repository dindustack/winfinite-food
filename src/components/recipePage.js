import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { InfoContext } from "./recipesContext";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "../placeholder.css";
import "../bootstrap.min.css";
import "../index.css";

export class RecipePage extends Component {
  static contextType = InfoContext;

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { recipes } = this.context;
    return (
      <React.Fragment>
        <Helmet>
          <title>Recipes &mdash; Shop at Winfinite Foods</title>
        </Helmet>
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
                  <li className="breadcrumb-item active">Recipes</li>
                </ol>
              </div>
            </div>
          </div>
        </nav>

        {/* -- Recipe Content -- */}
        <section className="pt-5 pt-md-0 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* -- Heading -- */}
                <h3 className="mb-5 text-center display-4 heading">Recipes</h3>
              </div>
            </div>
            <div className="row">
              {/* -------- Recipe ------------ */}
              {recipes.map((recipe) => (
                <div className="col-12 col-md-4 mb-5" key={recipe._id}>
                  <Link to={`/recipes/${recipe._id}`} className="text-decoration-none">
                    <div className="card shadow p-2">
                      <LazyLoadImage
                        src={recipe.src}
                        alt={recipe.title}
                        className="card-img-top img-fluid cover-fill"
                        effect="blur"
                        placeholderSrc={recipe.src}
                      />
                      <div className="card-body">
                        <h3 className="heading font-weight-bold mb-3 text-center text-uppercase">
                          {recipe.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default RecipePage;
