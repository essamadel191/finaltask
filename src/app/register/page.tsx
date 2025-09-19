"use client"
import React from 'react'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerSchemaType } from '@/schema/register.schema'
import axios, { AxiosError } from "axios";
import { toast } from "sonner"
import { useRouter } from 'next/navigation'

const Register = () => {

  const router = useRouter()

  const form = useForm<registerSchemaType>({
    defaultValues:{
      name: "",
      email:"",
      password:"",
      rePassword:"",
      phone:""
    },
    resolver:zodResolver(registerSchema)
  })

  async function handleRegister(values: registerSchemaType){
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      )
      //console.log(data)
      toast.success(data.message,{
        position: 'top-right',
        duration: 3000
      })

      router.push("/login")
      
    } catch (err) {

      //console.error(error)
      const error = err as AxiosError<{ message: string }>;
      const errorMessage = error.response?.data?.message || "Something went wrong";

      toast.error(errorMessage, {
        position: "top-right",
        duration: 3000,
      });

    }
  }

  return (
    <div className='mx-auto px-5 md:px-0 w-full my-12 md:w-1/2'>
      <h1 className='text-3xl text-center font-bold'>Register</h1>


      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleRegister)}>
          <FormField
            control={form.control}
            name="name"
            render={({field}) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type='text' {...field}/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="rePassword"
            render={({field}) => (
              <FormItem>
                <FormLabel>RePassword</FormLabel>
                <FormControl>
                  <Input type='password' {...field}/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({field}) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type='phone' {...field}/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />



          <Button className='w-[25%] mt-4'>Register Now</Button>
        </form>
      </Form>
    </div>
  )
}

export default Register