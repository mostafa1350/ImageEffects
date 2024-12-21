import React from 'react'

const Card_border = () => {
    return (
        <div className='h-screen flex justify-center items-center bg-blue-300 '>
            <div className='relative w-[300px] h-[400px] bg-slate-300 border-green-400 border-[2px] rounded-[10px] transition-all duration-500 hover:shadow-2xl shadow-red-500'>
                <div className='absolute flex justify-center items-center top-0 left-0 w-[100%] h-[100%]'>
                    <div className='p-[20px] text-center '>
                        <h1 className='mt-[80px]'>Services</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate atque aperiam nesciunt id saepe non provident reiciendis ullam dolorem nisi distinctio aut consequatur, corrupti quos perferendis eaque dolorum necessitatibus tempore.</p>
                        <a href="#" className='inline-block mt-[20px] px-[10px] py-[5px] border-[2px] border-slate-500 rounded-md transition-all duration-500'>Read More</a>
                    </div>
                </div>
                <div className='bg-neutral-500 transition-all duration-500'>
                    <h2 className='text-slate-50 text-[130px] transition-all duration-500 '>88</h2>
                </div>


            </div>

        </div>

    )
}

export default Card_border