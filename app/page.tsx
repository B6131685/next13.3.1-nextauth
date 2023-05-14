"use client"
import { Inter } from 'next/font/google'
import { signIn, signOut, useSession } from 'next-auth/react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data } = useSession();
  return (
    <div className='flex justify-center items-center flex-col mt-6'>
      {
        data 
        ? 
        (
          <>
          <span className='cursor-pointer mr-4' onClick={()=>signOut()}> Logout</span>
          <p>
            <img src={data.user?.image as string} alt="user image" className='rounded-[50%] w-20 aspect-square' />
            {data.user?.name} 
          </p>
          </>
        )
        :
        <span className='cursor-pointer mr-4' onClick={()=>signIn('github')}> Login Github</span>
      }
    </div>
  )
}
