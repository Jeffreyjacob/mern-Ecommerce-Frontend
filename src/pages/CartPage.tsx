import { Separator } from "@/components/ui/separator"
import { ChevronRight } from "lucide-react"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import CartCard from "@/components/shared/CartCard"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import Checkout from "@/components/shared/Checkout"


const CartPage = () => {
    const cart = useSelector((state:RootState)=> state.cart.cart)
    console.log(cart)
    const navigate = useNavigate()
  return (
    <div>
        <div className="container bg-Neutral-white-W100 w-full py-10 ">
                <h4 className="text-[18px] md:text-[24px] font-bold text-Neutral-B900 mb-3">
                    Cart
                </h4>
                <div className="flex gap-2 text-[14px] items-center">
                    <span className=" font-medium text-Neutral-B500">Ecommerce</span>
                    <ChevronRight className="w-4 h-4 text-Neutral-B400" />
                    <span className=" text-Neutral-B900 font-medium">Cart</span>
                </div>
            </div>
            <div className="container max-w-6xl flex flex-col lg:flex-row py-14 gap-5">
               <div className="w-full lg:w-2/3">
                 <h5 className=" text-Neutral-B900 font-semibold text-16px mb-5">
                    Cart
                </h5>
                <Separator/>
                  {
                    cart.length === 0 ? (
                        <div className="mt-10 max-w-5xl container">
                          <div className=" bg-Neutral-white-W100 w-full h-[250px] rounded-lg flex flex-col justify-center items-center">
                              <h4 className="text-[19px] text-Neutral-B900 font-semibold mb-5">Cart is Empty</h4>
                              <Button onClick={()=>navigate("/")}>
                                Start Shopping
                              </Button>
                          </div>
                        </div>
                    ):(
                        <div className="mt-10">
                        {
                         cart.map((cartItem)=>(
                            <CartCard cart={cartItem} />
                         ))
                        }
                     </div>
                    )
                  }
               </div>
       
               <div className="w-full lg:w-1/3">
                  <Checkout/>
               </div>
            </div>
    </div>
  )
}

export default CartPage