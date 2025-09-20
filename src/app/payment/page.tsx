"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cartContext } from '@/Context/CartContext'
import { cashPaymentAction } from '@/PaymentActions/cashPayment'
import { useRouter } from 'next/navigation'
import React, { useContext, useRef } from 'react'
import { toast } from 'sonner'

const Payment = () => {

    const router = useRouter()
    const { cartID, afterPayment } = useContext(cartContext)

    const details = useRef<HTMLInputElement>(null)
    const phone = useRef<HTMLInputElement>(null)
    const city = useRef<HTMLInputElement>(null)

    async function cashPayment() {
        const values = {
            shippingAddress: {
                details: details.current?.value || "",
                phone: phone.current?.value || "",
                city: city.current?.value || ""
            }
        }

            try {
            const data = await cashPaymentAction(cartID, values)

            toast.success(data.status, {
                position: "top-center",
                duration: 1000
            })

            await afterPayment()

            router.push("/allorders")
            } catch (error) {
            console.log(error)
            }
    }

    return (
        <div className='w-full md:w-1/2 my-10 mx-auto px-5 md:px-0'>
        <h1 className='mb-10 text-center text-3xl font-bold'>Payment</h1>

        <div className='flex flex-col'>
            <label htmlFor="details">Details</label>
            <Input ref={details} type='text' id='details' className='mb-3' />

            <label htmlFor="phone">Phone</label>
            <Input ref={phone} type='tel' id='phone' className='mb-3' />

            <label htmlFor="city">City</label>
            <Input ref={city} type='text' id='city' className='mb-3' />

            <div className='flex mt-5'>
            <Button onClick={cashPayment}>Cash Payment</Button>
            {/* <Button className='ms-5'>Online Payment</Button> */}
            </div>
        </div>
        </div>
    )
}

export default Payment
