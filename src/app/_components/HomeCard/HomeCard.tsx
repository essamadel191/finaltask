"use client"

import React, { useState, useEffect } from 'react'
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Link from 'next/link';
import { Product } from '@/Types/product.type';
import AddBtnCart from '../AddBtnCart/AddBtnCart';

import { toast } from 'sonner';
import { AddToWishlist } from '@/WishlistActions/AddToWishlist'

const HomeCard = ({ product }: { product: Product }) => {
    const [isInWishlist, setIsInWishlist] = useState(false)

  // Optional: fetch user wishlist to see if product is already added
    useEffect(() => {
    // Suppose you have a function to get user wishlist products
    // Example:
    // checkIfInWishlist(product.id).then(res => setIsInWishlist(res))
    }, [product.id])

    const handleWishlist = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault() // prevent navigating if inside <Link>
        try {
        const data = await AddToWishlist(product.id)
        console.log(data)
        setIsInWishlist(true)
        toast.success("Added to wishlist", { duration: 1000 })
        } catch (err: any) {
        toast.error(err.message || "Failed to add to wishlist")
        }
    }

    return (
        <div className="w-full md:w-1/2 lg:w-1/4 p-3">
        <div className="inner">
            <Card className="group p-2 border-0 rounded-2xl shadow-none hover:shadow-2xl hover:shadow-green-300 hover:border-green-300 transition-all duration-500 cursor-pointer">
            <Link href={`/productDetails/${product.id}`}>
                <CardHeader className="p-0">
                <Image width={500} height={500} src={product.imageCover} alt={product.title} />
                </CardHeader>
                <CardContent className="p-0">
                <p className="font-bold text-green-500 mb-3">{product.category.name}</p>
                <p className="line-clamp-1 mb-2">{product.title}</p>
                <div className="w-full flex justify-between items-center">
                    <p>{product.price} EGP</p>
                    <p>{product.ratingsAverage} <i className="fa-solid fa-star text-yellow-300"></i></p>
                </div>
                </CardContent>
            </Link>
            <CardFooter className="p-0 flex justify-between text-center relative overflow-hidden">
                <AddBtnCart id={product.id} />
                <button onClick={handleWishlist}>
                <i className={isInWishlist ? "fa-solid fa-heart text-red-500" : "fa-regular fa-heart text-2xl"}></i>
                </button>
            </CardFooter>
            </Card>
        </div>
        </div>
    )
    }

export default HomeCard
