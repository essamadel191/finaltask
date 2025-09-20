"use server"

import { GetMyToken } from "@/utilities/token"
import axios from "axios"
import { headers } from "next/headers"

export async function updateCartAction(id:string,count:number) {
    const tkn = await GetMyToken()

    if(!tkn){
        throw Error("Login First")
    }
    const value = {
        count:count
    }

    const {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,value,{
        headers:{
            token:tkn as string
        }
    })

    return data
}