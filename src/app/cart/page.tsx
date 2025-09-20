"use client"

import { cartContext } from '@/Context/CartContext'
import { GetMyToken } from '@/utilities/token'
import React, { useContext } from 'react'
import Loading, { Loading2 } from '../loading'
import { Button } from '@/components/ui/button';
import { ProductCart } from '@/Types/cart.type'
import  Image  from 'next/image';
import { toast } from 'sonner'
import Link from 'next/link'

const Cart = async () => {

  // const tkn = await GetMyToken()
  // console.log(tkn)

  const {isLoading,products,totalPrice,removeCartItem,udateCart,clearCart}= useContext(cartContext)

  if(isLoading){
    return <Loading/>
  }
  
  async function removeItem(id:string){
    const data = await removeCartItem(id)

    if (data?.status === "success") {
      toast.success("Item Removed", {
      position: 'top-center',
      duration: 3000,
      })
    } else {
      toast.error("Failed To Remove", {
      position: 'top-center',
      duration: 3000,
      })
    }
  }

  async function udateItem(id:string,count:number){
    const data = await udateCart(id,count)

    if (data?.status === "success") {
      toast.success(`Item updated to ${count}`, {
      position: 'top-center',
      duration: 3000,
      })
    } else {
      toast.error("Failed To Remove", {
      position: 'top-center',
      duration: 3000,
      })
    }
  }
  if(isLoading){
    return <Loading2/>
  }
  if(products.length == 0){
    return <div className='flex justify-center items-center h-screen'>
      <h1 className='text-red-600 text-3xl font-bold'> No Data In The Cart</h1>
    </div>
  }

  return (
    <div className='w-full md:w-[80%] mx-auto my-10 px-5 md:px-0 bg-gray-200'>
      <div className='p-5'>
        <h1 className='text-2xl font-bold'>Shop Cart</h1>
        <p className='my-3 text-green-600 font-mono'>Total Price : {totalPrice} EGP</p>
        <div className='mb-2 mt-2 flex justify-between items-center'>
          <Button onClick={clearCart}>Clear Cart</Button>
          <Button variant="destructive">
            <Link href={"/payment"}>Check Out</Link>
          </Button>
        </div>
        
        <div className='allCartProducts'>
          
            {products.map(  function(product:ProductCart,idx:number){
              return <div key={idx} className='flex items-center justify-between py-3 border-b-[1px] border-green-700/35'>
                        <div className='flex items-center gap-6'>
                          <div>
                            <Image src={product.product.imageCover} alt='' width={200} height={200}/>
                          </div>
                          <div>
                            <h1>{product.product.title}</h1>
                            <p className='my-3'>Price : {product.price} EGP</p>
                            <Button className='cursor-pointer' onClick={()=> removeItem(product.product.id)}>Remove</Button>
                        </div>
                        </div>
                        <div className='flex items-center gap-5'>
                          <Button className='cursor-pointer' onClick={()=> udateItem(product.product.id, product.count + 1)}>+</Button>
                          <p>{product.count}</p>
                          <Button className='cursor-pointer' onClick={()=> udateItem(product.product.id, product.count - 1)}>-</Button>
                        </div>
                    </div>
            })}
          
        </div>
      </div>
    </div>
  )
}

export default Cart