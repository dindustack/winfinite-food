import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { InfoContext } from "./recipesContext";


export class recipeDetails extends Component {
  static contextType = InfoContext;

  state = {
    recipe: [],
  };

  getRecipe = () => {
    if (this.props.match.params.id) {
      const res = this.context.recipes;
      const data = res.filter((item) => {
        return item._id === this.props.match.params.id;
      });
      this.setState({ recipe: data });
    }
  };

  componentDidMount() {
    this.getRecipe();
    window.scrollTo(0, 0);
  }

  render() {
    const { recipe } = this.state;

    return (
      <React.Fragment>
        <Helmet>
        {recipe.map((item) => (
          <title className="text-capitalize">{item.title}  &mdash; Shop at Winfinite Foods</title>
          ))}
        </Helmet>
        {recipe.map((item) => (
          <div key={item._id}>
            <nav aria-label="breadcrumb" className="py-5 my-5 bg-white">
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
                        <Link to="/recipes" className="text-muted text-decoration-none">
                          Recipes
                        </Link>
                      </li>
                      <li className="breadcrumb-item active text-capitalize">{item.title}</li>
                    </ol>
                  </div>
                </div>
              </div>
            </nav>

            <section className="pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-12 text-center">
                    {/* -- Heading -- */}
                    <h1 className="heading font-weight-bold text-uppercase mb-3">{item.title}</h1>
                  </div>
                  <div className="col-12 col-md-10 col-lg-9 text-center mb-5">
                    <div className="card shadow p-2 w-auto h-auto mx-auto mb-3">
                      <img
                        src={item.src}
                        alt="store-avatar"
                        className="card-img-top img-fluid w-100 h-100 flow"
                      />
                    </div>

                    <p className="mb-5">{item.introtext}</p>

                    <div className="mb-2">
                      <div className="row font-weight-bold">
                        <div className="col-lg-6 col-sm-6 mb-5 mb-md-0">
                          <h3 className="heading text-uppercase mb-3">Ingredients</h3>
                          <ul className="ingredients">
                            {item.ingredients.map((item, i) => (
                              <li key={item + i} className="text-left">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-lg-6 col-sm-6 mb-2">
                          <h3 className="text-uppercase heading mb-3">Method</h3>
                          <ol className="directions">
                            {item.instructions.map((item, i) => (
                              <li key={item + i} className="text-left">
                                {item}
                              </li>
                            ))}
                          </ol>
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

export default recipeDetails;
