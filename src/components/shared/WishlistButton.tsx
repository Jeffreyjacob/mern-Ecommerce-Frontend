import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "../ui/button"
import { useLocation } from "react-router-dom"
import { Heart } from "lucide-react"
import { useCreateWishListRequest } from "@/api/wishlistApi"
import { AddCart } from "@/pages/DetailPage"

type Props = {
    product:AddCart
}


const WishlistButton = ({product}:Props) => {
    const {pathname} = useLocation()
    const {isAuthenticated,isLoading,loginWithRedirect} = useAuth0()
    const {createNewWishlist,} = useCreateWishListRequest()
    const Login = async ()=>{
      await loginWithRedirect({appState:{
        returnTo:pathname
      }})
    }
    if(!isAuthenticated || isLoading){
        return <Button className="w-fit" variant="outline" onClick={Login}>
          Log in to Add Wishlist
        </Button>
    }
    const addWishlistHandler = ()=>{
        createNewWishlist({
            title:product?.title,
            price:product.price,
            Id:product.id,
            imageUrl:product?.imageUrl
        })
    }
  return (
    <Button variant="outline" onClick={addWishlistHandler}>
    <Heart className="w-5 h-6 text-Neutral-B500" />
   </Button>
  )
}

export default WishlistButton