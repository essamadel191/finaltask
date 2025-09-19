import GetAllProducts from '@/apis/GetAllProducts'
import { Product } from '@/Types/product.type'
import React from 'react'
import HomeCard from '../_components/HomeCard/HomeCard'

const Products = async () => {

    const data:Product[] = await GetAllProducts()
  return (
    <section className="px-5 md:px-0 my-10 w-[70%] ms:w-full mx-auto">
    <div className="flex flex-wrap">
        {data.map((product:Product, idx:number) => (<HomeCard key={idx} product={product} />))}
    </div>
    </section>
  )
}

export default Products