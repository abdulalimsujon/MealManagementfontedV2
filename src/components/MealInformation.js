import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


const MealInformation = () => {


    const [MealInformation,setMealInformation] = useState([])

    const mealRate = localStorage.getItem('mealRate')


    useEffect(()=>{

      //-------------------->get all information about meal ------------->

        let urL= `http://localhost:5000/api/v1/mealInformation/${mealRate}`;

        axios.get(urL).then((res)=>{
            
            setMealInformation(res.data.EachPersonMealInfo)
        })
   
    


    },[])







    return (
        <div>
            <h2 >meal <span className='HeadingName'>information</span></h2>
            

            <Table striped bordered hover size="sm" className='p-5'>
      <thead>
        <tr>
          <th>name</th>
          <th>Email</th>
          <th>Total Meal</th>
          <th>Total balance</th>
          <th>Exist balance</th>
        </tr>
      </thead>
      <tbody>
        {
          MealInformation.map((data)=>{
            return(

                <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data?.totalMeal}</td>
                <td>{data?.totalBalance.toFixed(2)}</td>
                <td>{data?.ExistBalance.toFixed(2)}</td>
              </tr>

             
                

            )
          })  
        }
      
        
      </tbody>
    </Table>
        </div>
    );
};

export default MealInformation;