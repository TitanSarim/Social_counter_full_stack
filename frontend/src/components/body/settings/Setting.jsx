import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {FaYoutube} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineSetting} from 'react-icons/ai'
import {useSelector, useDispatch} from 'react-redux'
import {createTitle, UpdateTitle, clearErrors} from '../../../actions/titleAction'
import {getFollowUpTitle, createFollowUpTitle, UpdateFollowUpTitle} from '../../../actions/followUpAction'
import {createLogo, updateLogo, clearImageErrors} from '../../../actions/imageAction'
import {getUrl, UpdateUrl, createUrl } from '../../../actions/socialAction'
import {useAlert} from 'react-alert';

import './Settings.css'



const Setting = () => {

    const dispatch = useDispatch()
    const alert = useAlert()

  const {title, error, loading} = useSelector(state=>state.title);
  const {logo} = useSelector(state=>state.logo);
  const {url} = useSelector(state=>state.url);
  const {followUp} = useSelector(state=>state.followUp);

  const [selectedImage, setSelectedImage] = useState(null);
  const [heading, setHeading] =  useState('')
  const [followUpTitle, setFollowUpTitle] = useState('')

  const [youtube, setYoutube] = useState([])
  const [facebook, setFacebook] = useState([])
  const [instagram, setInstagram] = useState([])
  const [twitter, setTwitter] = useState([])
  const [tiktok, setTiktok] = useState([])

  const [youtubeSubmit, setYoutubeSubmit] = useState("")
  const [facebookSubmit, setFacebookSubmit] = useState("")
  const [instagramSubmit, setInstagramSubmit] = useState("")
  const [twitterSubmit, setTwitterSubmit] = useState("")
  const [tiktokSubmit, setTiktokSubmit] = useState("")
  

  const [youtubePrioritySubmit, setYoutubePrioritySubmit] = useState("")
  const [facebookPrioritySubmit, setFacebookPrioritySubmit] = useState("")
  const [instagramPrioritySubmit, setInstagramPrioritySubmit] = useState("")
  const [twitterPrioritySubmit, setTwitterPrioritySubmit] = useState("")
  const [tiktokPrioritySubmit, setTiktokPrioritySubmit] = useState("")

  const [youtubeActivate, setYoutubeActivate] = useState()
  const [facebookActivate, setFacebookActivate] = useState()
  const [instagramActivate, setInstagramActivate] = useState()
  const [twitterActivate, setTwitterActivate] = useState()
  const [tiktokActivate, setTiktokActivate] = useState()


  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setHeading(newTitle);
  }

  const handleFollowUpTitleChange = (e) => {
    const newTitle = e.target.value;
    setFollowUpTitle(newTitle);
  }
  
  useEffect(() => {
    setHeading(title?.title?.title);
    dispatch(getUrl());
    dispatch(getFollowUpTitle())
  }, [dispatch, title]);


  const handleTitleSubmit = () => {
    const formData = {
      id: title?.title?.id,
      title: heading
    }

    console.log("formdata", formData);

    if(title?.success === false){
      dispatch(createTitle(formData))
      alert.success('Title created')
    }else{
      dispatch(UpdateTitle(formData))
      alert.success('Title updated')
    }

  }

  const handleFollowUpTitleSubmit = () => {
    const formData = {
      title: followUpTitle
    }

    const formDataUpdate = {
      id: followUp?.followUp?.id,
      title: followUpTitle
    }

    console.log("Foloowformdata", formData);

    if(followUp?.success === false){
      dispatch(createFollowUpTitle(formData))
      alert.success('Title created')
    }else{
      dispatch(UpdateFollowUpTitle(formDataUpdate))
      alert.success('Title updated')
    }

  }

  const handleUpload = async (e) => {

    if (!selectedImage) {
      alert.error('Please select an image first.');
      return;
    }
    console.log("seletecedimg", selectedImage);

    const myUpadtedForm = {
      id: logo?.logo?.id,
      avatar: selectedImage
    }

    const myForm = {
      avatar: selectedImage
    }

    if(logo?.success === false){
      dispatch(createLogo(myForm));
      alert.success('Logo added')
      window.location.reload()
    }else{
      dispatch(updateLogo(myUpadtedForm));
      alert.success('Logo added')
      window.location.reload()
    }
    
  };



  const handleInstagramChange = async (e) => {
    setInstagramSubmit(e.target.value)
  }
  const handleFacebookChange = async (e) => {
    setFacebookSubmit(e.target.value)
  }
  const handleTiktokChange = async (e) => {
    setTiktokSubmit(e.target.value)
  }
  const handleYoutubeChange = async (e) => {
    setYoutubeSubmit(e.target.value)
  }
  const handleTwitterChange = async (e) => {
    setTwitterSubmit(e.target.value)
  }

  // 
  const handleYoutubePiorityChange = async (e) => {

    let value = e.target.value;
    value = value.replace(/[^\d-]/g, '');
    const parsedValue = parseInt(value, 10);
    const newValue = isNaN(parsedValue) ? '' : Math.min(10, Math.max(1, parsedValue));
    setYoutubePrioritySubmit(newValue);
  }
  const handleFacebookPiorityChange = async (e) => {

    let value = e.target.value;
    value = value.replace(/[^\d-]/g, '');
    const parsedValue = parseInt(value, 10);
    const newValue = isNaN(parsedValue) ? '' : Math.min(10, Math.max(1, parsedValue));
    setFacebookPrioritySubmit(newValue)
  }
  const handleInstagramPiorityChange = async (e) => {
    let value = e.target.value;
    value = value.replace(/[^\d-]/g, '');
    const parsedValue = parseInt(value, 10);
    const newValue = isNaN(parsedValue) ? '' : Math.min(10, Math.max(1, parsedValue));
    setInstagramPrioritySubmit(newValue)
  }
  const handleTwitterPiorityChange = async (e) => {
    let value = e.target.value;
    value = value.replace(/[^\d-]/g, '');
    const parsedValue = parseInt(value, 10);
    const newValue = isNaN(parsedValue) ? '' : Math.min(10, Math.max(1, parsedValue));
    setTwitterPrioritySubmit(newValue)
  }
  const handleTiktokPiorityChange = async (e) => {
    let value = e.target.value;
    value = value.replace(/[^\d-]/g, '');
    const parsedValue = parseInt(value, 10);
    const newValue = isNaN(parsedValue) ? '' : Math.min(10, Math.max(1, parsedValue));
    setTiktokPrioritySubmit(newValue)
  }



