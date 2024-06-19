import { useCreateWishListRequest, useGetWishlistRequest } from "@/api/wishlistApi"
import { Skeleton } from "../ui/skeleton"
import WishlistCard from "./WishlistCard"
import { useEffect, useState } from "react"
import {Wishlist } from "@/lib/types"


const WishlistContent = () => {
    const {fetchwishlist,isLoading} = useGetWishlistRequest()
    const [wishData,setWishlistData] = useState<Wishlist[]>([])
    const {createNewWishlist} = useCreateWishListRequest()

    useEffect(()=>{
        if(fetchwishlist){
          setWishlistData(fetchwishlist)
        }
      },[fetchwishlist])

     if(!fetchwishlist || fetchwishlist.length === 0){
     return <div className="w-full h-[30vh] py-7 bg-Neutral-white-W100 flex rounded-lg justify-center items-center">
     <span className="text-[16px] font-medium text-Neutral-B900">No order found</span>
  </div>
    }
    const removeHandler = (id:string)=>{
       setWishlistData((prevState)=>{
         const updateWishlist = prevState.filter((wishlist)=> wishlist.Id !== id)
         const itemToRemove = prevState.find((t)=>t.Id === id)
         if(itemToRemove){
            const data  = {
                title:itemToRemove.Id,
                price:itemToRemove.price,
                Id:itemToRemove.Id,
                imageUrl:itemToRemove.imageUrl
              }
               createNewWishlist(data)
         }
         return updateWishlist
       })
    }
  return (
    <div className="py-7">
            <h5 className="text-[16px] font-semibold text-Neutral-B900">Wishlist</h5>
            <div>
                {
                    isLoading ? (<div className="w-full h-full flex gap-5">
                        <Skeleton  className="w-full h-[100px]"/>
                        <Skeleton  className="w-full h-[100px]"/>
                    </div>) : (
                        <div>
                            {
                              wishData?.map((wislist)=>(
                                <WishlistCard wishlist={wislist} onRemove={removeHandler}/>
                              )) 
                            }
                        </div>
                    )
                }
            </div>
    </div>
  )
}

export default WishlistContent