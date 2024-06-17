import UserProfileForm, { UserFormData } from "@/Form/UserProfileForm";
import { Dialog, DialogTrigger,DialogContent } from "../ui/dialog";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../ui/button";
import { useLocation } from "react-router-dom";
import { useGetUserRequest } from "@/api/userApi";

type Props = {
    onCheckOut:(userFormData:UserFormData)=>void
    isLoading:boolean;
    disabled:boolean
}

const CheckoutButton = ({onCheckOut,isLoading,disabled}:Props) => {
    const {pathname} = useLocation()
    const {isAuthenticated,loginWithRedirect} = useAuth0()
    const {isLoading:UserLoading} = useGetUserRequest()
    const onLogin = async ()=>{
        await loginWithRedirect({
           appState:{
               returnTo:pathname
           }
        })
    }
     if(!isAuthenticated || isLoading){
      return <Button className="w-full" onClick={onLogin}>
        Login to Checkout
    </Button>
     }
  return (
     <Dialog>
        <DialogTrigger asChild>
           <Button disabled={disabled} className="w-full">
             CheckOut
           </Button>
        </DialogTrigger>
        <DialogContent className=" max-w-[425px] md:min-w-[700px]">
           <UserProfileForm onSaVe={onCheckOut} buttonText="Confirm Checkout" isloading={UserLoading}/>
        </DialogContent>
     </Dialog>
  )
}

export default CheckoutButton