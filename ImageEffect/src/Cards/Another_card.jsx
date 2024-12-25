import React from 'react'
import {Link} from 'react-router-dom';
import Hat from '/Hat_Brown.png'
const Another_card = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-slate-100 m-0 overflow-hidden;'>
      <div className='HatContainer'>
        <div className='Hat_Image'>
          <div className='ImageBox'>
            <img src={Hat} alt="" width={200} height={200}/>
          </div>
          <div className='contentBox'>
            <h2 className='text-slate-600 text-[30px] space-x-1 font-semibold'>Hat</h2>
            <div className='size'>
              <h1>Size : </h1>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
            <div className='color'>
              <h1>color :</h1>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <a href="" className='a_BuyNow'>
                Buy Now
              </a>
              <a href="" className='a_Home'>
                <Link to="/">
                  Home
                </Link>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Another_card