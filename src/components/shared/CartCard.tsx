import { AddCart } from "@/pages/DetailPage"
import { Card } from "../ui/card"
import { cn } from "@/lib/utils"
import QuantityCard from "./QuantityCard"
import { useDispatch } from "react-redux"
import { addDecrement, addIncrement, removeCartAction } from "@/redux/feature/CartSlice"
import { Button } from "../ui/button"
import { X } from "lucide-react"


type Props = {
    cart: AddCart
}

const CartCard = ({ cart }: Props) => {
    const dispatch = useDispatch()
    const setIncrement = () => {
        dispatch(addIncrement(cart))
    }
    const setDecrement = () => {
        if (cart.quantity > 1) {
            dispatch(addDecrement(cart))
        }
    }
    const removeCart = ()=>{
        dispatch(removeCartAction(cart))
    }
    return (
        <div className="flex w-full gap-5 py-6">
            <Card className=" w-[120px] bg-Neutral-white-W100 h-[90px]">
                <img src={cart.imageUrl} alt="cart-image"
                    className="w-full h-full rounded-lg object-contain" />
            </Card>
            <div className="flex flex-col md:flex-row justify-start flex-1 items-start gap-3">
                <div>
                    <h6 className=" text-Neutral-B900 font-medium text-[14px] lg:w-[230px]">
                        {cart.title}
                    </h6>
                    <div className="flex gap-2 items-center">
                        <span className=" text-Neutral-B500 text-[12px]">
                            color:
                        </span>
                        <div className={cn(`w-[12px] h-[12px] rounded-full`, {
                            "bg-[#A3BEF8]": cart.colors.find((c) => c === "blue"),
                            "bg-[#83B18B]": cart.colors.find((c) => c === "green"),
                            "bg-[#FFD58A]": cart.colors.find((c) => c === "yellow"),

                        })} /> -
                        <span className=" text-Neutral-B500 text-[12px]">
                            size:
                        </span>
                        <span className=" text-Neutral-B500 text-[12px] uppercase">
                            {cart.size}
                        </span>

                    </div>
                </div>
                <h5 className="text-Neutral-B900 font-medium text-[14px] flex justify-start w-full">
                    ${cart.price}
                </h5>
                <div className="w-full flex justify-start">
                    <QuantityCard value={cart.quantity} increment={setIncrement} decrement={setDecrement} />
                </div>
            </div>

            <Button variant="outline" className=" bg-Neutral-white-W100 px-3 py-3" onClick={removeCart}>
                <X className="w-5 h-5" />
            </Button>

        </div>
    )
}

export default CartCard