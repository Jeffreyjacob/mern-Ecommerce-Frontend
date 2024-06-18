import { ChevronRight } from "lucide-react"
import DeliveryImage from '@/assets/Frame 11.png';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AfterPaymentPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="container bg-[#D5E5D7] w-full py-10">
                <h4 className="text-[18px] md:text-[24px] font-bold text-Neutral-B900 mb-3">
                    Successful Order
                </h4>
                <div className="flex gap-2 text-[14px] items-center">
                    <span className=" font-medium text-Neutral-B500">Ecommerce</span>
                    <ChevronRight className="w-4 h-4 text-Neutral-B400" />
                    <span className=" text-Neutral-B900 font-medium"> Successful Order</span>
                </div>
            </div>
            <div className="flex w-full h-[70vh] justify-center items-center">
                <div className="flex flex-col w-full h-full justify-center items-center gap-5">
                    <img src={DeliveryImage} alt="delivery-image"
                        className="w-[140px] h-[120px]" />
                    <h5 className="text-[24px] text-Neutral-B900 font-bold">Thank you for Shopping</h5>
                    <span className="text-[14px] text-Neutral-B500 font-normal w-[280px]">Your order has been successfully placed and is now being processed.</span>
                    <Button className="w-fit text-[14px]" onClick={() => navigate("/my-account")}>
                        Go to your account
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AfterPaymentPage