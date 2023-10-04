import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

import { Button, Modal, Table } from 'react-bootstrap';
import { SweetAlert } from '../helper/SweetAlert';
import { IsAdmin } from '../helper/SessionHelper';
import toast from 'react-hot-toast';




const AllMember = (props) => {
  

  const date = new Date();

  let day =parseInt( date.getDate());

  
  const [members,Setmembers] = useState([])

 const [id,setId] = useState(null)
  const [show, setShow] = useState(false);
  const [admin,setAdmin] = useState(0);
 




  let mealRef,balanceRef = useRef();


  const handleClose = () =>{

    setShow(false);

  } 
  


  const handleSubmit =async(req,res) =>{


    /// get data by id and date for checking wether it is in database or not

  //   let URL1="http://localhost:5000/api/v1/getMealInfoByDateAndId";

  //   const postbody={
  //     memberId:id,
  //     date: day

        
  //   }
   

  //  const {data }= await axios.get(URL1,postbody)

  //  console.log(data)

   
  // if(!data){
    
    const meal = mealRef.value;
    const balance = balanceRef.value;
 
    let URL="http://localhost:5000/api/v1/regularMeal";

    const postBody={
      memberId:id,
      meal:meal,
      balance:balance,
      date:day

        
    }
 

   await axios.post(URL,postBody).then((res)=>{      
              if(res.data.MealControl){  
          
              
                toast.success('Successfully submitted')                      
              }
 
          })
   

  // }else{
  //   toast.error('you cannot set data twice in a day') 

  // }

   
    setShow(false);

  } 

const onDelete=(id)=>{
  SweetAlert(id).then((res)=>{

    
    if(res===true){
      
      getData();



    }
  })
}


  const handleShow = (id) => {

    setId(id)
    setShow(true);
  }
  

  
  
    useEffect(()=>{
    
      getData();
      setAdmin(IsAdmin())
      
    },[])

    




     function getData() {
      let URL="http://localhost:5000/api/v1/allMember";

      axios.get(URL).then((res)=>{
            
          
            if(res.status===200){
              Setmembers(res.data.members)
              
                
            }

            
      
        })

     
      
    }
  
   
 

  
    return (
        <div>
            <h1>All the members</h1>
            
            <Table striped bordered hover>
            <thead>
    <tr>
    <th scope="col">serial</th>
      <th scope="col">name</th>
    
      <th scope="col">email</th>
      <th scope="col">mobile</th>
      { 
       admin  ? <th scope="col">setMeal</th> : ""
     }

      {

      admin  ?  <th className="text-danger" scope="col "> Action</th>  : <h1></h1>
      
      }
    </tr>
  </thead>

            {
                members.map((member,i)=>{

                     return(
                      
                        <tr>
                   
                        <th scope="row">{i}</th>
                        <td>{member.name}</td>
                        <td>{member.email}</td>
                        <td>{member.mobile}</td>
                        
                       { 
                           admin  ?  <td className='m-2'> <div><Button className='text-dark btn btn-info mx-2' variant="primary" onClick={()=>handleShow(member._id)}>set </Button> 
                           
                           </div>  </td> : <h1></h1>
                       }
                        
                        
                       
                 
                 {

                   admin  ?  <td><Button onClick= {()=>onDelete(member._id)} className="text-dark">Delete</Button></td>  : <h1></h1>


                 }



                        
                      </tr>                       
                      
                     )

                }
                
                
                )
            }

            </Table>

            <>

           

   


<Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Regular Basis Meal</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div className="container">
                <div className="row justify-content-center">                         
                                <br/>
                                <input ref={(input)=>mealRef=input} placeholder='Regular Meal' type='email' className='form-control animated fadeInUp'></input>
                                <br/>
                                <input ref={(input)=>balanceRef=input} placeholder='Balance' type='password' className='form-control animated fadeInUp'></input>
                                <br/>
                        
                </div>
            </div>


    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleSubmit}>
        submit
      </Button>
    </Modal.Footer>
  </Modal>

    </>

    



            
        </div>


    );
};

export default AllMember;