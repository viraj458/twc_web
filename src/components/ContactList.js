import React from 'react'
import male from '../utils/male.png'
import female from '../utils/female.png'
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri'

const ContactList = ({contacts}) => {
  return (
    <div className='text-[#083F46] py-3'>
        <table>
          <tbody>
            <tr className=" text-m">
            <th></th>
            <th className='pr-[120px]'>full name</th>
            <th className='pr-8'>gender</th>
            <th className='pr-[180px]'>email</th>
            <th className='pr-5'>phone number</th>
            <th className='pr-5'></th>
            <th></th>
            </tr>

            {contacts.map((contact)=>{
            return(
                <tr key={contact._id}>
                <td className="px-8 py-[6px]">{contact.gender==="Male" ? (<img className='w-10 h-10' src={male} alt="Male"/>) : (<img className='w-10 h-10' src={female} alt="Female"/>)}</td>
                <td className=" text-m font-semibold">{contact.full_name}</td>
                <td className=" text-m font-semibold">{contact.gender}</td>
                <td className=" text-m font-semibold">{contact.email}</td>
                <td className=" text-m font-semibold">{contact.phone_number}</td>
                <td className="px-5 text-xl"><button><MdEdit /></button></td>
                <td className="text-xl"><button><RiDeleteBin6Line /></button></td>
                </tr>
            )
            
            })}
          </tbody>
        </table>
    </div>
  )
}

export default ContactList