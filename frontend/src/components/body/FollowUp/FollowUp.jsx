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
            iconComponent = <FaFacebook size={25} style={{"color": "#0484cf"}}/>;
            break;
          case 'instagram':
            iconComponent = <FaInstagram size={25} style={{"color": "#fc03b1"}}/>;
            break;
          case 'youtube':
            iconComponent = <FaYoutube size={27} style={{"color": "red"}}/>;
            break;
          case 'tiktok':
            iconComponent = <FaTiktok size={23} style={{"color": "black"}}/>;
            break;
          case 'twitter':
            iconComponent = <FaTwitter size={25} style={{"color": "blue"}}/>;
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
            <Link to={item.appLink} target='_blank' key={item.appName} className='followup-page-mapper'>
                <p>{item.appName}</p>
                {item.iconComponent}
            </Link>

          ))}

        </div>


    </div>
  )


}
