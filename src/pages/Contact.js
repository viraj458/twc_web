import React, { useEffect, useState } from 'react'
import ContactList from '../components/ContactList'

const Contact = () => {

  const [contacts, setContacts] = useState(null)

  useEffect(()=>{
    const fetchContact = async() => {
      await fetch('/contacts')
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
    fetchContact()
  },[])

  return (
    <div>
      <div className='contacts'>
        {contacts && <ContactList contacts={contacts}/>}
      </div>
    </div>
  )
}

export default Contact