import React from 'react'
import BaseBall from '/Baseball.png'
import AnotherPage from './Another_card';
import {Link} from 'react-router-dom';
const Card_border = () => {
    return (
        <div className='MainBody' id='BaseBall'>
            <div className='Card'>
                <div className='Face Face1'>
                    <div className='p-[20px] text-center '>
                        <h1 className='mt-[80px]'>Services</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate atque aperiam nesciunt id saepe non provident reiciendis ullam dolorem nisi distinctio aut consequatur, corrupti quos perferendis eaque dolorum necessitatibus tempore.</p>
                        <a href="#" className='a_Class'>Read More</a>
                    </div>
                </div>
                <div className='Face Face2'>
                    <img src={BaseBall} alt="BaseBall" width={250} height={250} className='header2'/>
                    {/* <h2 className='header2'>88</h2> */}
                </div>
            </div>
            
            {/* ==================================== */}
            {/* we need to install "npm i react-router-dom"
            for pageing (go to another page) */}

            <div className ='mt-[30px]'>
             <a href="#" className='a_LinkToAnother'>
                <Link to="/another">
                Another Effect
                </Link>
            </a>
            </div>

        </div>

    )
}

export default Card_border