import GetAllCategories from '@/apis/GetAllCategories'
import React from 'react'
import CategorySwiper from '../CategorySwiper/CategorySwiper'

const CategorySlider = async () => {
  const {data} = await GetAllCategories()

  console.log(data)

  return (
    <div className='mb-3 '>
        <CategorySwiper Categories={data}/>
    </div>
  )
}

export default CategorySlider