import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import toast from 'react-hot-toast';
import CircularProgress from './CircularProgress';

const Dashboard = () => {

    const [mealData,SetMealData] = useState([]);
    const [grantTotalCost,SetTotalCost] = useState(0);
    const [Mealcost,SetTotalMealCost] = useState([]);
   

  
useEffect(()=>{


    let urL="http://localhost:5000/api/v1/getMealCostDetail";

axios.get(urL).then((res)=>{
    SetTotalCost(res.data.regularMealCostTotal)
})


        //   console.log("dshakfjhefaeh",grantTotalCost)
   
    
   
    let URL=`http://localhost:5000/api/v1/mealRate/${grantTotalCost}`

    
    axios.get(URL).then((res)=>{
        SetMealData(res.data.data)
    })

   
},[grantTotalCost])

console.log(mealData.milRate)

    return (
        <div class='container'>
              <h1>Dashboard</h1>
            <div className="row my-3">
               
                <div class='col-lg-6 d-flex justify-content-center align-items-center'>
                <CircularProgress rate={mealData.milRate}></CircularProgress>
                </div>

               <div className="col-md-6 d-flex justify-content-center align-items-center">

               <Calendar  />

               </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-md-12 p-5">
                <h3 className='text-primary'>Meal Information</h3>
                   <h5>Grant Total Balance :{mealData.grandBalace}</h5>
                   <h5>Meal Rate :{mealData.milRate}</h5>
                     <h5>Grand Meal :{mealData.totalMeal}</h5>
                    <h5>Grand Exist Balance :{mealData.grantExistBalance}</h5>


                </div>


            </div>
           
           
        </div>
    );
};

export default Dashboard;