import React from 'react'
import { Link } from 'react-router-dom'
import {BiLogOutCircle} from 'react-icons/bi'
import LogoWhite from '../components/LogoWhite'
import { useLogout } from '../hooks/useLogout'

const Welcome = () => {

  const {logout} = useLogout()

  const handleClick = () => {
    logout()
  }

  return (
    <div className="image w-screen h-screen flex items-center justify-center fixed">
      <div className='absolute w-[1530px] h-[980px] bg-[#083F46] rounded-full rotate-[20deg]'>
        <div className="justify-center ml-[300px] mt-[200px] rotate-[-20deg]">
          <LogoWhite/>
          <div className='mt-16'>
            <p className='font-bold text-3xl text-white'>Welcome,</p>
            <p className='font-semibold text-xl text-white'>This is where your contacts will live. Click the button below to add a new contact</p>
          </div>
          <div className='mt-14'>
            <Link to='/contacts/new'><button className='border-[1px] rounded-full px-5 py-1 text-[18px] border-white font-semibold text-white'>add your first contact</button></Link>
          </div>
          <button className='flex ml-[900px] mt-20 py-1 text-[18px] text-white font-bold underline underline-offset-2' onClick={handleClick}><BiLogOutCircle className='w-7 h-7 mr-2'/>logout</button>
          
        </div>
      </div>
      
    </div>
  )
}

export default Welcome