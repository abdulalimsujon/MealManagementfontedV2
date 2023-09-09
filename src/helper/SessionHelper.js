class SessionHelper{

    setMemberDetails(memberDetails){
       localStorage.setItem("member",JSON.stringify(memberDetails))
   
   }
   
    getMemberDetails(){
      return  JSON.parse(localStorage.getItem("member"))
   }
   
   
   }
   
   export const {setMemberDetails,getMemberDetails} = new SessionHelper()