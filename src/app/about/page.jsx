import Image from 'next/image'
import React from 'react'
// import img from '/'
const AboutPage = () => {
    return (
        <div className='h-screen flex flex-row '>
            <div className='w-2/3 '>
                <br />
                <p className=' text-8xl font-semibold'>About Site </p><br />
                <p className=' text-xl '>We provide a free-to-use paltform to promote freespeach to everyperoson (<span className=' text-red-700 font-semibold'>NOT Faggots</span>)</p><br />
                <p className='text-2xl font-bold'>KEY POINTS </p>
                <br />
                <ul className='ml-4 text-xl font-semibold'>
                    <li>No moderation</li>
                    <li>Free Speach</li>
                    <li>Free-to-use</li>
                    <li>No indentification required</li>
                    <li>Privacy ensured</li>
                </ul>
                <p>and many more .....</p>
            </div>
            <div className=' w-3/5 relative h-4/5'>
                <Image src='/about.png' alt='Img' fill />

            </div>
            About
        </div>
    )
}

export default AboutPage
