import axios from 'axios';
import React, { Fragment, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setMemberDetails, setToken } from '../helper/SessionHelper';
import toast from 'react-hot-toast';
import { Card } from 'react-bootstrap';

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
        <div className="container">
        <div className="d-flex justify-content-center mt-5">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <h5>Sign In</h5>
              <br />
              <input ref={(input) => (emailRef = input)} placeholder="User Email" type="email" className="form-control animated fadeInUp"></input>
              <br />
              <input ref={(input) => (passwordRef = input)} placeholder="User Password" type="password" className="form-control animated fadeInUp"></input>
              <br />
              <button onClick={OnSignIn} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
              <br />
              <div className="text-center w-100">
                <Link className="text-center animated fadeInUp" to="/register">
                  Sign Up
                </Link>
                <br />
                <Link className="text-center animated fadeInUp" to="/SendOTP">
                  Forget Password
                </Link>
                <br />
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    
      
    );
};

export default SignIn;