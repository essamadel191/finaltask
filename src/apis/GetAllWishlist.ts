"use server"

import { GetMyToken } from "@/utilities/token"
import axios from "axios"
import { jwtDecode } from "jwt-decode"

export async function getUserWishlist() {
    const tkn = await GetMyToken()

    if(!tkn){
        throw new Error("Login First")
    }

    const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{
        headers:{
            token:tkn as string
        }
    })

    return data
}