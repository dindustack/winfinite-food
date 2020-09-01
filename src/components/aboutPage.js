import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import about from "../assets/img/about-one.jpg";
import "../bootstrap.min.css";
import "../index.css";

function AboutPage() {
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
                <li className="breadcrumb-item active">About</li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
      <section className=" mb-5">
        <div className="container">
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
                Infinite Wealth Ltd. is an indigenous agro company born out of a burning desire to
                respond to your basic health and cosmetic needs.
              </p>
              <p className="lead">
                Our special focus is on paleo superfoods which are beneficial for the skin and the
                stomach. Our firm belief is that if it is not good enough for your precious
                digestive system, it is not good enough for your skin.
              </p>
            </div>
          </div>

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
                      In 2017, I closed my Nasarawa state based poultry business, Infinite Wealth
                      (now known as Winfinite Foods). This wasn't easy; Infinite Wealth had been in
                      existence for over 8 years, birthed in the furnace of affliction. Having been
                      thrust by circumstances into an uncertain future.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <h1 className="heading h2 mb-4">Innovative plant-focused company</h1>
                    <p>
                      I and my sons, while discussing the Infinite Wealth journey, had happened to
                      mention the steady decline in the poultry sector and the plant-based
                      superfoods celebrated in Nigeria. More and more people were adopting
                      plant-based alternatives, and eating healthier. She stopped and chose to pivot
                      Infinite Wealth into a new phase of superfoods production.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <h1 className="h2 mb-4 heading">An Idea turns to a business</h1>
                    <p>
                      The chickens had long since gone, but our mission stayed the same: to create a
                      sustainable and convenient plant-focused food solution at an affordable price.
                      I preserved the iconic name but created a brand; WINFINITE FOODS .
                    </p>
                  </div>
                  {/* <div className="timeline-item">
                    <h1 className="h2 mb-4 heading">Women empowerment</h1>
                    <p>
                      We have created a network that empowers women from the farms in the rural
                      areas to the skyscrapers in the city. We buy raw produce from female farmers
                      and traders in North-Central, North-West and South-Western Nigeria then
                      transport them to the beautiful city of Abuja where they are processed into
                      flour or powder under strict hygienic conditions.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <h1 className="h2 mb-4 heading">Health and Wellness</h1>
                    <p>
                      The next process is the packaging which is done with love for our clients and
                      firm confidence in the knowledge that we are sending out health and wellness.
                      Finally, our distribution chain consists primarily women who from the
                      proceeds, feed their families.
                    </p>
                  </div> */}
                  <div className="timeline-item">
                    <h1 className="h2 mb-4 heading">Global inspiration</h1>
                    <p>
                      From Nigeria to the world aptly describes us as our client base extends from
                      the hills of Gwarinpa to the silicon valleys of North America and from the
                      scorching heat of Lagos to the cold winters of Calgary. Women and men across
                      the world are beneficiaries of life’s wonders birthed through us.
                    </p>
                  </div>
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
