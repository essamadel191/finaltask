// CategoriesClient.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Category } from "@/Types/category.type"
import GetSubCategories from "@/apis/GetSubCategories"
import { subCategory } from "@/Types/subCategory.type"
import  Image  from 'next/image';
import { Loading2 } from "@/app/loading"

interface Props {
    categories: Category[]
}

    export default function CategoriesClient({ categories }: Props) {
    const [subcategories, setSubcategories] = useState<subCategory[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    async function handleCategoryClick(categoryId: string) {
        setLoading(true)
        setSelectedCategory(categoryId)
        try {
        const subcats = await GetSubCategories(categoryId) // returns array
        setSubcategories(subcats)
        } catch {
        setSubcategories([])
        } finally {
        setLoading(false)
        }
    }

    return ( 
        <section className="px-5 md:px-0 my-10 w-full flex flex-col items-center"> 
        {/* Main Categories */} 
        <div className="flex flex-wrap justify-center gap-6 max-w-[1200px]"> 
            {categories.map((category, idx) => ( 
                <div key={idx} className="w-full sm:w-[48%] lg:w-[32%]" 
                onClick={() => handleCategoryClick(category._id)} > 
                <Card className="group border-0 rounded-2xl overflow-hidden shadow hover:shadow-2xl transition-transform duration-300 cursor-pointer"> 
                    <CardHeader className="p-0"> <div className="relative w-full h-64 lg:h-56"> 
                        <Image src={category.image} alt={category.name} fill className="object-cover" /> 
                        </div> 
                    </CardHeader> 
                    <CardContent className="p-4 text-center"> 
                        <p className="font-bold text-green-500 text-lg">{category.name}</p> 
                    </CardContent> 
                </Card> 
                </div> ))} 
        </div>

        {/* Subcategories */}
        {selectedCategory && (
            <div className="mt-10 w-full flex flex-wrap justify-center gap-4 max-w-[1200px]">
            {loading ? (
                <Loading2/>
            ) : subcategories.length > 0 ? (
                subcategories.map(subcat => (
                <button
                    key={subcat._id}
                    className="px-4 py-2 border border-gray-300 rounded-md text-center hover:bg-green-100 transition"
                >
                    {subcat.name}
                </button>
                ))
            ) : (
                <p className="text-gray-500">No subcategories found.</p>
            )}
            </div>
        )}
        </section>
    )
}
