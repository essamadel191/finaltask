"use client"
import React from 'react'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchemaType } from '@/schema/login.schema'
import axios, { AxiosError } from "axios";
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import {signIn} from 'next-auth/react'

const Login = () => {

  const router = useRouter()

  const form = useForm<LoginSchemaType>({
    defaultValues:{
      email:"",
      password:"",
    },
    resolver:zodResolver(loginSchema)
  })

  async function handleLogin(values: LoginSchemaType){
    // try {
    //   const { data } = await axios.post(
    //     "https://ecommerce.routemisr.com/api/v1/auth/signin",
    //     values
    //   )
    //   //console.log(data)
    //   toast.success(data.message,{
    //     position: 'top-right',
    //     duration: 3000
    //   })

    //   router.push("/")
      
    // } catch (err) {
    
    //       //console.error(error)
    //       const error = err as AxiosError<{ message: string }>;
    //       const errorMessage = error.response?.data?.message || "Something went wrong";
    
    //       toast.error(errorMessage, {
    //         position: "top-right",
    //         duration: 3000,
    //       });
    
    // }

    const result = await signIn("credentials",{
      email: values.email,
      password: values.password,
      redirect:false,
      callbackUrl:"/"
    })
    
    //console.log(result)
    if(result?.ok){
          toast.success("Login Success",{
        position: 'top-right',
        duration: 3000
      })

      window.location.href=result.url || "/"
    }

    else{
      toast.error(result?.error, {
      position: "top-right",
      duration: 3000,
      });
    }

  }

  return (
    <div className='mx-auto px-5 md:px-0 w-full my-12 md:w-1/2'>
      <h1 className='text-3xl text-center font-bold'>LogIn</h1>


      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)}>
          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email' {...field}/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({field}) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' {...field}/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className='w-[25%] mt-4'>Login</Button>
        </form>
      </Form>
    </div>
  )
}

export default Login