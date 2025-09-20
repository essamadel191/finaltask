"use client"

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { forgetPasswordAction, resetPasswordAction, verifyResetCodeAction } from '@/PasswordActions/forgetPassword'


const ForgetPassword = () => {
    const [step, setStep] = useState(1) // 1: email, 2: verify code, 3: new password
    const [email, setEmail] = useState("")
    const [resetCode, setResetCode] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [token, setToken] = useState("")

  // Step 1: request reset code
    const handleRequestCode = async () => {
        try {
        const data = await forgetPasswordAction(email)
        toast.success(data.message || "Reset code sent!")
        setStep(2)
        } catch (err: any) {
        toast.error(err.response?.data?.message || err.message)
        }
    }

  // Step 2: verify reset code
    const handleVerifyCode = async () => {
        try {
        const data = await verifyResetCodeAction(resetCode)
        toast.success("Code verified!")
        setToken(data.token) // save token for final step
        setStep(3)
        } catch (err: any) {
        toast.error(err.response?.data?.message || err.message)
        }
    }

    // Step 3: reset password
    const handleResetPassword = async () => {
        try {
        const data = await resetPasswordAction(email, newPassword, token)
        toast.success("Password reset successfully!")
        setStep(1) // go back to login
        } catch (err: any) {
        toast.error(err.response?.data?.message || err.message)
        }
    }

    return (
        <div className='mx-auto w-full md:w-1/2 px-5 my-12'>
        <h1 className='text-3xl text-center font-bold mb-8'>Forget Password</h1>

        {step === 1 && (
            <div className='flex flex-col gap-4'>
            <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
            />
            <Button onClick={handleRequestCode}>Send Reset Code</Button>
            </div>
        )}

        {step === 2 && (
            <div className='flex flex-col gap-4'>
            <Input 
                type="text" 
                placeholder="Enter reset code" 
                value={resetCode} 
                onChange={e => setResetCode(e.target.value)}
            />
            <Button onClick={handleVerifyCode}>Verify Code</Button>
            </div>
        )}

        {step === 3 && (
            <div className='flex flex-col gap-4'>
            <Input 
                type="password" 
                placeholder="Enter new password" 
                value={newPassword} 
                onChange={e => setNewPassword(e.target.value)}
            />
            <Button onClick={handleResetPassword}>Reset Password</Button>
            </div>
        )}
        </div>
    )
}

export default ForgetPassword
