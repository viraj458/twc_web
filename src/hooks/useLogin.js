import { useAuthContext } from './useAuthContext'

export const useLogin = () => {

  const { dispatch } = useAuthContext()

  const login = async (email, password) => {

    await fetch('/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    .then(res=>{
        if(!res.ok) throw Error(res.statusText)
        return res.json()
    })
    .then(data=>{
        // save the user to local storage
      localStorage.setItem('user', JSON.stringify(data))

      // update the auth context
      dispatch({type: 'LOGIN', payload: data})
    })
    .catch(err=>{
        console.log(err.message);
    })
  }

  return { login }
}