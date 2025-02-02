import React from 'react'
import Logo from '../assets/logo.png'
const Header = () => {
  return (
    <div className='w-screen h-[80px] bg-[#010203]'>
        Header
        <div className='w-[100px] h-auto flex justify-center items-center'>
        <img className='w-[50px] h-[50px]' src={Logo} alt="" />
        </div>
    </div>
  )
}

export default Header