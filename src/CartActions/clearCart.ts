"use server"

import { GetMyToken } from "@/utilities/token"
import axios from "axios"

export async function clearCartAction(){
    const tkn = await GetMyToken()

    if(!tkn){
        throw Error("Login First")
    }

    const {data} = await axios.delete("https://ecommerce.routemisr.com/api/v1/cart",{
        headers:{
            token:tkn as string
        }
    })

    return data
}