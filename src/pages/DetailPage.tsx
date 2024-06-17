import { useGetProductbyId, useGetRelatedProduct } from "@/api/productApi"
import ProductCard from "@/components/shared/ProductCard"
import QuantityCard from "@/components/shared/QuantityCard"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { product, productData } from "@/lib/types"
import { cn } from "@/lib/utils"
import { addCartAction } from "@/redux/feature/CartSlice"
import { ChevronRight, Heart, Share2, Star } from "lucide-react"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { toast } from "sonner"


export type AddCart = {
    id: string 
    colors: string[],
    title: string ,
    imageUrl: string ,
    price: number ,
    size: string[]
    quantity: number,
}

const colorType = [
    { name: "blue", value: "#A3BEF8" },
    { name: "green", value: "#83B18B" },
    { name: "yellow", value: "#FFD58A" },
]

const sizes = [
    { name: "S", value: "s" },
    { name: "M", value: "m" },
    { name: "L", value: "l" },
    { name: "XL", value: "xl" },
    { name: "2XL", value: "2xl" },
]

const DetailPage = () => {
    const { id} = useParams()
    const dispatch = useDispatch()
    const { fetchProductById, isLoading } = useGetProductbyId(id)
    const { fetchRelatedProduct, isLoading: RelatedProductLoading } = useGetRelatedProduct(id)
    const [productDetail, setProductDetail] = useState<product>()
    const [similarProduct, setSimilarProduct] = useState<productData>()
    const [addCart, setAddCart] = useState<AddCart>({
        id:"",
        title:"",
        imageUrl:"",
        price:0,
        quantity: 1,
        size: [],
        colors: []
})
    useEffect(() => {
        setProductDetail(fetchProductById)
        setSimilarProduct(fetchRelatedProduct)
        if(fetchProductById){
            setAddCart((prevState) => ({
                ...prevState,
                title: fetchProductById.title,
                price: parseInt(fetchProductById.price),
                imageUrl: fetchProductById.imageUrl,
                id: fetchProductById._id
    
            }))
        }
    }, [id, fetchProductById, fetchRelatedProduct])

    const setColorChange = (color: string) => {
        setAddCart((prevState) => ({
            ...prevState,
            colors: prevState.colors.includes(color) ? prevState.colors.filter((oldColor) => oldColor !== color) :
                [...prevState.colors, color]
        }))
    }

    const setSizeChange = (size: string) => {
        setAddCart((prevState) => ({
            ...prevState,
            size: prevState.size.includes(size) ? prevState.size.filter((s) => s !== size) :
                [...prevState.size, size]
        }))
    }
    const setQuantiyIncrement = () => {
        setAddCart((prevState) => ({
            ...prevState,
            quantity: prevState.quantity + 1
        }))
    }
    const setQunatityDecrement = () => {
        if (addCart.quantity > 1) {
            setAddCart((prevState) => ({
                ...prevState,
                quantity: prevState.quantity - 1
            }))
        }
    }
    console.log(addCart)
    const AddCartHandle = ()=>{
       dispatch(addCartAction(addCart))
       toast.success("Added to Cart")
    }
    return (
        <div>
            {
                isLoading ? (
                    <div className="container w-full max-w-5xl mb-20 h-full py-10">
                        <div className="flex flex-col lg:flex-row w-full h-full gap-10">
                            <div className="flex w-full lg:w-1/2">
                                <Skeleton className="w-full h-[300px] lg:h-[350px] rounded-lg" />
                            </div>
                            <div className="flex w-full lg:w-1/2 h-full">
                                <Skeleton className="w-full h-[300px] lg:h-[350px] rounded-lg" />
                            </div>
                        </div>
                        <Skeleton className="w-full h-[80px] mt-10" />
                    </div>
                ) : (
                    <div className="container w-full max-w-5xl mb-20">
                        <div className="flex  gap-3 py-5 text-[14px] items-center">
                            <h4 className=" font-medium text-Neutral-B500">Ecommerce</h4>
                            <ChevronRight className="w-4 h-4 text-Neutral-B500" />
                            <span className=" text-Neutral-B900 font-medium">
                                {productDetail?.title}
                            </span>
                        </div>

                        <div className="flex flex-col lg:flex-row w-full justify-start items-center py-10 gap-10">
                            {/**left side */}
                            <div className="flex w-full lg:w-1/2">
                                <Card className="flex w-full h-full bg-Neutral-white-W100 justify-center">
                                    <img src={productDetail?.imageUrl} alt="detail-image"
                                        className="w-[350px] h-[350px] lg:h-[455px] object-contain" />
                                </Card>
                            </div>

                            {/**right side */}
                            <div className="flex flex-col w-full lg:w-1/2 gap-5">

                                <div>
                                    <div className="flex w-full justify-between items-center">
                                        <h4 className=" text-[24px] text-Neutral-B900 font-bold">
                                            {productDetail?.title}
                                        </h4>
                                        <Share2 className=" text-Neutral-B300 w-5 h-5" />
                                    </div>
                                    <div className="flex gap-3 mt-2">
                                        <div className="flex gap-4 py-1 px-3 bg-Neutral-white-W100 border-[1px] rounded-full w-fit text-[12px]">
                                            <Star className="w-4 h-5 text-Neutral-B500" />
                                            <span className="text-[14px] text-Neutral-B500">4.2 — 54 Reviews </span>
                                        </div>
                                        <div className=" border-[1px] text-Neutral-B500 px-3 py-1 rounded-full w-fit text-[12px]">
                                            IN STOCK
                                        </div>
                                    </div>
                                </div>

                                <div className=" text-Neutral-B900 text-[18px] font-semibold">
                                    $ {productDetail?.price}
                                </div>
                                {/**select color */}
                                <div>
                                    <span className=" text-Neutral-B500 font-medium">
                                        AVALIABLE COLORS
                                    </span>
                                    <div className="flex gap-4 mt-2">
                                        {colorType.map((color, index) => (
                                            <div
                                                onClick={() => setColorChange(color.name)}
                                                key={index}
                                                className={cn(`bg-[${color.value}] rounded-full w-[20px] h-[20px]`, {
                                                    "ring-2 ring-offset-2 ring-Neutral-B900": addCart.colors.includes(color.name)
                                                }
                                                )}
                                            />
                                        ))}
                                    </div>
                                </div>
                                {/**select size */}
                                <div>
                                    <span className=" text-Neutral-B500 font-medium">
                                        SELECT SIZE
                                    </span>
                                    <div className="flex gap-2 cursor-pointer mt-2">
                                        {
                                            sizes.map((size, index) => (
                                                <Card key={index}
                                                    onClick={() => setSizeChange(size.value)}
                                                    className={cn(`p-3`, {
                                                        " border-2 border-Neutral-B900": addCart.size.includes(size.value)
                                                    })}>
                                                    {size.name}
                                                </Card>
                                            ))
                                        }
                                    </div>
                                </div>
                                {/**select quantity */}
                                <div>
                                    <span className=" text-Neutral-B500 font-medium">
                                        QUANTITY
                                    </span>
                                    <div>
                                        <QuantityCard value={addCart.quantity}
                                            increment={setQuantiyIncrement}
                                            decrement={setQunatityDecrement} />
                                    </div>
                                </div>

                               <div className="flex gap-4">
                               <Button className=" bg-Neutral-B900" onClick={AddCartHandle}>
                                    Add to Cart
                                </Button>
                                <Button variant="outline">
                                    <Heart className="w-5 h-6 text-Neutral-B500" />
                                </Button>
                               </div>

                            </div>
                        </div>
                        {/**Detail  */}
                        <div className="max-w-3xl mt-10">
                            <h4 className="text-[17px] text-Neutral-B900 font-semibold">Detail</h4>
                            <p className=" text-neutral-500 font-normal">{productDetail?.description}</p>
                        </div>

                        {/**You might also like */}
                        <div className="mt-16 flex flex-col justify-center items-center lg:items-start lg:justify-start w-full">
                            <h4 className=" text-Neutral-B900 font-bold text-[24px]">
                                You might also like
                            </h4>
                            <span className=" text-Neutral-B300 font-medium text-[12px]">
                                SIMILAR PRODUCTS
                            </span>
                            <div>
                                {
                                    RelatedProductLoading ? (
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                                            <Skeleton className="w-[238px] h-[312px]" />
                                            <Skeleton className="w-[238px] h-[312px]" />
                                        </div>
                                    ) : (
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                                            {
                                                similarProduct?.data.slice(0, 3).map((product) => (
                                                    <ProductCard product={product} reload />
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default DetailPage