import { useCreateUserRequest } from "@/api/userApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"


const Auth0Callback = () => {
    const navigate = useNavigate();
    const {user} = useAuth0() 
    const {Createuser} = useCreateUserRequest()
    const hasCreatedUser = useRef(false);
    useEffect(()=>{
       if(user?.sub || user?.email && !hasCreatedUser){
         Createuser({auth0Id:user.sub,email:user.email})
         hasCreatedUser.current = true
       }
       navigate("/")
    },[Createuser,navigate,user])
  return <>Loading...</>
}

export default Auth0Callback