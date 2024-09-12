"use client"
import { handleLogin, autoLogin } from '@/lib/authFun'
import React, { useEffect } from 'react'

const Login = async () => {
    // useEffect(() => {

    // }, [])
    return (
        <div>
            <form action={handleLogin} className='flex  flex-col w-1/3 h-96 justify-center  m-auto '>
                <input type="email" name="email" placeholder='email' className='bg-skin-bgSoft p-2 rounded-md' />
                <br />
                <input type='password' name="password" placeholder='password' className="bg-skin-bgSoft  p-2 rounded-md" />
                <button className=' bg-green-500 rounded-md text-skin-textSoft w-fit mx-auto p-2 mt-10' >Login With HUB</button>
            </form>
        </div>
    )
}

export default Login
