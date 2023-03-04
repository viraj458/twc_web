import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddContact from './pages/AddContact';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/contacts' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/contacts/new' element={<AddContact/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
