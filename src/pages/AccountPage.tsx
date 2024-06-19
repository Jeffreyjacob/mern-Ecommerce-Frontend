import UserProfileForm from "@/Form/UserProfileForm"
import { useUpdateUserRequest } from "@/api/userApi"
import ClientOrder from "@/components/shared/ClientOrder"
import WishlistContent from "@/components/shared/WishlistContent"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"

const AccountPage = () => {
    const {updateuser,isLoading:updateLoading} = useUpdateUserRequest()
    return (
        <div className="flex flex-col gap-10">
            <div className="container bg-Neutral-white-W100 w-full py-10">
                <h4 className="text-[18px] md:text-[24px] font-bold text-Neutral-B900 mb-3">
                    My Account
                </h4>
                <div className="flex gap-2 text-[14px] items-center">
                    <span className=" font-medium text-Neutral-B500">Ecommerce</span>
                    <ChevronRight className="w-4 h-4 text-Neutral-B400" />
                    <span className=" text-Neutral-B900 font-medium">My Account</span>
                </div>
            </div>
            <div className="container">
                <Tabs defaultValue="account" className="w-full min-h-[70vh] pb-10 max-w-5xl md:mx-5">
                    <TabsList>
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="orders">Orders</TabsTrigger>
                        <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className="mt-10">
                        <UserProfileForm onSaVe={updateuser} isloading={updateLoading} />
                    </TabsContent>
                    <TabsContent value="orders">
                        <ClientOrder/>
                    </TabsContent>
                    <TabsContent value="wishlist">
                        <WishlistContent/>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default AccountPage