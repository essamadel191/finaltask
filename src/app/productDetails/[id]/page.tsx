import GetSingleProduct from '@/apis/GetSingleProduct'
import AddBtnCart from '@/app/_components/AddBtnCart/AddBtnCart'
import Image from 'next/image'
import React from 'react'

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params

  const data = await GetSingleProduct(id)

  if (!data) {
    return <p className="text-center mt-10 text-red-500">Product not found</p>
  }

  return (
    <div className="flex flex-col md:flex-row w-full px-5 md:w-[80%] md:px-0 mx-auto items-center my-10">
      <div className="w-full md:w-1/3 border-solid shadow-2xl mr-5">
        <Image
          width={500}
          height={500}
          src={data.imageCover}
          className="w-full"
          alt={data.title}
        />
      </div>
      <div className="w-full md:w-2/3 px-3 justify-center items-center m-auto border-solid shadow-2xl">
        <h2 className="text-2xl text-green mt-5 mb-5">{data.title}</h2>
        <p className="mb-5">{data.description}</p>
        <div className="flex flex-row justify-between mb-5">
          <p>{data.price} EGP</p>
          <p>
            {data.ratingsAverage}
            <i className="fa-solid fa-star text-yellow-300"></i>
          </p>
        </div>
        <div className="flex justify-between items-center mb-3">
          <AddBtnCart id={id} variant="ProductDetails" />
          <i className="fa-regular fa-heart mr-3 text-2xl"></i>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
