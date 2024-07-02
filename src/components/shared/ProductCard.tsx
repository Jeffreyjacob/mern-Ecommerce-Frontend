import { product } from "@/lib/types"
import { Card } from "../ui/card"
import { useNavigate } from "react-router-dom"

type Props = {
    product: product,
}

const ProductCard = ({ product }: Props) => {
    const navigate = useNavigate()
    const handleCheck = ()=>{
      navigate(`/detail-page/${product._id}`)
    }
    return (
        <div>
            <Card className=" bg-Neutral-white-W100 w-[238px] h-[312px]" onClick={handleCheck}>
                <img src={product.imageUrl} alt="image" className="w-full h-full rounded-lg" />
            </Card>
            <div className="flex flex-col gap-3 mt-5">
                <h5 className=" font-medium text-[14px] text-Neutral-B900 w-[230px]">{product.title}</h5>
                <div className="flex gap-6 items-center">
                 <span className=" text-[12px] text-Neutral-B900 font-medium 
                 border-[1px] border-Neutral-B600 px-2 py-1 rounded-full">
                    {product.avaliableQuantity}
                    </span>
                 <span className=" text-Neutral-B600 text-[14px] font-normal">${product.price}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard