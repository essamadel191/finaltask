import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { getUserWishlist } from '@/apis/GetAllWishlist'

const Wishlist = async () => {
  try {
    const response = await getUserWishlist()
    const wishlistProducts = response.data || []

    if (!wishlistProducts || wishlistProducts.length === 0) {
      return <p className="text-center my-10">Your wishlist is empty.</p>
    }

    return (
      <div className="md:w-[80%] mx-auto w-full my-10 px-5 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {wishlistProducts.map((product: any) => (
          <div key={product._id} className="p-3 border rounded-xl shadow hover:shadow-lg transition">
            <Link href={`/productDetails/${product._id}`}>
              <Image
                src={product.imageCover || product.images?.[0]}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-[200px] object-cover rounded"
              />
              <h2 className="mt-2 font-bold">{product.title}</h2>
              <p className="text-green-500">{product.price} EGP</p>
            </Link>
          </div>
        ))}
      </div>
    )
  } catch (err: any) {
    return <p className="text-center my-10 text-red-500">{err.message}</p>
  }
}

export default Wishlist
