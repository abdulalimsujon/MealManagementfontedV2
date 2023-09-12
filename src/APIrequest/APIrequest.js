import axios from "axios";
import { setMemberDetails } from "../helper/SessionHelper";

export function getAllMember(){
  let URL="http://localhost:5000/api/v1/allMember";

  axios.get(URL).then((res)=>{
            
          
            if(res.status===200){
               
                console.log(res.data.members.member)
                
            }

            
      
        })

     
}