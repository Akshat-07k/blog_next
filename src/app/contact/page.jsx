import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div className='flex flex-row w-full h-fit justify-between p-10'>
            <div className='w-1/2 h-auto relative'><Image src='/cat.png' fill /></div>
            <div className='w-2/5'>
                <form className='w-full p-4'>
                    <input type="text" placeholder='Enter your name' className='border border-gray-600 bg-skin-bgSoft w-full pl-5 py-2 rounded-sm my-2 text-skin-textSoft' />
                    <input type="email" placeholder='Email Address' className='border border-gray-600 bg-skin-bgSoft w-full pl-5 py-2 rounded-sm my-2 text-skin-textSoft' />
                    <input type="tel" placeholder='Phone Number(optional)' className='border border-gray-600 bg-skin-bgSoft w-full pl-5 py-2 rounded-sm my-2 text-skin-textSoft' />
                    <textarea placeholder="message" className='border border-gray-600 bg-skin-bgSoft w-full pl-5 py-2 rounded-sm my-2 text-skin-textSoft h-40' />
                    <input type="submit" className='border border-gray-600 bg-blue-500  w-full pl-5 py-2 rounded-sm my-2 text-skin-textSoft cursor-pointer' />
                </form>
            </div>

        </div>
    )
}

export default page
