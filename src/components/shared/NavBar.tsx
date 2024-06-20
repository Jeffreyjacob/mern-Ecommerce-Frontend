import LogoImage from '@/assets/Logomark.png';
import NavLinks from './NavLinks';
import { Search, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import MobileNav from './MobileNav';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useAuth0 } from '@auth0/auth0-react';
import UserIcon from './UserIcon';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        <div>
            <div className={cn(`flex justify-between items-center container mx-auto py-4 bg-white/50 transition-all`, {
                "backdrop-blur-xl": scrolled
            })}>
                <div className='flex gap-1 items-center tracking-tight'>
                    <img src={LogoImage} alt='logoImage' className='w-[39px] h-[30px] object-contain' />
                    <span className='text-[16px] md:text-[18px] font-extrabold font-manrope'>ECOMMERCE</span>
                </div>
                <div className='hidden lg:flex'>
                    <NavLinks />
                </div>
                <div className='flex lg:gap-10 gap-4 items-center '>
                    <div className='hidden lg:block'>
                        <div className="flex gap-2 items-center border-[1px] border-Neutral-B100 w-[250px] h-[50px] rounded-lg p-1 px-3" onClick={()=>navigate("/search")}>
                            <Search className="w-5 h-5 text-Neutral-B300" />
                            <span className=' text-Neutral-B300 font-medium'>Search here</span>
                        </div>
                    </div>
                     <div className='flex lg:hidden'>
                        <Search className='w-5 h-5 text-Neutral-B300' onClick={()=>navigate("/search")}/>
                     </div>
                    <ShoppingCart className='w-5 h-5 text-Neutral-B300' onClick={() => navigate("/cart")} />
                    <div className='hidden lg:flex'>
                        {
                            isAuthenticated ? (
                                <UserIcon />
                            ) : (
                                <Button variant="outline" className='border-[2px] border-Neutral-B500' onClick={() => loginWithRedirect()}>
                                    Login
                                </Button>
                            )
                        }
                    </div>
                    <div className='lg:hidden'>
                        <MobileNav />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar