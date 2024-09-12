import { Inter } from 'next/font/google'
import Navbar from '@/component/navbar/navbar'
import Footer from '@/component/footer/footer'
import './globals.css'
import { auth } from '@/lib/auth'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default async function RootLayout({ children }) {
  const session = await auth();
  // console.log(session);
  return (
    <html lang="en">

      <body className=' px-20'>
        <Navbar session={session} />
        {children}
        <Footer />
      </body>

    </html>
  )
}