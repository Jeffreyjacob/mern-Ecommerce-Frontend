import { Link } from "react-router-dom"
import { Separator } from "../ui/separator"
import { useAuth0 } from "@auth0/auth0-react"


export const NavLinkItem = [
  { name: "Home", link: "/" },
  { name: "Categories", link: "/" },
  { name: "About", link: "/" },
  { name: "Contact", link: "/" }
]

const NavLinks = () => {
  const { isAuthenticated } = useAuth0()
  return (
    <div className="flex flex-col justify-start gap-4 text-start">
      {
        isAuthenticated ? (
          <div className="flex flex-col gap-4 lg:hidden">
            <Link to="/my-account">
              My Account
            </Link>
            <Link to='/dashboard'>
              Admin Dashboard
            </Link>
            <Separator />
          </div>
        ) : null
      }
      <ul className="flex flex-col lg:flex-row justify-start gap-4 text-[14px] font-medium text-Neutral-B500">
        {NavLinkItem.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavLinks