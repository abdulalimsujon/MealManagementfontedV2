import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

import { Button, Modal, Table } from 'react-bootstrap';
import { SweetAlert } from '../helper/SweetAlert';
import { IsAdmin } from '../helper/SessionHelper';
import toast from 'react-hot-toast';
import { FaRegEnvelope  } from "react-icons/fa6";



const AllMember = () => {
  

  const date = new Date();

  let day =parseInt( date.getDate());

  


 const [value,setValue] = useState([]) 
 const [meal,setMeal] = useState([])
 const [value1,setValue1] = useState(null)
  const [show, setShow] = useState(false);
  const [admin,setAdmin] = useState(0);
  const [members,Setmembers] = useState([])
  const [showModal2, setShowModal2] = useState(false);
  

  const handleCloseModal2 = () => setShowModal2(false);
  
  


  let  editmealRef,editbalanceRef, mealRef,balanceRef = useRef();


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

 const  handleSubmitmodal2 = ()=>{


  // update meal

  const meal = editmealRef.value;
  const balance = editbalanceRef.value;
  let URL1=`http://localhost:5000/api/v1/updateMeal/${value1}`

  const postBody={
        meal,
        balance
      
  }


  axios.post(URL1,postBody).then((res)=>{      
            if(res.status===200){  

              toast.success('successfully Updated data')                     
            }

        })


        setShowModal2(false) ;
         

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

  

  const handleShowModal2= async(id) => {

    setValue1(id);

   

        // get meal

  let URL=`http://localhost:5000/api/v1/getMeal/${id}`


  await axios.get(URL).then((res)=>{      
             if(res.status===200){  
              
             
               setMeal(res.data.data);

               setShowModal2(true);

              
                            
             }
 
         })
  }

/// send email 


  
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
                      <Button   className='text-dark btn btn-info mx-2' variant="primary"  onClick={()=>handleShowModal2(member?._id)}>
                              update
                             </Button>

                    
                        </>
                         </td>  : <h1></h1>


                        }

                                        
                    
                       {
                       
                       
                       admin  ?  <td><Button className='text-dark btn btn-info mx-2' onClick= {()=>onDelete(member._id)} >Delete</Button></td>  : <h1></h1>


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
                                <input ref={(input)=>balanceRef=input} placeholder='Balance' type='number' className='form-control animated fadeInUp'></input>
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
          <Modal.Title>Updating Meal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="container">
                <div className="row justify-content-center">                         
                                <br/>
                                <label>meal</label>
                                <input ref={(input)=>editmealRef=input} defaultValue={meal?.meal} type='email' className='form-control animated fadeInUp'></input>
                                <br/>
                                <label>balance</label>
                                <input ref={(input)=>editbalanceRef=input} defaultValue={meal?.balance}  type='number' className='form-control animated fadeInUp'></input>
                                <br/>
                        
                </div>
       </div>




        </Modal.Body>
        <Modal.Footer>
          <Button className='text-dark btn btn-info mx-2' onClick={handleCloseModal2}>
            Close
          </Button>
          <Button className='text-dark btn btn-info mx-2' onClick={handleSubmitmodal2}>
            update
          </Button>
        </Modal.Footer>
      </Modal>      
        </div>


    );
};

export default AllMember;