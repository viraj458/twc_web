import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ContactList from '../components/ContactList'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

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
    <div>
      <div className='contacts'>
        {contacts && <ContactList contacts={contacts}/>}
      </div>
      <Link to='/contacts/new'><button>add new contact</button></Link>
      <button onClick={handleClick}>logout</button>
    </div>
  )
}

export default Contact