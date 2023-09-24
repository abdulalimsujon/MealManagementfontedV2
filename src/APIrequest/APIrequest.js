import axios from "axios";
import { setMemberDetails } from "../helper/SessionHelper";
import toast from "react-hot-toast";





//.........................delete Task----------------->

export function deleteMember(id){

 
    let URL="http://localhost:5000/api/v1/deleteMember/"+id

    return axios.get(URL).then((res)=>{

      if(res.status === 200){
        toast.success("Delete Successful")
        return true
      }else{
        toast.error('something went wrong')
        return false 
      }
    }).catch((error)=>{
        toast.error('something went wrong')
        
        return false;

    })
}

