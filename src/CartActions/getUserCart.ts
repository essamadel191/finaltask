"use server"

import { GetMyToken } from "@/utilities/token"

export async function getUserCartAction(){
    const tkn = await GetMyToken()

    if(!tkn){
        throw Error("Login First")
    }


    const res = await fetch("https://ecommerce.routemisr.com/api/v1/cart",{
        headers:{
            token:tkn as string
        }
    })

    const data = await res.json()

    return data
}