useEffect(() => {

    if(error){
        alert.error(error);
        dispatch(clearErrors());
    }
}, [alert, dispatch, error,])


  useEffect(() => {
    if (Array.isArray(url?.url)) {
      const separatedUrls = {
        youtube: [],
        facebook: [],
        instagram: [],
        twitter: [],
        tiktok: [],
      };
  
      url?.url?.forEach((urlItem) => {
        switch (urlItem?.appname) {
          case 'youtube':
            separatedUrls.youtube.push(urlItem);
            break;
          case 'facebook':
            separatedUrls.facebook.push(urlItem);
            break;
          case 'instagram':
            separatedUrls.instagram.push(urlItem);
            break;
          case 'twitter':
            separatedUrls.twitter.push(urlItem);
            break;
          case 'tiktok':
            separatedUrls.tiktok.push(urlItem);
            break;
          default:
            break;
        }
      });
  
    // Update state with separated URLs
    setYoutube(separatedUrls.youtube);
    setFacebook(separatedUrls.facebook);
    setInstagram(separatedUrls.instagram);
    setTwitter(separatedUrls.twitter);
    setTiktok(separatedUrls.tiktok);
    }
  }, [url]);

  useEffect(() => {
    setInstagramSubmit(instagram[0]?.app_url)
    setFacebookSubmit(facebook[0]?.app_url)
    setTiktokSubmit(tiktok[0]?.app_url)
    setTwitterSubmit(twitter[0]?.app_url)
    setYoutubeSubmit(youtube[0]?.app_url)

    setFacebookActivate(facebook[0]?.isActivated)
    setInstagramActivate(instagram[0]?.isActivated)
    setTiktokActivate(tiktok[0]?.isActivated)
    setTwitterActivate(twitter[0]?.isActivated)
    setYoutubeActivate(youtube[0]?.isActivated)

    setFacebookPrioritySubmit(facebook[0]?.priority)
    setInstagramPrioritySubmit(instagram[0]?.priority)
    setTiktokPrioritySubmit(tiktok[0]?.priority)
    setTwitterPrioritySubmit(twitter[0]?.priority)
    setYoutubePrioritySubmit(youtube[0]?.priority)

    setFollowUpTitle(followUp?.followUp?.title)

  }, [facebook, instagram, tiktok, twitter, youtube, followUp])



  const handleSubmitInstagram = () => {
    
    if(!instagramSubmit || !instagramPrioritySubmit){
      alert.error("Please enter credientials")
      return
    }

    const formDataCreate ={
      appname: "instagram", 
      app_url: instagramSubmit,
      priority: instagramPrioritySubmit
    }

    const formDataUpdate = {
      id: instagram[0]?.id,
      appname: "instagram", 
      app_url: instagramSubmit,
      priority: instagramPrioritySubmit,
      isActivated: instagram[0]?.isActivated
    }

    if(instagram.length === 0){
      dispatch(createUrl(formDataCreate))
      alert.success('Social Link created')
    }else{
      dispatch(UpdateUrl(formDataUpdate))
      alert.success('Social Link added')
    }

  }
  
  const handleSubmitFacebook = () => {

    if(!facebookSubmit || !facebookPrioritySubmit){
      alert.error("Please enter credientials")
      return
    }
    
    const formDataCreate ={
      appname: "facebook", 
      app_url: facebookSubmit,
      priority: facebookPrioritySubmit
    }

    const formDataUpdate = {
      id: facebook[0]?.id,
      appname: "facebook", 
      app_url: facebookSubmit,
      priority: facebookPrioritySubmit,
      isActivated: facebook[0]?.isActivated
    }

    if(facebook.length === 0){
      dispatch(createUrl(formDataCreate))
      alert.success('Social Link created')
    }else{
      dispatch(UpdateUrl(formDataUpdate))
      alert.success('Social Link added')
    }

  } 

  const handleSubmitTiktok = () => {

    if(!tiktokSubmit || !tiktokPrioritySubmit){
      alert.error("Please enter credientials")
      return
    }

    const formDataCreate ={
      appname: "tiktok", 
      app_url: tiktokSubmit,
      priority: tiktokPrioritySubmit,
    }

    const formDataUpdate = {
      id: tiktok[0]?.id,
      appname: "tiktok", 
      app_url: tiktokSubmit,
      priority: tiktokPrioritySubmit,
      isActivated: tiktok[0]?.isActivated
    }

    if(tiktok.length === 0){
      dispatch(createUrl(formDataCreate))
      alert.success('Social Link created')
    }else{
      dispatch(UpdateUrl(formDataUpdate))
      alert.success('Social Link added')
    }

  } 

  const handleSubmitTwitter = () => {

    if(!twitterSubmit || !twitterPrioritySubmit){
      alert.error("Please enter credientials")
      return
    }

    const formDataCreate ={
      appname: "twitter", 
      app_url: twitterSubmit,
      priority: tiktokPrioritySubmit,
    }

    const formDataUpdate = {
      id: twitter[0]?.id,
      appname: "twitter", 
      app_url: twitterSubmit,
      priority: tiktokPrioritySubmit,
      isActivated: twitter[0]?.isActivated
    }

    if(twitter.length === 0){
      dispatch(createUrl(formDataCreate))
      alert.success('Social Link created')
    }else{
      dispatch(UpdateUrl(formDataUpdate))
      alert.success('Social Link added')
    }

  } 

  const handleSubmitYoutube = () => {

    if(!youtubeSubmit || !youtubePrioritySubmit){
      alert.error("Please enter credientials")
      return
    }

    const formDataCreate ={
      appname: "youtube", 
      app_url: youtubeSubmit,
      priority: youtubePrioritySubmit
    }

    const formDataUpdate = {
      id: youtube[0]?.id,
      appname: "youtube", 
      app_url: youtubeSubmit,
      priority: youtubePrioritySubmit,
      isActivated: youtube[0]?.isActivated
    }

    if(youtube.length === 0){
      dispatch(createUrl(formDataCreate))
      alert.success('Social Link created')
    }else{
      dispatch(UpdateUrl(formDataUpdate))
      alert.success('Social Link added')
    }

  } 



  const handleFaceBookActivate = () => {
    const formDataUpdate = {
      id: facebook[0]?.id,
      appname: facebook[0]?.appname, 
      app_url: facebook[0]?.app_url,
      isActivated: !facebookActivate ,
    }
    setInstagramActivate(!facebookActivate);

    if(facebook?.length === 0){
      alert.error('Please first add credientials')
    }else{
      dispatch(UpdateUrl(formDataUpdate))
      alert.success('App is Activated')
    }
  }

  const handleInstagramActivate = () => {
    const formDataUpdate = {
      id: instagram[0]?.id,
      appname: instagram[0]?.appname, 
      app_url: instagram[0]?.app_url,
      isActivated: !instagramActivate ,
    }
    setInstagramActivate(!instagramActivate);

    console.log("formDataUpdate", formDataUpdate);

    if(instagram?.length === 0){
      alert.error('Please first add credientials')
    }else{
      dispatch(UpdateUrl(formDataUpdate))
      alert.success('App is Activated')
    }
  }

  const handleTiktokActivate = () => {
    const formDataUpdate = {
      id: tiktok[0]?.id,
      appname: tiktok[0]?.appname, 
      app_url: tiktok[0]?.app_url,
      isActivated: !tiktokActivate ,
    }
    setTiktokActivate(!tiktokActivate);

    if(tiktok?.length === 0){
      alert.error('Please first add credientials')
    }else{
      dispatch(UpdateUrl(formDataUpdate))
      alert.success('App is Activated')
    }
  }

  const handleTwitterActivate = () => {
    const formDataUpdate = {
      id: twitter[0]?.id,
      appname: twitter[0]?.appname, 
      app_url: twitter[0]?.app_url,
      isActivated: !twitterActivate ,
    }
    setTwitterActivate(!twitterActivate);

    if(twitterActivate?.length === 0){
      alert.error('Please first add credientials')
    }else{
      dispatch(UpdateUrl(formDataUpdate))
      alert.success('App activated status updated')
    }
  }

  const handleYoutubeActivate = () => {
    const formDataUpdate = {
      id: youtube[0]?.id,
      appname: youtube[0]?.appname, 
      app_url: youtube[0]?.app_url,
      isActivated: !youtubeActivate ,
    }
    setYoutubeActivate(!youtubeActivate);

    if(youtubeActivate?.length === 0){
      alert.error('Please first add credientials')
    }else{
      dispatch(UpdateUrl(formDataUpdate))
      alert.success('App is Activated')
    }
  }

  return (
    <div className='settings-container'>

    <div className='company-info-container'>
      <div className='company-info-title'>
        <p>Add custom Title</p>
        <input placeholder='Add your title' value={heading}  onChange={handleTitleChange}/>
        <button onClick={handleTitleSubmit}>Save</button>
      </div>

      <div className='company-info-title'>
        <p>Company Name</p>
        <input placeholder='Add your title' value={heading}  onChange={handleTitleChange}/>
        <button onClick={handleTitleSubmit}>Save</button>
      </div>

      <div className='company-info-title'>
        <p>Followup Title</p>
        <input placeholder='Add your title' value={followUpTitle}  onChange={handleFollowUpTitleChange}/>
        <button onClick={handleFollowUpTitleSubmit}>Save</button>
      </div>

      <div className='company-info-logo'> 
        <p>Upload your custom Logo</p>
        <div className='company-info-image'>
        <input type='file' accept='image/*' onChange={(e) => setSelectedImage(e.target.files[0])}/>
          {/* {selectedImage && (
            <img src={selectedImage} alt='Selected Logo' width={50} />
          )} */}
        </div>
        <button onClick={handleUpload}>Upload</button>
      </div>

    </div>

      <table className='table-container'>

        <thead className='theader-container'>
          <tr>
            <th className='names-table-column'>Name</th>
            <th>Url</th>
            <th className='priority-table-column'>Priority</th>
            <th className='button-table-column'>Action</th>
            <th className='button-table-column'>Activate</th>
          </tr>
        </thead>

        <tbody className='tbody-container'>
          <tr>
            <td className='names-table-column'>
              <p>Youtube</p>
            </td>
            <td>
              <input type='text' placeholder='Enter Youtube ID' value={youtubeSubmit} onChange={handleYoutubeChange}/>
            </td>
            <td className='priority-table-column'>
              <input type='number' placeholder="Set Priority" value={youtubePrioritySubmit} onChange={handleYoutubePiorityChange}/>
            </td>
            <td className='button-table-column'>
              <button onClick={handleSubmitYoutube}>Save</button>
            </td>
            <td className='button-table-column'>
            {youtube.length <= 0 ? 
              <button disabled className='table-inavtive-btn'>Activate</button>
              :
              <button onClick={handleYoutubeActivate}>{youtubeActivate === false ? "Activate" : "Deactivate"}</button>
            }
            </td>
            
          </tr>
          
          <tr className='table-one-row'>
            <td className='names-table-column'>
              <p>Facebook</p>
            </td>
            <td>
              <input type='text' placeholder='Enter Facebook PageId' value={facebookSubmit} onChange={handleFacebookChange}/>
            </td>
            <td className='priority-table-column'>
              <input type='number' placeholder="Set Priority" value={facebookPrioritySubmit} onChange={handleFacebookPiorityChange}/>
            </td>
            <td className='button-table-column'>
              <button onClick={handleSubmitFacebook}>Save</button>
            </td>
            <td className='button-table-column'>
            {facebook.length <= 0 ? 
              <button disabled className='table-inavtive-btn'>Activate</button>
              :
              <button onClick={handleFaceBookActivate}>{facebookActivate === false ? "Activate" : "Deactivate"}</button>
            }
            </td>
            
          </tr>

          <tr>
            <td className='names-table-column'>
              <p>Instagram</p>
            </td>
            <td>
              <input type='text' placeholder='Enter Instagram Username' value={instagramSubmit} onChange={handleInstagramChange}/>
            </td>
            <td className='priority-table-column'>
              <input type='number' placeholder="Set Priority" value={instagramPrioritySubmit} onChange={handleInstagramPiorityChange}/>
            </td>
            <td className='button-table-column'>
              <button onClick={handleSubmitInstagram}>Save</button>
            </td>
            <td className='button-table-column'>
            {instagram.length <= 0 ? 
              <button disabled className='table-inavtive-btn'>Activate</button>
              :
              <button onClick={handleInstagramActivate}>{instagramActivate === false ? "Activate" : "Deactivate"}</button>
            }
            </td>
          </tr>

          <tr className='table-one-row'>
            <td className='names-table-column'>
              <p>Tiktok</p>
            </td>
            <td>
              <input type='text' placeholder='Enter Tiktok Username' value={tiktokSubmit} onChange={handleTiktokChange}/>
            </td>
            <td className='priority-table-column'>
              <input type='number' placeholder="Set Priority" value={tiktokPrioritySubmit} onChange={handleTiktokPiorityChange}/>
            </td>
            <td className='button-table-column'>
              <button onClick={handleSubmitTiktok}>Save</button>
            </td>
            <td className='button-table-column'>
              {tiktok.length <= 0 ? 
                <button disabled className='table-inavtive-btn'>Activate</button>
               :
                <button onClick={handleTiktokActivate}>{tiktokActivate === false ? "Activate" : "Deactivate"}</button>
               }
            </td>
          </tr>

          <tr className=''>
            <td className='names-table-column'>
              <p>X twitter</p>
            </td>
            <td>
              <input type='text' placeholder='Enter Twitter Username' value={twitterSubmit} onChange={handleTwitterChange}/>
            </td>
            <td className='priority-table-column'>
              <input type='number' placeholder="Set Priority" value={twitterPrioritySubmit} onChange={handleTwitterPiorityChange}/>
            </td>
            <td className='button-table-column'>
              <button onClick={handleSubmitTwitter}>Save</button>
            </td>
            <td className='button-table-column'>
              {twitter.length <= 0 ? 
                <button disabled className='table-inavtive-btn'>Activate</button> 
                :
                <button onClick={handleTwitterActivate}>{twitterActivate === false ? "Activate" : "Deactivate"}</button>
              }
            </td>
          </tr>
          
        </tbody>

      </table>
        
    </div>
  )
}

export default Setting