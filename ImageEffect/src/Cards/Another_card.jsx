import React from 'react'
import {Link} from 'react-router-dom';
const Another_card = () => {
  return (
    <div className='main_another flex flex-col'>
        <div>
        <h1>Another Page ...</h1>
        </div>
        <div>
            <a href="">
                <Link to="/">Home</Link>            
            </a>
        </div>
    </div>
  )
}

export default Another_card