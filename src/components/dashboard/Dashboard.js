import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

import CircularProgress from '../../helper/CircularProgress';
import { getMemberDetails } from '../../helper/SessionHelper';
import toast from 'react-hot-toast';


const Dashboard = () => {

    const [mealData,SetMealData] = useState([]);
    const [grantTotalCost,SetTotalCost] = useState(0);
    const [memberMealCost,setMemberMealCost] = useState(0);
    const [MemberTotalMeal,setMemberTotalMeal ] = useState(0);
    const memberDetail= getMemberDetails();



useEffect(()=>{


    ///get the total cost that is made in daily market

let urL="http://localhost:5000/api/v1/MarketTotalCost";

axios.get(urL).then((res)=>{

if(res.data.status===400){
    toast.error('No market')
}else{
    SetTotalCost(res.data.totalCost)

}
         
    
})




/// get the all data about totalMeal,total cost ,total exist balance,mealRate
  
    let URL=`http://localhost:5000/api/v1/mealRate/${grantTotalCost}`

    
    axios.get(URL).then((res)=>{
        SetMealData(res.data.data)
    })
     

   //--------------- Per member meal cost-------------------------->

    let URL1=`http://localhost:5000/api/v1/perMemberMealCost/${memberDetail.email}/${mealData.milRate}`

    
    axios.get(URL1).then((res)=>{
        setMemberMealCost(res.data.totalMealCost)
        setMemberTotalMeal(res.data.MemberTotalMeal)
    })



     localStorage.setItem("mealRate",mealData.milRate)

   
},[grantTotalCost,mealData.milRate,memberMealCost,MemberTotalMeal]) 






    return (
        <div class='container'>
              <h2 className='p-3'><span className='HeadingName'>Smart Meal </span> Management System</h2>
               
               
            <div className="row my-3">
               
                <div class='col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center bg'>
                <CircularProgress rate={mealData.milRate}></CircularProgress>

               

                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center bg">
                <ul className='ml-3' style={{ listStyleType: 'square' }}>
                <li><h5>Grant Total Balance :{mealData.grandBalace}</h5>  </li>
                <li><h5>Meal Rate :{mealData.milRate}</h5></li>
                <li><h5>Grand Meal :{mealData.totalMeal}</h5></li>
                <li><h5>Grand Exist Balance :{mealData.grantExistBalance}</h5></li>
                </ul>

           


                </div>

               <div className="col-lg-4 col-sm-12  col-sm-12 d-flex justify-content-center align-items-center">

               <Calendar  />
                 
               </div>
            </div>
           

      
           
           
        </div>
    );
};

export default Dashboard;