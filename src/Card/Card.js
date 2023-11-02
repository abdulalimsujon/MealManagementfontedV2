

import React from 'react';

const Card = () => {
    return (
        <div className="container">
        <div className="d-flex justify-content-center mt-5">
          <Card style={{ width: '18rem' }}>
            
            <input onChange ={previewImage} ref={(input)=>ImageRef=input}className = "form-control  animated fadeInUp"  type="file"  />

             

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

export default Card;