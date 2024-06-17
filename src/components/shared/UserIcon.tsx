import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserRound } from "lucide-react"
import { Button } from "../ui/button"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"

const UserIcon = () => {
    const {logout} = useAuth0();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className=" rounded-full p-4 bg-Neutral-white-W100">
                <UserRound className="w-5 h-4 text-Neutral-B900" /> 
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    <Link to="/my-account">
                    My Account
                    </Link>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link to="/dashboard">
                    Admin Dashboard
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Button className="w-full" onClick={()=>logout({logoutParams:{returnTo:window.location.origin}})}>
                     Sign Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserIcon