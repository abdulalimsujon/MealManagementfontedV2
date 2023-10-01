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
    IsAdmin(){
     const member =   JSON.parse(localStorage.getItem("member"))
     return member.role;
   
   }
   
    getMemberDetails(){
      return  JSON.parse(localStorage.getItem("member"))
   }

   removeSession(){
    localStorage.clear();
    window.location.href="/";
   }


   getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}
   
   }

   

   
   export const {setMemberDetails,getMemberDetails,getToken,setToken, removeSession,IsAdmin,getBase64} = new SessionHelper()