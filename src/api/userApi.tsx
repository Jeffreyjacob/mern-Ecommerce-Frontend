import { user } from "@/lib/types"
import { useAuth0 } from "@auth0/auth0-react"
import { useMutation, useQuery } from "react-query"
import { toast } from "sonner"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

type CreateUserRquest = {
    auth0Id: string | undefined,
    email: string | undefined
}

export const useCreateUserRequest = () => {
    const { getAccessTokenSilently } = useAuth0()
    const CreateNewUser = async (user: CreateUserRquest) => {
        const accessToken = await getAccessTokenSilently()
        const response = await fetch(`${API_BASE_URL}/api/user`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        if(!response.ok) {
            throw new Error("Failed to create user")
        }
    }
    const { mutateAsync: Createuser,isLoading,isError,isSuccess} = useMutation(CreateNewUser)
    return { Createuser,isLoading,isError,isSuccess}
}

type UpdateUserForm = {
    name:string,
    city:string,
    addressLine:string,
    country:string
}

export const useUpdateUserRequest = ()=>{
    const {getAccessTokenSilently} = useAuth0();
    const UpdateUser = async (updateUserRequest:UpdateUserForm)=>{
        const accessToken = await getAccessTokenSilently()
        const response = await fetch(`${API_BASE_URL}/api/my/user/update`,{
            method:"PUT",
            headers:{
                Authorization: `Bearer ${accessToken}`,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updateUserRequest)
        })
        if(!response.ok){
            throw new Error("Failed to update user")
        }
      return response.json()
    } 

    const {mutateAsync:updateuser,isLoading,} = useMutation(UpdateUser,{
        onSuccess:()=>{
            toast.success("Profile Updated")
        },
        onError:()=>{
            toast.error("Unable to Update profile at the moment")
        }
    })
     return {updateuser,isLoading}
}

export const useGetUserRequest = ()=>{
    const {getAccessTokenSilently} = useAuth0()
    const getUser = async ():Promise<user>=>{
       const accessToken = await getAccessTokenSilently()
       const response = await fetch(`${API_BASE_URL}/api/my/user`,{
         method:"GET",
         headers:{
            Authorization: `Bearer ${accessToken}`,
            "Content-type":"application/json"
         }
       })
       if(!response.ok){
         throw new Error("Failed to get User")
       }
       return response.json()
    } 
    const {data:FetchUser,isLoading} = useQuery("fetchUser",getUser)
    return {FetchUser,isLoading}
}