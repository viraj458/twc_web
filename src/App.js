import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import AddContact from './pages/AddContact';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';

function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/' element={user? <Welcome/> : <Navigate to='/login'/>}/>
            <Route path='/contacts' element={user ? <Contact/> : <Navigate to='/login'/>}/>
            <Route path='/login' element={!user ? <Login/> : <Navigate to='/contacts'/>}/>
            <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/contacts'/>}/>
            <Route path='/contacts/new' element={user ? <AddContact/> : <Navigate to='/login'/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
