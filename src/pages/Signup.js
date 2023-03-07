import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import LogoGreen from "../components/LogoGreen"
import { useSignup } from "../hooks/useSignup"
import {FaLessThan} from 'react-icons/fa'

const Signup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const {signup} = useSignup()

const handleSubmit = async(e) => {
  e.preventDefault()

  if(password !== confirmPassword){
    throw Error("Passwords does not match")
  }
  await signup(email, password)
  navigate('/')
}

  return (
    <div className="image w-screen h-screen flex items-center justify-center fixed">
      <div className="w-[1502px] h-[1502px] bg-[#083f46] rounded-full ml-[-1300px]">
      <div className="flex justify-center gap-[400px] ml-[1300px] mt-[500px]">
        <div>
          <div>
            <p className="font-bold text-white text-4xl mb-2 mt-14">Register Now!</p>
          </div>
          <div>
            <form className="signup" onSubmit={handleSubmit}>
              <div className="flex flex-col w-[380px]">
                <input 
                className=' rounded-full mt-4 mb-6 px-5 py-2 text-[18px] text-[#ff2f2f] placeholder-[#083f46] font-semibold'
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email} 
                  placeholder='e-mail'
                />
                <input 
                className='rounded-full mb-6 px-5 py-2 text-[18px] text-[#ff2f2f] placeholder-[#083f46] font-semibold'
                  type="password" 
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password} 
                  placeholder='password'
                />
                <input 
                className='rounded-full mb-6 px-5 py-2 text-[18px] text-[#ff2f2f] placeholder-[#083f46] font-semibold'
                  type="password" 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                  value={confirmPassword} 
                  placeholder='confirm password'
                />
              </div>
              
              <button className=' mt-6 border-[1px] rounded-full px-6 py-2 text-[18px] text-white font-semibold'>register</button>
                
            </form>
            <div className="flex gap-[3px] text-white mt-16">
              <FaLessThan className="mt-[6px] text-sm"/>
              <Link className="underline  underline-offset-2 font-semibold" to='/login'>Back to login</Link>
            </div>
            
          </div>
        </div>
        <div className="mt-[150px]">
          <LogoGreen/>
        </div>
      </div>
      
      </div>

      
      
    </div>
    
  )
}

export default Signup