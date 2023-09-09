import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';



const Search = () => {


    const [MealInfo,setMealInfo] = useState([])
    

    const submit=async(e)=>{
        e.preventDefault();
        const phone = e.target.number.value;
      
              let url= `http://localhost:5000/api/v1/mealInfo/${phone}`
    
      await  axios.get(url).then((res)=>{
                  
                
                  if(res.status===200){
                     
                      setMealInfo(res.data)
                      
                  }
                }) 

                    
       
    }

  
   


    return (

        <div>

              <form onSubmit={submit}>
                     <input type="Number" placeholder='Enter mobile number' name="number"/>

                       <input type="submit" value="submit"/>
              </form>

     

            {
                MealInfo.map((Info,i)=>{

                     return(
                      <Table striped bordered hover>
                      <thead>
                     <tr>
              <th scope="col">serial</th>
                <th scope="col">meal</th>
                <th scope="col">balance</th>  
              </tr>
            </thead>
                        <tr>
                        <th scope="row">{i}</th>
                        <td>{Info.meal}</td>
                        <td>{Info.balance}</td>
                       
                      </tr>

                      </Table>
                     )

                }
                
                
                )
            }

          

             
              


        </div>
    
    );
};

export default Search;