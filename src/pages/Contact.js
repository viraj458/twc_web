import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ContactList from '../components/ContactList'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import LogoWhite from '../components/LogoWhite'
import {BiLogOutCircle} from 'react-icons/bi'

const Contact = () => {

  const {user} = useAuthContext()
  const {logout} = useLogout()
  const [contacts, setContacts] = useState(null)

  const handleClick = () => {
    logout()
  }

  useEffect(()=>{
    const fetchContact = async() => {
      await fetch('/contacts', {
        headers:{
          'Authorization': `Bearer ${user.token}`
        }
      })
      .then(res=>{
        if(!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then(data=>{
        console.log(data);
        setContacts(data)
      })
      .catch(err=>{
        console.log(err.message);
      })
    }
    if(user){
      fetchContact()
    }
  },[user])

  return (
      <div className="image w-screen h-screen flex  items-center justify-center">
        <div className='absolute w-[1530px] h-[980px] bg-[#083F46] rounded-full rotate-[20deg]'>
          <div className="justify-center ml-[300px] mt-[200px] rotate-[-20deg]">
              <LogoWhite />
            
            <div className='flex gap-[550px] mb-5 mt-9'>
              <p className='font-bold text-3xl text-white'>Contacts</p>
              <Link to='/contacts/new'><button className='border-[1px] rounded-full px-5 py-1 text-[18px] border-white font-semibold text-white'>add new contact</button></Link>
            </div>

            <div className='bg-white rounded-3xl mr-[380px]'>
              {contacts && <ContactList contacts={contacts}/>}
            </div>

            <div>
              <button className='flex ml-[900px] mt-20 py-1 text-[18px] text-white font-bold underline underline-offset-2' onClick={handleClick}><BiLogOutCircle className='w-7 h-7 mr-2'/>logout</button>
            </div>
          </div>
        </div>
        

      </div>
    
  )
}

export default Contact