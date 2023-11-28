import React from 'react'
import { useSearchParams } from 'react-router-dom';

import './FormSettings.css'


const SetttingFrom = () => {

const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const id = searchParams.get('id');


  const modifiedId = id.replace(/_/g, ' ');


  return (
    <div className='setting-form-container'>

        <form >
            
           <div className='setting-form-wrapper'>
                
                <p>Your {name} Settings</p>

                <input required type="text" className="setting-form-input" placeholder={modifiedId}/>

                <button className="button">Save</button>

              

           </div>

        </form>
        
    </div>
  )
}

export default SetttingFrom