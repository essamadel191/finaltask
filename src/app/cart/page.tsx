import { GetMyToken } from '@/utilities/token'
import React from 'react'

const Cart = async () => {

  const tkn = await GetMyToken()
  console.log(tkn)

  
  return (
    <div>Cart</div>
  )
}

export default Cart