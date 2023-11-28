import React, {useEffect, useState} from 'react'

import {FaYoutube} from 'react-icons/fa'

const Youtube = () => {

  const [subscribers, setSubscribers] = useState(2345);
  const [isHovered, setIsHovered] = useState(false);


  const increaseSubscribers = () => {
    setSubscribers(subscribers + 1);
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(increaseSubscribers, 2000);

    return () => clearInterval(interval);
  }, [subscribers]);


  const subscribersStr = subscribers.toString();
  const staticPart = subscribersStr.slice(0, subscribersStr.length - 1); // Extract the static part
  const changingPart = subscribersStr.slice(-1); 

  return (
    <div className={`social-counter-container ${isHovered ? 'hover-effect-youtube' : ''}`}>
    
        <div className='social-counter-name'>
            <FaYoutube size={35} className='social-counter-youtube'/>
            <p>Subscribers</p>
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

export default Youtube