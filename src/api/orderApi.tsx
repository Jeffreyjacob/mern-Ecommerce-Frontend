import { CreateCheckoutRequest } from "@/lib/types"
import { useAuth0 } from "@auth0/auth0-react"
import { useMutation } from "react-query"
import { toast } from "sonner"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useCreateCheckOutSession = ()=>{
    const {getAccessTokenSilently} = useAuth0()
    const createCheckoutSession = async (createCheckoutRequest:CreateCheckoutRequest)=>{
         const accessToken = await getAccessTokenSilently()
         const response = await fetch(`${API_BASE_URL}/api/order/checkout/create-checkout-session`,{
            method:"POST",
            headers:{
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            body:JSON.stringify(createCheckoutRequest)
         })
         if(!response.ok){
            throw new Error("Failed to create checkout")
         }
         return response.json()
    }
    const {mutateAsync:createCheckout,isLoading,error,reset} = useMutation(createCheckoutSession)
    if(error){
        toast.error(error.toString())
        reset();
    }
    return{createCheckout,isLoading}

}