"use server"

import { GetMyToken } from "@/utilities/token"
import axios from "axios"

export async function AddToWishlist(ProductId: string) {
    const token = await GetMyToken()

    if (!token) {
        throw new Error("Login First")
    }

    const values = {
        productId: ProductId
    }

    const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        values,
        {
        headers: {
            token: token as string
        }
        }
    )

  return data // return success info
}
