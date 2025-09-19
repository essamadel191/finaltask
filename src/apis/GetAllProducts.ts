import { Product } from "@/Types/product.type"


export default async function GetAllProducts(){

    const response = await fetch("http://localhost:3000/api/users")
    const {data}:{data : Product[]} = await response.json()

    // console.log(data);
    return data
}