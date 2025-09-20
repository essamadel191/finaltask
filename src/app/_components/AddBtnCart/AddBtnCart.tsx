"use client"

import { cartContext } from '@/Context/CartContext'
import { GetMyToken } from '@/utilities/token'
import React, { useContext } from 'react'
import { toast } from 'sonner'

interface AddBtnCartProps {
    id: string
    variant?: "HomeCard" | "ProductDetails" // choose between card button or product details button
}

const AddBtnCart: React.FC<AddBtnCartProps> = ({ id, variant = "HomeCard" }) => {

    const {addProductToCart} = useContext(cartContext)

    async function handleAddCart() {
        const token = await GetMyToken()

        if (!token) {
        toast.error("You must be logged in to add items to cart", {
            position: 'top-center',
            duration: 3000,
        })
        return
        }
        

        const data = await addProductToCart(id)

        if (data?.status === "success") {
        toast.success(data.message, {
            position: 'top-center',
            duration: 3000,
        })
        } else {
        toast.error(data?.message || "Something went wrong", {
            position: 'top-center',
            duration: 3000,
        })
        }
    }

    const baseClasses =
        "px-4 py-2 bg-[#22db14] text-white rounded-md text-sm transition-all duration-500 ease-in-out"

    const cardClasses =
        "w-[80%] transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"

    const detailsClasses = "w-[60%] mx-auto"

    return (
        <button
        className={`${baseClasses} ${variant === "HomeCard" ? cardClasses : detailsClasses}`}
        onClick={handleAddCart}
        >
        + Add
        </button>
    )
}

export default AddBtnCart
