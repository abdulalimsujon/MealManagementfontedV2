import React from 'react';
import { Link } from "react-router-dom"

const Register = () => {
    return (
        

<div className="container">
<div className="row justify-content-center ">
    <div className="col-md-7 col-lg-6 ">

        <div className="card animated fadeIn w-100">

            <div className="card-body">
                <h4 className='text-center'>Sign Up</h4>

                <hr/>

                <div className="container-fluid m-0 p-0">
                    <div className="row  p-0">

                    <label>Name</label>
                        <input  className="form-control animated fadeInUp" type="text"></input>
                        <hr/>
                        
                        <label class=" ">Email Address</label>
                        <input className='form-control animated fadeInUp' type="email"></input>
                        
                      
                        <label>Password</label>
                        <input  className="form-control animated fadeInUp" type="password"></input>
                        <hr/>
                        <label>Mobile Number</label>
                        <input  className="form-control animated fadeInUp" type="text"></input>
                        <hr/>
                        <label>Address</label>
                        <input  className="form-control animated fadeInUp" type="text"></input>
                        <hr/>
                        <label>photo</label>
                        <input  className="form-control animated fadeInUp" type="text"></input>
                        <hr/>

                        <button className='form-control btn-primary animated fadeInUp' >Next</button>

                      
                        <div className="text-center w-100">
                        <Link className='text-center animated fadeInUp' >Login</Link>
                      


                    </div>
                       

                    </div>

                </div>
            </div>

        </div>

    </div>
</div>

</div>
    
)};

export default Register;