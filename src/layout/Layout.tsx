import Footer from '@/components/shared/Footer'
import NavBar from '@/components/shared/NavBar'
import NewsLetter from '@/components/shared/NewsLetter';
import React from 'react'

type Props = {
    newsLetter?:boolean;
    FooterColor:boolean;
    children:React.ReactNode
}

const Layout = ({ children,FooterColor,newsLetter }:Props) => {
    return (
        <div className='flex flex-col min-h-screen w-full font-inter'>
            <div className=' sticky top-0 w-full z-20'>
                <NavBar />
            </div>
            <div className='flex-1'>
                {children}
            </div>
            {
                newsLetter && <NewsLetter/>
            }
            <Footer footColor={FooterColor} />
        </div>
    )
}

export default Layout