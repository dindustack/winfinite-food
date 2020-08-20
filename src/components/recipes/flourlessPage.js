import React from 'react';
import { Link } from "react-router-dom";
import '../../bootstrap.min.css';
import '../../index.css';
import product from '../../assets/img/mango-recipe.jpg';



function FlourlessRecipePage() {
    return(
        <React.Fragment>
            {/* ----------- Bread Crumb -------  */}
            <nav aria-label="breadcrumb" className="pt-5 mt-md-5 mt-5 mb-md-5 bg-white">
            <div className="container"> 
                <div className="row">
                <div className="col-12">

                   {/* BreadCrumb */}
                    <ol className="breadcrumb mb-0 small text-muted bg-white">
                    <li className="breadcrumb-item">
                        <Link to="/" className="text-muted text-decoration-none">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/recipes" className="text-muted text-decoration-none">Recipes</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        Flourless Double Chocolate Banana Bread
                    </li>
                    </ol>

                </div>
                </div>
            </div>
        </nav>

            {/* -- Recipe Content -- */}
            <section className="pt-5 pt-md-0 pb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">

                            {/* -- Heading -- */}
                            <h1 className="heading font-weight-bold text-uppercase mb-3">flourless double chocolate banana bread</h1>

                        </div>
                        <div className="col-12 col-md-10 col-lg-9 text-center mb-5">
                            <div className="card shadow p-2 w-auto h-auto mx-auto mb-3">
                                <img src={product} alt="store-avatar" className="card-img-top img-fluid w-100 h-100 flow" />
                            
                            </div>

                            <p className="mb-5">This yummy goodness was made with our chocolate nuts and seed butter</p>

                            <div className="mb-2">
                                <div className="row font-weight-bold">
                                    <div className="col-lg-6 col-sm-6">
                                    <h3 className="heading text-uppercase">Ingredients</h3>
                                    <ul className="ingredients">
                                        <li >
                                            8 ripe Bananas
                                        </li>
                                        <li >
                                            ¼ cup of Winfinite foods Chocolate nuts n seeds butter
                                        </li>
                                        <li >
                                            6 tablespoon date syrup
                                        </li>
                                        <li >
                                            2 Eggs
                                        </li>
                                        <li >
                                            2 teaspoon vanilla extract
                                        </li>
                                        <li >
                                            2 tablespoons baking powder
                                        </li>
                                        <li >
                                            ¼ teaspoon salt
                                        </li>
                                        <li >
                                            3 cups Oats (gluten-free if needed)
                                        </li>
                                        <li >
                                            ½ cup unsweetened cocoa powder
                                        </li>
                                    </ul>

                                    </div>
                                    <div className="col-lg-6 col-sm-6 mb-2">
                                        <h3 className="text-uppercase heading">method</h3>
                                        <ol className="directions">
                                            <li>Preheat the oven to 175 degree or higher</li>
                                            <li>Add the oats into a blender and process until they've broken down into a fine powder.</li>
                                            <li>Set aside four bananas, and add all the remaining ingredients and continue to process until the batter is smooth and creamy.</li>
                                            <li>Pour the batter into a greased loaf pan, spreading it out evenly, and then slice the last four bananas in half and press into the batter</li>
                                            <li>Bake in the oven for 50 minutes to an hour or until a skewer comes out clean leave; to cool before serving </li>
                                        </ol>

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

export default FlourlessRecipePage;