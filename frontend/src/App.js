import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/utils/ProtectedRoute';
import { useSelector } from 'react-redux';

import './App.css';
import SideBar from './components/sidebar/SideBar';
import Dashbaord from './components/body/dashboard';
import Setting from './components/body/settings/Setting';
import SetttingFrom from './components/body/settings/SetttingFrom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgetPass from './components/auth/ForgetPass';

function App() {


  const [navVisible, showNavbar] = useState(true);

  const { isAuthenticated } = useSelector((state) => state.user);


  return (
    <>

        <BrowserRouter>

          <div className='app-container'>

            {!isAuthenticated ? "" : (
              <SideBar visible={ navVisible } show={ showNavbar }/>
            )}

            <Routes>
              <Route path="/" element={<ProtectedRoute />}>
                <Route path='/' element={<Dashbaord/>}/>
                <Route path='/settings' element={<Setting/>}/>
                <Route path='/settings/form' element={<SetttingFrom/>}/>
              </Route>

                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path='/forget-path' element={<ForgetPass/>}/>
              
            </Routes>

          </div>

        </BrowserRouter>

    </>
  );
}

export default App;
