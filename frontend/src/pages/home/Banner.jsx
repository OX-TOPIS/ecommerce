import React from 'react'
import modelbanner from '../../assets/images/modelbanner.png'
import textbanner from '../../assets/images/textbanner.png'

const Banner = () => {
  return (
    <div className='bg-Gray rounded-md mt-16 mx-8 md:mx-16 md:mt-24 mb-16 flex items-center px-14 py-5'>

      <div className="md:w-1/2 grid justify-items-center md:justify-items-start w-full">
        <img src={textbanner} alt="" className='w-4/5 md:w-3/5' />
        <p className='md:m-5 my-5 text-center md:text-left h2'>Live for Influential and Innovative fashion!</p>
        <button className='mx-5  p-4 btn hover:bg-Yellow'>Shop Now</button>
        </div>


      <div className="md:w-1/2">
        <img src={modelbanner} alt="" className='hidden md:block'/>
    </div>


    </div>
  )
}

export default Banner
