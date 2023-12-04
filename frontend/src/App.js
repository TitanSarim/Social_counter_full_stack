import { useEffect, useState } from 'react';
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
import { FollowUp } from './components/body/FollowUp/FollowUp';
import Home from './components/Home/Index';
import ViewPage from './components/Home/ViewPage'

function App() {


  const [navVisible, showNavbar] = useState(true);
  const [username, setUserName] = useState('')

  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    setUserName(user?.username)
  }, [user])  


  console.log("username", username);

  return (
    <>

        <BrowserRouter>

          <div className='app-container'>

            {!isAuthenticated ? "" : (
              (window.location.pathname === `/company/settings` || window.location.pathname === `/company/${username}/dashboard` || window.location.pathname === `/company/${username}/followup`) && (
                <SideBar visible={navVisible} show={showNavbar} />
              )
            )}

            <Routes>

              <Route path="/company" element={<ProtectedRoute />}>
                <Route path="/company/settings" element={<Setting/>}/>
                <Route path={`/company/${username}/dashboard`} element={<Dashbaord/>}/>
              </Route>

              {/* public route */}
                <Route path="/" element={<Home/>}/>
                <Route path={`/${username}/view`} element={<ViewPage/>}/>
                <Route path={`/company/${username}/followup`} element={<FollowUp/>}/>
              {/* public route */}

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
