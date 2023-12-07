import React, {useEffect, useState} from 'react'
import Instagram from './Instagram'
import Youtube from './Youtube'
import FaceBook from './FaceBook'
import TikTok from './TikTok'
import {useSelector, useDispatch} from 'react-redux';
import {getTitle} from '../../../actions/titleAction'
import Confetti from 'react-confetti';

import './Dashboard.css'
import { Link } from 'react-router-dom'

const Dashbaord = () => {

    const dispatch = useDispatch()

    const {title} = useSelector(state=>state.title);
    const [username, setUserName] = useState('')
    
    const [isTiktokCelebrating, setIsTiktokCelebrating] = useState(false);
    const [isFaceBookCelebrating, setIsFaceBookCelebrating] = useState(false);
    const [isYoutubeCelebrating, setIsYoutubeCelebrating] = useState(false);
    const [isInstagramCelebrating, setIsInstagramCelebrating] = useState(false);

    const { user } = useSelector((state) => state.user);
    useEffect(() =>{

      setUserName(user?.username)

      dispatch(getTitle());

  }, [dispatch, user])

  const { width, height } = '100%'

  return (
    <>

      <div className='dashboard-container'>
        
        { 
          isTiktokCelebrating || 
          isFaceBookCelebrating ||
          isInstagramCelebrating ||
          isYoutubeCelebrating ||
          <div className='confetti'>
            <Confetti 
              width="1000px"
              numberOfPieces={1000}
            />
          </div>}

        {title?.success === false ? 
          <p>Please add title</p>
          :           
          <p>{title?.title?.title}</p>
        }

          <div className='dashboard-wrapper'>
              <Link to={`/${username}/followup`}>
                <Instagram setIsInstagramCelebrating={setIsInstagramCelebrating} isInstagramCelebrating={isInstagramCelebrating}/>
              </Link>
              <Link to={`/${username}/followup`}>
                <Youtube setIsYoutubeCelebrating={setIsYoutubeCelebrating} isYoutubeCelebrating={isYoutubeCelebrating}/>
              </Link>
              <Link to={`/${username}/followup`}>
                <FaceBook setIsFaceBookCelebrating={setIsFaceBookCelebrating} isFaceBookCelebrating={isFaceBookCelebrating} />
              </Link>
              <Link to={`/${username}/followup`}>
                <TikTok setIsTiktokCelebrating={setIsTiktokCelebrating} isTiktokCelebrating={isTiktokCelebrating}/>
              </Link>
  
          </div>

      </div>
    </>
  )
}

export default Dashbaord