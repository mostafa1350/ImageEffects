import React, { useState ,useEffect} from 'react'
import {Link} from 'react-router-dom';
import HatBrown from '/Hat_Brown.png';
import HatBlue from '/Hat_Blue.png';
import HatGolden from '/Hat_golden.png';

const Another_card = () => {
  const [hat, setHat] = useState(HatBrown)
  function selectHatBrown(mycolor){
    setHat(mycolor);
  }
  // useEffect(()=>{
  //   setHat(()=>setHat(hat));
  // },[hat]);

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-slate-100 m-0 overflow-hidden;'>
      <div className='HatContainer'>
        <div className='Hat_Image'>
          <div className='ImageBox'>
            <img src={hat} alt="" width={200} height={200}/>
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
              <span onClick={()=>selectHatBrown(HatBrown)}></span>
              <span onClick={()=>selectHatBrown(HatBlue)}></span>
              <span onClick={()=>selectHatBrown(HatGolden)}></span>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <a href="#" className='a_BuyNow'>
                Buy Now
              </a>
              <a href="#" className='a_Home'>
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