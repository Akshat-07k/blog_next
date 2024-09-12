"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
// import React from 'react'
import styles from './navbar.module.css'
import { handleLogout } from '@/lib/authFun';
const linko = [
    { link: '/', title: 'Home' },
    { link: '/blog', title: 'Blog' },
    { link: '/contact', title: 'Contacts' },
    { link: '/about', title: 'About' },
]
const Navbar = ({ session }) => {
    // const admin = true
    // const session = true;

    const path = usePathname();

    return (
        <div className=" flex flex-row px-32 py-6" >
            <div className='w-1/2 font-bold text-3xl text-skin-textSoft'>
                DARK
            </div>
            <div className='w-1/2 text-skin-textSoft flex flex-row justify-between '>

                {
                    linko.map((link) => (
                        <Link
                            key={link.link}
                            href={link.link}
                            className={`${path === link.link && styles.active} w-1/7 `}
                        >
                            {link.title}</Link>
                    ))
                }

                {
                    session?.user
                        ? (<>
                            {session.user?.admin && <Link href='/admin' >Admin</Link>}
                            <form action={handleLogout}>
                                <button style={{ backgroundColor: '#DC143C' }} className=' text-white rounded-xl p-2 font-semibold  border-blue-50'>Logout</button>
                            </form>
                        </>)
                        : (<Link href="/login" className={`${path === '/login' && styles.active}`}>Login</Link>)
                }

            </div>
        </div >
    )
}

export default Navbar
