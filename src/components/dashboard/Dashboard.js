import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {

    const [mealData,SetMealData] = useState([]);
   

  
useEffect(()=>{

    let grantTotalCost = 5000;
    let URL=`http://localhost:5000/api/v1/mealRate/${grantTotalCost}`
    axios.get(URL).then((res)=>{
        SetMealData(res.data.data)
    })

   
},[])


    return (
        <div>
            <h1>Dashboard</h1>

            <h5>Meal Rate :{mealData.milRate}</h5>
            <h5>Grand Meal :{mealData.totalMeal}</h5>
            <h5>Grand Exist Balance :{mealData.grantExistBalance}</h5>
          
        </div>
    );
};

export default Dashboard;