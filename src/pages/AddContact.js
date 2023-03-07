import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoWhite from '../components/LogoWhite'
import { useAuthContext } from '../hooks/useAuthContext' 
import { useLogout } from '../hooks/useLogout'
import {BiLogOutCircle} from 'react-icons/bi'

const AddContact = () => {

  const {user} = useAuthContext()
  const {logout} = useLogout()

  const navigate = useNavigate()
  
  const [fullName, setFullName] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')


  const handleClick = () => {
    logout()
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    if(!user){
      return
    }
    const contact = {fullName, phoneNumber, email, gender}

    await fetch('/contacts', {
      method:'POST',
      body: JSON.stringify(contact),
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    .then(res=>{
      if(!res.ok) throw Error(res.statusText)
      res.json()
    })
    .then(data=>{
      setFullName('')
      setGender('')
      setEmail('')
      setPhoneNumber('')
      navigate('/contacts')
    })
    .catch(err=>{
      console.log(err.message);
    })
     
    
  }
  return (
    <div className="image w-screen h-screen flex items-center justify-center fixed">
      <div className='absolute w-[1530px] h-[980px] bg-[#083F46] rounded-full rotate-[20deg]'>
        <div className="justify-center ml-[300px] mt-[200px] rotate-[-20deg]">
            <LogoWhite/>
          <div className='mt-14'>
              <div>
                <p className='font-bold text-3xl text-white mb-8'>New Contact</p>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <input 
                      className='w-[420px]  rounded-full mb-6 px-5 py-2 text-[18px] text-[#ff2f2f] placeholder-[#083f46] font-semibold'
                      type="text"
                      onChange={(e)=>{setFullName(e.target.value)}} 
                      value={fullName}
                      placeholder="full name"
                    />
                    <input 
                      className='w-[420px] ml-10 rounded-full mb-6 px-5 py-2 text-[18px] text-[#ff2f2f] placeholder-[#083f46] font-semibold'
                      type="text"
                      onChange={(e)=>{setEmail(e.target.value)}} 
                      value={email}
                      placeholder="email"
                    />
                  </div>
                  
                  <div className='flex'>
                    <input 
                      className='w-[420px] rounded-full mb-6 px-5 py-2 text-[18px] text-[#ff2f2f] placeholder-[#083f46] font-semibold'
                      type="text"
                      onChange={(e)=>{setPhoneNumber(e.target.value)}} 
                      value={phoneNumber}
                      placeholder="phone number"
                    />
                    <div>
                      <label className='font-semibold text-white ml-11'> gender
                      
                      <input 
                      className='ml-28 mr-3'
                      type="radio"
                      name='gender'
                      onChange={(e)=>{setGender(e.target.value)}} 
                      value="Male"
                      />male

                      <input 
                      className='ml-28 mr-3'
                      type="radio"
                      name="gender"
                      onChange={(e)=>{setGender(e.target.value)}} 
                      value="Female"
                      />female
                      
                      </label>
                    </div>
                  </div> 
                  <button className='mt-4 border-[1px] rounded-full px-5 py-1 text-[18px] border-white font-semibold text-white'>Add contact</button>
                </form>
              </div>
            
          </div>
          <div>
            <button className='flex ml-[900px] mt-20 py-1 text-[18px] text-white font-bold underline underline-offset-2' onClick={handleClick}><BiLogOutCircle className='w-7 h-7 mr-2'/>logout</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AddContact