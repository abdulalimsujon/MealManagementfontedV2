import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { IsAdmin } from '../helper/SessionHelper';
import toast from 'react-hot-toast';


const MealInformation = () => {


    const [MealInformation,setMealInformation] = useState([])
    const [admin,setAdmin] = useState(0);
    const mealRate = localStorage.getItem('mealRate')


    useEffect(()=>{

      //-------------------->get all information about meal ------------->

        let urL= `http://localhost:5000/api/v1/mealInformation/${mealRate}`;

        axios.get(urL).then((res)=>{
            
            setMealInformation(res.data.EachPersonMealInfo)
        })
   
        setAdmin(IsAdmin())


    },[])


    const sendEmail = async(email,balance)=>{
    

      let URL1= `http://localhost:5000/api/v1/notifyMealByEmail/${email}/${balance}`;

    await   axios.get(URL1).then((res)=>{
          
         if(res.status==="success"){
          toast.success("notify email send successfully")
         }else{
          toast.error("notify email send failed")
         }
      })


      

    }



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
          {
            admin ? <th>Send Email</th> : " "
          }
          
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
                <td>{data?.totalBalance?.toFixed(2)}</td>
                <td>{data?.ExistBalance?.toFixed(2)}</td>
                
                  
                       {

                        admin  ?  <td><Button onClick= {()=>sendEmail(data?.email,data?.ExistBalance)} className='text-dark btn btn-info mx-2' variant="primary">sendEmail</Button></td>  : <h1></h1>


                       }

                  
                
                

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