import React, {useEffect, useState} from 'react'
import Instagram from './Instagram'
import Youtube from './Youtube'
import FaceBook from './FaceBook'
import TikTok from './TikTok'
import {useSelector, useDispatch} from 'react-redux';
import {getTitle, clearErrors} from '../../../actions/titleAction'

import './Dashboard.css'
import { Link } from 'react-router-dom'

const Dashbaord = () => {

    const dispatch = useDispatch()

    const {title} = useSelector(state=>state.title);
    const [username, setUserName] = useState('')

    const { isAuthenticated, user } = useSelector((state) => state.user);
    useEffect(() =>{

      setUserName(user?.username)

      dispatch(getTitle());

  }, [dispatch, user])

  console.log(title?.title);

  return (

    <div className='dashboard-container'>

      {title?.success === false ? 
        <p>Please add title</p>
        :           
        <p>{title?.title?.title}</p>
      }

        <div className='dashboard-wrapper'>
            <Link to={`/company/${username}/followup`}>
              <Instagram/>
            </Link>
            <Link to={`/company/${username}/followup`}>
              <Youtube/>
            </Link>
            <Link to={`/company/${username}/followup`}>
              <FaceBook/>
            </Link>
            <Link to={`/company/${username}/followup`}>
              <TikTok/>
            </Link>

            <Link to={`/company/${username}/followup`}>
              <Youtube/>
            </Link>
            <Link to={`/company/${username}/followup`}>
              <FaceBook/>
            </Link>
            <Link to={`/company/${username}/followup`}>
              <TikTok/>
            </Link>
            
        </div>

    </div>

  )
}

export default Dashbaord