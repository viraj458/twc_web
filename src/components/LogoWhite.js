import React from 'react'
import logo from '../utils/logo.png'

const LogoWhite = () => {
  return (
    <div>
     <div className='flex font-bold text-2xl'>
        <img className='w-8 h-8' src={logo} alt='logo'/>
        <p className='ml-[-3px] mt-[-3px]'>twc</p>
     </div>
     <div>
        <p className='ml-1 mt-[-10px] font-bold text-2xl'>contacts</p>
        <p className='ml-1 mt-[-6px] font-semibold text-xl'>portal</p>
     </div>
    </div>
  )
}

export default LogoWhite