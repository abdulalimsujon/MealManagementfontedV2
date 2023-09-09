import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { getMemberDetails, setMemberDetails } from '../helper/SessionHelper';
import { getAllMember } from '../APIrequest/APIrequest';



const AllMember = (props) => {

  const [members,Setmembers] = useState([])

    useEffect(()=>{
    
     
      getData()
      
  
     
    },[])


     function getData() {
      let URL="http://localhost:5000/api/v1/allMember";

      axios.get(URL).then((res)=>{
            
          
            if(res.status===200){
              Setmembers(res.data.members)
                
            }

            
      
        })

     
      
    }

    
    
    const DeleteFunction = async(id)=>{

        let URL= `http://localhost:5000/api/v1/deleteMember/${id}`
        

       await axios.delete(URL).then((res)=>{

        console.log(res.status)
         if(res.status===200){
          getData()
            toast.success("successfully deleted")
         

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
      <th className="text-danger" scope="col "> Action</th>
      
   
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
                        <td><Button onClick= {()=>DeleteFunction(member._id)} className="text-dark">Delete</Button></td>
                      </tr>
                     )

                }
                
                
                )
            }

            </Table>

       
        </div>
    );
};

export default AllMember;