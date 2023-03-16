import React from 'react'

const EditContact = ({editFormData, handleEditFormChange, handleSave}) => {
  return (
    <>
        <td>
            <input
            type="text"
            value={editFormData.fullName}
            name="fullName"
            onChange={handleEditFormChange}
            >
            </input>
        </td>
        <td>
            <input
            className='w-14'
            type="text"
            value={editFormData.gender}
            name="gender"
            onChange={handleEditFormChange}
            >
            </input>
        </td>
        <td>
            <input
            type="email"
            value={editFormData.email}
            name="email"
            onChange={handleEditFormChange}
            >
            </input>
        </td>
        <td>
            <input
            type="text"
            value={editFormData.phoneNumber}
            name="phoneNumber"
            onChange={handleEditFormChange}
            >
            </input>
        </td>
        <td><button onClick={handleSave} className='rounded-full px-5 py-1 text-[18px] bg-[#083F46] font-semibold text-white'>Save</button></td>
        
    </>
  )
}

export default EditContact