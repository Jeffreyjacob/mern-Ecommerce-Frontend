import { Menu } from "lucide-react";
import {
    Sheet, SheetContent,
    SheetDescription, SheetHeader,
    SheetTitle, SheetTrigger
} from "../ui/sheet";
import NavLinks from "./NavLinks";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../ui/button";


const MobileNav = () => {
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0()
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu className="w-6 h-6 text-Neutral-B300" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        {
                            isAuthenticated ? (
                                <span>
                                    {user?.email}
                                </span>
                            ) : (
                                <span>
                                    Welcome to Ecommerce
                                </span>
                            )
                        }
                    </SheetTitle>
                    <SheetDescription className="flex flex-col">
                        <NavLinks />
                        {
                            isAuthenticated ? (
                                <Button className="mt-4" onClick={()=>logout({logoutParams:{returnTo:window.location.origin}})}>
                                    Sign Out
                                </Button>
                            ) : (
                                <Button className="mt-4" onClick={() => loginWithRedirect()} >
                                    Login
                                </Button>
                            )
                        }
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav