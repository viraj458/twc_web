import React, { useEffect, useState } from 'react'

const Contact = () => {

  const [contacts, setContacts] = useState(null)

  useEffect(()=>{
    const fetchContact = async() => {
      await fetch('http://localhost:5000/contacts')
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
        {contacts && contacts.map((contact)=>(
          <p key={contact._id}>{contact.full_name}</p>
        ))}
      </div>
    </div>
  )
}

export default Contact