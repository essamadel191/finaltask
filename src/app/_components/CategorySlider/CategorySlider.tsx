import GetAllCategories from '@/apis/GetAllCategories'
import React from 'react'
import CategorySwiper from '../CategorySwiper/CategorySwiper'
import { Category } from '@/Types/category.type'

const CategorySlider = async () => {
  const {data}:{data:Category[]} = await GetAllCategories()

 //console.log(data)

  return (
    <div className='mb-3 '>
        <CategorySwiper Categories={data}/>
    </div>
  )
}

export default CategorySlider