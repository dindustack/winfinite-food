import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import about from "../assets/img/about-one.jpg";
import avatar1 from "../assets/img/winfinite-food-one.jpg";
import avatar2 from "../assets/img/winfinite-food-two.jpg";
import avatar3 from "../assets/img/winfinite-food-three.jpg";
import "../bootstrap.min.css";
import "../index.css";

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <React.Fragment>
      <Helmet>
        <title>About &mdash; Shop at Winfinite Foods</title>
      </Helmet>
      {/* ----------- Bread Crumb ------- */}
      <nav aria-label="breadcrumb" className="pt-5 mt-5 bg-white">
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
                <li className="breadcrumb-item active">About</li>
              </ol>
            </div>
          </div>
        </div>
      </nav>

      <section className=" mb-5">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 text-center">
              {/* ---- Heading ---- */}
              <h3 className=" font-weight-bold heading display-4 mb-5 ">About</h3>
            </div>
          </div>

          <div className="row align-items-center justify-content-around">
            {/* ---- About welcome image */}
            <div className="col-12 col-md-6 col-lg-6 order-md-2 mb-5">
              <img src={about} alt="about-cover" className="organic-radius img-fluid" />
            </div>

            {/* Introduction text */}
            <div className="col-12 col-md-6 text-center text-md-left col-lg-6 order-md-1 mb-5 mb-md-5">
              <h2 className="h1 heading">Superfood for everyone.</h2>

              {/* -- Text -- */}
              <p className="lead">
                Here at Winfinite foods, our special focus is on paleo superfoods and enriching lives
                through Nigeria grown nutrient-dense foods.
              </p>
              <p className="lead">
                Our firm belief is that if you can't pronounce an ingredient, then it is not good
                enough for your well-being. Use Winfinite foods to make wholesome meals and snacks -
                Go with the goodness of healthy foods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              {/* =============== Heading ========= */}
              <h1 className="display-4 heading">New Identity. Same Product</h1>
              {/* ============ Text ================ */}
              <p className="h5 mb-5 mb-md-5">
                Packaging which is done with love for our clients and firm confidence in the
                knowledge that we are sending out health and wellness.
              </p>
            </div>
            <div className="row mb-5">
              {/* ===== Image ====== */}

              <div className="col-12 col-md-4 mb-3">
                <img src={avatar1} alt="avatar" className="img-fluid rounded shadow-lg" />
              </div>

              <div className="col-12 col-md-4 mb-3">
                <img src={avatar2} alt="avatar" className="img-fluid rounded shadow-lg" />
              </div>

              <div className="col-12 col-md-4 mb-3">
                <img src={avatar3} alt="avatar" className="img-fluid rounded shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-5">
          <div className="row text-center">
            <div className="col">
              <h2 className="h1 heading">Our Story</h2>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-12">
              <div className="timeline timeline-one">
                <div className="timeline-item">
                  <h1 className="h2 mb-4 heading">Eggs and Chicken</h1>
                  <p>
                    In 2017, I closed my Nasarawa state based poultry business, Infinite Wealth (now
                    known as Winfinite Foods). This wasn't easy; Infinite Wealth had been in
                    existence for over 8 years, birthed in the furnace of affliction. Having been
                    thrust by circumstances into an uncertain future.
                  </p>
                </div>
                <div className="timeline-item">
                  <h1 className="heading h2 mb-4">Innovative plant-focused company</h1>
                  <p>
                    I and my sons, while discussing the Infinite Wealth journey, had happened to
                    mention the steady decline in the poultry sector and the plant-based superfoods
                    celebrated in Nigeria. More and more people were adopting plant-based
                    alternatives, and eating healthier. I stopped and chose to pivot Infinite
                    Wealth into a new phase of superfoods production.
                  </p>
                </div>
                <div className="timeline-item">
                  <h1 className="h2 mb-4 heading">An Idea turns to a business</h1>
                  <p>
                    The chickens had long since gone, but our mission stayed the same: to create a
                    sustainable and convenient plant-focused food solution at an affordable price. I
                    preserved the iconic name and created a brand; WINFINITE FOODS .
                  </p>
                </div>
                <div className="timeline-item">
                  <h1 className="h2 mb-4 heading">Global inspiration</h1>
                  <p>
                    From Nigeria to the world aptly describes us as our client base extends from the
                    hills of Gwarinpa to the silicon valleys of North America and from the scorching
                    heat of Lagos to the cold winters of Calgary. Women and men across the world are
                    beneficiaries of life’s wonders birthed through us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AboutPage;
