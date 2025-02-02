import React from 'react'
import Logo from '../assets/logo.png'
const Header = () => {
  return (
    <div className='w-screen h-[70px] bg-[#010203] flex justify-between'>
        <div className='w-[100px] h-auto flex justify-center items-center'>
        <img className='w-[50px] h-[50px]' src={Logo} alt="" />
        <div className='flex h-full items-center w-full justify-start font-bold'>
        <p className='text-white'>News App</p>
        </div>
        </div>
        <div className='h-full flex justify-center items-center p-5'>
          <p className='text-white'><a href="https://codewithabi.vercel.app" target='_blank'>About us</a></p>
        </div>
    </div>
  )
}

export default Header