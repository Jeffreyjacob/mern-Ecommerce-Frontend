import { AdminSearchState } from "@/components/shared/GetUserProduct"
import { productData } from "@/lib/types"
import { useAuth0 } from "@auth0/auth0-react"
import { useMutation, useQuery } from "react-query"
import { toast } from "sonner"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useCreateProductRequest = () => {
    const { getAccessTokenSilently } = useAuth0()
    const createProduct = async (productFormData: FormData) => {
        const accesstoken = await getAccessTokenSilently()
        const response = await fetch(`${API_BASE_URL}/api/admin/product`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accesstoken}`
            },
            body: productFormData
        })
        if (!response.ok) {
            throw new Error("Failed to create Product")
        }
        return response.json()
    }
    const { mutateAsync: CreateProduct, isLoading } = useMutation(createProduct, {
        onSuccess: () => {
            toast.success("Product Created")
        },
        onError: () => {
            toast.error("Failed to create product")
        }
    })
    return { CreateProduct, isLoading }
}

export const useGetProductByUser = (SearchState:AdminSearchState)=>{
    const params = new URLSearchParams();
    params.set("searchQuery",SearchState.searchTerm)
    params.set("page",SearchState.page.toString());
    const {getAccessTokenSilently} = useAuth0()
     const getProductbyuser = async ():Promise<productData> =>{
        const accesstoken = await getAccessTokenSilently()
          const response = await fetch(`${API_BASE_URL}/api/admin/product?${params.toString()}`,{
             method:"GET",
             headers:{
                Authorization:`Bearer ${accesstoken}`
             }
          })
          if(!response.ok){
              throw new Error("Failed to fetch user product")
          }
          return response.json()
     }
     const {data:fetchProductByUser,isLoading} = useQuery(["fetchProductbyuser",SearchState],getProductbyuser)
     return {fetchProductByUser,isLoading}
}

export const useDeleteProductByUser = ()=>{
    const {getAccessTokenSilently} = useAuth0()
    const deleteProductByUser = async (id:string)=>{
       const accessToken = await getAccessTokenSilently()
       const response = await fetch(`${API_BASE_URL}/api/admin/product/delete?id=${id}`,{
            method:"DELETE",
            headers:{
                Authorization: `Bearer ${accessToken}`
            }
       })
       if(!response.ok){
        throw new Error("Fail to delete Product")
       }
       return response.json()
    }
    const {mutateAsync:deleteProduct} = useMutation(deleteProductByUser,{
        onSuccess:()=>{
            toast.success("Product Deleted!")
        },
        onError:()=>{
            toast.error("Unable to Delete Product!")
        }
    })
    return {deleteProduct}
}