import React, {useEffect, useState} from 'react'

import {FaFacebookF} from 'react-icons/fa'

const FaceBook = () => {

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
    const interval = setInterval(increaseSubscribers, 2900);

    return () => clearInterval(interval);
  }, [subscribers]);


  const subscribersStr = subscribers.toString();
  const staticPart = subscribersStr.slice(0, subscribersStr.length - 1); // Extract the static part
  const changingPart = subscribersStr.slice(-1); 

  return (
    <div className={`social-counter-container ${isHovered ? 'hover-effect-facebook' : ''}`}>
    
        <div className='social-counter-name'>
            <FaFacebookF size={35} className='social-counter-facebook'/>
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

export default FaceBook