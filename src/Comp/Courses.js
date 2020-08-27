import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Courses(props) {
    const { name, price, img, instructor } = props.data
    return (
        <div className="container courses mt-4"  >


            <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={img} class="card-img" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <h4 className="card-title">Fee: {price}</h4>
                            <h4 className="card-title">Instructor: {instructor}</h4>
                            <p class="card-text"><button className="btn btn-success" onClick={() => props.handleClick(props.data)} >Enroll Now</button></p>
                        </div>
                    </div>
                </div>
            </div>




        </div>



    )
}


export default Courses