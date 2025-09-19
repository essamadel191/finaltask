import Image from 'next/image'
import React from 'react'
import errorImg from './../../public/Assets/404.jpg'

const Error404 = () => {
  return (
    <div className='w-full md:w-[80%] mx-auto my-5 p-5 md:p-0'>
    <Image src={errorImg} alt='error Image'/>
    </div>
  )
}

export default Error404