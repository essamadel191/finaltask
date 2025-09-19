"use server"

import { Product } from "@/Types/product.type"

export default async function GetSingleProduct(id:string){

    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    const {data}:{data : Product} = await response.json()
    
    return data
}
