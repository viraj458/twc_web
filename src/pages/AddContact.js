import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext' 

const AddContact = () => {

  const {user} = useAuthContext()
  const navigate = useNavigate()

  const [fullName, setFullName] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

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
    <div>
      <form className='form' onSubmit={handleSubmit}>

        <h2>New Contact</h2>

        <input 
          type="text"
          onChange={(e)=>{setFullName(e.target.value)}} 
          value={fullName}
          placeholder="full name"
        />

        <input 
          type="text"
          onChange={(e)=>{setPhoneNumber(e.target.value)}} 
          value={phoneNumber}
          placeholder="phone number"
        />

        <input 
          type="text"
          onChange={(e)=>{setEmail(e.target.value)}} 
          value={email}
          placeholder="email"
        />

        <label> gender
        <input 
        type="radio"
        name='gender'
        onChange={(e)=>{setGender(e.target.value)}} 
        value="Male"
        />
        Male
        <input 
        type="radio"
        name="gender"
        onChange={(e)=>{setGender(e.target.value)}} 
        value="Female"
        />
        Female
        </label>
        <button>Add contact</button>
      </form>
    </div>
  )
}

export default AddContact