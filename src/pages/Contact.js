import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ContactList from '../components/ContactList'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import LogoWhite from '../components/LogoWhite'
import {BiLogOutCircle} from 'react-icons/bi'

import DeleteConfirmMsg from '../components/DeleteConfirmMsg'
import DeleteDoneMsg from '../components/DeleteDoneMsg'

const Contact = () => {

  const {user} = useAuthContext()
  const {logout} = useLogout()
  const [contacts, setContacts] = useState(null)
  const [shDeleteConfirmMsg, setShDeleteConfirmMsg] = useState(false)
  const [shDeleteDoneMsg, setShDeleteDoneMsg] = useState(false)
  const [editContactId2, setEditContactId2] = useState(null)

  const handleOkay = () => {
    setShDeleteDoneMsg(false)
    window.location.reload()
  }

  const handleConfirm = (e, contact) => {
    e.preventDefault()
    setShDeleteConfirmMsg(true)
    setEditContactId2(contact.id)
  }

  const handleNo = () => {
    setShDeleteConfirmMsg(false)
  }

  const handleYes = () => {
     fetch(`/contacts/${editContactId2}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    .then(res=>{
      if(!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then(data=>{
      console.log(data)
      setShDeleteConfirmMsg(false)
      setShDeleteDoneMsg(true)
    })
    .catch(err=>{
      console.log(err.message);
    })
  }

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
      <div className="image w-screen h-screen flex  items-center justify-center fixed">
        <div className='absolute w-[1530px] h-[980px] bg-[#083F46] rounded-full rotate-[20deg]'>
          <div className="justify-center ml-[300px] mt-[200px] rotate-[-20deg]">
              <LogoWhite />
            
            <div className='flex gap-[610px] mb-5 mt-9'>
              <p className='font-bold text-3xl text-white'>Contacts</p>
              <Link to='/contacts/new'><button className='border-[1px] rounded-full px-5 py-1 text-[18px] border-white font-semibold text-white'>add new contact</button></Link>
            </div>

            <div className='bg-white rounded-3xl mr-[320px]'>
              {contacts && <ContactList contacts={contacts} handleConfirm={handleConfirm}/>}
            </div>

            <div>
              <button className='flex ml-[900px] mt-24 py-1 text-[18px] text-white font-bold underline underline-offset-2' onClick={handleClick}><BiLogOutCircle className='w-7 h-7 mr-2'/>logout</button>
            </div>
          </div>
        </div>
        
        <DeleteConfirmMsg visible={shDeleteConfirmMsg} handleNo={handleNo} handleYes={handleYes} />
        <DeleteDoneMsg visible={shDeleteDoneMsg}  handleOkay={handleOkay} />

      </div>
    
  )
}

export default Contact