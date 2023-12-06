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
  const [view, setView] = useState('')



  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    setUserName(user?.username)

    const userViewString = localStorage.getItem('userView');
		const userViewObject = JSON.parse(userViewString);
		const userView = userViewObject?.userView;
		setView(userView)
  }, [user])  


  console.log("username", username);

  return (
    <>

        <BrowserRouter>

          <div className='app-container'>

            {!isAuthenticated ? "" : (
                <SideBar visible={navVisible} show={showNavbar} />
              
            )}

            <Routes>

              <Route path="/" element={<ProtectedRoute />}>
                {view === true ? "" : (
                  <Route path="/settings" element={<Setting/>}/>
                )}
                <Route path={`/${username}/dashboard`} element={<Dashbaord/>}/>
              </Route>

              {/* public route */}
                <Route path={`/${username}/followup`} element={<FollowUp/>}/>
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
