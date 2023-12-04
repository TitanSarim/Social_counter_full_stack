import React, { useState } from 'react'
import { GoSearch } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

import Video from '../../assets/video.mp4'

import './Home.css'

const Home = () => {

  const neviagte = useNavigate()

  const [search, setSearch] = useState('')

  const username = 'sarimxahid'

  const handleSearchSubmit = () => {

    const formData = {
      search: search
    }

    neviagte(`/company/${username}/dashboard`)
    window.location.reload()
  } 


  return (
    <div>

      <video autoPlay loop muted style={{ width: '100%', height: 'auto', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <source src={Video} type="video/mp4" />
      </video>

      <div className='search-container'>
          <input type='text' placeholder='Search by Email or Company name' required onChange={(e) => setSearch(e.target.value)}/>
          <button onClick={handleSearchSubmit}><GoSearch size={22}/></button>
      </div>

    </div>
  )
}

export default Home