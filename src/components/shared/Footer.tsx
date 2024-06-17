import LogoImage from '@/assets/Logomark.png';
import { GithubIcon, Instagram, Youtube } from 'lucide-react';
import masterCard from '@/assets/Mastercard.png';
import amex from '@/assets/Amex.png';
import visa from "@/assets/Visa.png";
import { Separator } from '../ui/separator';
import { cn } from '@/lib/utils';

type Props = {
    footColor: boolean
}
const footerLinks = [
    {
        name: "SUPPORT", link: [
            "FAQ",
            "Term of Use",
            "Privacy Policy"
        ]
    }, {
        name: "COMPANY", link: [
            "About us",
            "Contact",
            "Career"
        ]
    }, {
        name: "SHOP", link: [
            "My Account",
            "Checkout",
            "Cart"
        ]
    }
]
const Footer = ({ footColor }: Props) => {
    return (
        <div className={cn(`bg-white w-full container`,
            footColor ? "bg-[#F6F6F6]":null
        )}>
            <div className="w-full flex flex-col lg:flex-row lg:justify-between justify-center  max-sm:space-y-6 my-10">
                {/**Left section */}
                <div className='flex flex-col gap-4 lg:w-[280px] md:mt-5'>
                    <div className="flex gap-1 items-center tracking-tight'">
                        <img src={LogoImage} alt='logoImage' className='w-[35px] h-[30px] object-contain' />
                        <span className='text-[16px] font-extrabold font-manrope'>ECOMMERCE</span>
                    </div>
                    <span className='text-[14px] font-normal text-Neutral-B500'>
                        DevCut is a YouTube channel for practical project-based learning.
                    </span>
                    <div className='flex gap-5 text-Neutral-B500'>
                        <GithubIcon className='w-5 h-5' />
                        <Instagram className='w-5 h-5' />
                        <Youtube className='w-5 h-5' />
                    </div>
                </div>
                {/**middle section */}
                <div className='grid grid-cols-2 lg:grid-cols-3 md:w-1/2'>
                    {
                        footerLinks.map((item,index)=>(
                            <div key={index} className='flex flex-col'>
                                <span className='text-[14px] font-medium text-Neutral-B300 mb-5 mt-5'>
                                    {item.name}
                                </span>
                                {
                                    item.link.map((subItem,index)=>(
                                        <span key={index} 
                                        className=' text-Neutral-B500 text-[13px] font-medium my-1'>
                                            {subItem}
                                        </span>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                {/**right section */}
                <div className='flex flex-col flex-nowrap'>
                    <span className='text-[14px] text-Neutral-B300 font-medium'>ACCEPTED PAYMENTS</span>
                    <div className='flex gap-3'>
                        <img src={amex} alt='payment'/>
                        <img src={visa}/>
                        <img src={masterCard}/>
                    </div>
                </div>

            </div>
            <Separator/>
             <span className=' flex justify-center items-center text-[14px] text-Neutral-B500 font-normal py-4'>
                © 2023 DevCut. All rights reserved.
            </span>
        </div>
    )
}

export default Footer