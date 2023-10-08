import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';

const RegularCost = () => {
    


    const [fields, setFields] = useState([{  }]);

   const [dailyCost,setDailyCost] = useState([])
   const [active,setActive] = useState(0)

     console.log(active)



    useEffect(()=>{


      let urL="http://localhost:5000/api/v1/getMealCostDetail";

          axios.get(urL).then((res)=>{
            setDailyCost(res.data.data)
          })
   
},[])


    console.log("###",fields)

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
    console.log('Form data:', fields.length);

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

  
  };
    return (
        <div>
           <h4 className='text-center p-3'>Market list</h4>
         
    <h3 className='p-3'>Add Regular Market</h3>
       <form onSubmit={handleSubmit} className='table_style'>

        {fields.map((field, index) => (
          <div key={index}>
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
        <button onClick={()=>setActive(1)}  type="submit">Submit</button>
      </form>

      {
       
      <div className='d-flex justify-content-center align-items-center p-3'>

<div className="card " style={{width: 700}}>
  <div class="card-body">
  <h5 class="card-title">Today Market</h5>
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