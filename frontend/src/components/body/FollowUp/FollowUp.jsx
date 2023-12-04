import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaTwitter } from 'react-icons/fa';

import QRCode from "react-qr-code";
import { useSelector } from 'react-redux';

import './FollowUp.css'
import { Link } from 'react-router-dom';

export const FollowUp = () => {


  const { url } = useSelector((state) => state.url);
  const { followUp } = useSelector((state) => state.followUp);

  
  const [socialUrls, setSocialUrls] = useState([])
  const [appLinks, setAppLinks] = useState([]);
  const [followTitle, setFollowTitle] = useState([])

  
  useEffect(() => {
    setSocialUrls(url?.url)
    setFollowTitle(followUp?.followUp?.title)
    const links = socialUrls.map((app) => {
      let appUrl = app.app_url;
    
      if (['youtube', 'tiktok', 'twitter'].includes(app.appname.toLowerCase())) {
        appUrl = appUrl.startsWith('@') ? appUrl : `@${appUrl}`;
      } else if (['facebook', 'instagram'].includes(app.appname.toLowerCase())) {
      } else {
        appUrl = appUrl.startsWith('@') ? appUrl : `@${appUrl}`;
      }
    
      let iconComponent;
        switch (app.appname.toLowerCase()) {
          case 'facebook':
            iconComponent = <FaFacebook />;
            break;
          case 'instagram':
            iconComponent = <FaInstagram />;
            break;
          case 'youtube':
            iconComponent = <FaYoutube />;
            break;
          case 'tiktok':
            iconComponent = <FaTiktok />;
            break;
          case 'twitter':
            iconComponent = <FaTwitter />;
            break;
          default:
            iconComponent = null;
        }
        
      const appLink = `https://www.${app.appname}.com/${appUrl}`;
      return {
        appLink,
        appName: app.appname,
        iconComponent
      };
    });
    
    setAppLinks(links);
    
  }, [followUp, socialUrls, url])

  const colorClasses = {
    facebook: 'blue-qr',
    instagram: 'pink-qrcode',
    tiktok: 'black-qrcode',
    youtube: 'red-qrcode',
    // Add more colors as needed
  };

  return (
    
    <div className='followup-page-container'>

        <p>{followTitle}</p>

        <div className='followup-page-wrapper'>
          
          {appLinks?.map((item) => (
          <div key={item.appName} className='followup-page-mapper'>
           
            
            <div className='followup-page-mapper-footer'>
              <Link to={item.appLink} target='_blank'>{item.appName}</Link>
              {item.iconComponent}
            </div>
          </div>

          ))}

        </div>


    </div>
  )


}
