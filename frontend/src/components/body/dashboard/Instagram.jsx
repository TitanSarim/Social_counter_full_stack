import React, {useEffect, useState} from 'react'


import {FaInstagram} from 'react-icons/fa'

const Instagram = ({setIsInstagramCelebrating}) => {

  const [subscribers, setSubscribers] = useState(2345);
  const [isHovered, setIsHovered] = useState(false);


  const increaseSubscribers = () => {
    setSubscribers(subscribers + 1);
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 1000);

    if ((subscribers + 1) % 50 === 0) {
      // Trigger celebration
      setIsInstagramCelebrating(true);
      setTimeout(() => {
        setIsInstagramCelebrating(false);;
      }, 10000); 
    }

  };

  useEffect(() => {
    const interval = setInterval(increaseSubscribers, 2500);

    return () => clearInterval(interval);
  }, [subscribers]);


  const subscribersStr = subscribers.toString();
  const staticPart = subscribersStr.slice(0, subscribersStr.length - 1);
  const changingPart = subscribersStr.slice(-1); 

  return (
    <div className={`social-counter-container ${isHovered ? 'hover-effect-instagram' : ''}`}>
    
        <div className='social-counter-name'>
            <FaInstagram size={35} className='social-counter-instagram'/>
            <p>Followers</p>
        </div>

        <div className='counters-main-container'>
          <p className="social-counter-amount">
            {staticPart}
            <p className={`changedDigit ${isHovered ? 'animated' : ''} `}>{changingPart}</p>
          </p>
        </div>
    
    </div>
  )
}

export default Instagram