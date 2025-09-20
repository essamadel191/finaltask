"use server"

import { Brand } from "@/Types/product.type"



export default async function GetAllBrands(){

    const response = await fetch("https://ecommerce.routemisr.com/api/v1/brands")
    const {data}:{data : Brand[]} = await response.json()

    // console.log(data);
    return data
}