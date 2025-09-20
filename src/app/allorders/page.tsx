import { getUserOrder } from '@/apis/GetUserOrders'
import { Order, OrderCartItem } from '@/Types/order.type'
import Image from 'next/image'
import React from 'react'

const AllOrders = async () => {
  const orders: Order[] = await getUserOrder() // ensure it's an array

    return (
        <div className='md:w-[80%] mx-auto w-full my-10 px-5 md:px-0'>
        <div className='p-5 allOrders'>
            {orders.map((order) => (
            <div className='p-5 bg-slate-100 mb-5' key={order._id}>
                <div className='flex flex-wrap border-b-[1px] border-green-700/35'>
                {order.cartItems.map((item) => (
                    <div className='w-1/6 p-2' key={item._id}>
                    <Image
                        src={item.product.imageCover}
                        alt={item.product.title}
                        width={200}
                        height={200}
                        className='w-full object-cover rounded'
                    />
                    <h2 className='line-clamp-1'>{item.product.title}</h2>
                    </div>
                ))}
                </div>
                <div className='mt-5'>
                    <h2>Payment Method Type : {order.paymentMethodType}</h2>
                    <h2>Total Order Price : {order.totalOrderPrice} EGP</h2>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
}

export default AllOrders
