import axios from 'axios';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom"

const Register = () => {

    let nameRef ,emailRef,passwordRef,mobileRef,addressRef= useRef();

   
   const navigate = useNavigate();

    const onSubmit = async(req,res)=>{
        const name=nameRef.value
        const email=emailRef.value
       const  password=passwordRef.value
       const mobile = mobileRef.value
        const address=addressRef.value
        
    const reqBody = {
        name,
        email,
        password,
        mobile,
        address
    }

    const url = "http://localhost:5000/api/v1/register";

    axios.post(url,reqBody).then((res)=>{    
        
        if(res.data.error){
            toast.error(res.data.error)
        }
        if(res.data.status==="success"){  
            toast.success('Successfully Registered');
            window.location.href='/'               
        }

    })


    }
   
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
                        <input ref={(input)=>nameRef=input} className="form-control animated fadeInUp" type="text"></input>
                        <hr/>
                        
                        <label class=" ">Email Address</label>
                        <input ref={(input)=>emailRef=input} className='form-control animated fadeInUp' type="email"></input>
                        
                      
                        <label>Password</label>
                        <input ref={(input)=>passwordRef=input}  className="form-control animated fadeInUp" type="password"></input>
                        <hr/>
                        <label>Mobile Number</label>
                        <input ref={(input)=>mobileRef=input}  className="form-control animated fadeInUp" type="text"></input>
                        <hr/>
                        <label>Address</label>
                        <input ref={(input)=>addressRef=input}   className="form-control animated fadeInUp" type="text"></input>
                        <hr/>
                        <label>photo</label>
                        <input  className="form-control animated fadeInUp" type="text"></input>
                        <hr/>

                        <button onClick = {onSubmit} className='form-control btn-primary animated fadeInUp' >Next</button>

                      
                        <div className="text-center w-100">
                        <Link onClick={navigate('/')} className='text-center animated fadeInUp' >Login</Link>
                      


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