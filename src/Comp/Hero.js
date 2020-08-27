import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Hero.css'
function Hero() {
    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-md-6 order-md-2  ">
                    <img src='https://github.com/Fahimkhan9/e-school/raw/master/images/Illustration.png' className="img-fluid" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center ">
                    <p className="text-danger mt-4">Are you ready to learn?</p>
                    <h1>Learn with fun on <span className="">  any schedule  </span> </h1>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos sapiente iusto dicta quas voluptatibus!</p>
                    <button className="btn btn-success btn-start">Get Started</button>
                </div>

            </div>
        </div>
    )
}

export default Hero