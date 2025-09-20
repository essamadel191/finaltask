
import { AddToCart } from '@/CartActions/addToCart'
import { clearCartAction } from '@/CartActions/clearCart'
import { getUserCartAction } from '@/CartActions/getUserCart'
import { removeCartItemAction } from '@/CartActions/removeCartItem'
import { updateCartAction } from '@/CartActions/updateCart'
import { Cart, ProductCart } from '@/Types/cart.type'
import { CartContextType } from '@/Types/CartContextType'
import React, { createContext, useEffect, useState } from 'react'


export const cartContext = createContext<CartContextType>({
    numOfCart: 0,
    totalPrice: 0,
    products: [],
    isLoading:false,
    addProductToCart: async () => null,
    removeCartItem:async () => null,
    udateCart:async () => null,
    clearCart:async () => null,
    cartID:"",
    afterPayment:async () => null
})

const CartContextProvider = ({children}:{children:React.ReactNode}) => {

    const [numOfCart , SetNumOfCart] = useState(0)
    const [totalPrice , SetTotalPrice] = useState(0)
    const [products, setProducts] = useState<ProductCart[]>([])
    const [isLoading , setIsLoading] = useState(false)
    const [cartID , setcartID] = useState("")


    async function addProductToCart(id:string){
        try {
            const data = await AddToCart(id)

            if (data?.status === "success") {
            // Increment cart count directly
            getUserCart()
            }

            return data
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    async function getUserCart(){
        setIsLoading(true)
        try {
            const data:Cart = await getUserCartAction()

            SetNumOfCart(data.numOfCartItems)
            SetTotalPrice(data.data.totalCartPrice)
            setProducts(data.data.products)
            setcartID(data.cartId)

            setIsLoading(false)
        //console.log(data)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    async function removeCartItem(id:string) {
        
        try {
            const data:Cart = await removeCartItemAction(id)

            SetNumOfCart(data.numOfCartItems)
            SetTotalPrice(data.data.totalCartPrice)
            setProducts(data.data.products)

            return data
        //console.log(data)
        } catch (error) {
            console.log(error)

        }
    }

    async function udateCart(id:string,count:number) {
        try {
        const data  =  await updateCartAction(id,count)

            SetNumOfCart(data.numOfCartItems)
            SetTotalPrice(data.data.totalCartPrice)
            setProducts(data.data.products)

            return data
        } catch (error) {
            console.log(error)
        }
    }

    async function afterPayment() {
        setcartID("")
        SetNumOfCart(0)
        SetTotalPrice(0)
        setProducts([])
    }

    async function clearCart() {
        try {
            const data = await clearCartAction()

            SetNumOfCart(0)
            SetTotalPrice(0)
            setProducts([])


        } catch (error) {
            console.log(error)
        }
    }
    useEffect(function(){
        getUserCart()
    },[])

    return (
        <cartContext.Provider value={{
            numOfCart,
            products,
            totalPrice,
            isLoading,
            addProductToCart,
            removeCartItem,
            udateCart,
            clearCart,
            cartID,
            afterPayment
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider