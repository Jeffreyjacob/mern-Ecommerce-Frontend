import { CreateWishlistRequest, Wishlist } from "@/lib/types"
import { useAuth0 } from "@auth0/auth0-react"
import { useMutation, useQuery } from "react-query"
import { toast } from "sonner"


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useCreateWishListRequest = ()=>{
    const {getAccessTokenSilently} = useAuth0()
    const createWishList = async (data:CreateWishlistRequest)=>{
       const accessToken = await getAccessTokenSilently()
       const response = await fetch(`${API_BASE_URL}/api/wishlist/createWishlist`,{
         method:"POST",
         headers:{
            Authorization: `Bearer ${accessToken}`,
            "Content-type":"application/json"
         },
         body:JSON.stringify(data),
       })
       if(!response.ok){
         throw new Error("Failed to create wishlist")
       }
       return response.json()
    }

    const {mutateAsync:createNewWishlist,isLoading} = useMutation(createWishList,{
        onSuccess:(data)=>{
           toast.success(data.message)
        },
        onError:()=>{
            toast.error("Unable to add to wishlist")
        }
    })
    
   return{createNewWishlist,isLoading}
}

export const useGetWishlistRequest = ()=>{
    const {getAccessTokenSilently} = useAuth0()
    const getWishlist = async ():Promise<Wishlist[]> =>{
        const accesstoken = await getAccessTokenSilently()
        const response = await fetch(`${API_BASE_URL}/api/wishlist`,{
            method:"GET",
            headers:{
                Authorization: `Bearer ${accesstoken}`
            }
        })
        if(!response){
            throw new Error("failed to get Wishlist")
        }
        return response.json()
    }
    const {data:fetchwishlist,isLoading} = useQuery("fetchwishlist",getWishlist)
    return {fetchwishlist,isLoading}
}