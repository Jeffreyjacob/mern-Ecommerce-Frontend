import { Wishlist } from "@/lib/types"
import moment from "moment"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"


type Props = {
    wishlist:Wishlist,
    onRemove:(id:string)=>void
}

const WishlistCard = ({wishlist,onRemove}:Props) => {
    const navigate = useNavigate()
  return (
    <div className="flex justify-between py-5 gap-4 w-full">
        <div className="flex w-2/3 gap-2">
             <div className="flex w-1/3 h-[100px] bg-Neutral-white-W100 rounded-lg justify-center">
                <img src={wishlist.imageUrl} alt="wishlist-image"
                className="h-[100px] w-full object-contain"/>
             </div>
             <div className="w-2/3 flex flex-col gap-2">
             <h5 className="text-[12px] lg:text-[14px] font-medium text-Neutral-B900 ">{wishlist.title}</h5>
                    <span className='text-[10px] lg:text-[12px] text-Neutral-B500 font-medium flex-nowrap'>Added On: {moment(wishlist.createAt).format("DD-MMMM-YYYY")}</span>
                    <span onClick={()=>onRemove(wishlist.Id)} className=" text-[12px] font-normal text-Neutral-B900 cursor-pointer">
                        Remove Item
                        </span>
             </div>
        </div>

        <div className='flex w-1/3 gap-4 items-center'>
                <span className='text-[12px] lg:text-[14px] text-Neutral-B900 font-medium capitalize'>$ {wishlist.price}</span>
               <Button className='text-[12px] lg:text-[14px] text-Neutral-B900' variant="outline"
               onClick={()=>navigate(`/detail-page/${wishlist.Id}`)}>
                View  Item
               </Button>
            </div>
    </div>
  )
}

export default WishlistCard