import React from 'react'
import logo from '../utils/logo.png'

const LogoWhite = () => {
  return (
    <div>
     <div className='flex font-bold text-xl'>
        <img className='w-8 h-8' src={logo} alt='logo'/>
        <p className='ml-[-3px]  text-white'>twc</p>
     </div>
     <div>
        <p className='ml-1 mt-[-10px] font-bold text-3xl text-white'>contacts</p>
        <p className='ml-1 mt-[-6px] font-semibold text-2xl text-white'>portal</p>
     </div>
    </div>
  )
}

export default LogoWhite