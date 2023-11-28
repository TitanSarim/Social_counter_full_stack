import React, {useEffect} from 'react'
import Instagram from './Instagram'
import Youtube from './Youtube'
import FaceBook from './FaceBook'
import TikTok from './TikTok'
import {useSelector, useDispatch} from 'react-redux';
import {getTitle, clearErrors} from '../../../actions/titleAction'

import './Dashboard.css'

const Dashbaord = () => {

    const dispatch = useDispatch()

    const {title, error, loading} = useSelector(state=>state.title);

    useEffect(() =>{

      // if(error){
      //   alert.error(error)
      //   dispatch(clearErrors());
      // }

      dispatch(getTitle());

  }, [dispatch])

  console.log(title?.title);

  return (

    <div className='dashboard-container'>

      {title?.success === false ? 
        <p>Please add title</p>
        :           
        <p>{title?.title?.title}</p>
      }

        <div className='dashboard-wrapper'>
            <Instagram/>
            <Youtube/>
            <FaceBook/>
            <TikTok/>
            <Instagram/>
            <Youtube/>
            <FaceBook/>
            <TikTok/>
        </div>

    </div>

  )
}

export default Dashbaord