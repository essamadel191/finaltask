"use server"

import { GetMyToken } from "@/utilities/token"
import axios from "axios"
import { jwtDecode } from "jwt-decode"

export async function getUserOrder() {
    const tkn = await GetMyToken()

    const {id} = jwtDecode(tkn)

    if(!tkn){
        throw new Error("Login First")
    }

    const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)

    return data
}