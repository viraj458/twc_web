import { useState } from "react"
import { Link } from "react-router-dom"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login} = useLogin()

const handleSubmit = async(e) => {
  e.preventDefault()

 
  await login(email, password);
}

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Hi there!</h3>
      <h5>Welcome to our contacts portal</h5>
      
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

      <button>login</button>
      <Link to='/signup'>click here to register</Link>
    </form>
  )
}

export default Login