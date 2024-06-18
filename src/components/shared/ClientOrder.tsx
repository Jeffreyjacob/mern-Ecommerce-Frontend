import { useGetMyOrder } from "@/api/orderApi"
import OrderCard from "./OrderCard"
import { Skeleton } from "../ui/skeleton"

const ClientOrder = () => {
    const { FetchMyOrder, isLoading } = useGetMyOrder()
     if(!FetchMyOrder || FetchMyOrder.length === 0){
        return <div className="w-full h-[30vh] py-7 bg-Neutral-white-W100 flex rounded-lg justify-center items-center">
        <span className="text-[16px] font-medium text-Neutral-B900">No order found</span>
     </div>
     }
    return (
        <div className="py-7">
            <h5 className="text-[16px] font-semibold text-Neutral-B900">Orders</h5>
            <div>
                {
                    isLoading ? (<div className="w-full h-full flex gap-5">
                        <Skeleton  className="w-full h-[100px]"/>
                        <Skeleton  className="w-full h-[100px]"/>
                    </div>) : (
                        <div>
                            {
                                FetchMyOrder.map((order)=>(
                                    <div>
                                        {
                                            order.cartItems.map((cart)=>(
                                              <OrderCard cartItem={cart} date={order.createdAt} status={order.status} />
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ClientOrder