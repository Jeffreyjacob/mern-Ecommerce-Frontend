
import { useGetAllProductRequest } from "@/api/productApi";
import Hero from "@/components/shared/Hero";
import ProductCard from "@/components/shared/ProductCard";
import SecondHero from "@/components/shared/SecondHero";
import { Skeleton } from "@/components/ui/skeleton";
import { Award,Shield, Truck } from "lucide-react"

const HomePage = () => {
    const {FetchAllProduct,isLoading} = useGetAllProductRequest()
    return (
        <div className="w-full h-full">
            <Hero />
            {/**Second section */}
            <div className="container">
                <div className="grid lg:grid-cols-3 justify-center items-center py-10 container mx-auto max-w-5xl gap-4">
                    {/**Free Shipping */}
                    <div className="flex flex-col w-[250px] h-[270px] items-start justify-center gap-3">
                        <div className="p-4 rounded-full bg-Neutral-white-W100 w-fit">
                            <Truck className="w-5 h-5 text-Neutral-B900" />
                        </div>
                        <span className=" text-[16px] font-semibold  text-Neutral-B500">Free Shipping</span>
                        <span className="text-[14px] font-normal text-Neutral-B500">
                            Upgrade your style today and get FREE shipping on all orders! Don't miss out.
                        </span>
                    </div>

                    {/**Satifaction Gurantee*/}
                    <div className="flex flex-col w-[250px] h-[270px] items-start justify-center gap-3">
                        <div className="p-4 rounded-full bg-Neutral-white-W100 w-fit">
                            <Award className="w-5 h-5 text-Neutral-B900" />
                        </div>
                        <span className=" text-[16px] font-semibold text-Neutral-B500">Satisfaction Guarantee</span>
                        <span className="text-[14px] font-normal text-Neutral-B500">
                            Shop confidently with our Satisfaction Guarantee: Love it or get a refund.
                        </span>
                    </div>

                    {/**Secure Payment */}
                    <div className="flex flex-col w-[250px] h-[270px] items-start justify-center gap-3">
                        <div className="p-4 rounded-full bg-Neutral-white-W100 w-fit">
                            <Shield className="w-5 h-5 text-Neutral-B900" />
                        </div>
                        <span className=" text-[16px] font-semibold text-Neutral-B500">Secure Payment</span>
                        <span className="text-[14px] font-normal text-Neutral-B500">
                            Your security is our priority. Your payments are secure with us.
                        </span>
                    </div>
                </div>

                <div className="text-center mt-12 mb-10">
                    <h5 className="text-[12px] font-normal text-Neutral-B300">
                        SHOP NOW
                    </h5>
                    <h3 className="text-[24px] font-bold text-Neutral-B900">
                        Best Selling
                    </h3>
                </div>
                <div className="flex justify-center items-center w-full py-10 mb-16">
                    {
                      isLoading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                          <Skeleton className="w-[238px] h-[312px]"/>
                          <Skeleton className="w-[238px] h-[312px]"/>
                          <Skeleton className="w-[238px] h-[312px]"/>
                          <Skeleton className="w-[238px] h-[312px]"/>
                        </div>
                      ):(
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                           {
                            FetchAllProduct?.data.slice(0,4).map((product)=>(
                              <ProductCard product={product}/>
                            ))
                           } 
                        </div>
                      )
                    }
                </div>
            </div>

            {/**second hero section*/}
            <SecondHero/>
            <div className="flex justify-center items-center w-full py-10 mb-16">
                    {
                      isLoading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                          <Skeleton className="w-[238px] h-[312px]"/>
                          <Skeleton className="w-[238px] h-[312px]"/>
                          <Skeleton className="w-[238px] h-[312px]"/>
                          <Skeleton className="w-[238px] h-[312px]"/>
                        </div>
                      ):(
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                           {
                            FetchAllProduct?.data.slice(4,8).map((product)=>(
                              <ProductCard product={product}/>
                            ))
                           } 
                        </div>
                      )
                    }
                </div>


        </div>
    )
}

export default HomePage