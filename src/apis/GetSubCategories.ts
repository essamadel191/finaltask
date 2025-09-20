"use server"

import { subCategory } from "@/Types/subCategory.type"


export default async function GetSingleProduct(id:string){

    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories`)

    // data is an array of subCategory
    const { data }: { data: subCategory[] } = await response.json()

    // filter by categoryId with proper typing
    const filtered = data.filter((sub: subCategory) => sub.category === id)

    return filtered
}
