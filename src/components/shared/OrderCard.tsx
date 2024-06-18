import momemt from 'moment'
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

type Props = {
    cartItem:{
        id: string;
        title: string;
        quantity: string;
        imageUrl: string;
        price: string;
    },
    date:string,
    status:string
}

const OrderCard = ({cartItem,date,status}:Props) => {
    const navigate = useNavigate()
    return (
        <div  className="flex justify-between py-5 gap-4">

            <div className="flex w-1/2 items-center gap-4">
                <div className=" bg-Neutral-white-W100 w-1/3 rounded-lg">
                    <img src={cartItem.imageUrl} alt="cart-image"
                        className="w-full h-[100px] object-contain" />
                </div>
                <div className='flex flex-col gap-2'>
                    <h5 className="text-[12px] lg:text-[14px] font-medium text-Neutral-B900 ">{cartItem.title}</h5>
                    <span className='text-[10px] lg:text-[12px] text-Neutral-B500 font-medium'>Order On: {momemt(date).format("DD-MMMM-YYYY")}</span>
                    <span className="text-[10px] lg:text-[12px] text-Neutral-B900 font-medium">${cartItem.price}</span>
                </div>
            </div>

            <div className='flex  w-1/2 gap-4 items-center'>
                <span className='text-[12px] lg:text-[14px] text-Neutral-B900 font-medium capitalize underline'>{status}</span>
               <Button className='text-[12px] lg:text-[14px] text-Neutral-B900' variant="outline"
               onClick={()=>navigate(`/detail-page/${cartItem.id}`)}>
                View  Item
               </Button>
            </div>


        </div>
    )
}

export default OrderCard