import GetAllBrands from '@/apis/GetAllBrands'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'
import  Image  from 'next/image';

const Brands = async () => {

  const brands = await GetAllBrands()

  return (
    <section className="px-5 md:px-0 my-10 w-full flex flex-col items-center"> 
        {/* Main Categories */} 
        <div className="flex flex-wrap justify-center gap-6 max-w-[1200px]"> 
            {brands.map((brand, idx) => ( 
                <div key={idx} className="w-full sm:w-[48%] lg:w-[32%]"> 
                <Card className="group border-0 rounded-2xl overflow-hidden shadow hover:shadow-2xl transition-transform duration-300 cursor-pointer"> 
                    <CardHeader className="p-0"> <div className="relative w-full h-64 lg:h-56"> 
                        <Image src={brand.image} alt={brand.name} fill className="object-cover" /> 
                        </div> 
                    </CardHeader> 
                    <CardContent className="p-4 text-center"> 
                        <p className="font-bold text-green-500 text-lg">{brand.name}</p> 
                    </CardContent> 
                </Card> 
                </div> ))} 
        </div>
    </section>
  )
}

export default Brands