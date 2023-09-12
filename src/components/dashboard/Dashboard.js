import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import toast from 'react-hot-toast';

const Dashboard = () => {

    const [mealData,SetMealData] = useState([]);
    const [grantTotalCost,SetTotalCost] = useState(0);
    const [Mealcost,SetTotalMealCost] = useState([]);
   

  
useEffect(()=>{


    let urL="http://localhost:5000/api/v1/getMealCostDetail";

axios.get(urL).then((res)=>{
    SetTotalCost(res.data.regularMealCostTotal)
})


          console.log("dshakfjhefaeh",grantTotalCost)
   
    
   
    let URL=`http://localhost:5000/api/v1/mealRate/${grantTotalCost}`

    
    axios.get(URL).then((res)=>{
        SetMealData(res.data.data)
    })

   
},[grantTotalCost])

console.log(mealData)
    return (
        <div>
            <h1>Dashboard</h1>

            <div className='d-flex justify-content-center p-5' >
            <Calendar  />
            </div>

     
            
     

            <h5>Meal Rate :{mealData.milRate}</h5>
            <h5>Grand Meal :{mealData.totalMeal}</h5>
            <h5>Grand Exist Balance :{mealData.grantExistBalance}</h5>
          
        </div>
    );
};

export default Dashboard;