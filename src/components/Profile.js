import React, { useEffect, useRef, useState } from 'react';
import { getBase64, getMemberDetails, getToken } from '../helper/SessionHelper';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import toast from 'react-hot-toast';


const Profile = () => {

    const [profileData,setProfileData] = useState([]);

   
    let ImageRef,emailRef,NameRef,mobileNumRef ,addressRef = useRef();

    
    const user  = getMemberDetails();

    const email = user.email;



    useEffect(()=>{

        let URL= `http://localhost:5000/api/v1/getProfileData/${email}`;

  
        axios.get(URL,{email} ).then((res)=>{
              
            
              if(res.status===200){
                setProfileData(res.data.data)
                
                  
              }
  
              
        
          })

    },[])

  
      const previewImage = () => {
        let ImgFile =ImageRef.files[0];
        getBase64(ImgFile).then((base64Img)=>{
            ImageRef.src=base64Img;
        })
    }
   
    
const updateMyProfile =()=>{

    let address=addressRef.value;
    let name=NameRef.value;
    let mobile=mobileNumRef.value;
    let photo=ImageRef.src;


    let URL= `http://localhost:5000/api/v1/profileUpdate/${email}`;

    const reqBody={
      
      name:name,
      address:address,
      
      photo:photo,
      mobile:mobile
    

    }
 
     
  
    axios.post(URL,reqBody).then((res)=>{
          
        
          if(res.status===200){
          
            
            let URL= `http://localhost:5000/api/v1/getProfileData/${email}`;

  
            axios.get(URL,{email} ).then((res)=>{
                  
                
                  if(res.status===200){
                    setProfileData(res.data.data) 
                    toast.success("profile updated successfully")
                    
                      
                  }
      
                  
            
              })
            
              
          }

          
    
      })




}

    return (
      <div className="container">
          <div className="d-flex justify-content-center mt-5">
           <Card style={{ width: '18rem' }}>

           <div className='d-flex justify-content-center align-items-center'>
            
            <img className='icon-nav-img-lg pl-3' src={profileData.photo}></img>
             </div>
          
            < input onChange ={previewImage} ref={(input)=>ImageRef=input}className = "form-control  animated fadeInUp"  type="file"  />

           

                 <div className=" mt-2">

                   <input key={Date.now()} readOnly={true} defaultValue = {profileData.email}ref={(input)=>emailRef=input}className = "form-control  animated fadeInUp"  type="email"  />

                  </div>
                 <div className=" mt-2">

                   <input key={Date.now()}  defaultValue = {profileData.address} ref={(input)=>addressRef=input} className = "form-control  animated fadeInUp"  type="email"  />

                     </div>

                   <div className=" mt-2">

                  <input key={Date.now()}  defaultValue = {profileData.name}ref={(input)=>NameRef=input}className = "form-control  animated fadeInUp"  type="text"  />

                 </div>

                  <div className=" mt-2">

                   <input key={Date.now()}  defaultValue = {profileData.mobile}ref={(input)=>mobileNumRef=input}className = "form-control  animated fadeInUp"  type="text"  />

                  </div>




<div className="mt-2">

<button onClick={updateMyProfile} className='btn btn-primary float-end  animated fadeInUp w-100'>Update</button>

</div>
        </Card>
      </div>
  </div>
     
    );
};

export default Profile;