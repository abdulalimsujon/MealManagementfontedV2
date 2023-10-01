import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

import CircularProgress from '../../helper/CircularProgress';
import { getMemberDetails } from '../../helper/SessionHelper';
import { useSelector } from 'react-redux';
import store from '../../redux/store';


const Dashboard = () => {

    const [mealData,SetMealData] = useState([]);
    const [grantTotalCost,SetTotalCost] = useState(0);
    const [memberMealCost,setMemberMealCost] = useState(0);
    const [MemberTotalMeal,setMemberTotalMeal ] = useState(0);
    const memberDetail= getMemberDetails();
    const meal = useSelector((state)=>state.mealInfo.meal);
    const balance = useSelector((state)=>state.mealInfo.balance);

   console.log(meal)
   console.log(balance)

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



     localStorage.setItem("mealRate",mealData.milRate)

   
},[grantTotalCost,mealData.milRate,memberMealCost,MemberTotalMeal]) 






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