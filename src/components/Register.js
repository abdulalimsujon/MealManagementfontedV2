import axios from 'axios';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom"

const Register = () => {

    let nameRef ,emailRef,passwordRef,mobileRef,addressRef= useRef();

    const photo ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAo5JREFUOE991EvoVlUUBfDf33yk+aoUfJSCSWiIFkphJD0Qk8gsGmgQKb4w8ZGog6yECAt1UJmTFDInDRIHiSRIJD5SwhI0DDHKgVBgkopgaFqxZH9y+fvhhcv3nbvPWXvvtdbZHW59uuAePIRH8DDG4BqON96fcAnXmxAdjUX+34n7sRLPYG+9h9ANT2BSJTmAz/ALLrdwWoD57YuXMQ/b8GkjWVf816imF2ZjET7CdlzM/hZgT7yC5ZiO3yqWiu/FkAI7U23+XfHB2FL7V+BqAMPZSHyOVxtgd+N5ZGN4Oo9/8AV24a/qYBC+wjvYE8CBWIsfq81864/5eBSrcBp34AHMxVC8XtV2L26zfi2Hn6yyH6yMPTAZc4rTzj5IsndxDu9VMPwvTncBXNZQNvF+WI3wtamNraL2Y7XnuYrfleowLIBb8SV2V3AANuNj7GsDmDPD8S1GVDx0jMMnCf6Aafijgu1aauKGkinF5YuNwH04HMBjmNoAzIFnS7W0FHVzS/Kk3Rh/Hb4rD7Yw8/1QAHdiI75pZOuNN/AU1uAkYu5RmFFJ3m7sj/Ui6u4AflieaimWYEgOlwFNlfsRe0ysq/gWYu68qT4X4KX4OICzio+0GQMPw8wiOetQ8nNVmCExuhJ+X+DRILZJYacCmMmyHgfxe9noV2wo67QR+gZAWg4lOXsW70esAIab8XVbUsEHZZl2QM1vGRDp7s2yXir+ujUc+tTIyvxbWpVevQ1izkXxWCUXI+MrwDenTf5H2UybiJC7nXkX0Cv4t8AjWMRJdY9jAU60wDoDZh11F2IJduBoiXKhkudaxh6h5oW6mplSN5/mxG59TAUT8HRxOxYxe6r8s6bSkbLSqc60/A9RX4qkRAR+rgAAAABJRU5ErkJggg=="



   
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
        address,
        photo
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