import React from 'react'
import logo from '../utils/logo.png'

const LogoGreen = () => {
  return (
    <div>
     <div className='flex font-bold text-4xl'>
        <img className='w-14 h-14' src={logo} alt='logo'/>
        <p className='ml-[-5px] mt-1'>twc</p>
     </div>
     <div>
        <p className='ml-2 mt-[-20px] font-bold text-6xl text-[#083F46]'>contacts</p>
        <p className='ml-2 mt-[-6px] font-semibold text-5xl text-[#083F46]'>portal</p>
     </div>
    </div>
  )
}

export default LogoGreen