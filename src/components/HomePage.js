import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { DataContext } from './productsContext';
import '../bootstrap.min.css';
import '../index.css';
import cover from '../assets/img/chocolate-full.jpg';



export class HomePage extends Component  {

    static contextType  = DataContext;

    render() {
    const {products} = this.context;
    return(
        <React.Fragment>
            {/* ------------Welcome Image ------------ */}
        <section>
            <div className="w-100 bg-cover mt-5 mt-md-0">
                <img src={cover} className="img-fluid cover-fill" alt="product_avatar" />
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
                    
                    {
                        products.map(product =>(
                            <div className="col-12 col-md-4" key={product._id}>
                            <div className="card mb-5 shadow p-2" >
                                <Link to={`/${product._id}`}>
                                <img src={product.src} className="card-img"  alt="product"  />
                                </Link>
                            
                                <div className="card-body px-0">

                                    
                                    <div className="mb-3">
                                    <Link to={`/${product._id}`} className="text-body text-decoration-none" >
                                        <h4 className="heading">{product.title}</h4>
                                    </Link>
                                    </div>

                                    
                                    <div className="d-flex justify-content-between">
                                        <h6 className="text-orange font-weight-bold">&#8358;{product.price}</h6>

                                        <div>
                                        <button type="submit" className="btn btn-sm btn-orange text-white mb-2" onClick={()=> this.context.addCart(product._id)}>
                                            Add to Cart  <svg fill="none" viewBox="0 0 24 24" stroke="#fff" width="16px" className="ml-2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                                        </svg>

                                        </button>
                                        </div>
                                       
                                    
                                    </div>

                                </div>
                                </div>
                            </div>   
                        ))
                    }
                
                    
                </div>
            </div>

        </section>

        </React.Fragment>
    );
    }
}

export default HomePage;     