import React from 'react'

const DeleteDoneMsg = ({visible, handleOkay}) => {
    if(!visible) return null;
  return (
    <div>
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm'>
              <div className='px-6 py-8 bg-white rounded-2xl'>
                    <h1 className=' text-[#083F46] font-bold flex justify-center'>Your contact has been deleted successfully!</h1>
                    <button onClick={handleOkay} className='rounded-full border-[2px] px-5 py-[4px] bg-[#083F46] text-white mt-5 mx-28'>Okay</button>
              </div>
        </div>
    </div>
  )
}

export default DeleteDoneMsg