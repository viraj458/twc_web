import React, { useState } from 'react'
import male from '../utils/male.png'
import female from '../utils/female.png'

import ReadOnlyRow from './ReadOnlyRow';
import EditContact from './EditContact';
import { useAuthContext } from '../hooks/useAuthContext';


const ContactList = ({contacts, handleConfirm}) => {

  const {user} = useAuthContext()

  const [editContactId, setEditContactId] = useState(null)
  

  const [editFormData, setEditFormData] = useState({
    fullName: "", 
    gender: "", 
    email: "", 
    phoneNumber: ""
  })


  


  const handleEditFormChange = (e) => {
    e.preventDefault()

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  


  const handleSave = (e) => {
    e.preventDefault()

    const editedContact = {
      id:editContactId,
      fullName:editFormData.fullName, 
      phoneNumber: editFormData.phoneNumber, 
      email: editFormData.email, 
      gender: editFormData.gender
    }

    if(!user){
      return
    }
     fetch(`/contacts/${editedContact.id}` , {
      method:'PUT',
      body: JSON.stringify(editedContact),
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    .then(res=>{
      if(!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((data)=>{
      console.log(data);
    })
    .catch(err=>{
      console.log(err.message);
    })
  }

  const handleEditClick = (e, contact) => {
    e.preventDefault()
    setEditContactId(contact._id)

    const formValues = {
      fullName: contact.full_name,
      gender: contact.gender,
      email: contact.email,
      phoneNumber: contact.phone_number
    }

    setEditFormData(formValues)
  }

  return (
    <div className='text-[#083F46] py-3'>
      <form> 
        <table>
          <tbody>
            <tr className=" text-m">
            <th className="px-8 py-[6px]"></th>
            <th className='pr-[120px]'>full name</th>
            <th className='pr-14'>gender</th>
            <th className='pr-[180px]'>email</th>
            <th className='pr-[80px]'>phone number</th>
            <th className='pr-5'></th>
            <th></th>
            </tr>

            {contacts.map((contact)=>{
            return(
              <tr key={contact._id}>
                <td className="px-8 py-[6px]">{contact.gender==="Male" ? (<img className='w-10 h-10' src={male} alt="Male"/>) : (<img className='w-10 h-10' src={female} alt="Female"/>)}</td>
                {editContactId===contact._id ? 
                <EditContact 
                editFormData={editFormData} 
                handleEditFormChange={handleEditFormChange}
                handleSave={handleSave}
                /> : 
                <ReadOnlyRow 
                contact={contact} 
                handleEditClick={handleEditClick}
                handleConfirm={handleConfirm}
                />} 
              </tr>
            )
            
            })}
          </tbody>
        </table>
      </form>
        
    </div>
  )
}

export default ContactList