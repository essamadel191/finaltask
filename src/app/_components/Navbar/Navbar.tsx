import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import logoImg from './../../../../public/Assets/freshcart-logo.svg'

const Navbar = () => {
  return (
    <div className='bg-slate-100 p-5'>
        <div className='w-full md:w-[80%] mx-auto justify-between items-center flex flex-col md:flex-row text-center gap-2 '>
            { /* logo and links*/}
            
            <li className='list-none'>
                <Link href={"/"}>
                    <Image src={logoImg} alt='freshcart-logo'/>
                </Link>
            </li>
            <ul className='flex flex-col md:flex-row text-center gap-6 items-center mx-auto'>
                <li>
                    <Link href={"/"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={"/cart"}>
                        Cart
                    </Link>
                </li>
                <li>
                    <Link href={"/wishlist"}>
                        Wish List
                    </Link>
                </li>
                <li>
                    <Link href={"/products"}>
                        Products
                    </Link>
                </li> 
                <li>
                    <Link href={"/categories"}>
                        Categories
                    </Link>
                </li>
                <li>
                    <Link href={"/brands"}>
                        Brands
                    </Link>
                </li> 
            </ul>
            { /* logo and links*/}


            {/* Logout */}
            <div className='flex flex-col md:flex-row text-center gap-2 items-center'>
                <div>
                    <Link href={"/login"}>
                        Login
                    </Link>
                </div>

                <div>
                    <Link href={"/register"}>
                        Register
                    </Link>
                </div>

                <div>
                    <button>
                        Logout
                    </button>
                </div>
            </div>
            {/* Logout */}
        </div>
    </div>
  )
}

export default Navbar