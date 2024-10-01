import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"


export default function NavBar() {
  return (
    <>
      


      <nav className="bg-white z-50 border sticky right-0 left-0 border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <Avatar style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-10 h-10 rounded-full'>
  <AvatarImage  />
 
</Avatar>
 
  </div>
</nav>


    </>
  )
}
