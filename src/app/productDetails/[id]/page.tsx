import GetSingleProduct from '@/apis/GetSingleProduct'
import React from 'react'

const ProductDetails = async ({ params }: { params: { id:string }}) => {
  const {id} = await params


  const data = await GetSingleProduct(id)
  
  console.log(data);
  return (
    <div className='flex flex-col md:flex-row w-full px-5 md:w-[80%] md:px-0 mx-auto items-center my-10'>
      <div className='w-full md:w-1/3 border-solid shadow-2xl mr-5'>
        <img src={data.imageCover} className='w-full' alt="Product Image" />
      </div>
      <div className='w-full md:w-2/3 px-3 justify-center items-center m-auto border-solid shadow-2xl'>
        <h2 className='text-2xl text-green mt-5 mb-5'>{data.title}</h2>
        <p className='mb-5'>{data.description}</p>
        <div className='flex flex-row justify-between mb-5'>
          <p>{data.price}  EGP</p>
          <p>{data.ratingsAverage}<i className="fa-solid fa-star text-yellow-300"></i></p>
        </div>
        <div className='flex justify-between items-center mb-3'>
          <button className="px-4 py-2 bg-[#22db14] text-white rounded-md text-sm w-[60%] mx-auto">
            + Add
          </button>
          <i className="fa-regular fa-heart mr-3 text-2xl"></i>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails