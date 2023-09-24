import axios from 'axios';
import React, { Fragment, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setMemberDetails, setToken } from '../helper/SessionHelper';
import toast from 'react-hot-toast';

const SignIn = () => {
    let emailRef,passwordRef = useRef();

   const navigate = useNavigate();

    const OnSignIn =async(req,res)=>{
  

        try{

            const email = emailRef.value;
            const password = passwordRef.value;
            const reqBody = {email,password};
        
            let url = "http://localhost:5000/api/v1/signin";
    
            const {data} = await axios.post(url,reqBody);

            if(data.error){
                toast.error(data.error)
            }

            if(data.status==="success"){

              window.location.href='/';

            }

             
          setMemberDetails(data.data);
          setToken(data.token)
           


        }catch(error){

        }
  



    }


    return (
        <Fragment>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card w-90 p-4">

                        <div className="card-body">
                            <h5>Sign In</h5>
                            <br/>
                            <input ref={(input)=>emailRef=input} placeholder='User Email' type='email' className='form-control animated fadeInUp'></input>
                            <br/>
                            <input ref={(input)=>passwordRef=input} placeholder='User Password' type='password' className='form-control animated fadeInUp'></input>
                            <br/>
                            <button onClick = {OnSignIn} className='btn w-100 animated fadeInUp float-end btn-primary'>Next</button>
                            <br/>
                            <div className="text-center w-100">
                                <Link className='text-center animated fadeInUp' to="/register">Sign Up</Link>
                                <br/>
                                <Link className='text-center animated fadeInUp' to='/SendOTP'>Forget Password</Link>
                                <br/>


                            </div>


                        </div>

                    </div>

                </div>

            </div>
        </div>
    </Fragment>
    );
};

export default SignIn;