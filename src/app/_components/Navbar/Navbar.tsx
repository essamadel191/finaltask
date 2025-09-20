"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import logoImg from './../../../../public/Assets/freshcart-logo.svg'
import { signOut, useSession } from 'next-auth/react'
import { Loading2 } from './../../loading';
import { cartContext } from '@/Context/CartContext'
import { useRouter } from 'next/navigation'


const Navbar = () => {
    const { data: session, status } = useSession()
    const [isOpen, setIsOpen] = useState(false)
    const { numOfCart } = useContext(cartContext)

    const router = useRouter()

    return (
        <div className="bg-slate-100 p-5">
        <div className="w-full md:w-[80%] mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href={"/"} className="list-none">
            <Image src={logoImg} alt="freshcart-logo" />
            </Link>

            {/* Hamburger (Mobile only) */}
            <button
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            >
            <i className="fa-solid fa-bars"></i>
            </button>

            {/* Desktop Nav */}
            <ul className="hidden md:flex flex-row gap-6 items-center mx-auto">
            {status === 'authenticated' && (
                <>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/cart"}>Cart</Link></li>
                <li><Link href={"/wishlist"}>Wish List</Link></li>

                <li><Link href={"/allorders"}>All Orders</Link></li>
                </>
            )}
            <li><Link href={"/products"}>Products</Link></li>
            <li><Link href={"/categories"}>Categories</Link></li>
            <li><Link href={"/brands"}>Brands</Link></li>
            {status === "loading" && <Loading2 />}
            </ul>

            {/* Auth Actions (Desktop) */}
            <div className="hidden md:flex gap-4 items-center">
            {status === 'authenticated' ? (
                <>
                {/* Cart Icon */}
                <div className="relative inline-block mr-2 cursor-pointer" onClick={() => router.push("/cart")}>
                    <i className="fa-solid fa-cart-shopping text-3xl text-gray-600"></i>
                    <span className="absolute -top-2 -right-2 bg-[#4fa74f] text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-md">
                    {numOfCart}
                    </span>
                </div>

                <button
                    className="cursor-pointer"
                    onClick={() => signOut({ callbackUrl: "/login" })}
                >
                    Logout
                </button>
                </>
            ) : (
                <>
                <Link href={"/login"}>Login</Link>
                <Link href={"/register"}>Register</Link>
                </>
            )}
            </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
            <div className="md:hidden mt-3 flex flex-col gap-4 bg-white shadow-md rounded-lg p-4">
            {status === 'authenticated' && (
                <>
                <Link href={"/"}>Home</Link>
                <Link href={"/cart"}>Cart</Link>
                <Link href={"/wishlist"}>Wish List</Link>
                <Link href={"/categories"}>Categories</Link>
                </>
            )}

            {status === "loading" && <Loading2 />}
            <Link href={"/products"}>Products</Link>
            <Link href={"/brands"}>Brands</Link>

            <hr className="my-2" />

            {status === 'authenticated' ? (
                <>
                
                <div className="relative inline-block mr-2 cursor-pointer" onClick={() => router.push("/cart")}>
                    <i className="fa-solid fa-cart-shopping text-2xl text-gray-600"></i>
                    <span className="absolute -top-2 -right-2 bg-[#4fa74f] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-md">
                    0
                    </span>
                </div>

                <button
                    className="cursor-pointer text-red-600"
                    onClick={() => signOut({ callbackUrl: "/login" })}
                >
                    Logout
                </button>
                </>
            ) : (
                <>
                <Link href={"/login"}>Login</Link>
                <Link href={"/register"}>Register</Link>
                </>
            )}
            </div>
        )}
        </div>
    )
}

export default Navbar
