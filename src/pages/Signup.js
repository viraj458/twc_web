import { useState } from "react"
import { Link } from "react-router-dom"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

const handleSubmit = async(e) => {
  e.preventDefault()

  if(password !== confirmPassword){
    throw Error("Passwords does not match")
  }
  console.log(email, password, confirmPassword);
}

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Register Now!</h3>
      
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        placeholder='email'
      />
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        placeholder='password'
      />
      <input 
        type="password" 
        onChange={(e) => setConfirmPassword(e.target.value)} 
        value={confirmPassword} 
        placeholder='confirm password'
      />

      <button>register</button>
      <Link to='/login'>back to login</Link>
    </form>
  )
}

export default Signup