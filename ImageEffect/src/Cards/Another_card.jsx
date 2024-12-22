import React from 'react'
import {Link} from 'react-router-dom';
const Another_card = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-slate-800 m-0;'>
        <div>
        <h1>Another Page ...</h1>
        </div>
        <div className='mt-[30px]'>
            <a href="#" className='a_AnotherPage'>
                <Link to="/">Home</Link>            
            </a>
        </div>
    </div>
  )
}

export default Another_card