import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RegularMeal = () => {


    const [regularMeal,setRegularMeal] = useState([])

    useEffect(()=>{

        /// create meal a

        let urL="http://localhost:5000/api/v1/eachMemberRegularMeal";

        axios.get(urL).then((res)=>{
            
            setRegularMeal(res.data.data)
        })



    },[])

    console.log(regularMeal)

  

    return (
        <div>
            <h1>this is from regular meal</h1>
        </div>
    );
};

export default RegularMeal;