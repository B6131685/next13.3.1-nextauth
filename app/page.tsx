"use client"
import { signIn, signOut, useSession } from 'next-auth/react';
import AuthContext from "./authContext";

export default function Home() {
  const session = useSession();
  const login = async ()=>{
    await signIn('github', {redirect: false})
  }
  return (
    <AuthContext>
    <div className='flex justify-center items-center flex-col mt-6'>
      {
        session?.data 
        ? 
        (
          <>
          <span className='cursor-pointer mr-4' onClick={()=>signOut()}> Logout</span>
          <p>
            <img src={session.data.user?.image as string} alt="user image" className='rounded-[50%] w-20 aspect-square' />
            {session.data.user?.name} 
          </p>
          </>
        )
        :
        <span className='cursor-pointer mr-4' onClick={()=>{login()}}> Login Github</span>
      }
    </div>
    </AuthContext>
  )
}
