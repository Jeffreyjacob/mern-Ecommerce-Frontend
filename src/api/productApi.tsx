import { product, productData } from "@/lib/types"
import { SearchProductType } from "@/pages/SearchPage"
import { useQuery } from "react-query"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useGetAllProductRequest = ()=>{
    const getAllProduct = async ():Promise<productData> =>{
         const response = await fetch(`${API_BASE_URL}/api/product`,{
            method:"GET",
         })
         if(!response.ok){
            throw new Error("Failed to fatch all product")
         }
         return response.json()
    }
    const {data:FetchAllProduct,isLoading} = useQuery("fetchAllProduct",getAllProduct)
    return {FetchAllProduct,isLoading}
}

export const useGetProductbyId = (id?:string)=>{
   const getProductbyId = async ():Promise<product>=>{
       const response = await fetch(`${API_BASE_URL}/api/product/${id}`,{
         method:"GET",
         headers:{
            "Content-type":"application/json"
         }
       })
       if(!response.ok){
         throw new Error("Failed to get product")
       }
       return response.json()
   }
   const {data:fetchProductById,isLoading,refetch,isFetching} = useQuery("fetchProductById",getProductbyId,{
      enabled:!!id
   })
   return {fetchProductById,isLoading,refetch,isFetching}
}

export const useGetRelatedProduct = (id?:string)=>{
    const getRelatedProduct = async():Promise<productData> =>{
       const response = await fetch(`${API_BASE_URL}/api/product/relatedProduct/${id}`,{
         method:"GET"
       })
       if(!response.ok){
         throw new Error("Failed to get Related Product")
       }
       return response.json()
    }
    const {data:fetchRelatedProduct,isLoading} = useQuery("fetchRelatedProduct",getRelatedProduct,{
      enabled:!!id
    })
    return{fetchRelatedProduct,isLoading}
}

export const useSearchProductRequest = (productSearch:SearchProductType)=>{
   const params = new URLSearchParams()
   params.set("searchQuery",productSearch.searchQuery)
   params.set("category",productSearch.category)
   params.set("size",productSearch.size)
   params.set("price",productSearch.price.toString())
   params.set("page",productSearch.page.toString())
      const searchProduct = async ():Promise<productData>=>{
      const response = await fetch (`${API_BASE_URL}/api/product/search?${params.toString()}`,{
         method:"GET"
      })
      if(!response.ok){
       throw new Error("Faild to featch product")
      }
      return response.json()
   }
   const {data:SearchProduct,isLoading} = useQuery(["searchProduct",productSearch],searchProduct)
   return {SearchProduct,isLoading}
}