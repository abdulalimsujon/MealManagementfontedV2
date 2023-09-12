import axios from 'axios';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';

const RegularCost = () => {

    const [fields, setFields] = useState([{  }]);
    

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
    console.log('Form data:', fields);

    let URL="http://localhost:5000/api/v1/mealCostDetail";

  axios.post(URL,{fields}).then((res)=>{
            
          
            if(res.status===200){
               
                toast.success("successfully submitted");
                
            }else{

              toast.error("something went wrong");

            }

            
      
        })

      

     

  
  };
    return (
        <div>
            <h3 className='p-3'>Add Regular Cost</h3>
       <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>

       <h4 className='text-center p-3'>Market list</h4>

       <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>product</th>
          <th>price</th>
          
          
        </tr>
        </thead>
        <tbody>
       {
        fields.map((field)=>{
            return(

                <tr>
                <td>{field.name}</td>
                <td>{field.value}</td>
                
              </tr>

              
     
            )
        })
       }
       <tr>
               
              </tr>
           
        </tbody>
    </Table>
    
  
      </div>
    );
};

export default RegularCost;