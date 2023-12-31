import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { IsAdmin, getMemberDetails } from '../helper/SessionHelper';

const RegularCost = () => {
    


    const [fields, setFields] = useState([{  }]);

   const [dailyCost,setDailyCost] = useState([])
   const [admin,setAdmin] = useState(0)

   

   

   let dateObj = new Date();
   let month = dateObj.getUTCMonth() + 1; //months from 1-12
   let day = dateObj.getUTCDate();
   let year = dateObj.getUTCFullYear();
   
  let  newdate = year + "/" + month + "/" + day;



    useEffect(()=>{
      const member = getMemberDetails();
      setAdmin(IsAdmin(member._id))

      
      let urL="http://localhost:5000/api/v1/getMealCostDetail";

          axios.get(urL).then((res)=>{

            
            if(res.status===200){
              setDailyCost(res.data.data)

            }
          
          })
   
},[])



  const handleAddField = () => {
    setFields([...fields, {  }]);
  };

 

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  
  };

  const handleFieldChange = (index, fieldName, fieldValue) => {
    const newFields = [...fields];
    newFields[index][fieldName] = fieldValue;
    setFields(newFields);


  };
   
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to the server)
    //console.log('Form data:', fields.length);

    let flag = 0;

    for (let i in fields){
      if(!fields[i].value){

        flag= 1;
          
      }
    }
 
    if(flag){

      toast.error('Empty value doesnot accept')



    }else{
      let URL="http://localhost:5000/api/v1/mealCostDetail";

      axios.post(URL,{fields}).then((res)=>{
                
              
                if(res.status===200){
                   
                    toast.success("successfully submitted");
    
           /// get the all cost again from the server         
          let urL="http://localhost:5000/api/v1/getMealCostDetail";
    
          axios.get(urL).then((res)=>{
            setDailyCost(res.data.data)
          })
    
                    
                }else{
    
                  toast.error("something went wrong");
    
                }
    
                
          
            })
    
      
    }
   
  };

 

    return (
        <div>
   


          {
            admin ? <div>
      
            <h3 className='p-3'>Add Regular Market <span class = "HeadingName">{newdate}</span></h3>
               <form onSubmit={handleSubmit} className='table_style'>
        
                {fields.map((field, index) => (
                  <div className='mb-3' key={index}>
                    <input
                      type="text"
                      placeholder="product"
                      value={field.name}
                      onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="cost"
                      value={field.value}
                      onChange={(e) => handleFieldChange(index, 'value', e.target.value)}
                    />
                    <button type="button" onClick={() => handleRemoveField(index)}>
                      Remove
                    </button>
                  </div>
                ))}
                <button type="button" onClick={handleAddField}>
                  Add Field
                </button>
                <button   type="submit">Submit</button>
              </form>
        
              </div>  
               :   " "
          }
     

       

      {
       
      <div className='d-flex justify-content-center align-items-center p-3'>

<div className="card " style={{width: 700}}>
  <div class="card-body">
  <h5 class="card-title">Today Market {}</h5>
      <table class='table'>
      <thead>
    <tr>
    
      <th scope="col">price</th>
      <th scope="col">product</th>
 
    </tr>
  </thead>
        

         {
          dailyCost.map((p)=>{

            return(
              <tr>
              
               
                <td>{p.name}</td> 
                 <td>{p.value}</td>   
               
             </tr>
              
            )


            
          })
         }
         
      
    
      </table>
  </div>
</div>

        </div>

   
     
      }
    
  
      </div>
    );
};

export default RegularCost;