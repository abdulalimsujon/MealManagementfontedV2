import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

import CircularProgress from '../../helper/CircularProgress';
import { getMemberDetails } from '../../helper/SessionHelper';


const Dashboard = () => {

    const [mealData,SetMealData] = useState([]);
    const [grantTotalCost,SetTotalCost] = useState(0);
    const [memberMealCost,setMemberMealCost] = useState(0);
    const [memberExitBalance,setMemberExistBalance] = useState(0);
    const [MemberTotalMeal,setMemberTotalMeal ] = useState(0);
   
    const memberDetail= getMemberDetails();

    console.log(memberDetail.email);
  
useEffect(()=>{


    let urL="http://localhost:5000/api/v1/getMealCostDetail";

axios.get(urL).then((res)=>{
    
    SetTotalCost(res.data.regularMealCostTotal)
})
  
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
   //--------------- Per member exist balance -------------------------->

    let URL2=`http://localhost:5000/api/v1/currentBalancePerMember/${memberDetail.email}/${memberMealCost}`

    
    axios.get(URL2).then((res)=>{
        setMemberExistBalance(res.data.currentBalance)
    })



   
},[grantTotalCost,mealData.milRate,memberMealCost,MemberTotalMeal])

console.log(memberMealCost)
console.log(memberExitBalance)
console.log(MemberTotalMeal)



    return (
        <div class='container'>
              <h1>Dashboard</h1>
            <div className="row my-3">
               
                <div class='col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center'>
                <CircularProgress rate={mealData.milRate}></CircularProgress>

               

                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <ul className='ml-3' style={{ listStyleType: 'square' }}>
                <li>Grant Total Balance :{mealData.grandBalace}</li>
                <li>Meal Rate :{mealData.milRate}</li>
                <li>Grand Meal :{mealData.totalMeal}</li>
                <li>Grand Exist Balance :{mealData.grantExistBalance}</li>
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