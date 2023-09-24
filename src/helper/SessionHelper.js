class SessionHelper{


    getToken(){

      return localStorage.getItem('token')

    }
    setToken(token){
      localStorage.setItem('token',token)
    }

    setMemberDetails(memberDetails){
       localStorage.setItem("member",JSON.stringify(memberDetails))
   
   }
   
    getMemberDetails(){
      return  JSON.parse(localStorage.getItem("member"))
   }

   removeSession(){
    localStorage.clear();
    window.location.href="/";
   }
   
   
   }
   
   export const {setMemberDetails,getMemberDetails,getToken,setToken, removeSession} = new SessionHelper()