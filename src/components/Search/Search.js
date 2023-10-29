import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';



const Search = () => {

    const [Info,setInfo] = useState([])



    const submit=async(e)=>{

        e.preventDefault();
        const phone = e.target.number.value;
      
              let url= `http://localhost:5000/api/v1/searchByMobile/${phone}`
    
      await  axios.get(url).then((res)=>{
                  
                
                  if(res.status===200){
                     
                      setInfo(res.data)
                      
                  }
                
                }) 

                    
       
    }

//console.log(Info)

    return (

        <div> 
              

              <form onSubmit={submit}>
                     <input type="Number" placeholder='Enter mobile number' name="number"/>

                       <input type="submit" value="submit"/>
              </form>

              {
                Info ? <h3 class = "searchHeading" >search for <span class="HeadingName">{Info?.data?.name}</span></h3> : <h3></h3>
              }
      

      <div className='search'>

      <div className="card " style={{width: 700}}>
        <div class="card-body">
             <table class="table">
             <thead>
             <tr>
               <th scope="col">email</th>
               <th scope="col">Address</th>
               <th scope="col">Total Meal</th>
               <th scope="col">Total Balance</th>
            </tr>
             </thead>

            <tbody>
             <tr>
             
              <td>{Info?.data?.email}</td>
              <td>{Info?.data?.address}</td>
              <td>{Info?.data?.MealInfo[0]?.meal}</td>
              <td>{Info?.data?.MealInfo[0]?.balance}</td>
            </tr>
    
   
            </tbody>

          </table>
          </div>
             </div>
      </div>

     
            
            



           

     

          

             
              


        </div>
    
    );
};

export default Search;