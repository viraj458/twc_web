import React from 'react'
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri'

const ReadOnlyRow = ({contact, handleEditClick ,handleConfirm}) => {
  return (
    <>
        <td className=" text-m font-semibold">{contact.full_name}</td>
        <td className=" text-m font-semibold">{contact.gender}</td>
        <td className=" text-m font-semibold">{contact.email}</td>
        <td className=" text-m font-semibold">{contact.phone_number}</td>
        <td className=" mt-3 gap-2 text-xl flex">
          <div className='mr-4 ml-2'>
            <button onClick={e=>handleEditClick(e, contact)}><MdEdit /></button>
          </div>
          <div>
            <button onClick={(e)=>handleConfirm(e, contact)}><RiDeleteBin6Line /></button>
          </div>
          </td>
    </>
  )
}

export default ReadOnlyRow