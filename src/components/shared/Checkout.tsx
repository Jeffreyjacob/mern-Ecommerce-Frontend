
import { RootState } from "@/redux/store"
import { Card } from "../ui/card"
import { Separator } from "../ui/separator"
import { useSelector } from "react-redux"
import CheckoutButton from "./CheckoutButton"



const Checkout = () => {
    const cart = useSelector((state:RootState)=> state.cart.cart)
    const subtotal =()=>{
         const itemTotal = cart.reduce((total,cart)=> total + cart.price * cart.quantity,0 )
         return itemTotal
    } 
    const total = ()=>{
        const total = subtotal() + 3
        return total.toFixed(2)
    }
    const checkoutSession = async()=>{

    }
  return (
    <Card className=" border border-Neutral-white-W100 w-full px-7 py-5">
        <h5 className="mt-7 text-Neutral-B900 text-[16px] font-semibold">
            Order Summary
        </h5>
        <div className="flex flex-col gap-4 py-10">
            {/**Subtotal */}
            <div className="flex justify-between items-center">
                <span className="text-[14px] text-Neutral-B500 font-medium">
                  Subtotal
                </span>
                <span className="text-[14px] text-Neutral-B900 font-medium">
                  ${subtotal().toFixed(2)}
                </span>
            </div>
            {/** Shipping*/}
            <div className="flex justify-between items-center">
                <span className="text-[14px] text-Neutral-B500 font-medium">
                  Shipping
                </span>
                <span className="text-[14px] text-Neutral-B900 font-medium">
                    Free
                </span>
            </div>
            {/**Tax */}
            <div className="flex justify-between items-center">
                <span className="text-[14px] text-Neutral-B500 font-medium">
                  Tax
                </span>
                <span className="text-[14px] text-Neutral-B900 font-medium">
                    $3.00
                </span>
            </div>
        </div>
        <Separator/>
        {/**total */}
        <div className="flex justify-between items-center py-5">
                <span className="text-[14px] text-Neutral-B900 font-medium">
                  Total
                </span>
                <span className="text-[14px] text-Neutral-B900 font-medium">
                    ${total()}
                </span>
            </div>
           
         <CheckoutButton onCheckOut={checkoutSession} isLoading={false} disabled={cart.length < 1}/>
    </Card>
  )
}

export default Checkout