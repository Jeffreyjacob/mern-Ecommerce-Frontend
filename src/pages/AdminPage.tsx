import AddProduct from "@/components/shared/AddProduct"
import GetUserProduct from "@/components/shared/GetUserProduct"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"


const AdminPage = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="container bg-Neutral-white-W100 w-full py-10">
                <h4 className="text-[18px] md:text-[24px] font-bold text-Neutral-B900 mb-3">
                    Admin
                </h4>
                <div className="flex gap-2 text-[14px] items-center">
                    <span className=" font-medium text-Neutral-B500">Ecommerce</span>
                    <ChevronRight className="w-4 h-4 text-Neutral-B400" />
                    <span className=" text-Neutral-B900 font-medium">Admin</span>
                </div>
            </div>
             <Tabs defaultValue="Product" className="container w-full min-h-[70vh] pb-10 max-w-5xl md:px-5">
                <TabsList>
                    <TabsTrigger value="Product">Product</TabsTrigger>
                    <TabsTrigger value="Orders">Orders</TabsTrigger>
                    <TabsTrigger value="CreateProduct">Create Products</TabsTrigger>
                </TabsList>
                <TabsContent value="Product" className="mt-10">
                    <GetUserProduct/>
                </TabsContent>
                <TabsContent value="Orders">
                    Change your password here.
                    </TabsContent>
                <TabsContent value="CreateProduct">
                    <AddProduct/>
                </TabsContent>
            </Tabs >
        </div >
    )
}

export default AdminPage