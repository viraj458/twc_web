import React from 'react'
import male from './utils/male.png'
import female from './utils/female.png'
const ContactList = ({contacts}) => {
  return (
    <div className=''>
        <table>
            <tr>
            <th></th>
            <th>full name</th>
            <th>gender</th>
            <th>email</th>
            <th>phone</th>
            <th>space</th>
            </tr>

            {contacts.map((contact)=>{
            return(
                <tr key={contact._id}>
                <td>{contact.gender==="Male" ? (<img src={male} alt="Male"/>) : (<img src={female} alt="Female"/>)}</td>
                <td>{contact.full_name}</td>
                <td>{contact.gender}</td>
                <td>{contact.email}</td>
                <td>{contact.phone_number}</td>
                <td></td>
                </tr>
            )
            
            })}

        </table>
    </div>
  )
}

export default ContactList