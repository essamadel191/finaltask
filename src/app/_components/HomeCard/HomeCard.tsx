import React from 'react'
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Link from 'next/link';


const HomeCard = ({product}) => {
    
  return (
    <div key={product.id} className="w-full md:w-1/2 lg:w-1/4 p-3">
        <div className="inner">
            <Card className="group p-2 border-0 rounded-2xl shadow-none hover:shadow-2xl hover:shadow-green-300 hover:border-green-300 transition-all duration-500 cursor-pointer">
                <Link href={`/productDetails/${product.id}`}>
                    <CardHeader className="p-0">
                        <img src={product.imageCover} alt="" />
                    </CardHeader>
                    <CardContent className="p-0">
                        <p className="font-bold text-green-500 mb-3">{product.category.name}</p>
                        <p className="line-clamp-1 mb-2">{product.title}</p>
                        <div className="w-full flex justify-between items-center">
                            <p>{product.price} EGP</p>
                            <p>{product.ratingsAverage} <i className="fa-solid fa-star text-yellow-300"></i></p>
                        </div>
                    </CardContent>
                </Link>
                <CardFooter className="p-0 flex justify-between text-center relative overflow-hidden">
                    <button className="
                            px-4 py-2 bg-[#22db14] text-white rounded-md text-sm w-[80%] 
                            transform translate-y-10 opacity-0 
                            group-hover:translate-y-0 group-hover:opacity-100 
                            transition-all duration-500 ease-in-out
                        ">
                        + Add
                    </button>
                    <button><i className="fa-regular fa-heart mr-3 text-2xl"></i></button>
                </CardFooter>
            </Card>  
        </div>
    </div>
  )
}

export default HomeCard