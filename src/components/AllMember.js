import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

import { Button, Modal, Table } from 'react-bootstrap';
import { SweetAlert } from '../helper/SweetAlert';
import { IsAdmin } from '../helper/SessionHelper';
import toast from 'react-hot-toast';



const AllMember = (props) => {
  

  const date = new Date();

  let day =parseInt( date.getDate());

  


 const [value,setValue] = useState([])
  const [show, setShow] = useState(false);
  const [admin,setAdmin] = useState(0);
  const [members,Setmembers] = useState([])
  const [showModal2, setShowModal2] = useState(false);
  

  const handleCloseModal2 = () => setShowModal2(false);
  
  


  let mealRef,balanceRef = useRef();


  const handleClose = () =>{

    setShow(false);

  } 
  


  const handleSubmit = () =>{


    const meal = mealRef.value;
    const balance = balanceRef.value;
    let URL="http://localhost:5000/api/v1/regularMeal";

    const postBody={
      _id:value.id,
      email:value.email,
      meal:meal,
      balance:balance,
        
    }
  

    axios.post(URL,postBody).then((res)=>{      
              if(res.status===200){  

                toast.success('successfully submit')                     
              }
 
          })
   


    setShow(false);

  } 

   
const onDelete=(id)=>{
  SweetAlert(id).then((res)=>{

    
    if(res===true){
      
      getData();



    }
  })
}


  const handleShow = (value) => {
    setValue(value)
    setShow(true);
  }

  const handleShowModal2= (id) => {
    setShowModal2(true);

     console.log(id)


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
            <h2>All the <span className='HeadingName'>members</span></h2>
            
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
       admin  ? <th scope="col">Edit Meal</th> : ""
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
                           admin  ?  <td className='m-2'> <div><Button 
                           
                          
                           className='text-dark btn btn-info mx-2' variant="primary" onClick={()=>handleShow({id:member._id,email:member.email})}>set </Button> 
                           
                           </div>  </td> : <h1></h1>
                           
                       }
                                       

                        {

                          admin  ?  <td>  
                      
                      <>
                      <Button   className='text-dark btn btn-info mx-2' variant="primary"  onClick={()=>handleShowModal2(member._id)}>
                              update
                             </Button>

                    
                        </>
                         </td>  : <h1></h1>


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


            <>

  
    </>

     

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

    <Modal show={showModal2} onHide={handleCloseModal2}>
    <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal2}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>      
        </div>


    );
};

export default AllMember;