import { Product } from "@/Types/product.type"


export default async function GetAllProducts(){

    const response = await fetch("https://ecommerce.routemisr.com/api/v1/products")
    const {data}:{data : Product[]} = await response.json()

    // console.log(data);
    return data
}